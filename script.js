let currentPart = 1;
let userAnswers = {};
let totalParts = 5;
let currentExam = 1;
let practiceMode = 'by-exam'; // 'by-exam' or 'by-question'
let allExamsMode = false;
let currentItemIndex = 0; // For navigation in all exams mode
let shuffleMode = false; // Trộn ngẫu nhiên
let shuffledPartsOrder = [1, 2, 3, 4, 5]; // Thứ tự các part đã trộn
let shuffledExamsOrder = []; // Thứ tự các đề đã trộn
let currentPartIndex = 0; // Index trong mảng shuffledPartsOrder
let currentExamIndex = 0; // Index trong mảng shuffledExamsOrder

// Hàm hiển thị kết quả check trong modal
function showCheckResults(partNumber, examData, examNumber, results) {
    const modal = document.getElementById('result-modal');
    const resultContent = document.getElementById('result-content');
    
    let correctCount = 0;
    let totalCount = results.length;
    results.forEach(r => { if (r.isCorrect) correctCount++; });
    
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    // Calculate score by part
    const partScores = {};
    const partTotals = {};
    results.forEach(result => {
        if (!partScores[result.part]) {
            partScores[result.part] = 0;
            partTotals[result.part] = 0;
        }
        partTotals[result.part]++;
        if (result.isCorrect) {
            partScores[result.part]++;
        }
    });
    
    // Get grade
    let grade = '';
    let gradeColor = '';
    if (percentage >= 90) {
        grade = 'Excellent!';
        gradeColor = '#48bb78';
    } else if (percentage >= 80) {
        grade = 'Very Good!';
        gradeColor = '#38a169';
    } else if (percentage >= 70) {
        grade = 'Good!';
        gradeColor = '#667eea';
    } else if (percentage >= 60) {
        grade = 'Fair';
        gradeColor = '#f6ad55';
    } else {
        grade = 'Need Improvement';
        gradeColor = '#fc8181';
    }
    
    const examTitle = examNumber ? `<h2 style="margin-bottom: 20px; color: #2d3748;">Đề ${examNumber} - Part ${partNumber}</h2>` : `<h2 style="margin-bottom: 20px; color: #2d3748;">Part ${partNumber}</h2>`;
    
    resultContent.innerHTML = `
        ${examTitle}
        <div class="score-container">
            <div class="score-main">
                <div class="score-number">${correctCount} / ${totalCount}</div>
                <div class="score-percentage">${percentage}%</div>
                <div class="score-grade" style="color: ${gradeColor}">${grade}</div>
            </div>
            <div class="score-by-part">
                <h3>Score by Part:</h3>
                ${Object.keys(partScores).map(part => {
                    const partScore = partScores[part];
                    const partTotal = partTotals[part];
                    const partPercent = Math.round((partScore / partTotal) * 100);
                    return `
                        <div class="part-score-item">
                            <span class="part-label">Part ${part}:</span>
                            <span class="part-score">${partScore}/${partTotal}</span>
                            <span class="part-percent">(${partPercent}%)</span>
                            <div class="part-progress-bar">
                                <div class="part-progress-fill" style="width: ${partPercent}%"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        <div class="results-detail">
            <h3>Detailed Results:</h3>
            <div class="results-list">
                ${results.map(result => `
                    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="result-header">
                            <span class="result-part">Part ${result.part}</span>
                            <span class="result-status ${result.isCorrect ? 'correct-icon' : 'incorrect-icon'}">
                                ${result.isCorrect ? '✓' : '✗'}
                            </span>
                        </div>
                        <div class="result-question">${result.question}</div>
                        <div class="result-answers">
                            <div class="result-answer">
                                <strong>Your answer:</strong> ${result.userAnswer}
                            </div>
                            ${!result.isCorrect ? `
                                <div class="result-answer correct-answer">
                                    <strong>Correct answer:</strong> ${result.correctAnswer}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Xóa nút Next Exam cũ nếu có (tránh trùng lặp)
    const existingNextExamBtn = document.getElementById('next-exam-modal-btn');
    if (existingNextExamBtn) {
        existingNextExamBtn.remove();
    }
    
    modal.classList.add('active');
}

// Helper function to create check button for a part
function createCheckButton(partNumber, examData, examNumber, containerId) {
    const checkContainer = document.getElementById(containerId);
    if (!checkContainer) return;
    
    checkContainer.innerHTML = '';
    
    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn btn-check';
    checkBtn.textContent = 'Check đáp án';
    checkBtn.style.cssText = 'width: 100%; padding: 12px; font-size: 16px;';
    
    checkBtn.addEventListener('click', function() {
        let results = [];
        
        if (partNumber === 1) {
            const answerKey = examNumber ? `part1_exam${examNumber}` : `part1_exam${currentExam}`;
            examData.sentences.forEach((sentence, index) => {
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
                const isCorrect = userAnswer === sentence.answer;
                results.push({
                    part: partNumber,
                    examNumber: examNumber || currentExam,
                    question: `${sentence.text} [${sentence.answer}] ${sentence.after}`,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: sentence.answer,
                    isCorrect
                });
            });
        } else if (partNumber === 2 || partNumber === 3) {
            const answerKey = examNumber ? `part${partNumber}_exam${examNumber}` : `part${partNumber}_exam${currentExam}`;
            const container = document.getElementById(`sentences${partNumber}`);
            const draggableItems = container.querySelectorAll('.draggable');
            const currentOrder = {};
            draggableItems.forEach((el, position) => {
                const originalIndex = parseInt(el.dataset.originalIndex);
                currentOrder[originalIndex] = position + 1;
            });
            
            examData.sentences.forEach((sentence, originalIndex) => {
                const userOrder = currentOrder[originalIndex];
                const correctOrder = originalIndex + 1;
                const isCorrect = userOrder === correctOrder;
                results.push({
                    part: partNumber,
                    examNumber: examNumber || currentExam,
                    question: `Sentence ${originalIndex + 1}: ${sentence}`,
                    userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                    correctAnswer: `Order ${correctOrder}`,
                    isCorrect
                });
            });
        } else if (partNumber === 4) {
            const answerKey = examNumber ? `part4_exam${examNumber}` : `part4_exam${currentExam}`;
            examData.questions.forEach((q, index) => {
                const userAnswer = userAnswers[answerKey] && (Array.isArray(userAnswers[answerKey]) ? userAnswers[answerKey][index] : userAnswers[answerKey][index]);
                const isCorrect = userAnswer === q.answer;
                results.push({
                    part: partNumber,
                    examNumber: examNumber || currentExam,
                    question: q.question,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: q.answer,
                    isCorrect
                });
            });
        } else if (partNumber === 5) {
            const answerKey = examNumber ? `part5_exam${examNumber}` : `part5_exam${currentExam}`;
            examData.paragraphs.forEach(para => {
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][para.number];
                const isCorrect = userAnswer === para.answer;
                results.push({
                    part: partNumber,
                    examNumber: examNumber || currentExam,
                    question: `Paragraph ${para.number}`,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: para.answer,
                    isCorrect
                });
            });
        }
        
        showCheckResults(partNumber, examData, examNumber || currentExam, results);
    });
    
    checkContainer.appendChild(checkBtn);
}

// Page navigation functions
function showHome() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('home-page').classList.add('active');
}

// Make showHome available globally for inline onclick handlers
window.showHome = showHome;

let readingInitialized = false;

function showSkill(skill) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const skillPage = document.getElementById(`${skill}-page`);
    if (skillPage) {
        skillPage.classList.add('active');
        
        // Initialize Reading page if not already initialized
        if (skill === 'reading' && !readingInitialized) {
            setupEventListeners();
            generateShuffledOrder(); // Initialize shuffled order
            loadExam(1);
            readingInitialized = true;
        }
        
        // Initialize Listening page
        if (skill === 'listening') {
            loadListening();
        }
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Setup skill card navigation
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            showSkill(skill);
        });
    });

    // Setup home button
    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', showHome);
    }

    // Show home page by default
    showHome();
});

function loadExam(examNumber) {
    if (examNumber === 0) {
        allExamsMode = true;
        currentItemIndex = 0;
        // Don't reset userAnswers in all exams mode to keep progress
    } else {
        allExamsMode = false;
        currentExam = examNumber;
        userAnswers = {}; // Reset answers when switching to single exam
    }
    // Keep current part selection when switching exam
    const partSelector = document.getElementById('part-selector');
    const selectedPart = partSelector ? parseInt(partSelector.value) : 1;
    currentPart = selectedPart;
    document.getElementById('exam-selector').value = examNumber;
    
    // Generate shuffled order if needed
    generateShuffledOrder();
    
    loadPart(selectedPart);
}

// Hàm tạo thứ tự trộn ngẫu nhiên
function generateShuffledOrder() {
    // Luôn giữ thứ tự part 1-5, không trộn
    shuffledPartsOrder = [1, 2, 3, 4, 5];
    currentPartIndex = shuffledPartsOrder.indexOf(currentPart);
    if (currentPartIndex === -1) currentPartIndex = 0;
    
    if (shuffleMode) {
        // Chỉ trộn các đề khi ở all exams mode
        if (allExamsMode) {
            shuffledExamsOrder = Array.from({length: exams.length}, (_, i) => i + 1)
                .sort(() => Math.random() - 0.5);
            currentExamIndex = shuffledExamsOrder.indexOf(currentExam);
            if (currentExamIndex === -1) currentExamIndex = 0;
        }
    } else {
        // Không trộn - thứ tự bình thường
        if (allExamsMode) {
            shuffledExamsOrder = Array.from({length: exams.length}, (_, i) => i + 1);
            currentExamIndex = shuffledExamsOrder.indexOf(currentExam);
            if (currentExamIndex === -1) currentExamIndex = 0;
        }
    }
}

function setupEventListeners() {
    document.getElementById('next-btn').addEventListener('click', nextPart);
    document.getElementById('prev-btn').addEventListener('click', prevPart);
    document.getElementById('submit-btn').addEventListener('click', submitAnswers);
    document.getElementById('restart-btn').addEventListener('click', restart);
    
    // Next Exam button
    const nextExamBtn = document.getElementById('next-exam-btn');
    if (nextExamBtn) {
        nextExamBtn.addEventListener('click', function() {
            if (currentExam < exams.length) {
                const nextExam = currentExam + 1;
                // Reset answers for new exam
                userAnswers = {};
                // Close modal if open
                document.getElementById('result-modal').classList.remove('active');
            // Load next exam
            loadExam(nextExam);
            // Reset to first part (luôn là Part 1)
            currentPart = 1;
            currentPartIndex = 0;
            loadPart(currentPart);
            }
        });
    }
    
    // Close modal button
    document.getElementById('close-modal-btn').addEventListener('click', function() {
        document.getElementById('result-modal').classList.remove('active');
    });
    
    // Close modal when clicking outside
    document.getElementById('result-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    document.getElementById('exam-selector').addEventListener('change', function() {
        const examValue = parseInt(this.value);
        const modeContainer = document.getElementById('mode-selector-container');
        if (examValue === 0) {
            allExamsMode = true;
            modeContainer.style.display = 'flex';
            currentItemIndex = 0;
            // Get practice mode from radio buttons
            const selectedMode = document.querySelector('input[name="practice-mode"]:checked');
            if (selectedMode) {
                practiceMode = selectedMode.value;
            }
        } else {
            allExamsMode = false;
            modeContainer.style.display = 'none';
            currentExam = examValue;
            currentItemIndex = 0; // Reset item index when switching to single exam
        }
        loadExam(examValue);
    });
    document.getElementById('part-selector').addEventListener('change', function() {
        const selectedPart = parseInt(this.value);
        if (!isNaN(selectedPart) && selectedPart >= 1 && selectedPart <= 5) {
            if (selectedPart !== currentPart) {
                currentPart = selectedPart;
                // Update index (luôn giữ thứ tự part 1-5)
                currentPartIndex = selectedPart - 1;
                if (allExamsMode) {
                    currentItemIndex = 0;
                }
                loadPart(selectedPart);
            }
        }
    });
    // Practice mode radio buttons
    document.querySelectorAll('input[name="practice-mode"]').forEach(radio => {
        radio.addEventListener('change', function() {
            practiceMode = this.value;
            if (allExamsMode) {
                currentItemIndex = 0;
                loadPart(currentPart);
            }
        });
    });
    
    // Shuffle toggle
    const shuffleToggle = document.getElementById('shuffle-toggle');
    if (shuffleToggle) {
        shuffleToggle.addEventListener('change', function() {
            shuffleMode = this.checked;
            generateShuffledOrder();
            loadPart(currentPart);
            if (allExamsMode) {
                loadExam(0); // Reload all exams
            } else {
                loadExam(currentExam);
            }
        });
    }
}

function loadPart(partNumber) {
    // Ensure partNumber is valid
    if (!partNumber || partNumber < 1 || partNumber > 5) {
        console.error('Invalid part number:', partNumber);
        return;
    }
    
    // Update currentPart first
    currentPart = partNumber;
    
    // Hide all parts
    document.querySelectorAll('.part').forEach(part => {
        part.classList.remove('active');
    });

    // Show current part
    const currentPartElement = document.getElementById(`part${partNumber}`);
    if (!currentPartElement) {
        console.error('Part element not found:', `part${partNumber}`);
        return;
    }
    currentPartElement.classList.add('active');

    // Update part selector value (safely, without triggering events)
    const partSelector = document.getElementById('part-selector');
    if (partSelector) {
        // Only update if different to avoid triggering change event unnecessarily
        if (parseInt(partSelector.value) !== partNumber) {
            partSelector.value = partNumber.toString();
        }
    }

    // If switching parts in allExamsMode, reset item index
    if (allExamsMode) {
        currentItemIndex = 0;
    }

    // Update progress
    updateProgress();
    updateSectionInfo(partNumber);

    // Load content based on part
    switch(partNumber) {
        case 1:
            loadPart1();
            break;
        case 2:
            loadPart2();
            break;
        case 3:
            loadPart3();
            break;
        case 4:
            loadPart4();
            break;
        case 5:
            loadPart5();
            break;
    }

    // Update buttons
    updateButtons();
}

function updateProgress() {
    if (allExamsMode) {
        if (shuffleMode && practiceMode === 'by-exam') {
            // Trong chế độ trộn và giải theo đề (giữ thứ tự part 1-5)
            const totalExams = shuffledExamsOrder.length;
            const totalItems = totalExams * totalParts;
            const currentItem = ((currentPart - 1) * totalExams) + currentExamIndex + 1;
            const progress = totalItems > 0 ? (currentItem / totalItems) * 100 : 0;
            document.getElementById('progress-fill').style.width = `${progress}%`;
            document.getElementById('question-counter').textContent = `Đề ${currentExam} - Part ${currentPart} (${currentItem}/${totalItems})`;
        } else {
            const totalItems = getAllExamItemsCount(currentPart);
            const progress = totalItems > 0 ? ((currentItemIndex + 1) / totalItems) * 100 : 0;
            document.getElementById('progress-fill').style.width = `${progress}%`;
            const itemInfo = getCurrentItemInfo();
            document.getElementById('question-counter').textContent = itemInfo || `Item ${currentItemIndex + 1} of ${totalItems}`;
        }
    } else {
        // Single exam mode - luôn giữ thứ tự part 1-5
        const progress = (currentPart / totalParts) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = `Question ${currentPart} of ${totalParts}`;
    }
}

// Helper functions for all exams mode
function getAllExamItemsCount(partNumber) {
    if (!allExamsMode) return 0;
    
    if (practiceMode === 'by-exam') {
        return exams.length; // One per exam
    } else {
        // by-question: count items across all exams
        let count = 0;
        exams.forEach(exam => {
            const partData = getPartDataFromExam(exam, partNumber);
            if (partData) {
                if (partNumber === 1) {
                    count += partData.sentences ? partData.sentences.length : 0;
                } else if (partNumber === 2 || partNumber === 3) {
                    count += partData.sentences ? partData.sentences.length : 0;
                } else if (partNumber === 4) {
                    count += partData.questions ? partData.questions.length : 0;
                } else if (partNumber === 5) {
                    count += partData.paragraphs ? partData.paragraphs.length : 0;
                }
            }
        });
        return count;
    }
}

function getCurrentItemInfo() {
    if (!allExamsMode) return '';
    
    if (practiceMode === 'by-exam') {
        const examNum = currentItemIndex + 1;
        return `Đề ${examNum} / ${exams.length} đề`;
    } else {
        // For by-question, we need to track which exam and which item
        let itemCount = 0;
        for (let i = 0; i < exams.length; i++) {
            const partData = getPartDataFromExam(exams[i], currentPart);
            if (partData) {
                let itemsInExam = 0;
                if (currentPart === 1) {
                    itemsInExam = partData.sentences ? partData.sentences.length : 0;
                } else if (currentPart === 2 || currentPart === 3) {
                    itemsInExam = partData.sentences ? partData.sentences.length : 0;
                } else if (currentPart === 4) {
                    itemsInExam = partData.questions ? partData.questions.length : 0;
                } else if (currentPart === 5) {
                    itemsInExam = partData.paragraphs ? partData.paragraphs.length : 0;
                }
                
                if (currentItemIndex < itemCount + itemsInExam) {
                    const localIndex = currentItemIndex - itemCount + 1;
                    return `Câu ${localIndex} - Đề ${i + 1} / Tổng ${getAllExamItemsCount(currentPart)} câu`;
                }
                itemCount += itemsInExam;
            }
        }
        return `Câu ${currentItemIndex + 1} / ${getAllExamItemsCount(currentPart)}`;
    }
}

function getPartDataFromExam(examData, partNumber) {
    switch(partNumber) {
        case 1: return examData.part1;
        case 2: return examData.part2;
        case 3: return examData.part3;
        case 4: return examData.part4;
        case 5: return examData.part5;
    }
}

function updateSectionInfo(partNumber) {
    const sectionInfo = document.getElementById('section-info');
    if (allExamsMode) {
        sectionInfo.textContent = `[Reading Part ${partNumber} - Tất cả các đề]`;
        return;
    }
    const data = getPartData(partNumber);
    if (!data) {
        sectionInfo.textContent = `[Reading Part ${partNumber}]`;
        return;
    }
    let title = data.title || `[Reading Part ${partNumber}]`;
    sectionInfo.textContent = title;
}

function getPartData(partNumber) {
    if (allExamsMode) {
        // Return all exams data for this part
        const allExamsData = exams.map((exam, index) => {
            const partData = getPartDataFromExam(exam, partNumber);
            return partData ? { ...partData, examNumber: index + 1 } : null;
        }).filter(data => data !== null);
        
        return {
            allExams: allExamsData,
            isAllExamsMode: true
        };
    } else {
        const examData = exams[currentExam - 1] || exams[0];
        return getPartDataFromExam(examData, partNumber);
    }
}

function getCurrentItemData(partNumber) {
    // For by-question mode, find which exam and which item
    let itemCount = 0;
    for (let i = 0; i < exams.length; i++) {
        const partData = getPartDataFromExam(exams[i], partNumber);
        if (partData) {
            let itemsInExam = 0;
            if (partNumber === 1) {
                itemsInExam = partData.sentences ? partData.sentences.length : 0;
            } else if (partNumber === 2 || partNumber === 3) {
                itemsInExam = partData.sentences ? partData.sentences.length : 0;
            } else if (partNumber === 4) {
                itemsInExam = partData.questions ? partData.questions.length : 0;
            } else if (partNumber === 5) {
                itemsInExam = partData.paragraphs ? partData.paragraphs.length : 0;
            }
            
            if (currentItemIndex < itemCount + itemsInExam) {
                const localIndex = currentItemIndex - itemCount;
                // Return a modified version with only the current item
                if (partNumber === 1) {
                    return {
                        ...partData,
                        sentences: [partData.sentences[localIndex]],
                        examNumber: i + 1
                    };
                } else if (partNumber === 2 || partNumber === 3) {
                    return {
                        ...partData,
                        sentences: [partData.sentences[localIndex]],
                        examNumber: i + 1
                    };
                } else if (partNumber === 4) {
                    return {
                        ...partData,
                        questions: [partData.questions[localIndex]],
                        examNumber: i + 1
                    };
                } else if (partNumber === 5) {
                    return {
                        ...partData,
                        paragraphs: [partData.paragraphs[localIndex]],
                        examNumber: i + 1
                    };
                }
            }
            itemCount += itemsInExam;
        }
    }
    return null;
}

function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const nextExamBtn = document.getElementById('next-exam-btn');

    if (allExamsMode) {
        if (shuffleMode && practiceMode === 'by-exam') {
            // Chế độ trộn và giải theo đề (giữ thứ tự part 1-5)
            const isFirst = currentPart === 1 && currentExamIndex === 0;
            const isLast = currentPart === totalParts && 
                         currentExamIndex === shuffledExamsOrder.length - 1;
            
            prevBtn.disabled = isFirst;
            prevBtn.style.display = 'inline-block';
            
            if (isLast) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                submitBtn.style.display = 'none';
            }
            nextExamBtn.style.display = 'none';
        } else {
            // Khi ở chế độ "Tất cả các đề" (không trộn hoặc giải theo câu hỏi), load tất cả cùng lúc nên luôn hiển thị Submit
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
            nextExamBtn.style.display = 'none';
        }
    } else {
        // Chế độ một đề cụ thể - luôn giữ thứ tự part 1-5
        const hasNextExam = currentExam < exams.length;
        
        prevBtn.disabled = currentPart === 1;
        if (currentPart === totalParts) {
            nextBtn.style.display = 'none';
            if (hasNextExam) {
                submitBtn.style.display = 'inline-block';
                nextExamBtn.style.display = 'inline-block';
            } else {
                submitBtn.style.display = 'inline-block';
                nextExamBtn.style.display = 'none';
            }
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
            nextExamBtn.style.display = 'none';
        }
    }
}

// Part 1: Sentence Completion
function loadPart1() {
    const data = getPartData(1);
    if (!data) {
        console.error('No data found for Part 1');
        return;
    }
    const wordListContainer = document.getElementById('word-list1');
    const sentencesContainer = document.getElementById('sentences1');

    // Clear containers
    wordListContainer.innerHTML = '';
    sentencesContainer.innerHTML = '';

    if (allExamsMode && data.allExams) {
        // Load all exams
        data.allExams.forEach((examData, examIndex) => {
            const examSection = document.createElement('div');
            examSection.className = 'exam-section';
            examSection.style.cssText = 'margin-bottom: 40px; padding: 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: #f9fafb;';
            
            const examTitle = document.createElement('h3');
            examTitle.style.cssText = 'margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; font-size: 20px; font-weight: 700;';
            examTitle.textContent = `Đề ${examData.examNumber}`;
            examSection.appendChild(examTitle);
            
            const examWordList = document.createElement('div');
            examWordList.style.marginBottom = '20px';
            const wordListText = document.createElement('div');
            wordListText.style.cssText = 'margin-bottom: 10px; font-weight: 600; color: #4a5568;';
            wordListText.textContent = 'Word list:';
            examWordList.appendChild(wordListText);
            
            const wordListSpan = document.createElement('div');
            examData.wordList.forEach((word, idx) => {
                const wordEl = document.createElement('span');
                wordEl.className = 'word-option';
                wordEl.textContent = word;
                if (idx < examData.wordList.length - 1) {
                    wordEl.textContent += ', ';
                }
                wordListSpan.appendChild(wordEl);
            });
            examWordList.appendChild(wordListSpan);
            examSection.appendChild(examWordList);
            
            const examSentences = document.createElement('div');
            examData.sentences.forEach((sentence, index) => {
                const sentenceEl = document.createElement('div');
                sentenceEl.className = 'sentence-item';
                
                const gap = document.createElement('select');
                gap.className = 'sentence-gap-select';
                gap.dataset.index = index;
                gap.dataset.examNumber = examData.examNumber;
                gap.dataset.answer = sentence.answer;
                
                if (index > 0) {
                    const defaultOption = document.createElement('option');
                    defaultOption.value = '';
                    defaultOption.textContent = '-- Select --';
                    gap.appendChild(defaultOption);
                }
                
                examData.wordList.forEach(word => {
                    const option = document.createElement('option');
                    option.value = word;
                    option.textContent = word;
                    gap.appendChild(option);
                });
                
                if (index === 0) {
                    gap.value = sentence.answer;
                    gap.classList.add('filled');
                    gap.disabled = true;
                    const answerKey = `part1_exam${examData.examNumber}`;
                    if (!userAnswers[answerKey]) userAnswers[answerKey] = [];
                    userAnswers[answerKey][0] = sentence.answer;
                }
                
                gap.addEventListener('change', function() {
                    const answerKey = `part1_exam${examData.examNumber}`;
                    if (!userAnswers[answerKey]) userAnswers[answerKey] = [];
                    userAnswers[answerKey][index] = this.value;
                    if (this.value) {
                        this.classList.add('filled');
                    } else {
                        this.classList.remove('filled');
                    }
                });
                
                const textBefore = document.createElement('span');
                textBefore.textContent = sentence.text;
                textBefore.style.whiteSpace = 'pre-wrap';
                
                const textAfter = document.createElement('span');
                textAfter.textContent = sentence.after;
                textAfter.style.whiteSpace = 'pre-wrap';
                
                sentenceEl.appendChild(textBefore);
                sentenceEl.appendChild(gap);
                sentenceEl.appendChild(textAfter);
                examSentences.appendChild(sentenceEl);
            });
            
            // Load saved answers
            const answerKey = `part1_exam${examData.examNumber}`;
            if (userAnswers[answerKey]) {
                userAnswers[answerKey].forEach((answer, index) => {
                    const select = examSection.querySelector(`select[data-exam-number="${examData.examNumber}"][data-index="${index}"]`);
                    if (select && answer) {
                        select.value = answer;
                        select.classList.add('filled');
                    }
                });
            }
            
            examSection.appendChild(examSentences);
            
            // Thêm nút check cho toàn bộ exam section
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            checkBtn.dataset.examNumber = examData.examNumber;
            
            checkBtn.addEventListener('click', function() {
                const answerKey = `part1_exam${examData.examNumber}`;
                let results = [];
                
                examData.sentences.forEach((sentence, index) => {
                    const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
                    const isCorrect = userAnswer === sentence.answer;
                    results.push({
                        part: 1,
                        examNumber: examData.examNumber,
                        question: `${sentence.text} [${sentence.answer}] ${sentence.after}`,
                        userAnswer: userAnswer || 'No answer',
                        correctAnswer: sentence.answer,
                        isCorrect
                    });
                });
                
                showCheckResults(1, examData, examData.examNumber, results);
            });
            
            const checkContainer = document.createElement('div');
            checkContainer.appendChild(checkBtn);
            examSection.appendChild(checkContainer);
            
            sentencesContainer.appendChild(examSection);
        });
        return;
    }

    // Single exam mode
    // Create word list (display only)
    const wordListText = document.createElement('div');
    wordListText.style.marginBottom = '15px';
    wordListText.style.fontWeight = '600';
    wordListText.style.color = '#4a5568';
    wordListText.textContent = 'Word list:';
    wordListContainer.appendChild(wordListText);
    
    data.wordList.forEach((word, index) => {
        const wordEl = document.createElement('span');
        wordEl.className = 'word-option';
        wordEl.textContent = word;
        if (index < data.wordList.length - 1) {
            wordEl.textContent += ', ';
        }
        wordListContainer.appendChild(wordEl);
    });

    if (!data.sentences || data.sentences.length === 0) {
        sentencesContainer.innerHTML = '<p style="color: red;">No sentences available in this part.</p>';
        return;
    }
    
    if (!data.wordList || data.wordList.length === 0) {
        wordListContainer.innerHTML = '<p style="color: red;">No word list available.</p>';
        return;
    }

    // Create sentences with dropdown
    data.sentences.forEach((sentence, index) => {
        const sentenceEl = document.createElement('div');
        sentenceEl.className = 'sentence-item';
        
        const gap = document.createElement('select');
        gap.className = 'sentence-gap-select';
        gap.dataset.index = index;
        gap.dataset.answer = sentence.answer;
        
        if (index > 0) {
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Select --';
            gap.appendChild(defaultOption);
        }
        
        data.wordList.forEach(word => {
            const option = document.createElement('option');
            option.value = word;
            option.textContent = word;
            gap.appendChild(option);
        });
        
        if (index === 0) {
            gap.value = sentence.answer;
            gap.classList.add('filled');
            gap.disabled = true;
            const answerKey = `part1_exam${currentExam}`;
            if (!userAnswers[answerKey]) userAnswers[answerKey] = [];
            userAnswers[answerKey][0] = sentence.answer;
        }
        
        gap.addEventListener('change', function() {
            const answerKey = `part1_exam${currentExam}`;
            if (!userAnswers[answerKey]) userAnswers[answerKey] = [];
            userAnswers[answerKey][index] = this.value;
            if (this.value) {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }
        });
        
        const textBefore = document.createElement('span');
        textBefore.textContent = sentence.text;
        textBefore.style.whiteSpace = 'pre-wrap';
        
        const textAfter = document.createElement('span');
        textAfter.textContent = sentence.after;
        textAfter.style.whiteSpace = 'pre-wrap';
        
        sentenceEl.appendChild(textBefore);
        sentenceEl.appendChild(gap);
        sentenceEl.appendChild(textAfter);

        sentencesContainer.appendChild(sentenceEl);
    });

    // Load saved answers
    const answerKey = `part1_exam${currentExam}`;
    if (userAnswers[answerKey]) {
        userAnswers[answerKey].forEach((answer, index) => {
            const select = document.querySelector(`#sentences1 .sentence-gap-select[data-index="${index}"]`);
            if (select && answer) {
                select.value = answer;
                select.classList.add('filled');
            }
        });
    }
    
    // Thêm nút check cho Part 1 (single exam mode)
    const checkContainer = document.getElementById('check-container1');
    if (checkContainer) {
        checkContainer.innerHTML = '';
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'btn btn-check';
        checkBtn.textContent = 'Check đáp án';
        checkBtn.style.cssText = 'width: 100%; padding: 12px; font-size: 16px;';
        
        const checkResult = document.createElement('div');
        checkResult.className = 'check-result';
        checkResult.style.cssText = 'margin-top: 15px;';
        
        checkBtn.addEventListener('click', function() {
            const answerKey = `part1_exam${currentExam}`;
            let results = [];
            
            data.sentences.forEach((sentence, index) => {
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
                const isCorrect = userAnswer === sentence.answer;
                results.push({
                    part: 1,
                    examNumber: currentExam,
                    question: `${sentence.text} [${sentence.answer}] ${sentence.after}`,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: sentence.answer,
                    isCorrect
                });
            });
            
            showCheckResults(1, data, currentExam, results);
        });
        
        checkContainer.appendChild(checkBtn);
    }
}

// Part 2: Text Cohesion (Drag and Drop)
function loadPart2() {
    const data = getPartData(2);
    if (!data) {
        console.error('No data found for Part 2');
        return;
    }
    const titleEl = document.getElementById('passage-title2');
    const container = document.getElementById('sentences2');

    titleEl.textContent = '';
    container.innerHTML = '';

    if (allExamsMode && data.allExams) {
        // Load all exams
        data.allExams.forEach((examData) => {
            const examSection = document.createElement('div');
            examSection.className = 'exam-section';
            examSection.style.cssText = 'margin-bottom: 40px; padding: 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: #f9fafb;';
            
            const examTitle = document.createElement('h3');
            examTitle.style.cssText = 'margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; font-size: 20px; font-weight: 700;';
            examTitle.textContent = `Đề ${examData.examNumber} - ${examData.passageTitle || ''}`;
            examSection.appendChild(examTitle);
            
            const examContainer = document.createElement('div');
            examContainer.className = 'drag-drop-container';
            
            // Add first sentence (fixed)
            const firstSentence = document.createElement('div');
            firstSentence.className = 'sentence-order-item fixed';
            firstSentence.innerHTML = `
                <span class="order-number">0</span>
                <span class="sentence-text">${examData.firstSentence}</span>
            `;
            examContainer.appendChild(firstSentence);

            // Shuffle sentences for display
            const shuffledSentences = examData.sentences.map((sentence, index) => ({
                sentence: sentence,
                originalIndex: index,
                correctOrder: index + 1
            })).sort(() => Math.random() - 0.5);

            // Create draggable sentence items
            shuffledSentences.forEach((item, displayIndex) => {
                const sentenceEl = document.createElement('div');
                sentenceEl.className = 'sentence-order-item draggable';
                sentenceEl.draggable = true;
                sentenceEl.dataset.originalIndex = item.originalIndex;
                sentenceEl.dataset.correctOrder = item.correctOrder;
                sentenceEl.dataset.examNumber = examData.examNumber;
                
                sentenceEl.innerHTML = `
                    <span class="drag-handle">☰</span>
                    <span class="order-number">${displayIndex + 1}</span>
                    <span class="sentence-text">${item.sentence}</span>
                    <div class="mobile-controls">
                        <button class="move-btn move-up" aria-label="Move up">↑</button>
                        <button class="move-btn move-down" aria-label="Move down">↓</button>
                    </div>
                `;
                
                // Drag event handlers (desktop)
                sentenceEl.addEventListener('dragstart', handleDragStart);
                sentenceEl.addEventListener('dragend', handleDragEnd);
                sentenceEl.addEventListener('dragover', handleDragOver);
                sentenceEl.addEventListener('drop', handleDrop);
                sentenceEl.addEventListener('dragenter', handleDragEnter);
                sentenceEl.addEventListener('dragleave', handleDragLeave);
                
                // Touch event handlers (mobile)
                addTouchHandlers(sentenceEl, examContainer);
                
                // Mobile button handlers
                const moveUpBtn = sentenceEl.querySelector('.move-up');
                const moveDownBtn = sentenceEl.querySelector('.move-down');
                moveUpBtn.addEventListener('click', () => moveSentenceUp(sentenceEl, examContainer));
                moveDownBtn.addEventListener('click', () => moveSentenceDown(sentenceEl, examContainer));
                
                examContainer.appendChild(sentenceEl);
            });

            // Update order numbers after initial render
            updateOrderNumbers(examContainer);
            
            examSection.appendChild(examContainer);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            checkBtn.addEventListener('click', function() {
                // Get current order from DOM
                const draggableItems = examContainer.querySelectorAll('.draggable');
                const currentOrder = {};
                draggableItems.forEach((el, position) => {
                    const originalIndex = parseInt(el.dataset.originalIndex);
                    currentOrder[originalIndex] = position + 1;
                });
                
                let results = [];
                examData.sentences.forEach((sentence, originalIndex) => {
                    const userOrder = currentOrder[originalIndex];
                    const correctOrder = originalIndex + 1;
                    const isCorrect = userOrder === correctOrder;
                    results.push({
                        part: 2,
                        examNumber: examData.examNumber,
                        question: `Sentence ${originalIndex + 1}: ${sentence}`,
                        userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                        correctAnswer: `Order ${correctOrder}`,
                        isCorrect
                    });
                });
                
                showCheckResults(2, examData, examData.examNumber, results);
            });
            
            checkContainerDiv.appendChild(checkBtn);
            examSection.appendChild(checkContainerDiv);
            
            container.appendChild(examSection);
        });
        return;
    }
    
    // Single exam mode
    titleEl.textContent = data.passageTitle || '';
    
    if (!data.sentences || data.sentences.length === 0) {
        container.innerHTML = '<p>No sentences available.</p>';
        return;
    }

    container.className = 'drag-drop-container';

    // Add first sentence (fixed)
    const firstSentence = document.createElement('div');
    firstSentence.className = 'sentence-order-item fixed';
    firstSentence.innerHTML = `
        <span class="order-number">0</span>
        <span class="sentence-text">${data.firstSentence}</span>
    `;
    container.appendChild(firstSentence);

    // Shuffle sentences for display
    const shuffledSentences = data.sentences.map((sentence, index) => ({
        sentence: sentence,
        originalIndex: index,
        correctOrder: index + 1
    })).sort(() => Math.random() - 0.5);

    // Create draggable sentence items
    shuffledSentences.forEach((item, displayIndex) => {
        const sentenceEl = document.createElement('div');
        sentenceEl.className = 'sentence-order-item draggable';
        sentenceEl.draggable = true;
        sentenceEl.dataset.originalIndex = item.originalIndex;
        sentenceEl.dataset.correctOrder = item.correctOrder;
        
        sentenceEl.innerHTML = `
            <span class="drag-handle">☰</span>
            <span class="order-number">${displayIndex + 1}</span>
            <span class="sentence-text">${item.sentence}</span>
            <div class="mobile-controls">
                <button class="move-btn move-up" aria-label="Move up">↑</button>
                <button class="move-btn move-down" aria-label="Move down">↓</button>
            </div>
        `;
        
        // Drag event handlers (desktop)
        sentenceEl.addEventListener('dragstart', handleDragStart);
        sentenceEl.addEventListener('dragend', handleDragEnd);
        sentenceEl.addEventListener('dragover', handleDragOver);
        sentenceEl.addEventListener('drop', handleDrop);
        sentenceEl.addEventListener('dragenter', handleDragEnter);
        sentenceEl.addEventListener('dragleave', handleDragLeave);
        
        // Touch event handlers (mobile)
        addTouchHandlers(sentenceEl, container);
        
        // Mobile button handlers
        const moveUpBtn = sentenceEl.querySelector('.move-up');
        const moveDownBtn = sentenceEl.querySelector('.move-down');
        moveUpBtn.addEventListener('click', () => moveSentenceUp(sentenceEl, container));
        moveDownBtn.addEventListener('click', () => moveSentenceDown(sentenceEl, container));
        
        container.appendChild(sentenceEl);
    });
    
    // Update order numbers after initial render
    updateOrderNumbers(container);
    
    // Thêm nút check cho Part 2 (single exam mode)
    const checkContainer = document.getElementById('check-container2');
    if (checkContainer) {
        checkContainer.innerHTML = '';
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'btn btn-check';
        checkBtn.textContent = 'Check đáp án';
        checkBtn.style.cssText = 'width: 100%; padding: 12px; font-size: 16px;';
        
        const checkResult = document.createElement('div');
        checkResult.className = 'check-result';
        checkResult.style.cssText = 'margin-top: 15px;';
        
        checkBtn.addEventListener('click', function() {
            // Get current order from DOM
            const draggableItems = container.querySelectorAll('.draggable');
            const currentOrder = {};
            draggableItems.forEach((el, position) => {
                const originalIndex = parseInt(el.dataset.originalIndex);
                currentOrder[originalIndex] = position + 1;
            });
            
            let results = [];
            data.sentences.forEach((sentence, originalIndex) => {
                const userOrder = currentOrder[originalIndex];
                const correctOrder = originalIndex + 1;
                const isCorrect = userOrder === correctOrder;
                results.push({
                    part: 2,
                    examNumber: currentExam,
                    question: `Sentence ${originalIndex + 1}: ${sentence}`,
                    userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                    correctAnswer: `Order ${correctOrder}`,
                    isCorrect
                });
            });
            
            showCheckResults(2, data, currentExam, results);
        });
        
        checkContainer.appendChild(checkBtn);
    }
}

// Drag and Drop handlers for Part 2
let draggedElement = null;
let draggedOverElement = null;
let dropPosition = 'after'; // 'before' or 'after'

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    this.classList.remove('drag-over');
    this.classList.remove('drag-over-before');
    this.classList.remove('drag-over-after');
    // Remove drag-over class from all items
    document.querySelectorAll('.sentence-order-item').forEach(item => {
        item.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');
    });
    draggedElement = null;
    draggedOverElement = null;
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    if (this !== draggedElement && this.classList.contains('draggable')) {
        e.dataTransfer.dropEffect = 'move';
        
        // Determine if drop is in top or bottom half of element
        const rect = this.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const midpoint = rect.height / 2;
        
        // Remove all drag-over classes first
        this.classList.remove('drag-over-before', 'drag-over-after');
        
        if (y < midpoint) {
            // Top half - insert before
            this.classList.add('drag-over-before');
            dropPosition = 'before';
        } else {
            // Bottom half - insert after
            this.classList.add('drag-over-after');
            dropPosition = 'after';
        }
    }
    
    return false;
}

function handleDragEnter(e) {
    if (this !== draggedElement && this.classList.contains('draggable')) {
        draggedOverElement = this;
    }
}

function handleDragLeave(e) {
    // Only remove if we're actually leaving the element (not entering a child)
    const rect = this.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
        this.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    if (draggedElement !== this && this.classList.contains('draggable') && draggedElement) {
        const container = this.parentElement;
        const allItems = Array.from(container.querySelectorAll('.sentence-order-item.draggable'));
        const draggedIndex = allItems.indexOf(draggedElement);
        const targetIndex = allItems.indexOf(this);
        
        if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
            // Store reference to dragged element's next sibling before removal
            const draggedNextSibling = draggedElement.nextSibling;
            
            // Remove dragged element from current position
            draggedElement.remove();
            
            // Insert at new position based on drop position
            if (dropPosition === 'before') {
                // Insert before target
                container.insertBefore(draggedElement, this);
            } else {
                // Insert after target
                if (this.nextSibling) {
                    container.insertBefore(draggedElement, this.nextSibling);
                } else {
                    container.appendChild(draggedElement);
                }
            }
            
            // Update order numbers visually
            updateOrderNumbers(container);
        } else if (draggedIndex === targetIndex) {
            // Same position, do nothing
        }
    }
    
    this.classList.remove('drag-over', 'drag-over-before', 'drag-over-after');
    return false;
}

// Mobile touch handlers
let touchStartY = null;
let touchElement = null;

function addTouchHandlers(element, container) {
    element.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
        touchElement = this;
        this.classList.add('dragging');
        e.preventDefault();
    }, { passive: false });
    
    element.addEventListener('touchmove', function(e) {
        if (!touchElement || touchElement !== this) return;
        e.preventDefault();
        
        const touchY = e.touches[0].clientY;
        const deltaY = touchY - touchStartY;
        
        // Visual feedback
        this.style.transform = `translateY(${deltaY}px)`;
        this.style.opacity = '0.7';
        
        // Find element below touch point
        const elementsBelow = Array.from(container.querySelectorAll('.sentence-order-item.draggable'));
        const currentIndex = elementsBelow.indexOf(this);
        
        elementsBelow.forEach((el, index) => {
            if (el === this) return;
            const rect = el.getBoundingClientRect();
            const elCenter = rect.top + rect.height / 2;
            
            if (touchY >= rect.top && touchY <= rect.bottom) {
                if (touchY < elCenter) {
                    el.classList.add('drag-over-before');
                    el.classList.remove('drag-over-after');
                } else {
                    el.classList.add('drag-over-after');
                    el.classList.remove('drag-over-before');
                }
            } else {
                el.classList.remove('drag-over-before', 'drag-over-after');
            }
        });
    }, { passive: false });
    
    element.addEventListener('touchend', function(e) {
        if (!touchElement || touchElement !== this) return;
        e.preventDefault();
        
        const touchY = e.changedTouches[0].clientY;
        const elementsBelow = Array.from(container.querySelectorAll('.sentence-order-item.draggable'));
        const currentIndex = elementsBelow.indexOf(this);
        
        // Find target element
        let targetElement = null;
        let insertBefore = false;
        
        for (let el of elementsBelow) {
            if (el === this) continue;
            const rect = el.getBoundingClientRect();
            if (touchY >= rect.top && touchY <= rect.bottom) {
                targetElement = el;
                const elCenter = rect.top + rect.height / 2;
                insertBefore = touchY < elCenter;
                break;
            }
        }
        
        // Reset visual state
        this.style.transform = '';
        this.style.opacity = '';
        this.classList.remove('dragging');
        elementsBelow.forEach(el => {
            el.classList.remove('drag-over-before', 'drag-over-after');
        });
        
        // Move element if target found
        if (targetElement && targetElement !== this) {
            if (insertBefore) {
                container.insertBefore(this, targetElement);
            } else {
                if (targetElement.nextSibling) {
                    container.insertBefore(this, targetElement.nextSibling);
                } else {
                    container.appendChild(this);
                }
            }
            updateOrderNumbers(container);
        }
        
        touchStartY = null;
        touchElement = null;
    }, { passive: false });
}

// Mobile button handlers
function moveSentenceUp(element, container) {
    const allItems = Array.from(container.querySelectorAll('.sentence-order-item.draggable'));
    const currentIndex = allItems.indexOf(element);
    
    if (currentIndex > 0) {
        const prevItem = allItems[currentIndex - 1];
        container.insertBefore(element, prevItem);
        updateOrderNumbers(container);
    }
}

function moveSentenceDown(element, container) {
    const allItems = Array.from(container.querySelectorAll('.sentence-order-item.draggable'));
    const currentIndex = allItems.indexOf(element);
    
    if (currentIndex < allItems.length - 1) {
        const nextItem = allItems[currentIndex + 1];
        if (nextItem.nextSibling) {
            container.insertBefore(element, nextItem.nextSibling);
        } else {
            container.appendChild(element);
        }
        updateOrderNumbers(container);
    }
}

function updateOrderNumbers(container) {
    const items = container.querySelectorAll('.sentence-order-item.draggable');
    items.forEach((item, index) => {
        const orderNumber = item.querySelector('.order-number');
        if (orderNumber) {
            orderNumber.textContent = index + 1;
        }
    });
    
    // Save answers to userAnswers
    const containerId = container.id;
    let partNumber = null;
    let examNumber = null;
    
    if (containerId === 'sentences2' || containerId.startsWith('sentences2')) {
        partNumber = 2;
    } else if (containerId === 'sentences3' || containerId.startsWith('sentences3')) {
        partNumber = 3;
    }
    
    if (partNumber) {
        // Check if this is in all exams mode (container is inside exam-section)
        const examSection = container.closest('.exam-section');
        if (examSection) {
            // All exams mode - find exam number from data attribute or title
            const examTitle = examSection.querySelector('h3');
            if (examTitle) {
                const match = examTitle.textContent.match(/Đề (\d+)/);
                if (match) {
                    examNumber = parseInt(match[1]);
                }
            }
        } else {
            // Single exam mode
            examNumber = currentExam;
        }
        
        if (examNumber) {
            const answerKey = `part${partNumber}_exam${examNumber}`;
            if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
            
            items.forEach((item, position) => {
                const originalIndex = parseInt(item.dataset.originalIndex);
                if (!isNaN(originalIndex)) {
                    userAnswers[answerKey][originalIndex] = position + 1;
                }
            });
        }
    }
}


// Part 3: Text Cohesion (Drag and Drop) - Same as Part 2 - Updated v2
function loadPart3() {
    const data = getPartData(3);
    if (!data) {
        console.error('No data found for Part 3');
        return;
    }
    const titleEl = document.getElementById('passage-title3');
    const container = document.getElementById('sentences3');

    titleEl.textContent = '';
    container.innerHTML = '';
    // Force clear any old dropdowns or select elements
    container.querySelectorAll('.order-select, select').forEach(el => el.remove());
    // Remove old class and prepare for drag-drop
    container.classList.remove('sentences-order-container');
    container.className = '';

    if (allExamsMode && data.allExams) {
        // Load all exams
        data.allExams.forEach((examData) => {
            const examSection = document.createElement('div');
            examSection.className = 'exam-section';
            examSection.style.cssText = 'margin-bottom: 40px; padding: 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: #f9fafb;';
            
            const examTitle = document.createElement('h3');
            examTitle.style.cssText = 'margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; font-size: 20px; font-weight: 700;';
            examTitle.textContent = `Đề ${examData.examNumber} - ${examData.passageTitle || ''}`;
            examSection.appendChild(examTitle);
            
            const examContainer = document.createElement('div');
            examContainer.className = 'drag-drop-container';
            
            // Add first sentence (fixed)
            const firstSentence = document.createElement('div');
            firstSentence.className = 'sentence-order-item fixed';
            firstSentence.innerHTML = `
                <span class="order-number">0</span>
                <span class="sentence-text">${examData.firstSentence}</span>
            `;
            examContainer.appendChild(firstSentence);

            // Shuffle sentences for display
            const shuffledSentences = examData.sentences.map((sentence, index) => ({
                sentence: sentence,
                originalIndex: index,
                correctOrder: index + 1
            })).sort(() => Math.random() - 0.5);

            // Create draggable sentence items
            shuffledSentences.forEach((item, displayIndex) => {
                const sentenceEl = document.createElement('div');
                sentenceEl.className = 'sentence-order-item draggable';
                sentenceEl.draggable = true;
                sentenceEl.dataset.originalIndex = item.originalIndex;
                sentenceEl.dataset.correctOrder = item.correctOrder;
                sentenceEl.dataset.examNumber = examData.examNumber;
                
                sentenceEl.innerHTML = `
                    <span class="drag-handle">☰</span>
                    <span class="order-number">${displayIndex + 1}</span>
                    <span class="sentence-text">${item.sentence}</span>
                    <div class="mobile-controls">
                        <button class="move-btn move-up" aria-label="Move up">↑</button>
                        <button class="move-btn move-down" aria-label="Move down">↓</button>
                    </div>
                `;
                
                // Drag event handlers (desktop)
                sentenceEl.addEventListener('dragstart', handleDragStart);
                sentenceEl.addEventListener('dragend', handleDragEnd);
                sentenceEl.addEventListener('dragover', handleDragOver);
                sentenceEl.addEventListener('drop', handleDrop);
                sentenceEl.addEventListener('dragenter', handleDragEnter);
                sentenceEl.addEventListener('dragleave', handleDragLeave);
                
                // Touch event handlers (mobile)
                addTouchHandlers(sentenceEl, examContainer);
                
                // Mobile button handlers
                const moveUpBtn = sentenceEl.querySelector('.move-up');
                const moveDownBtn = sentenceEl.querySelector('.move-down');
                moveUpBtn.addEventListener('click', () => moveSentenceUp(sentenceEl, examContainer));
                moveDownBtn.addEventListener('click', () => moveSentenceDown(sentenceEl, examContainer));
                
                examContainer.appendChild(sentenceEl);
            });

            // Update order numbers after initial render
            updateOrderNumbers(examContainer);
            
            // Force remove any remaining select/dropdown elements and verify drag handlers
            setTimeout(() => {
                // Remove any dropdowns
                examContainer.querySelectorAll('select, .order-select').forEach(el => {
                    el.remove();
                });
                // Verify and re-attach drag handlers if needed
                examContainer.querySelectorAll('.draggable').forEach(el => {
                    if (!el.draggable || el.draggable !== true) {
                        el.draggable = true;
                    }
                    // Re-attach handlers if missing
                    if (!el.hasAttribute('data-handlers-attached')) {
                        el.addEventListener('dragstart', handleDragStart);
                        el.addEventListener('dragend', handleDragEnd);
                        el.addEventListener('dragover', handleDragOver);
                        el.addEventListener('drop', handleDrop);
                        el.addEventListener('dragenter', handleDragEnter);
                        el.addEventListener('dragleave', handleDragLeave);
                        
                        // Re-attach mobile handlers
                        addTouchHandlers(el, examContainer);
                        const moveUpBtn = el.querySelector('.move-up');
                        const moveDownBtn = el.querySelector('.move-down');
                        if (moveUpBtn) {
                            moveUpBtn.addEventListener('click', () => moveSentenceUp(el, examContainer));
                        }
                        if (moveDownBtn) {
                            moveDownBtn.addEventListener('click', () => moveSentenceDown(el, examContainer));
                        }
                        
                        el.setAttribute('data-handlers-attached', 'true');
                    }
                });
            }, 100);
            
            examSection.appendChild(examContainer);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            checkBtn.addEventListener('click', function() {
                // Get current order from DOM
                const draggableItems = examContainer.querySelectorAll('.draggable');
                const currentOrder = {};
                draggableItems.forEach((el, position) => {
                    const originalIndex = parseInt(el.dataset.originalIndex);
                    currentOrder[originalIndex] = position + 1;
                });
                
                let results = [];
                examData.sentences.forEach((sentence, originalIndex) => {
                    const userOrder = currentOrder[originalIndex];
                    const correctOrder = originalIndex + 1;
                    const isCorrect = userOrder === correctOrder;
                    results.push({
                        part: 3,
                        examNumber: examData.examNumber,
                        question: `Sentence ${originalIndex + 1}: ${sentence}`,
                        userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                        correctAnswer: `Order ${correctOrder}`,
                        isCorrect
                    });
                });
                
                showCheckResults(3, examData, examData.examNumber, results);
            });
            
            checkContainerDiv.appendChild(checkBtn);
            examSection.appendChild(checkContainerDiv);
            
            container.appendChild(examSection);
        });
        return;
    }
    
    // Single exam mode - Part 3
    titleEl.textContent = data.passageTitle || '';
    
    if (!data.sentences || data.sentences.length === 0) {
        container.innerHTML = '<p>No sentences available.</p>';
        return;
    }

    // Clear and set container for drag-drop
    container.innerHTML = '';
    container.className = 'drag-drop-container';

    // Add first sentence (fixed)
    const firstSentence = document.createElement('div');
    firstSentence.className = 'sentence-order-item fixed';
    firstSentence.innerHTML = `
        <span class="order-number">0</span>
        <span class="sentence-text">${data.firstSentence}</span>
    `;
    container.appendChild(firstSentence);

    // Shuffle sentences for display
    const shuffledSentences = data.sentences.map((sentence, index) => ({
        sentence: sentence,
        originalIndex: index,
        correctOrder: index + 1
    })).sort(() => Math.random() - 0.5);

    // Create draggable sentence items - EXACTLY like Part 2
    shuffledSentences.forEach((item, displayIndex) => {
        const sentenceEl = document.createElement('div');
        sentenceEl.className = 'sentence-order-item draggable';
        sentenceEl.draggable = true;
        sentenceEl.dataset.originalIndex = item.originalIndex;
        sentenceEl.dataset.correctOrder = item.correctOrder;
        
        sentenceEl.innerHTML = `
            <span class="drag-handle">☰</span>
            <span class="order-number">${displayIndex + 1}</span>
            <span class="sentence-text">${item.sentence}</span>
            <div class="mobile-controls">
                <button class="move-btn move-up" aria-label="Move up">↑</button>
                <button class="move-btn move-down" aria-label="Move down">↓</button>
            </div>
        `;
        
        // Drag event handlers (desktop)
        sentenceEl.addEventListener('dragstart', handleDragStart);
        sentenceEl.addEventListener('dragend', handleDragEnd);
        sentenceEl.addEventListener('dragover', handleDragOver);
        sentenceEl.addEventListener('drop', handleDrop);
        sentenceEl.addEventListener('dragenter', handleDragEnter);
        sentenceEl.addEventListener('dragleave', handleDragLeave);
        
        // Touch event handlers (mobile)
        addTouchHandlers(sentenceEl, container);
        
        // Mobile button handlers
        const moveUpBtn = sentenceEl.querySelector('.move-up');
        const moveDownBtn = sentenceEl.querySelector('.move-down');
        moveUpBtn.addEventListener('click', () => moveSentenceUp(sentenceEl, container));
        moveDownBtn.addEventListener('click', () => moveSentenceDown(sentenceEl, container));
        
        container.appendChild(sentenceEl);
    });

    // Update order numbers after initial render
    updateOrderNumbers(container);
    
    // Force remove any remaining select/dropdown elements and verify drag handlers
    setTimeout(() => {
        // Remove any dropdowns
        container.querySelectorAll('select, .order-select').forEach(el => {
            el.remove();
        });
        // Verify and re-attach drag handlers if needed
        container.querySelectorAll('.draggable').forEach(el => {
            if (!el.draggable || el.draggable !== true) {
                el.draggable = true;
            }
            // Re-attach handlers if missing
            if (!el.hasAttribute('data-handlers-attached')) {
                el.addEventListener('dragstart', handleDragStart);
                el.addEventListener('dragend', handleDragEnd);
                el.addEventListener('dragover', handleDragOver);
                el.addEventListener('drop', handleDrop);
                el.addEventListener('dragenter', handleDragEnter);
                el.addEventListener('dragleave', handleDragLeave);
                
                // Re-attach mobile handlers
                addTouchHandlers(el, container);
                const moveUpBtn = el.querySelector('.move-up');
                const moveDownBtn = el.querySelector('.move-down');
                if (moveUpBtn) {
                    moveUpBtn.addEventListener('click', () => moveSentenceUp(el, container));
                }
                if (moveDownBtn) {
                    moveDownBtn.addEventListener('click', () => moveSentenceDown(el, container));
                }
                
                el.setAttribute('data-handlers-attached', 'true');
            }
        });
    }, 100);
    
    // Thêm nút check cho Part 3 (single exam mode)
    const checkContainer = document.getElementById('check-container3');
    if (checkContainer) {
        checkContainer.innerHTML = '';
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'btn btn-check';
        checkBtn.textContent = 'Check đáp án';
        checkBtn.style.cssText = 'width: 100%; padding: 12px; font-size: 16px;';
        
        const checkResult = document.createElement('div');
        checkResult.className = 'check-result';
        checkResult.style.cssText = 'margin-top: 15px;';
        
        checkBtn.addEventListener('click', function() {
            // Get current order from DOM
            const draggableItems = container.querySelectorAll('.draggable');
            const currentOrder = {};
            draggableItems.forEach((el, position) => {
                const originalIndex = parseInt(el.dataset.originalIndex);
                currentOrder[originalIndex] = position + 1;
            });
            
            let results = [];
            data.sentences.forEach((sentence, originalIndex) => {
                const userOrder = currentOrder[originalIndex];
                const correctOrder = originalIndex + 1;
                const isCorrect = userOrder === correctOrder;
                results.push({
                    part: 3,
                    examNumber: currentExam,
                    question: `Sentence ${originalIndex + 1}: ${sentence}`,
                    userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                    correctAnswer: `Order ${correctOrder}`,
                    isCorrect
                });
            });
            
            showCheckResults(3, data, currentExam, results);
        });
        
        checkContainer.appendChild(checkBtn);
    }
}

// Part 4: Opinion Matching
function loadPart4() {
    const data = getPartData(4);
    if (!data) {
        console.error('No data found for Part 4');
        return;
    }
    const opinionsContainer = document.getElementById('opinions4');
    const questionsContainer = document.getElementById('questions4');

    opinionsContainer.innerHTML = '';
    questionsContainer.innerHTML = '';

    if (allExamsMode && data.allExams) {
        // Load all exams
        data.allExams.forEach((examData) => {
            const examSection = document.createElement('div');
            examSection.className = 'exam-section';
            examSection.style.cssText = 'margin-bottom: 40px; padding: 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: #f9fafb;';
            
            const examTitle = document.createElement('h3');
            examTitle.style.cssText = 'margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; font-size: 20px; font-weight: 700;';
            examTitle.textContent = `Đề ${examData.examNumber}`;
            examSection.appendChild(examTitle);
            
            // Create 2-column layout for Part 4
            const examLayout = document.createElement('div');
            examLayout.className = 'part4-layout';
            
            const examOpinions = document.createElement('div');
            examOpinions.className = 'opinions-container';
            examData.opinions.forEach(opinion => {
                const opinionEl = document.createElement('div');
                opinionEl.className = 'person-opinion';
                opinionEl.innerHTML = `
                    <div class="person-label">${opinion.person}</div>
                    <div class="person-text">${opinion.text}</div>
                `;
                examOpinions.appendChild(opinionEl);
            });
            examLayout.appendChild(examOpinions);
            
            const examQuestions = document.createElement('div');
            examQuestions.className = 'questions-container';
            examData.questions.forEach((q, index) => {
                const questionEl = document.createElement('div');
                questionEl.className = 'question-item';
                
                const select = document.createElement('select');
                select.className = 'answer-select';
                select.dataset.index = index;
                select.dataset.examNumber = examData.examNumber;
                select.dataset.answer = q.answer;
                
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = '-- Select --';
                select.appendChild(defaultOption);

                examData.opinions.forEach(opinion => {
                    const option = document.createElement('option');
                    option.value = opinion.person;
                    option.textContent = opinion.person;
                    select.appendChild(option);
                });

                select.addEventListener('change', function() {
                    const answerKey = `part4_exam${examData.examNumber}`;
                    if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
                    userAnswers[answerKey][index] = this.value;
                });

                questionEl.innerHTML = `
                    <div class="question-text">${q.question}</div>
                `;
                questionEl.appendChild(select);
                examQuestions.appendChild(questionEl);
            });
            
            // Load saved answers
            const answerKey = `part4_exam${examData.examNumber}`;
            if (userAnswers[answerKey]) {
                userAnswers[answerKey].forEach((answer, index) => {
                    const select = examQuestions.querySelector(`select[data-exam-number="${examData.examNumber}"][data-index="${index}"]`);
                    if (select && answer) {
                        select.value = answer;
                    }
                });
            }
            
            examLayout.appendChild(examQuestions);
            examSection.appendChild(examLayout);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            checkBtn.addEventListener('click', function() {
                const answerKey = `part4_exam${examData.examNumber}`;
                let results = [];
                
                examData.questions.forEach((q, index) => {
                    const userAnswer = userAnswers[answerKey] && (Array.isArray(userAnswers[answerKey]) ? userAnswers[answerKey][index] : userAnswers[answerKey][index]);
                    const isCorrect = userAnswer === q.answer;
                    results.push({
                        part: 4,
                        examNumber: examData.examNumber,
                        question: q.question,
                        userAnswer: userAnswer || 'No answer',
                        correctAnswer: q.answer,
                        isCorrect
                    });
                });
                
                showCheckResults(4, examData, examData.examNumber, results);
            });
            
            checkContainerDiv.appendChild(checkBtn);
            examSection.appendChild(checkContainerDiv);
            
            opinionsContainer.appendChild(examSection);
        });
        return;
    }

    // Single exam mode
    // Display opinions
    data.opinions.forEach(opinion => {
        const opinionEl = document.createElement('div');
        opinionEl.className = 'person-opinion';
        opinionEl.innerHTML = `
            <div class="person-label">${opinion.person}</div>
            <div class="person-text">${opinion.text}</div>
        `;
        opinionsContainer.appendChild(opinionEl);
    });

    // Display questions
    data.questions.forEach((q, index) => {
        const questionEl = document.createElement('div');
        questionEl.className = 'question-item';
        
        const select = document.createElement('select');
        select.className = 'answer-select';
        select.dataset.index = index;
        select.dataset.answer = q.answer;
        
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Select --';
        select.appendChild(defaultOption);

        data.opinions.forEach(opinion => {
            const option = document.createElement('option');
            option.value = opinion.person;
            option.textContent = opinion.person;
            select.appendChild(option);
        });

        select.addEventListener('change', function() {
            const answerKey = `part4_exam${currentExam}`;
            if (!userAnswers[answerKey]) userAnswers[answerKey] = [];
            userAnswers[answerKey][index] = this.value;
        });

        questionEl.innerHTML = `<div class="question-text">${q.question}</div>`;
        questionEl.appendChild(select);
        questionsContainer.appendChild(questionEl);
    });

    // Load saved answers
    const answerKey = `part4_exam${currentExam}`;
    if (userAnswers[answerKey]) {
        userAnswers[answerKey].forEach((answer, index) => {
            const select = document.querySelector(`#questions4 select[data-index="${index}"]`);
            if (select && answer) {
                select.value = answer;
            }
        });
    }
    
    // Thêm nút check cho Part 4 (single exam mode)
    createCheckButton(4, data, currentExam, 'check-container4');
}

// Part 5: Long Text Comprehension - Choose Heading
// Hàm tạo mẹo học thuộc nhanh vị trí 7 tiêu đề (cho đề MOUNTAINS AND HUMAN CONNECTIONS - giữ lại để tương thích)
function createMnemonicBox() {
    const mnemonicBox = document.createElement('div');
    mnemonicBox.className = 'mnemonic-box';
    mnemonicBox.style.cssText = `
        background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 30px;
        color: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    const title = document.createElement('div');
    title.style.cssText = 'font-size: 20px; font-weight: 700; margin-bottom: 15px; text-align: center;';
    title.textContent = '🧠 MẸO HỌC THUỘC NHANH VỊ TRÍ 7 TIÊU ĐỀ';
    mnemonicBox.appendChild(title);
    
    const mnemonicContent = document.createElement('div');
    mnemonicContent.style.cssText = 'background: rgba(255,255,255,0.2); border-radius: 8px; padding: 15px; margin-bottom: 15px;';
    
    const mnemonicPhrase = document.createElement('div');
    mnemonicPhrase.style.cssText = 'font-size: 18px; font-weight: 600; text-align: center; margin-bottom: 15px; line-height: 1.6;';
    mnemonicPhrase.innerHTML = `
        <div style="margin-bottom: 10px;">📝 <strong>MẸO NHỚ:</strong></div>
        <div style="font-size: 24px; letter-spacing: 3px; margin: 10px 0;">P → A → P → P → R → S → R</div>
        <div style="font-size: 16px; margin-top: 10px; font-style: italic;">
            "Phải Ăn Phở Phở Rất Sướng Rồi"
        </div>
    `;
    mnemonicContent.appendChild(mnemonicPhrase);
    
    const detailsList = document.createElement('div');
    detailsList.style.cssText = 'font-size: 14px; line-height: 2;';
    
    const headings = [
        { num: 1, keyword: 'Perception', letter: 'P', phrase: 'Our changing perceptions toward mountains' },
        { num: 2, keyword: 'Achievement', letter: 'A', phrase: 'A unique sense of achievement' },
        { num: 3, keyword: 'Publicity', letter: 'P', phrase: 'Publicising one\'s achievements' },
        { num: 4, keyword: 'Priority', letter: 'P', phrase: 'A wrong priority' },
        { num: 5, keyword: 'Revelation', letter: 'R', phrase: 'A disturbing revelation' },
        { num: 6, keyword: 'Sustainability', letter: 'S', phrase: 'A new focus on sustainability' },
        { num: 7, keyword: 'Relationship', letter: 'R', phrase: 'An intimate relationship' }
    ];
    
    headings.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-bottom: 8px; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 6px;';
        itemDiv.innerHTML = `
            <span style="font-weight: 700; font-size: 18px; min-width: 30px;">${item.num}.</span>
            <span style="font-weight: 700; font-size: 20px; min-width: 30px; text-align: center; background: rgba(255,255,255,0.3); padding: 4px 8px; border-radius: 4px;">${item.letter}</span>
            <span style="flex: 1; font-weight: 600;">${item.keyword}</span>
        `;
        detailsList.appendChild(itemDiv);
    });
    
    mnemonicContent.appendChild(detailsList);
    mnemonicBox.appendChild(mnemonicContent);
    
    const tipBox = document.createElement('div');
    tipBox.style.cssText = 'background: rgba(255,255,255,0.2); border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.6;';
    tipBox.innerHTML = `
        <strong>💡 Gợi ý:</strong> Nhớ câu "Phải Ăn Phở Phở Rất Sướng Rồi" để nhớ thứ tự các chữ cái đầu: 
        <strong>P-A-P-P-R-S-R</strong>. Mỗi chữ cái tương ứng với từ khóa chính của tiêu đề!
    `;
    mnemonicBox.appendChild(tipBox);
    
    return mnemonicBox;
}

// Hàm tạo mẹo học thuộc nhanh cho bất kỳ đề Part 5 nào
function createMnemonicBoxForExam(examData) {
    if (!examData || !examData.paragraphs || !examData.headings) {
        return null;
    }
    
    // Sắp xếp paragraphs theo số thứ tự
    const sortedParagraphs = [...examData.paragraphs].sort((a, b) => a.number - b.number);
    
    // Tạo danh sách headings với keywords và chữ cái đầu
    const headingInfo = sortedParagraphs.map(para => {
        const heading = para.answer;
        // Lấy từ khóa chính (từ quan trọng nhất trong heading)
        const words = heading.split(' ').filter(w => w.trim().length > 0);
        let keyword = '';
        let firstLetter = '';
        
        // Tìm từ khóa chính (thường là danh từ quan trọng, bỏ qua các từ như "a", "an", "the", "of", "on", "in", etc.)
        const skipWords = ['a', 'an', 'the', 'of', 'on', 'in', 'at', 'to', 'for', 'with', 'by', 'about', 'toward', 'towards', 'and', 'or', 'but'];
        
        // Ưu tiên tìm từ khóa quan trọng (danh từ, tính từ quan trọng)
        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase().replace(/[^a-z]/g, '');
            if (word && !skipWords.includes(word) && word.length > 2) {
                // Lấy từ gốc (bỏ dấu câu)
                const cleanWord = words[i].replace(/[^a-zA-Z]/g, '');
                if (cleanWord.length > 0) {
                    keyword = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
                    firstLetter = keyword.charAt(0).toUpperCase();
                    break;
                }
            }
        }
        
        // Nếu không tìm thấy, lấy từ đầu tiên có ý nghĩa
        if (!keyword && words.length > 0) {
            for (let i = 0; i < words.length; i++) {
                const cleanWord = words[i].replace(/[^a-zA-Z]/g, '');
                if (cleanWord.length > 0) {
                    keyword = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
                    firstLetter = keyword.charAt(0).toUpperCase();
                    break;
                }
            }
        }
        
        return {
            num: para.number,
            keyword: keyword,
            letter: firstLetter,
            fullHeading: heading
        };
    });
    
    // Tạo chuỗi chữ cái để nhớ
    const letterSequence = headingInfo.map(h => h.letter).join(' → ');
    const letterString = headingInfo.map(h => h.letter).join('-');
    
    // Tạo câu mẹo nhớ (cố gắng tạo câu có nghĩa từ các chữ cái)
    const mnemonicPhrases = {
        'R-E-P-C-B-F': 'Rất Em Phải Cố Bền Phấn',
        'A-B-U-U-D-A-A': 'Anh Bạn Ưu Ưu Đạt Anh Anh',
        'O-A-P-C-B-F': 'Ở Anh Phải Cố Bền Phấn',
        'R-E-P-O-C-B-F': 'Rất Em Phải Ở Cố Bền Phấn',
        'A-L-O-A-U-D-D': 'Anh Làm Ở Anh Ưu Đạt Đạt',
        'R-D-E-P-O-C-B': 'Rất Đạt Em Phải Ở Cố Bền',
        'R-E-P-O-C-B-F': 'Rất Em Phải Ở Cố Bền Phấn'
    };
    
    // Tạo câu mẹo tự động nếu không có sẵn
    let mnemonicSentence = '';
    if (mnemonicPhrases[letterString]) {
        mnemonicSentence = mnemonicPhrases[letterString];
    } else {
        // Tạo câu mẹo đơn giản từ các chữ cái
        const vietnameseWords = {
            'A': 'Ăn', 'B': 'Bạn', 'C': 'Cố', 'D': 'Đạt', 'E': 'Em', 'F': 'Phấn',
            'G': 'Gặp', 'H': 'Học', 'I': 'Ít', 'J': 'J', 'K': 'Kỳ', 'L': 'Làm',
            'M': 'Mình', 'N': 'Nên', 'O': 'Ở', 'P': 'Phải', 'Q': 'Qua', 'R': 'Rất',
            'S': 'Sẽ', 'T': 'Tốt', 'U': 'Ưu', 'V': 'Vui', 'W': 'W', 'X': 'X',
            'Y': 'Yêu', 'Z': 'Z'
        };
        mnemonicSentence = headingInfo.map(h => vietnameseWords[h.letter] || h.letter).join(' ');
    }
    
    const mnemonicBox = document.createElement('div');
    mnemonicBox.className = 'mnemonic-box';
    mnemonicBox.style.cssText = `
        background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 30px;
        color: white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    const title = document.createElement('div');
    title.style.cssText = 'font-size: 20px; font-weight: 700; margin-bottom: 15px; text-align: center;';
    title.textContent = '🧠 MẸO HỌC THUỘC NHANH VỊ TRÍ CÁC TIÊU ĐỀ';
    mnemonicBox.appendChild(title);
    
    const mnemonicContent = document.createElement('div');
    mnemonicContent.style.cssText = 'background: rgba(255,255,255,0.2); border-radius: 8px; padding: 15px; margin-bottom: 15px;';
    
    const mnemonicPhrase = document.createElement('div');
    mnemonicPhrase.style.cssText = 'font-size: 18px; font-weight: 600; text-align: center; margin-bottom: 15px; line-height: 1.6;';
    mnemonicPhrase.innerHTML = `
        <div style="margin-bottom: 10px;">📝 <strong>MẸO NHỚ:</strong></div>
        <div style="font-size: 24px; letter-spacing: 3px; margin: 10px 0;">${letterSequence}</div>
        ${mnemonicSentence ? `
        <div style="font-size: 16px; margin-top: 10px; font-style: italic;">
            "${mnemonicSentence}"
        </div>
        ` : ''}
    `;
    mnemonicContent.appendChild(mnemonicPhrase);
    
    const detailsList = document.createElement('div');
    detailsList.style.cssText = 'font-size: 14px; line-height: 2;';
    
    headingInfo.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-bottom: 8px; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 6px;';
        itemDiv.innerHTML = `
            <span style="font-weight: 700; font-size: 18px; min-width: 30px;">${item.num}.</span>
            <span style="font-weight: 700; font-size: 20px; min-width: 30px; text-align: center; background: rgba(255,255,255,0.3); padding: 4px 8px; border-radius: 4px;">${item.letter}</span>
            <span style="flex: 1; font-weight: 600; font-size: 13px;">${item.fullHeading}</span>
        `;
        detailsList.appendChild(itemDiv);
    });
    
    mnemonicContent.appendChild(detailsList);
    mnemonicBox.appendChild(mnemonicContent);
    
    const tipBox = document.createElement('div');
    tipBox.style.cssText = 'background: rgba(255,255,255,0.2); border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.6;';
    tipBox.innerHTML = `
        <strong>💡 Gợi ý:</strong> Nhớ chuỗi chữ cái <strong>${letterString}</strong> để nhớ thứ tự các tiêu đề. 
        ${mnemonicSentence ? `Câu mẹo: "${mnemonicSentence}"` : 'Mỗi chữ cái tương ứng với từ khóa chính của tiêu đề!'}
    `;
    mnemonicBox.appendChild(tipBox);
    
    return mnemonicBox;
}

function loadPart5() {
    const data = getPartData(5);
    if (!data) {
        console.error('No data found for Part 5');
        return;
    }
    const titleEl = document.getElementById('passage-title5');
    const paragraphsEl = document.getElementById('paragraphs5');

    titleEl.textContent = '';
    paragraphsEl.innerHTML = '';

    if (allExamsMode && data.allExams) {
        // Load all exams
        data.allExams.forEach((examData) => {
            const examSection = document.createElement('div');
            examSection.className = 'exam-section';
            examSection.style.cssText = 'margin-bottom: 40px; padding: 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: #f9fafb;';
            
            const examTitle = document.createElement('h3');
            examTitle.style.cssText = 'margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; font-size: 20px; font-weight: 700;';
            examTitle.textContent = `Đề ${examData.examNumber} - ${examData.passageTitle || ''}`;
            examSection.appendChild(examTitle);
            
            // Thêm mẹo học thuộc cho tất cả các đề Part 5
            const mnemonicBox = createMnemonicBoxForExam(examData);
            if (mnemonicBox) {
                examSection.appendChild(mnemonicBox);
            }
            
            const examParagraphs = document.createElement('div');
            examParagraphs.className = 'paragraphs-container';
            
            if (!examData.paragraphs || examData.paragraphs.length === 0) {
                examParagraphs.innerHTML = '<p>No paragraphs available.</p>';
                examSection.appendChild(examParagraphs);
                paragraphsEl.appendChild(examSection);
                return;
            }
            
            // Display paragraphs with combobox
            examData.paragraphs.forEach(para => {
                const paraEl = document.createElement('div');
                paraEl.className = 'paragraph-item';
                
                const paraNumber = document.createElement('div');
                paraNumber.className = 'paragraph-number';
                paraNumber.textContent = `${para.number}.`;
                
                const paraText = document.createElement('div');
                paraText.className = 'paragraph-text';
                paraText.textContent = para.text;
                
                const select = document.createElement('select');
                select.className = 'paragraph-select';
                select.dataset.number = para.number;
                select.dataset.examNumber = examData.examNumber;
                select.dataset.answer = para.answer;
                
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = '-- Select heading --';
                select.appendChild(defaultOption);

                // Shuffle headings for each paragraph
                const shuffledHeadings = [...examData.headings].sort(() => Math.random() - 0.5);
                shuffledHeadings.forEach(heading => {
                    const option = document.createElement('option');
                    option.value = heading;
                    option.textContent = heading;
                    select.appendChild(option);
                });

                select.addEventListener('change', function() {
                    const answerKey = `part5_exam${examData.examNumber}`;
                    if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
                    userAnswers[answerKey][para.number] = this.value;
                });

                paraEl.appendChild(paraNumber);
                paraEl.appendChild(paraText);
                paraEl.appendChild(select);
                examParagraphs.appendChild(paraEl);
            });
            
            // Load saved answers
            const answerKey = `part5_exam${examData.examNumber}`;
            if (userAnswers[answerKey]) {
                Object.keys(userAnswers[answerKey]).forEach(number => {
                    const select = examParagraphs.querySelector(`select[data-exam-number="${examData.examNumber}"][data-number="${number}"]`);
                    if (select && userAnswers[answerKey][number]) {
                        select.value = userAnswers[answerKey][number];
                    }
                });
            }
            
            examSection.appendChild(examParagraphs);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            checkBtn.addEventListener('click', function() {
                const answerKey = `part5_exam${examData.examNumber}`;
                let results = [];
                
                examData.paragraphs.forEach(para => {
                    const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][para.number];
                    const isCorrect = userAnswer === para.answer;
                    results.push({
                        part: 5,
                        examNumber: examData.examNumber,
                        question: `Paragraph ${para.number}`,
                        userAnswer: userAnswer || 'No answer',
                        correctAnswer: para.answer,
                        isCorrect
                    });
                });
                
                showCheckResults(5, examData, examData.examNumber, results);
            });
            
            checkContainerDiv.appendChild(checkBtn);
            examSection.appendChild(checkContainerDiv);
            
            paragraphsEl.appendChild(examSection);
        });
        return;
    }
    
    // Single exam mode
    titleEl.textContent = data.passageTitle || '';
    
    // Thêm mẹo học thuộc cho tất cả các đề Part 5
    const mnemonicBox = createMnemonicBoxForExam(data);
    if (mnemonicBox) {
        paragraphsEl.appendChild(mnemonicBox);
    }
    
    if (!data.paragraphs || data.paragraphs.length === 0) {
        paragraphsEl.innerHTML = '<p>No paragraphs available.</p>';
        return;
    }

    // Display paragraphs with combobox
    data.paragraphs.forEach(para => {
        const paraEl = document.createElement('div');
        paraEl.className = 'paragraph-item';
        
        const paraNumber = document.createElement('div');
        paraNumber.className = 'paragraph-number';
        paraNumber.textContent = `${para.number}.`;
        
        const paraText = document.createElement('div');
        paraText.className = 'paragraph-text';
        paraText.textContent = para.text;
        
        const select = document.createElement('select');
        select.className = 'paragraph-select';
        select.dataset.number = para.number;
        select.dataset.answer = para.answer;
        
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Select heading --';
        select.appendChild(defaultOption);

        // Shuffle headings for each paragraph to increase challenge
        const shuffledHeadings = [...data.headings].sort(() => Math.random() - 0.5);
        shuffledHeadings.forEach(heading => {
            const option = document.createElement('option');
            option.value = heading;
            option.textContent = heading;
            select.appendChild(option);
        });

        select.addEventListener('change', function() {
            const answerKey = `part5_exam${currentExam}`;
            if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
            userAnswers[answerKey][para.number] = this.value;
        });

        paraEl.appendChild(paraNumber);
        paraEl.appendChild(paraText);
        paraEl.appendChild(select);
        paragraphsEl.appendChild(paraEl);
    });

    // Load saved answers
    const answerKey = `part5_exam${currentExam}`;
    if (userAnswers[answerKey]) {
        Object.keys(userAnswers[answerKey]).forEach(number => {
            const select = document.querySelector(`#paragraphs5 select[data-number="${number}"]`);
            if (select && userAnswers[answerKey][number]) {
                select.value = userAnswers[answerKey][number];
            }
        });
    }
    
    // Thêm nút check cho Part 5 (single exam mode)
    createCheckButton(5, data, currentExam, 'check-container5');
}

function nextPart() {
    if (allExamsMode) {
        if (shuffleMode && practiceMode === 'by-exam') {
            // Trong chế độ trộn và giải theo đề, chuyển sang đề tiếp theo
            if (currentExamIndex < shuffledExamsOrder.length - 1) {
                currentExamIndex++;
                currentExam = shuffledExamsOrder[currentExamIndex];
                currentItemIndex = 0;
                loadPart(currentPart);
            } else if (currentPart < totalParts) {
                // Hết đề, chuyển sang part tiếp theo (giữ thứ tự 1-5)
                currentPart++;
                currentPartIndex = currentPart - 1;
                currentExamIndex = 0;
                currentExam = shuffledExamsOrder[0];
                currentItemIndex = 0;
                loadPart(currentPart);
            }
        } else {
            const totalItems = getAllExamItemsCount(currentPart);
            if (currentItemIndex < totalItems - 1) {
                currentItemIndex++;
                loadPartContent(currentPart);
            } else if (currentPart < totalParts) {
                // Hết items, chuyển sang part tiếp theo
                currentPart++;
                currentPartIndex = currentPart - 1;
                currentItemIndex = 0;
                loadPart(currentPart);
            }
        }
    } else {
        // Single exam mode - luôn giữ thứ tự part 1-5
        if (currentPart < totalParts) {
            currentPart++;
            currentPartIndex = currentPart - 1;
            loadPart(currentPart);
        }
    }
}

function prevPart() {
    if (allExamsMode) {
        if (shuffleMode && practiceMode === 'by-exam') {
            // Trong chế độ trộn và giải theo đề, quay lại đề trước
            if (currentExamIndex > 0) {
                currentExamIndex--;
                currentExam = shuffledExamsOrder[currentExamIndex];
                currentItemIndex = 0;
                loadPart(currentPart);
            } else if (currentPart > 1) {
                // Về đề đầu tiên của part trước (giữ thứ tự 1-5)
                currentPart--;
                currentPartIndex = currentPart - 1;
                currentExamIndex = shuffledExamsOrder.length - 1;
                currentExam = shuffledExamsOrder[currentExamIndex];
                currentItemIndex = 0;
                loadPart(currentPart);
            }
        } else {
            if (currentItemIndex > 0) {
                currentItemIndex--;
                loadPartContent(currentPart);
            } else if (currentPart > 1) {
                // Về item cuối của part trước
                currentPart--;
                currentPartIndex = currentPart - 1;
                const totalItems = getAllExamItemsCount(currentPart);
                currentItemIndex = Math.max(0, totalItems - 1);
                loadPart(currentPart);
            }
        }
    } else {
        // Single exam mode - luôn giữ thứ tự part 1-5
        if (currentPart > 1) {
            currentPart--;
            currentPartIndex = currentPart - 1;
            loadPart(currentPart);
        }
    }
}

// Helper function to reload part content without changing part number
function loadPartContent(partNumber) {
    // Don't change currentPart, just reload content
    updateProgress();
    updateSectionInfo(partNumber);

    // Load content based on part
    switch(partNumber) {
        case 1:
            loadPart1();
            break;
        case 2:
            loadPart2();
            break;
        case 3:
            loadPart3();
            break;
        case 4:
            loadPart4();
            break;
        case 5:
            loadPart5();
            break;
    }

    // Update buttons
    updateButtons();
}

function submitAnswers() {
    if (allExamsMode) {
        // Chấm điểm cho tất cả các đề
        submitAllExamsAnswers();
    } else {
        // Chấm điểm cho một đề cụ thể
        submitSingleExamAnswers(currentExam);
    }
}

function submitSingleExamAnswers(examNumber) {
    let score = 0;
    let total = 0;
    let results = [];
    const examData = exams[examNumber - 1];

    // Check Part 1
    if (examData.part1) {
        examData.part1.sentences.forEach((sentence, index) => {
            total++;
            const answerKey = `part1_exam${examNumber}`;
            const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
            const isCorrect = userAnswer === sentence.answer;
            if (isCorrect) score++;
            results.push({
                part: 1,
                examNumber: examNumber,
                question: `${sentence.text} [${sentence.answer}] ${sentence.after}`,
                userAnswer: userAnswer || 'No answer',
                correctAnswer: sentence.answer,
                isCorrect
            });
        });
    }

    // Check Part 2
    if (examData.part2) {
        examData.part2.sentences.forEach((sentence, originalIndex) => {
            total++;
            const answerKey = `part2_exam${examNumber}`;
            const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
            const correctOrder = originalIndex + 1;
            const isCorrect = userOrder === correctOrder;
            if (isCorrect) score++;
            results.push({
                part: 2,
                examNumber: examNumber,
                question: `Sentence ${originalIndex + 1}`,
                userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                correctAnswer: `Order ${correctOrder}`,
                isCorrect
            });
        });
    }

    // Check Part 3
    if (examData.part3) {
        examData.part3.sentences.forEach((sentence, originalIndex) => {
            total++;
            const answerKey = `part3_exam${examNumber}`;
            const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
            const correctOrder = originalIndex + 1;
            const isCorrect = userOrder === correctOrder;
            if (isCorrect) score++;
            results.push({
                part: 3,
                examNumber: examNumber,
                question: `Sentence ${originalIndex + 1}`,
                userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                correctAnswer: `Order ${correctOrder}`,
                isCorrect
            });
        });
    }

    // Check Part 4
    if (examData.part4) {
        examData.part4.questions.forEach((q, index) => {
            total++;
            const answerKey = `part4_exam${examNumber}`;
            const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
            const isCorrect = userAnswer === q.answer;
            if (isCorrect) score++;
            results.push({
                part: 4,
                examNumber: examNumber,
                question: q.question,
                userAnswer: userAnswer || 'No answer',
                correctAnswer: q.answer,
                isCorrect
            });
        });
    }

    // Check Part 5
    if (examData.part5) {
        examData.part5.paragraphs.forEach(para => {
            total++;
            const answerKey = `part5_exam${examNumber}`;
            const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][para.number];
            const isCorrect = userAnswer === para.answer;
            if (isCorrect) score++;
            results.push({
                part: 5,
                examNumber: examNumber,
                question: `Paragraph ${para.number}`,
                userAnswer: userAnswer || 'No answer',
                correctAnswer: para.answer,
                isCorrect
            });
        });
    }

    // Calculate part scores for saving
    const partScores = {};
    const partTotals = {};
    results.forEach(result => {
        if (!partScores[result.part]) {
            partScores[result.part] = 0;
            partTotals[result.part] = 0;
        }
        partTotals[result.part]++;
        if (result.isCorrect) {
            partScores[result.part]++;
        }
    });
    
    // Convert to percentage format
    const partScoresData = {};
    Object.keys(partScores).forEach(part => {
        partScoresData[part] = {
            score: partScores[part],
            total: partTotals[part],
            percentage: Math.round((partScores[part] / partTotals[part]) * 100)
        };
    });

    // Save results to localStorage
    saveExamResult(examNumber, score, total, results, partScoresData);
    
    showResults(score, total, results, examNumber);
}

// Hàm lưu kết quả vào localStorage
function saveExamResult(examNumber, score, total, results, partScores = null) {
    try {
        const resultData = {
            examNumber: examNumber,
            score: score,
            total: total,
            percentage: Math.round((score / total) * 100),
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleString('vi-VN'),
            partScores: partScores || {},
            results: results.map(r => ({
                part: r.part,
                question: r.question,
                userAnswer: r.userAnswer,
                correctAnswer: r.correctAnswer,
                isCorrect: r.isCorrect
            }))
        };
        
        // Lấy danh sách kết quả đã lưu
        const savedResults = JSON.parse(localStorage.getItem('aptis_exam_results') || '[]');
        
        // Thêm kết quả mới vào đầu danh sách
        savedResults.unshift(resultData);
        
        // Giới hạn lưu tối đa 100 kết quả
        if (savedResults.length > 100) {
            savedResults.splice(100);
        }
        
        // Lưu lại vào localStorage
        localStorage.setItem('aptis_exam_results', JSON.stringify(savedResults));
        
        console.log('Kết quả đã được lưu:', resultData);
    } catch (error) {
        console.error('Lỗi khi lưu kết quả:', error);
    }
}

// Hàm lấy danh sách kết quả đã lưu
function getSavedResults() {
    try {
        return JSON.parse(localStorage.getItem('aptis_exam_results') || '[]');
    } catch (error) {
        console.error('Lỗi khi đọc kết quả:', error);
        return [];
    }
}

// Hàm xóa tất cả kết quả đã lưu
function clearSavedResults() {
    localStorage.removeItem('aptis_exam_results');
    console.log('Đã xóa tất cả kết quả');
}

function submitAllExamsAnswers() {
    const examScores = [];
    let totalScore = 0;
    let totalQuestions = 0;
    const selectedPart = currentPart; // Lấy part hiện tại đang được chọn

    // Chấm điểm cho từng đề, chỉ tính part được chọn
    exams.forEach((exam, index) => {
        const examNumber = index + 1;
        let examScore = 0;
        let examTotal = 0;
        const examResults = [];

        // Chỉ chấm điểm cho part được chọn
        if (selectedPart === 1 && exam.part1) {
            exam.part1.sentences.forEach((sentence, sentIndex) => {
                examTotal++;
                const answerKey = `part1_exam${examNumber}`;
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][sentIndex];
                const isCorrect = userAnswer === sentence.answer;
                if (isCorrect) examScore++;
                examResults.push({
                    part: 1,
                    examNumber: examNumber,
                    question: `${sentence.text} [${sentence.answer}] ${sentence.after}`,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: sentence.answer,
                    isCorrect
                });
            });
        } else if (selectedPart === 2 && exam.part2) {
            exam.part2.sentences.forEach((sentence, originalIndex) => {
                examTotal++;
                const answerKey = `part2_exam${examNumber}`;
                const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
                const correctOrder = originalIndex + 1;
                const isCorrect = userOrder === correctOrder;
                if (isCorrect) examScore++;
                examResults.push({
                    part: 2,
                    examNumber: examNumber,
                    question: `Sentence ${originalIndex + 1}`,
                    userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                    correctAnswer: `Order ${correctOrder}`,
                    isCorrect
                });
            });
        } else if (selectedPart === 3 && exam.part3) {
            exam.part3.sentences.forEach((sentence, originalIndex) => {
                examTotal++;
                const answerKey = `part3_exam${examNumber}`;
                const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
                const correctOrder = originalIndex + 1;
                const isCorrect = userOrder === correctOrder;
                if (isCorrect) examScore++;
                examResults.push({
                    part: 3,
                    examNumber: examNumber,
                    question: `Sentence ${originalIndex + 1}`,
                    userAnswer: userOrder ? `Order ${userOrder}` : 'No answer',
                    correctAnswer: `Order ${correctOrder}`,
                    isCorrect
                });
            });
        } else if (selectedPart === 4 && exam.part4) {
            exam.part4.questions.forEach((q, qIndex) => {
                examTotal++;
                const answerKey = `part4_exam${examNumber}`;
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][qIndex];
                const isCorrect = userAnswer === q.answer;
                if (isCorrect) examScore++;
                examResults.push({
                    part: 4,
                    examNumber: examNumber,
                    question: q.question,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: q.answer,
                    isCorrect
                });
            });
        } else if (selectedPart === 5 && exam.part5) {
            exam.part5.paragraphs.forEach(para => {
                examTotal++;
                const answerKey = `part5_exam${examNumber}`;
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][para.number];
                const isCorrect = userAnswer === para.answer;
                if (isCorrect) examScore++;
                examResults.push({
                    part: 5,
                    examNumber: examNumber,
                    question: `Paragraph ${para.number}`,
                    userAnswer: userAnswer || 'No answer',
                    correctAnswer: para.answer,
                    isCorrect
                });
            });
        }

        // Chỉ thêm vào danh sách nếu có câu hỏi trong part này
        if (examTotal > 0) {
            totalScore += examScore;
            totalQuestions += examTotal;
            examScores.push({
                examNumber: examNumber,
                score: examScore,
                total: examTotal,
                results: examResults
            });
        }
    });

    showAllExamsResults(examScores, totalScore, totalQuestions, selectedPart);
}

function showResults(score, total, results, examNumber = null) {
    const modal = document.getElementById('result-modal');
    const resultContent = document.getElementById('result-content');
    
    const percentage = Math.round((score / total) * 100);
    
    // Calculate score by part
    const partScores = {};
    const partTotals = {};
    results.forEach(result => {
        if (!partScores[result.part]) {
            partScores[result.part] = 0;
            partTotals[result.part] = 0;
        }
        partTotals[result.part]++;
        if (result.isCorrect) {
            partScores[result.part]++;
        }
    });
    
    // Get grade
    let grade = '';
    let gradeColor = '';
    if (percentage >= 90) {
        grade = 'Excellent!';
        gradeColor = '#48bb78';
    } else if (percentage >= 80) {
        grade = 'Very Good!';
        gradeColor = '#38a169';
    } else if (percentage >= 70) {
        grade = 'Good!';
        gradeColor = '#667eea';
    } else if (percentage >= 60) {
        grade = 'Fair';
        gradeColor = '#f6ad55';
    } else {
        grade = 'Need Improvement';
        gradeColor = '#fc8181';
    }
    
    const examTitle = examNumber ? `<h2 style="margin-bottom: 20px; color: #2d3748;">Đề ${examNumber}</h2>` : '';
    
    const hasNextExam = examNumber && examNumber < exams.length;
    
    resultContent.innerHTML = `
        ${examTitle}
        <div class="score-container">
            <div class="score-main">
                <div class="score-number">${score} / ${total}</div>
                <div class="score-percentage">${percentage}%</div>
                <div class="score-grade" style="color: ${gradeColor}">${grade}</div>
            </div>
            <div class="score-by-part">
                <h3>Score by Part:</h3>
                ${Object.keys(partScores).map(part => {
                    const partScore = partScores[part];
                    const partTotal = partTotals[part];
                    const partPercent = Math.round((partScore / partTotal) * 100);
                    return `
                        <div class="part-score-item">
                            <span class="part-label">Part ${part}:</span>
                            <span class="part-score">${partScore}/${partTotal}</span>
                            <span class="part-percent">(${partPercent}%)</span>
                            <div class="part-progress-bar">
                                <div class="part-progress-fill" style="width: ${partPercent}%"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        <div class="results-detail">
            <h3>Detailed Results:</h3>
            <div class="results-list">
                ${results.map(result => `
                    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="result-header">
                            <span class="result-part">Part ${result.part}</span>
                            <span class="result-status ${result.isCorrect ? 'correct-icon' : 'incorrect-icon'}">
                                ${result.isCorrect ? '✓' : '✗'}
                            </span>
                        </div>
                        <div class="result-question">${result.question}</div>
                        <div class="result-answers">
                            <div class="result-answer">
                                <strong>Your answer:</strong> ${result.userAnswer}
                            </div>
                            ${!result.isCorrect ? `
                                <div class="result-answer correct-answer">
                                    <strong>Correct answer:</strong> ${result.correctAnswer}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add Next Exam button to modal if available
    const restartBtn = document.getElementById('restart-btn');
    // Xóa nút Next Exam cũ nếu có (tránh trùng lặp)
    const existingNextExamBtn = document.getElementById('next-exam-modal-btn');
    if (existingNextExamBtn) {
        existingNextExamBtn.remove();
    }
    
    if (restartBtn && hasNextExam) {
        const nextExamModalBtn = document.createElement('button');
        nextExamModalBtn.id = 'next-exam-modal-btn';
        nextExamModalBtn.className = 'btn btn-info';
        nextExamModalBtn.textContent = 'Đề tiếp theo →';
        nextExamModalBtn.style.cssText = 'margin-left: 10px; background: #4299e1; color: white; padding: 12px 24px; border-radius: 6px; font-weight: 600;';
        nextExamModalBtn.addEventListener('click', function() {
            const nextExam = examNumber + 1;
            // Reset answers for new exam
            userAnswers = {};
            // Close modal
            modal.classList.remove('active');
            // Load next exam
            loadExam(nextExam);
            // Reset to first part (luôn là Part 1)
            currentPart = 1;
            currentPartIndex = 0;
            loadPart(currentPart);
        });
        // Insert before restart button
        restartBtn.parentNode.insertBefore(nextExamModalBtn, restartBtn);
    }
    
    modal.classList.add('active');
}

function showAllExamsResults(examScores, totalScore, totalQuestions, selectedPart = null) {
    const modal = document.getElementById('result-modal');
    const resultContent = document.getElementById('result-content');
    
    const totalPercentage = Math.round((totalScore / totalQuestions) * 100);
    
    // Get overall grade
    let overallGrade = '';
    let overallGradeColor = '';
    if (totalPercentage >= 90) {
        overallGrade = 'Excellent!';
        overallGradeColor = '#48bb78';
    } else if (totalPercentage >= 80) {
        overallGrade = 'Very Good!';
        overallGradeColor = '#38a169';
    } else if (totalPercentage >= 70) {
        overallGrade = 'Good!';
        overallGradeColor = '#667eea';
    } else if (totalPercentage >= 60) {
        overallGrade = 'Fair';
        overallGradeColor = '#f6ad55';
    } else {
        overallGrade = 'Need Improvement';
        overallGradeColor = '#fc8181';
    }
    
    const partTitle = selectedPart ? ` - Part ${selectedPart}` : '';
    
    resultContent.innerHTML = `
        <div class="score-container">
            <div class="score-main">
                <h2 style="margin-bottom: 15px; color: #2d3748;">Tổng kết tất cả các đề${partTitle}</h2>
                <div class="score-number">${totalScore} / ${totalQuestions}</div>
                <div class="score-percentage">${totalPercentage}%</div>
                <div class="score-grade" style="color: ${overallGradeColor}">${overallGrade}</div>
            </div>
        </div>
        <div class="exam-scores-container" style="margin-top: 30px;">
            <h3 style="margin-bottom: 20px; color: #2d3748;">Điểm từng đề:</h3>
            <div class="exam-scores-list">
                ${examScores.map(exam => {
                    const examPercent = Math.round((exam.score / exam.total) * 100);
                    let examGradeColor = '#fc8181';
                    if (examPercent >= 90) examGradeColor = '#48bb78';
                    else if (examPercent >= 80) examGradeColor = '#38a169';
                    else if (examPercent >= 70) examGradeColor = '#667eea';
                    else if (examPercent >= 60) examGradeColor = '#f6ad55';
                    
                    return `
                        <div class="exam-score-item" style="margin-bottom: 20px; padding: 15px; border: 2px solid #e2e8f0; border-radius: 8px; background: #f9fafb;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h4 style="margin: 0; color: #2d3748;">Đề ${exam.examNumber}</h4>
                                <div style="font-size: 18px; font-weight: 700; color: ${examGradeColor};">
                                    ${exam.score} / ${exam.total} (${examPercent}%)
                                </div>
                            </div>
                            <div class="exam-progress-bar" style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                                <div style="width: ${examPercent}%; height: 100%; background: ${examGradeColor}; transition: width 0.3s;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        <div class="results-detail" style="margin-top: 30px;">
            <h3>Chi tiết từng đề:</h3>
            <div class="exam-results-accordion">
                ${examScores.map(exam => {
                    const examPercent = Math.round((exam.score / exam.total) * 100);
                    const examId = `exam-${exam.examNumber}`;
                    return `
                        <div class="exam-result-section" style="margin-bottom: 20px;">
                            <button class="exam-result-toggle" onclick="toggleExamResult('${examId}')" style="width: 100%; padding: 15px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; text-align: left; display: flex; justify-content: space-between; align-items: center;">
                                <span>Đề ${exam.examNumber} - ${exam.score}/${exam.total} (${examPercent}%)</span>
                                <span id="${examId}-arrow">▼</span>
                            </button>
                            <div id="${examId}" class="exam-result-content" style="display: none; padding: 15px; background: #f9fafb; border-radius: 8px; margin-top: 10px;">
                                <div class="results-list">
                                    ${exam.results.map(result => `
                                        <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}" style="margin-bottom: 10px;">
                                            <div class="result-header">
                                                <span class="result-part">Part ${result.part}</span>
                                                <span class="result-status ${result.isCorrect ? 'correct-icon' : 'incorrect-icon'}">
                                                    ${result.isCorrect ? '✓' : '✗'}
                                                </span>
                                            </div>
                                            <div class="result-question">${result.question}</div>
                                            <div class="result-answers">
                                                <div class="result-answer">
                                                    <strong>Your answer:</strong> ${result.userAnswer}
                                                </div>
                                                ${!result.isCorrect ? `
                                                    <div class="result-answer correct-answer">
                                                        <strong>Correct answer:</strong> ${result.correctAnswer}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function toggleExamResult(examId) {
    const content = document.getElementById(examId);
    const arrow = document.getElementById(`${examId}-arrow`);
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.textContent = '▲';
    } else {
        content.style.display = 'none';
        arrow.textContent = '▼';
    }
}

function restart() {
    currentPart = 1;
    userAnswers = {};
    document.getElementById('result-modal').classList.remove('active');
    loadPart(currentPart);
}

// Listening functions
let listeningPracticeMode = false;
let listeningUserAnswers = {};
let listeningChecked = false; // Track if answers have been checked
let listeningQuestionChecked = {}; // Track questions checked individually
const perQuestionCheckExams = new Set(['examPractice14', 'examPractice15', 'examPractice16']);

function shouldShowPerQuestionCheck(examKey) {
    return perQuestionCheckExams.has(examKey);
}

function isQuestionChecked(examKey, questionNumber) {
    if (listeningChecked) return true;
    if (!listeningQuestionChecked[examKey]) return false;
    return listeningQuestionChecked[examKey][questionNumber] === true;
}

function loadListening() {
    const examSelector = document.getElementById('listening-exam-selector');
    const practiceModeToggle = document.getElementById('listening-practice-mode');
    const contentDiv = document.getElementById('listening-content');
    
    if (!examSelector || !contentDiv) return;
    
    // Setup exam selector
    examSelector.addEventListener('change', function() {
        listeningChecked = false; // Reset when changing exam
        loadListeningExam(this.value);
    });
    
    // Setup practice mode toggle
    if (practiceModeToggle) {
        practiceModeToggle.addEventListener('change', function() {
            listeningPracticeMode = this.checked;
            listeningChecked = false; // Reset checked state when toggling
            loadListeningExam(examSelector.value);
        });
    }
    
    // Load initial exam
    loadListeningExam(examSelector.value);
}

function loadListeningExam(examKey) {
    const contentDiv = document.getElementById('listening-content');
    if (!contentDiv || !listeningData[examKey]) return;
    
    const exam = listeningData[examKey];
    contentDiv.innerHTML = '';
    
    // Initialize userAnswers for this exam if not exists
    if (!listeningUserAnswers[examKey]) {
        listeningUserAnswers[examKey] = {};
    }
    if (!listeningQuestionChecked[examKey]) {
        listeningQuestionChecked[examKey] = {};
    }
    
    // Don't reset checked state when reloading (only reset when explicitly requested)
    
    // Create title
    const titleDiv = document.createElement('div');
    titleDiv.style.cssText = 'margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white;';
    titleDiv.innerHTML = `
        <h2 style="margin: 0; font-size: 24px;">${exam.title}</h2>
        <div style="margin-top: 10px; font-size: 16px; opacity: 0.9;">
            ${listeningPracticeMode ? '📝 Chế độ luyện tập - Chọn đáp án và check kết quả' : '🧠 Chế độ xem mẹo - Học thuộc nhanh'}
        </div>
    `;
    contentDiv.appendChild(titleDiv);
    
    // Create questions container
    const questionsContainer = document.createElement('div');
    questionsContainer.style.cssText = 'display: flex; flex-direction: column; gap: 20px;';
    
    exam.questions.forEach(q => {
        const questionCard = createListeningQuestionCard(q, examKey);
        questionsContainer.appendChild(questionCard);
    });
    
    contentDiv.appendChild(questionsContainer);
    
    // Add check button and reset button if in practice mode
    if (listeningPracticeMode) {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'margin-top: 30px; display: flex; gap: 15px;';
        
        const checkBtn = document.createElement('button');
        checkBtn.className = 'btn btn-check';
        checkBtn.textContent = listeningChecked ? 'Xem lại kết quả' : 'Check đáp án';
        checkBtn.style.cssText = 'flex: 1; padding: 15px; font-size: 18px; font-weight: 700;';
        checkBtn.disabled = listeningChecked;
        
        checkBtn.addEventListener('click', function() {
            checkListeningAnswers(examKey, exam);
        });
        
        const resetBtn = document.createElement('button');
        resetBtn.className = 'btn btn-secondary';
        resetBtn.textContent = 'Làm lại';
        resetBtn.style.cssText = 'flex: 1; padding: 15px; font-size: 18px; font-weight: 700;';
        resetBtn.style.background = '#718096';
        resetBtn.style.color = 'white';
        
        resetBtn.addEventListener('click', function() {
            listeningUserAnswers[examKey] = {};
            listeningChecked = false;
            listeningQuestionChecked[examKey] = {};
            loadListeningExam(examKey);
        });
        
        buttonContainer.appendChild(checkBtn);
        if (listeningChecked) {
            buttonContainer.appendChild(resetBtn);
        }
        contentDiv.appendChild(buttonContainer);
    }
}

function createListeningQuestionCard(question, examKey) {
    const card = document.createElement('div');
    card.style.cssText = 'background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
    card.dataset.questionNumber = question.number;
    const questionChecked = isQuestionChecked(examKey, question.number);
    
    // Question number and header
    const header = document.createElement('div');
    header.style.cssText = 'display: flex; align-items: center; gap: 15px; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 2px solid #e2e8f0;';
    
    const numberBadge = document.createElement('div');
    numberBadge.style.cssText = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px; flex-shrink: 0;';
    numberBadge.textContent = question.number;
    header.appendChild(numberBadge);
    
    const questionInfo = document.createElement('div');
    questionInfo.style.cssText = 'flex: 1;';
    
    if (question.topic) {
        const topicDiv = document.createElement('div');
        topicDiv.style.cssText = 'font-size: 18px; font-weight: 700; color: #2d3748; margin-bottom: 5px;';
        topicDiv.textContent = `Topic: ${question.topic}`;
        questionInfo.appendChild(topicDiv);
    }
    
    const questionText = document.createElement('div');
    questionText.style.cssText = 'font-size: 16px; color: #4a5568;';
    questionText.textContent = question.question;
    questionInfo.appendChild(questionText);
    
    header.appendChild(questionInfo);
    card.appendChild(header);
    
    // Multi-choice sub-questions type (A, B, C, D selection for each sub-question)
    if (question.multiChoiceSubType && question.subQuestions) {
        const multiChoiceDiv = document.createElement('div');
        multiChoiceDiv.style.cssText = 'margin-bottom: 15px;';
        
        // Create sub-questions
        question.subQuestions.forEach((subQ, idx) => {
            const subQDiv = document.createElement('div');
            subQDiv.style.cssText = 'margin-bottom: 15px; padding: 15px; background: #f7fafc; border-radius: 8px; border-left: 4px solid #667eea;';
            
            const subQText = document.createElement('div');
            subQText.style.cssText = 'font-weight: 600; color: #2d3748; margin-bottom: 10px;';
            subQText.textContent = `${idx + 1}. ${subQ.text}`;
            subQDiv.appendChild(subQText);
            
            // Always show combobox
            const select = document.createElement('select');
            select.style.cssText = 'width: 100%; padding: 10px; border: 2px solid #d1d5db; border-radius: 6px; font-size: 16px; font-weight: 600; background: white; cursor: pointer;';
            select.dataset.questionNumber = question.number;
            select.dataset.subQuestionIndex = idx;
            
            // Disable if checked or not in practice mode
            if (!listeningPracticeMode || questionChecked) {
                select.disabled = true;
            }
            
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Chọn --';
            select.appendChild(defaultOption);
            
            // Add options with full text (from question.options if available)
            // Shuffle options to increase difficulty
            if (question.options) {
                // Create a shuffled copy of options
                const shuffledOptions = [...question.options];
                // Fisher-Yates shuffle algorithm
                for (let i = shuffledOptions.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
                }
                
                shuffledOptions.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt.letter;
                    option.textContent = `${opt.text}${opt.vietnamese ? ` (${opt.vietnamese})` : ''}`;
                    select.appendChild(option);
                });
            } else {
                // Fallback: just A, B, C, D - also shuffle
                const letters = ['A', 'B', 'C', 'D'];
                for (let i = letters.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [letters[i], letters[j]] = [letters[j], letters[i]];
                }
                letters.forEach(letter => {
                    const option = document.createElement('option');
                    option.value = letter;
                    option.textContent = letter;
                    select.appendChild(option);
                });
            }
            
            // Load saved answer or show correct answer
            const answerKey = `${question.number}_${idx}`;
            const savedAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][answerKey];
            
            if (listeningPracticeMode) {
                // Practice mode: load saved answer
                if (savedAnswer) {
                    select.value = savedAnswer;
                }
                
                select.addEventListener('change', function() {
                    if (!questionChecked) {
                        if (!listeningUserAnswers[examKey]) listeningUserAnswers[examKey] = {};
                        listeningUserAnswers[examKey][answerKey] = this.value;
                    }
                });
            } else {
                // View mode: show correct answer
                select.value = subQ.answer;
            }
            
            subQDiv.appendChild(select);
            
            // Show result after check (practice mode) or always show (view mode)
            if ((listeningPracticeMode && questionChecked) || !listeningPracticeMode) {
                const isCorrect = listeningPracticeMode ? (savedAnswer === subQ.answer) : true;
                const resultDiv = document.createElement('div');
                resultDiv.style.cssText = `margin-top: 10px; padding: 10px; border-radius: 6px; background: ${isCorrect ? '#f0fff4' : '#fff5f5'}; border-left: 3px solid ${isCorrect ? '#48bb78' : '#fc8181'};`;
                resultDiv.innerHTML = `
                    <div style="font-size: 14px; color: ${isCorrect ? '#2d5016' : '#742a2a'}; line-height: 1.6;">
                        <strong>${isCorrect ? '✓' : '✗'}</strong> ${subQ.explanation}
                    </div>
                `;
                subQDiv.appendChild(resultDiv);
            }
            
            multiChoiceDiv.appendChild(subQDiv);
        });
        
        card.appendChild(multiChoiceDiv);
    }
    
    // Matching type questions (B, W, M selection)
    if (question.matchingType && question.subQuestions) {
        const matchingDiv = document.createElement('div');
        matchingDiv.style.cssText = 'margin-bottom: 15px;';
        
        // Show persons info
        if (question.persons) {
            const personsInfo = document.createElement('div');
            personsInfo.style.cssText = 'background: #f7fafc; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #667eea;';
            personsInfo.innerHTML = `
                <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">Chọn người nói cho mỗi câu:</div>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    ${question.persons.map(p => `
                        <div style="font-weight: 700; color: #667eea; font-size: 16px;">${p.letter} = ${p.label}</div>
                    `).join('')}
                </div>
            `;
            matchingDiv.appendChild(personsInfo);
        }
        
        // Create sub-questions
        question.subQuestions.forEach((subQ, idx) => {
            const subQDiv = document.createElement('div');
            subQDiv.style.cssText = 'margin-bottom: 15px; padding: 15px; background: #f7fafc; border-radius: 8px; border-left: 4px solid #667eea;';
            
            const subQText = document.createElement('div');
            subQText.style.cssText = 'font-weight: 600; color: #2d3748; margin-bottom: 10px;';
            subQText.textContent = `${idx + 1}. ${subQ.text}`;
            subQDiv.appendChild(subQText);
            
            if (listeningPracticeMode) {
                const select = document.createElement('select');
                select.style.cssText = 'width: 100%; padding: 10px; border: 2px solid #d1d5db; border-radius: 6px; font-size: 16px; font-weight: 600; background: white; cursor: pointer;';
                select.dataset.questionNumber = question.number;
                select.dataset.subQuestionIndex = idx;
                select.disabled = questionChecked;
                
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = '-- Chọn B, W, hoặc M --';
                select.appendChild(defaultOption);
                
                question.persons.forEach(person => {
                    const option = document.createElement('option');
                    option.value = person.letter;
                    option.textContent = `${person.letter} - ${person.label}`;
                    select.appendChild(option);
                });
                
                // Load saved answer
                const answerKey = `${question.number}_${idx}`;
                const savedAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][answerKey];
                if (savedAnswer) {
                    select.value = savedAnswer;
                }
                
                select.addEventListener('change', function() {
                    if (!listeningUserAnswers[examKey]) listeningUserAnswers[examKey] = {};
                    listeningUserAnswers[examKey][answerKey] = this.value;
                });
                
                subQDiv.appendChild(select);
                
                // Show result after check
                if (questionChecked) {
                    const isCorrect = savedAnswer === subQ.answer;
                    const resultDiv = document.createElement('div');
                    resultDiv.style.cssText = `margin-top: 10px; padding: 10px; border-radius: 6px; background: ${isCorrect ? '#f0fff4' : '#fff5f5'}; border-left: 3px solid ${isCorrect ? '#48bb78' : '#fc8181'};`;
                    resultDiv.innerHTML = `
                        <div style="font-size: 14px; color: ${isCorrect ? '#2d5016' : '#742a2a'}; line-height: 1.6;">
                            <strong>${isCorrect ? '✓' : '✗'}</strong> ${subQ.explanation}
                        </div>
                    `;
                    subQDiv.appendChild(resultDiv);
                }
            } else {
                // View mode: show answer
                const answerDiv = document.createElement('div');
                answerDiv.style.cssText = 'margin-top: 10px; padding: 10px; background: #f0fff4; border-radius: 6px; border-left: 3px solid #48bb78;';
                answerDiv.innerHTML = `
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 5px;">Đáp án: <span style="color: #48bb78; font-size: 18px;">${subQ.answer}</span></div>
                    <div style="font-size: 14px; color: #2d5016; line-height: 1.6; margin-top: 5px;">${subQ.explanation}</div>
                `;
                subQDiv.appendChild(answerDiv);
            }
            
            matchingDiv.appendChild(subQDiv);
        });
        
        card.appendChild(matchingDiv);
    }
    
    // Options (for multiple choice) - All questions are now multiple choice
    // Skip if already handled by multiChoiceSubType or matchingType
    if (question.multiChoiceSubType || question.matchingType) {
        // Already handled above, skip regular options rendering
    } else if (!question.options) {
        // If no options and not matching type and not multi-choice sub type, skip this question (should not happen)
        console.warn(`Question ${question.number} has no options`);
        return card;
    }
    
    if (question.options && !question.multiChoiceSubType && !question.matchingType) {
        const optionsDiv = document.createElement('div');
        optionsDiv.style.cssText = 'margin-bottom: 15px;';
        
        question.options.forEach(opt => {
            const optDiv = document.createElement('div');
            
            if (listeningPracticeMode) {
                // Practice mode: clickable options (disabled after check)
                const savedAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][question.number];
                const isSelected = savedAnswer === opt.letter;
                
                // Check if this is a True/False question (has isCorrect property)
                const isTrueFalseQuestion = question.options && question.options.some(o => o.isCorrect !== undefined);
                let isCorrect = false;
                
                if (isTrueFalseQuestion) {
                    // For True/False questions, check isCorrect property
                    isCorrect = opt.isCorrect === true;
                } else {
                    // For regular multiple choice, check against answer
                    isCorrect = opt.letter === question.answer;
                }
                
                const isUserCorrect = isSelected && isCorrect;
                
                if (questionChecked) {
                    // After check: show result
                    if (isCorrect) {
                        optDiv.style.cssText = 'padding: 12px; margin-bottom: 8px; border-radius: 6px; background: #f0fff4; border: 2px solid #48bb78;';
                    } else if (isSelected) {
                        optDiv.style.cssText = 'padding: 12px; margin-bottom: 8px; border-radius: 6px; background: #fff5f5; border: 2px solid #fc8181;';
                    } else {
                        optDiv.style.cssText = 'padding: 12px; margin-bottom: 8px; border-radius: 6px; background: #f7fafc; border: 2px solid #e2e8f0; opacity: 0.6;';
                    }
                } else {
                    // Before check: clickable
                    optDiv.style.cssText = 'padding: 12px; margin-bottom: 8px; border-radius: 6px; background: #f7fafc; border: 2px solid #d1d5db; cursor: pointer; transition: all 0.2s;';
                    optDiv.classList.add('listening-option');
                    optDiv.dataset.letter = opt.letter;
                    optDiv.dataset.questionNumber = question.number;
                    
                    if (isSelected) {
                        optDiv.style.borderColor = '#667eea';
                        optDiv.style.background = '#edf2f7';
                    }
                    
                    optDiv.addEventListener('click', function() {
                        // Remove selection from other options
                        optionsDiv.querySelectorAll('.listening-option').forEach(o => {
                            o.style.borderColor = '#d1d5db';
                            o.style.background = '#f7fafc';
                        });
                        
                        // Select this option
                        this.style.borderColor = '#667eea';
                        this.style.background = '#edf2f7';
                        
                        // Save answer
                        if (!listeningUserAnswers[examKey]) listeningUserAnswers[examKey] = {};
                        listeningUserAnswers[examKey][question.number] = opt.letter;
                    });
                }
            } else {
                // View mode: show correct answer
                optDiv.style.cssText = 'padding: 12px; margin-bottom: 8px; border-radius: 6px; background: #f7fafc; border: 2px solid ' + (opt.letter === question.answer ? '#48bb78' : '#e2e8f0') + ';';
                
                if (opt.isCorrect !== undefined) {
                    optDiv.style.borderColor = opt.isCorrect ? '#48bb78' : '#fc8181';
                    optDiv.style.background = opt.isCorrect ? '#f0fff4' : '#fff5f5';
                }
            }
            
            const savedAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][question.number];
            const isSelected = savedAnswer === opt.letter;
            
            // Check if this is a True/False question
            const isTrueFalseQuestion = question.options && question.options.some(o => o.isCorrect !== undefined);
            let isCorrect = false;
            
            if (isTrueFalseQuestion) {
                isCorrect = opt.isCorrect === true;
            } else {
                isCorrect = opt.letter === question.answer;
            }
            
            const showCheckmark = listeningPracticeMode && questionChecked && (isCorrect || (isSelected && !isCorrect));
            
            const showExplanation = listeningPracticeMode && questionChecked && opt.explanation;
            
            optDiv.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-weight: 700; color: ${(listeningPracticeMode && questionChecked && isCorrect) ? '#48bb78' : (!listeningPracticeMode && (opt.letter === question.answer || opt.isCorrect)) ? '#48bb78' : '#4a5568'}; min-width: 30px;">${opt.letter}.</span>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: #2d3748;">${opt.text}</div>
                        ${opt.vietnamese ? `<div style="font-size: 14px; color: #718096; margin-top: 4px;">${opt.vietnamese}</div>` : ''}
                        ${showExplanation ? `
                            <div style="margin-top: 8px; padding: 8px; background: ${isCorrect ? '#f0fff4' : '#fff5f5'}; border-radius: 4px; border-left: 3px solid ${isCorrect ? '#48bb78' : '#fc8181'};">
                                <div style="font-size: 13px; color: ${isCorrect ? '#2d5016' : '#742a2a'}; line-height: 1.5;">
                                    <strong>${isCorrect ? '✓' : '✗'}</strong> ${opt.explanation}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    ${showCheckmark ? `<span style="color: ${isCorrect ? '#48bb78' : '#fc8181'}; font-weight: 700; font-size: 20px;">${isCorrect ? '✓' : '✗'}</span>` : ''}
                    ${(!listeningPracticeMode && opt.isCorrect !== undefined) ? `<span style="color: ${opt.isCorrect ? '#48bb78' : '#fc8181'}; font-weight: 700;">${opt.isCorrect ? '✓' : '✗'}</span>` : ''}
                </div>
            `;
            optionsDiv.appendChild(optDiv);
        });
        
        card.appendChild(optionsDiv);
    }
    
    // Statements (for topic questions)
    if (question.statements) {
        const statementsDiv = document.createElement('div');
        statementsDiv.style.cssText = 'margin-bottom: 15px;';
        
        question.statements.forEach((stmt, idx) => {
            const stmtDiv = document.createElement('div');
            stmtDiv.style.cssText = 'padding: 12px; margin-bottom: 8px; border-radius: 6px; background: #f7fafc; border-left: 4px solid #667eea;';
            
            if (typeof stmt === 'string') {
                stmtDiv.textContent = stmt;
            } else {
                stmtDiv.innerHTML = `
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 5px;">${stmt.text}</div>
                    ${stmt.vietnamese ? `<div style="font-size: 14px; color: #718096;">${stmt.vietnamese}</div>` : ''}
                `;
            }
            
            statementsDiv.appendChild(stmtDiv);
        });
        
        card.appendChild(statementsDiv);
    }
    
    // Mnemonic box (for special questions like Building community) - only in view mode
    if (question.mnemonic && !listeningPracticeMode) {
        const mnemonicBox = createListeningMnemonicBox(question);
        card.appendChild(mnemonicBox);
    }
    
    // Tip section - only in view mode
    if (question.tip && !listeningPracticeMode) {
        const tipDiv = document.createElement('div');
        tipDiv.style.cssText = 'background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); border-radius: 8px; padding: 15px; margin-top: 15px; color: white;';
        tipDiv.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 8px; font-size: 16px;">💡 MẸO NHỚ:</div>
            <div style="font-size: 15px; line-height: 1.6;">${question.tip}</div>
        `;
        card.appendChild(tipDiv);
    }
    
    // Result feedback area (hidden initially)
    const resultDiv = document.createElement('div');
    resultDiv.className = 'listening-result';
    resultDiv.style.cssText = 'display: none; margin-top: 15px; padding: 15px; border-radius: 8px;';
    card.appendChild(resultDiv);
    
    if (listeningPracticeMode && !listeningChecked && shouldShowPerQuestionCheck(examKey)) {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'margin-top: 15px; display: flex; gap: 10px;';
        
        const singleCheckBtn = document.createElement('button');
        singleCheckBtn.className = 'btn btn-check';
        singleCheckBtn.textContent = questionChecked ? 'Đã check câu này' : 'Check đáp án câu này';
        singleCheckBtn.style.cssText = 'flex: 1; padding: 12px; font-weight: 700;';
        singleCheckBtn.disabled = questionChecked;
        singleCheckBtn.addEventListener('click', function() {
            checkSingleListeningQuestion(examKey, question.number);
        });
        buttonContainer.appendChild(singleCheckBtn);
        
        // Add reset button if question is checked
        if (questionChecked) {
            const resetBtn = document.createElement('button');
            resetBtn.className = 'btn btn-secondary';
            resetBtn.textContent = 'Làm lại';
            resetBtn.style.cssText = 'flex: 1; padding: 12px; font-weight: 700; background: #718096; color: white;';
            resetBtn.addEventListener('click', function() {
                resetSingleListeningQuestion(examKey, question.number);
            });
            buttonContainer.appendChild(resetBtn);
        }
        
        card.appendChild(buttonContainer);
    }
    
    // Explanation section (only show after check in practice mode)
    if (listeningPracticeMode && questionChecked && question.explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.style.cssText = 'background: linear-gradient(135deg, #e6f3ff 0%, #cce7ff 100%); border-radius: 8px; padding: 15px; margin-top: 15px; border-left: 4px solid #667eea;';
        explanationDiv.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 10px; font-size: 16px; color: #2d3748; display: flex; align-items: center; gap: 8px;">
                <span>📚</span>
                <span>Giải thích đáp án:</span>
            </div>
            <div style="font-size: 15px; line-height: 1.7; color: #2d3748;">
                ${question.explanation}
            </div>
        `;
        card.appendChild(explanationDiv);
    }
    
    return card;
}

function checkSingleListeningQuestion(examKey, questionNumber) {
    if (!listeningQuestionChecked[examKey]) listeningQuestionChecked[examKey] = {};
    listeningQuestionChecked[examKey][questionNumber] = true;
    loadListeningExam(examKey);
}

function resetSingleListeningQuestion(examKey, questionNumber) {
    // Reset checked state for this question
    if (listeningQuestionChecked[examKey]) {
        delete listeningQuestionChecked[examKey][questionNumber];
    }
    
    // Remove answers for this question
    if (listeningUserAnswers[examKey]) {
        // Remove all answers for this question (including sub-questions)
        Object.keys(listeningUserAnswers[examKey]).forEach(key => {
            if (key.startsWith(`${questionNumber}_`) || key === String(questionNumber)) {
                delete listeningUserAnswers[examKey][key];
            }
        });
    }
    
    // Reload to show fresh question
    loadListeningExam(examKey);
}

function checkListeningAnswers(examKey, exam) {
    listeningChecked = true;
    
    // Disable all inputs and options
    document.querySelectorAll('#listening-content input').forEach(input => {
        input.disabled = true;
    });
    document.querySelectorAll('#listening-content select').forEach(select => {
        select.disabled = true;
    });
    document.querySelectorAll('#listening-content .listening-option').forEach(opt => {
        opt.style.cursor = 'default';
        opt.style.pointerEvents = 'none';
    });
    
    // Reload to show correct answers
    loadListeningExam(examKey);
    
    let results = [];
    let correctCount = 0;
    let totalCount = 0;
    
    exam.questions.forEach(q => {
        // Handle multi-choice sub-questions type
        if (q.multiChoiceSubType && q.subQuestions) {
            let subCorrectCount = 0;
            const subResults = [];
            
            q.subQuestions.forEach((subQ, idx) => {
                const answerKey = `${q.number}_${idx}`;
                const userAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][answerKey];
                const isCorrect = userAnswer === subQ.answer;
                
                if (isCorrect) subCorrectCount++;
                
                subResults.push({
                    text: subQ.text,
                    userAnswer: userAnswer || 'Chưa trả lời',
                    correctAnswer: subQ.answer,
                    isCorrect: isCorrect
                });
            });
            
            totalCount++;
            const allCorrect = subCorrectCount === q.subQuestions.length;
            if (allCorrect) correctCount++;
            
            results.push({
                questionNumber: q.number,
                question: q.question,
                userAnswer: `${subCorrectCount}/${q.subQuestions.length} đúng`,
                correctAnswer: q.subQuestions.map(sq => sq.answer).join(', '),
                isCorrect: allCorrect,
                subResults: subResults
            });
            return;
        }
        
        // Handle matching type questions
        if (q.matchingType && q.subQuestions) {
            let subCorrectCount = 0;
            const subResults = [];
            
            q.subQuestions.forEach((subQ, idx) => {
                const answerKey = `${q.number}_${idx}`;
                const userAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][answerKey];
                const isCorrect = userAnswer === subQ.answer;
                
                if (isCorrect) subCorrectCount++;
                
                subResults.push({
                    text: subQ.text,
                    userAnswer: userAnswer || 'Chưa trả lời',
                    correctAnswer: subQ.answer,
                    isCorrect: isCorrect
                });
            });
            
            totalCount++;
            const allCorrect = subCorrectCount === q.subQuestions.length;
            if (allCorrect) correctCount++;
            
            results.push({
                questionNumber: q.number,
                question: q.question,
                userAnswer: `${subCorrectCount}/${q.subQuestions.length} đúng`,
                correctAnswer: q.subQuestions.map(sq => sq.answer).join(', '),
                isCorrect: allCorrect,
                subResults: subResults
            });
            return;
        }
        
        const userAnswer = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][q.number];
        let isCorrect = false;
        let correctAnswer = '';
        
        if (q.answer) {
            // Multiple choice question (single answer)
            correctAnswer = q.answer;
            isCorrect = userAnswer === q.answer;
        } else if (q.options && q.options.some(opt => opt.isCorrect !== undefined)) {
            // True/False questions (multiple correct answers)
            // For these questions, we check if user selected all correct options
            const correctOptions = q.options.filter(opt => opt.isCorrect).map(opt => opt.letter);
            const userSelected = listeningUserAnswers[examKey] && listeningUserAnswers[examKey][q.number];
            
            // For True/False, we'll just show which are correct
            correctAnswer = correctOptions.join(', ');
            // Skip detailed checking for now, just show results
            return;
        }
        
        if (correctAnswer) {
            totalCount++;
            if (isCorrect) correctCount++;
            
            results.push({
                questionNumber: q.number,
                question: q.question,
                userAnswer: userAnswer || 'Chưa trả lời',
                correctAnswer: correctAnswer,
                isCorrect: isCorrect
            });
            
            // Show feedback on card
            const card = document.querySelector(`[data-question-number="${q.number}"]`);
            if (card) {
                const resultDiv = card.querySelector('.listening-result');
                if (resultDiv) {
                    resultDiv.style.display = 'block';
                    resultDiv.style.background = isCorrect ? '#f0fff4' : '#fff5f5';
                    resultDiv.style.border = `2px solid ${isCorrect ? '#48bb78' : '#fc8181'}`;
                    resultDiv.innerHTML = `
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                            <span style="font-size: 24px;">${isCorrect ? '✓' : '✗'}</span>
                            <span style="font-weight: 700; font-size: 18px; color: ${isCorrect ? '#48bb78' : '#fc8181'};">
                                ${isCorrect ? 'Đúng!' : 'Sai!'}
                            </span>
                        </div>
                        <div style="margin-bottom: 5px;">
                            <strong>Đáp án của bạn:</strong> <span style="color: #4a5568;">${userAnswer || 'Chưa trả lời'}</span>
                        </div>
                        <div>
                            <strong>Đáp án đúng:</strong> <span style="color: #48bb78; font-weight: 700;">${correctAnswer}</span>
                        </div>
                    `;
                }
            }
        }
    });
    
    // Show summary modal
    showListeningResults(correctCount, totalCount, results);
}

function showListeningResults(correctCount, totalCount, results) {
    const modal = document.getElementById('result-modal');
    const resultContent = document.getElementById('result-content');
    
    if (!modal || !resultContent) return;
    
    const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    
    let grade = '';
    let gradeColor = '';
    if (percentage >= 90) {
        grade = 'Excellent!';
        gradeColor = '#48bb78';
    } else if (percentage >= 80) {
        grade = 'Very Good!';
        gradeColor = '#38a169';
    } else if (percentage >= 70) {
        grade = 'Good!';
        gradeColor = '#667eea';
    } else if (percentage >= 60) {
        grade = 'Fair';
        gradeColor = '#f6ad55';
    } else {
        grade = 'Need Improvement';
        gradeColor = '#fc8181';
    }
    
    resultContent.innerHTML = `
        <h2 style="margin-bottom: 20px; color: #2d3748;">Kết quả Listening</h2>
        <div class="score-container">
            <div class="score-main">
                <div class="score-number">${correctCount} / ${totalCount}</div>
                <div class="score-percentage">${percentage}%</div>
                <div class="score-grade" style="color: ${gradeColor}">${grade}</div>
            </div>
        </div>
        <div class="results-detail">
            <h3>Chi tiết kết quả:</h3>
            <div class="results-list">
                ${results.map(result => `
                    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="result-header">
                            <span class="result-part">Câu ${result.questionNumber}</span>
                            <span class="result-status ${result.isCorrect ? 'correct-icon' : 'incorrect-icon'}">
                                ${result.isCorrect ? '✓' : '✗'}
                            </span>
                        </div>
                        <div class="result-question">${result.question}</div>
                        <div class="result-answers">
                            <div class="result-answer">
                                <strong>Đáp án của bạn:</strong> ${result.userAnswer}
                            </div>
                            ${!result.isCorrect ? `
                                <div class="result-answer correct-answer">
                                    <strong>Đáp án đúng:</strong> ${result.correctAnswer}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function createListeningMnemonicBox(question) {
    const mnemonicBox = document.createElement('div');
    mnemonicBox.style.cssText = 'background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); border-radius: 12px; padding: 20px; margin-bottom: 15px; color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    
    const title = document.createElement('div');
    title.style.cssText = 'font-size: 20px; font-weight: 700; margin-bottom: 15px; text-align: center;';
    title.textContent = '🧠 MẸO HỌC THUỘC NHANH';
    mnemonicBox.appendChild(title);
    
    const mnemonicContent = document.createElement('div');
    mnemonicContent.style.cssText = 'background: rgba(255,255,255,0.2); border-radius: 8px; padding: 15px; margin-bottom: 15px;';
    
    const mnemonicPhrase = document.createElement('div');
    mnemonicPhrase.style.cssText = 'font-size: 18px; font-weight: 600; text-align: center; margin-bottom: 15px; line-height: 1.6;';
    mnemonicPhrase.innerHTML = `
        <div style="margin-bottom: 10px;">📝 <strong>MẸO NHỚ:</strong></div>
        <div style="font-size: 24px; letter-spacing: 3px; margin: 10px 0;">${question.mnemonic}</div>
        ${question.mnemonicPhrase ? `
        <div style="font-size: 16px; margin-top: 10px; font-style: italic;">
            "${question.mnemonicPhrase}"
        </div>
        ` : ''}
    `;
    mnemonicContent.appendChild(mnemonicPhrase);
    
    const detailsList = document.createElement('div');
    detailsList.style.cssText = 'font-size: 14px; line-height: 2;';
    
    question.options.forEach(opt => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-bottom: 8px; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 6px;';
        itemDiv.innerHTML = `
            <span style="font-weight: 700; font-size: 20px; min-width: 30px; text-align: center; background: rgba(255,255,255,0.3); padding: 4px 8px; border-radius: 4px;">${opt.letter}</span>
            <span style="flex: 1; font-weight: 600; font-size: 13px;">${opt.text}</span>
            <span style="color: ${opt.isCorrect ? '#48bb78' : '#fc8181'}; font-weight: 700; font-size: 18px;">${opt.isCorrect ? '✓' : '✗'}</span>
        `;
        detailsList.appendChild(itemDiv);
    });
    
    mnemonicContent.appendChild(detailsList);
    mnemonicBox.appendChild(mnemonicContent);
    
    const tipBox = document.createElement('div');
    tipBox.style.cssText = 'background: rgba(255,255,255,0.2); border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.6;';
    tipBox.innerHTML = `
        <strong>💡 Gợi ý:</strong> ${question.tip || 'Nhớ chuỗi chữ cái để nhớ thứ tự các đáp án!'}
    `;
    mnemonicBox.appendChild(tipBox);
    
    return mnemonicBox;
}

// Force reload Tue Nov 18 11:53:57 +07 2025
