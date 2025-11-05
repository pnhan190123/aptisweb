let currentPart = 1;
let userAnswers = {};
let totalParts = 5;
let currentExam = 1;
let practiceMode = 'by-exam'; // 'by-exam' or 'by-question'
let allExamsMode = false;
let currentItemIndex = 0; // For navigation in all exams mode

// Helper function to create check button for a part
function createCheckButton(partNumber, examData, examNumber, containerId) {
    const checkContainer = document.getElementById(containerId);
    if (!checkContainer) return;
    
    checkContainer.innerHTML = '';
    
    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn btn-check';
    checkBtn.textContent = 'Check đáp án';
    checkBtn.style.cssText = 'width: 100%; padding: 12px; font-size: 16px;';
    
    const checkResult = document.createElement('div');
    checkResult.className = 'check-result';
    checkResult.style.cssText = 'margin-top: 15px;';
    
    checkBtn.addEventListener('click', function() {
        let correctCount = 0;
        let totalCount = 0;
        let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
        
        if (partNumber === 1) {
            const answerKey = examNumber ? `part1_exam${examNumber}` : 'part1';
            examData.sentences.forEach((sentence, index) => {
                totalCount++;
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
                const isCorrect = userAnswer === sentence.answer;
                if (isCorrect) correctCount++;
                resultsHTML += `<li style="margin-bottom: 8px;">Câu ${index + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${sentence.answer})`}</li>`;
            });
        } else if (partNumber === 2 || partNumber === 3) {
            const answerKey = examNumber ? `part${partNumber}_exam${examNumber}` : `part${partNumber}`;
            examData.sentences.forEach((sentence, originalIndex) => {
                totalCount++;
                const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
                const correctOrder = originalIndex + 1;
                const isCorrect = userOrder === correctOrder;
                if (isCorrect) correctCount++;
                resultsHTML += `<li style="margin-bottom: 8px;">Câu ${originalIndex + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: Thứ tự ${correctOrder})`}</li>`;
            });
        } else if (partNumber === 4) {
            const answerKey = examNumber ? `part4_exam${examNumber}` : 'part4';
            examData.questions.forEach((q, index) => {
                totalCount++;
                const userAnswer = userAnswers[answerKey] && (Array.isArray(userAnswers[answerKey]) ? userAnswers[answerKey][index] : userAnswers[answerKey][index]);
                const isCorrect = userAnswer === q.answer;
                if (isCorrect) correctCount++;
                resultsHTML += `<li style="margin-bottom: 8px;">Câu ${index + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${q.answer})`}</li>`;
            });
        } else if (partNumber === 5) {
            const answerKey = examNumber ? `part5_exam${examNumber}` : 'part5';
            examData.paragraphs.forEach(para => {
                totalCount++;
                const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][para.number];
                const isCorrect = userAnswer === para.answer;
                if (isCorrect) correctCount++;
                resultsHTML += `<li style="margin-bottom: 8px;">Paragraph ${para.number}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${para.answer})`}</li>`;
            });
        }
        
        resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
        
        checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
        checkResult.innerHTML = resultsHTML;
    });
    
    checkContainer.appendChild(checkBtn);
    checkContainer.appendChild(checkResult);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadExam(1);
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
    loadPart(selectedPart);
}

function setupEventListeners() {
    document.getElementById('load-btn').addEventListener('click', function() {
        loadPart(currentPart);
    });
    document.getElementById('next-btn').addEventListener('click', nextPart);
    document.getElementById('prev-btn').addEventListener('click', prevPart);
    document.getElementById('submit-btn').addEventListener('click', submitAnswers);
    document.getElementById('restart-btn').addEventListener('click', restart);
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
        const totalItems = getAllExamItemsCount(currentPart);
        const progress = totalItems > 0 ? ((currentItemIndex + 1) / totalItems) * 100 : 0;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        const itemInfo = getCurrentItemInfo();
        document.getElementById('question-counter').textContent = itemInfo || `Item ${currentItemIndex + 1} of ${totalItems}`;
    } else {
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

    if (allExamsMode) {
        // Khi ở chế độ "Tất cả các đề", load tất cả cùng lúc nên luôn hiển thị Submit
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        // Chế độ một đề cụ thể
        prevBtn.disabled = currentPart === 1;
        if (currentPart === totalParts) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
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
            
            const checkResult = document.createElement('div');
            checkResult.className = 'check-result';
            checkResult.style.cssText = 'margin-top: 15px;';
            
            checkBtn.addEventListener('click', function() {
                const answerKey = `part1_exam${examData.examNumber}`;
                let correctCount = 0;
                let totalCount = examData.sentences.length;
                let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
                
                examData.sentences.forEach((sentence, index) => {
                    const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
                    const isCorrect = userAnswer === sentence.answer;
                    if (isCorrect) correctCount++;
                    
                    resultsHTML += `<li style="margin-bottom: 8px;">Câu ${index + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${sentence.answer})`}</li>`;
                });
                
                resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
                
                checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
                checkResult.innerHTML = resultsHTML;
            });
            
            const checkContainer = document.createElement('div');
            checkContainer.appendChild(checkBtn);
            checkContainer.appendChild(checkResult);
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
            if (!userAnswers.part1) userAnswers.part1 = [];
            userAnswers.part1[0] = sentence.answer;
        }
        
        gap.addEventListener('change', function() {
            if (!userAnswers.part1) userAnswers.part1 = [];
            userAnswers.part1[index] = this.value;
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
    if (userAnswers.part1) {
        userAnswers.part1.forEach((answer, index) => {
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
            let correctCount = 0;
            let totalCount = data.sentences.length;
            let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
            
            data.sentences.forEach((sentence, index) => {
                const userAnswer = userAnswers.part1 && userAnswers.part1[index];
                const isCorrect = userAnswer === sentence.answer;
                if (isCorrect) correctCount++;
                
                resultsHTML += `<li style="margin-bottom: 8px;">Câu ${index + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${sentence.answer})`}</li>`;
            });
            
            resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
            
            checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
            checkResult.innerHTML = resultsHTML;
        });
        
        checkContainer.appendChild(checkBtn);
        checkContainer.appendChild(checkResult);
    }
}

// Part 2: Text Cohesion (Select Order)
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

            // Create sentence items with order selector
            shuffledSentences.forEach((item) => {
                const sentenceEl = document.createElement('div');
                sentenceEl.className = 'sentence-order-item';
                sentenceEl.dataset.originalIndex = item.originalIndex;
                sentenceEl.dataset.correctOrder = item.correctOrder;
                
                const select = document.createElement('select');
                select.className = 'order-select';
                select.dataset.originalIndex = item.originalIndex;
                select.dataset.examNumber = examData.examNumber;
                
                for (let i = 1; i <= examData.sentences.length; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    select.appendChild(option);
                }
                
                select.addEventListener('change', function() {
                    const answerKey = `part2_exam${examData.examNumber}`;
                    if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
                    userAnswers[answerKey][item.originalIndex] = parseInt(this.value);
                });
                
                sentenceEl.innerHTML = `
                    <span class="sentence-text">${item.sentence}</span>
                `;
                sentenceEl.appendChild(select);
                examContainer.appendChild(sentenceEl);
            });

            // Load saved answers
            const answerKey = `part2_exam${examData.examNumber}`;
            if (userAnswers[answerKey]) {
                Object.keys(userAnswers[answerKey]).forEach(originalIndex => {
                    const select = examContainer.querySelector(`select[data-exam-number="${examData.examNumber}"][data-original-index="${originalIndex}"]`);
                    if (select) {
                        select.value = userAnswers[answerKey][originalIndex];
                    }
                });
            }
            
            examSection.appendChild(examContainer);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            const checkResult = document.createElement('div');
            checkResult.className = 'check-result';
            checkResult.style.cssText = 'margin-top: 15px;';
            
            checkBtn.addEventListener('click', function() {
                let correctCount = 0;
                let totalCount = examData.sentences.length;
                let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
                
                examData.sentences.forEach((sentence, originalIndex) => {
                    const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
                    const correctOrder = originalIndex + 1;
                    const isCorrect = userOrder === correctOrder;
                    if (isCorrect) correctCount++;
                    resultsHTML += `<li style="margin-bottom: 8px;">Câu ${originalIndex + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: Thứ tự ${correctOrder})`}</li>`;
                });
                
                resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
                checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
                checkResult.innerHTML = resultsHTML;
            });
            
            checkContainerDiv.appendChild(checkBtn);
            checkContainerDiv.appendChild(checkResult);
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

    // Create sentence items with order selector
    shuffledSentences.forEach((item, displayIndex) => {
        const sentenceEl = document.createElement('div');
        sentenceEl.className = 'sentence-order-item';
        sentenceEl.dataset.originalIndex = item.originalIndex;
        sentenceEl.dataset.correctOrder = item.correctOrder;
        
        const select = document.createElement('select');
        select.className = 'order-select';
        select.dataset.originalIndex = item.originalIndex;
        
        // Add options 1-5
        for (let i = 1; i <= data.sentences.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
        
        select.addEventListener('change', function() {
            if (!userAnswers.part2) userAnswers.part2 = {};
            userAnswers.part2[item.originalIndex] = parseInt(this.value);
        });
        
        sentenceEl.innerHTML = `
            <span class="sentence-text">${item.sentence}</span>
        `;
        sentenceEl.appendChild(select);
        container.appendChild(sentenceEl);
    });

    // Load saved answers
    if (userAnswers.part2) {
        Object.keys(userAnswers.part2).forEach(originalIndex => {
            const select = container.querySelector(`select[data-original-index="${originalIndex}"]`);
            if (select) {
                select.value = userAnswers.part2[originalIndex];
            }
        });
    }
    
    // Thêm nút check cho Part 2 (single exam mode)
    createCheckButton(2, data, null, 'check-container2');
}


// Part 3: Text Cohesion (Select Order)
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

            // Create sentence items with order selector
            shuffledSentences.forEach((item) => {
                const sentenceEl = document.createElement('div');
                sentenceEl.className = 'sentence-order-item';
                sentenceEl.dataset.originalIndex = item.originalIndex;
                sentenceEl.dataset.correctOrder = item.correctOrder;
                
                const select = document.createElement('select');
                select.className = 'order-select';
                select.dataset.originalIndex = item.originalIndex;
                select.dataset.examNumber = examData.examNumber;
                
                for (let i = 1; i <= examData.sentences.length; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = i;
                    select.appendChild(option);
                }
                
                select.addEventListener('change', function() {
                    const answerKey = `part3_exam${examData.examNumber}`;
                    if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
                    userAnswers[answerKey][item.originalIndex] = parseInt(this.value);
                });
                
                sentenceEl.innerHTML = `
                    <span class="sentence-text">${item.sentence}</span>
                `;
                sentenceEl.appendChild(select);
                examContainer.appendChild(sentenceEl);
            });

            // Load saved answers
            const answerKey = `part3_exam${examData.examNumber}`;
            if (userAnswers[answerKey]) {
                Object.keys(userAnswers[answerKey]).forEach(originalIndex => {
                    const select = examContainer.querySelector(`select[data-exam-number="${examData.examNumber}"][data-original-index="${originalIndex}"]`);
                    if (select) {
                        select.value = userAnswers[answerKey][originalIndex];
                    }
                });
            }
            
            examSection.appendChild(examContainer);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            const checkResult = document.createElement('div');
            checkResult.className = 'check-result';
            checkResult.style.cssText = 'margin-top: 15px;';
            
            checkBtn.addEventListener('click', function() {
                let correctCount = 0;
                let totalCount = examData.sentences.length;
                let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
                
                examData.sentences.forEach((sentence, originalIndex) => {
                    const userOrder = userAnswers[answerKey] && userAnswers[answerKey][originalIndex];
                    const correctOrder = originalIndex + 1;
                    const isCorrect = userOrder === correctOrder;
                    if (isCorrect) correctCount++;
                    resultsHTML += `<li style="margin-bottom: 8px;">Câu ${originalIndex + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: Thứ tự ${correctOrder})`}</li>`;
                });
                
                resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
                checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
                checkResult.innerHTML = resultsHTML;
            });
            
            checkContainerDiv.appendChild(checkBtn);
            checkContainerDiv.appendChild(checkResult);
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

    // Create sentence items with order selector
    shuffledSentences.forEach((item, displayIndex) => {
        const sentenceEl = document.createElement('div');
        sentenceEl.className = 'sentence-order-item';
        sentenceEl.dataset.originalIndex = item.originalIndex;
        sentenceEl.dataset.correctOrder = item.correctOrder;
        
        const select = document.createElement('select');
        select.className = 'order-select';
        select.dataset.originalIndex = item.originalIndex;
        
        // Add options 1-5
        for (let i = 1; i <= data.sentences.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
        
        select.addEventListener('change', function() {
            if (!userAnswers.part3) userAnswers.part3 = {};
            userAnswers.part3[item.originalIndex] = parseInt(this.value);
        });
        
        sentenceEl.innerHTML = `
            <span class="sentence-text">${item.sentence}</span>
        `;
        sentenceEl.appendChild(select);
        container.appendChild(sentenceEl);
    });

    // Load saved answers
    if (userAnswers.part3) {
        Object.keys(userAnswers.part3).forEach(originalIndex => {
            const select = container.querySelector(`select[data-original-index="${originalIndex}"]`);
            if (select) {
                select.value = userAnswers.part3[originalIndex];
            }
        });
    }
    
    // Thêm nút check cho Part 3 (single exam mode)
    createCheckButton(3, data, null, 'check-container3');
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
            examSection.appendChild(examOpinions);
            
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
            
            examSection.appendChild(examQuestions);
            
            // Thêm nút check cho toàn bộ exam section
            const checkContainerDiv = document.createElement('div');
            const checkBtn = document.createElement('button');
            checkBtn.className = 'btn btn-check';
            checkBtn.textContent = 'Check đáp án';
            checkBtn.style.cssText = 'margin-top: 20px; width: 100%; padding: 12px; font-size: 16px;';
            
            const checkResult = document.createElement('div');
            checkResult.className = 'check-result';
            checkResult.style.cssText = 'margin-top: 15px;';
            
            checkBtn.addEventListener('click', function() {
                let correctCount = 0;
                let totalCount = examData.questions.length;
                let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
                
                examData.questions.forEach((q, index) => {
                    const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][index];
                    const isCorrect = userAnswer === q.answer;
                    if (isCorrect) correctCount++;
                    resultsHTML += `<li style="margin-bottom: 8px;">Câu ${index + 1}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${q.answer})`}</li>`;
                });
                
                resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
                checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
                checkResult.innerHTML = resultsHTML;
            });
            
            checkContainerDiv.appendChild(checkBtn);
            checkContainerDiv.appendChild(checkResult);
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
            if (!userAnswers.part4) userAnswers.part4 = [];
            userAnswers.part4[index] = this.value;
        });

        questionEl.innerHTML = `<div class="question-text">${q.question}</div>`;
        questionEl.appendChild(select);
        questionsContainer.appendChild(questionEl);
    });

    // Load saved answers
    if (userAnswers.part4) {
        userAnswers.part4.forEach((answer, index) => {
            const select = document.querySelector(`#questions4 select[data-index="${index}"]`);
            if (select && answer) {
                select.value = answer;
            }
        });
    }
    
    // Thêm nút check cho Part 4 (single exam mode)
    createCheckButton(4, data, null, 'check-container4');
}

// Part 5: Long Text Comprehension - Choose Heading
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
            
            const checkResult = document.createElement('div');
            checkResult.className = 'check-result';
            checkResult.style.cssText = 'margin-top: 15px;';
            
            checkBtn.addEventListener('click', function() {
                let correctCount = 0;
                let totalCount = examData.paragraphs.length;
                let resultsHTML = '<div style="margin-top: 10px;"><strong>Kết quả:</strong><ul style="margin-top: 10px; padding-left: 20px;">';
                
                examData.paragraphs.forEach(para => {
                    const userAnswer = userAnswers[answerKey] && userAnswers[answerKey][para.number];
                    const isCorrect = userAnswer === para.answer;
                    if (isCorrect) correctCount++;
                    resultsHTML += `<li style="margin-bottom: 8px;">Paragraph ${para.number}: ${isCorrect ? '✓ Đúng' : `✗ Sai (Đáp án: ${para.answer})`}</li>`;
                });
                
                resultsHTML += `</ul><div style="margin-top: 10px; font-weight: 700; font-size: 16px;">Tổng: ${correctCount}/${totalCount}</div></div>`;
                checkResult.className = `check-result show ${correctCount === totalCount ? 'correct' : 'incorrect'}`;
                checkResult.innerHTML = resultsHTML;
            });
            
            checkContainerDiv.appendChild(checkBtn);
            checkContainerDiv.appendChild(checkResult);
            examSection.appendChild(checkContainerDiv);
            
            paragraphsEl.appendChild(examSection);
        });
        return;
    }
    
    // Single exam mode
    titleEl.textContent = data.passageTitle || '';
    
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
            const answerKey = allExamsMode ? `part5_exam${currentExam}` : 'part5';
            if (!userAnswers[answerKey]) userAnswers[answerKey] = {};
            userAnswers[answerKey][para.number] = this.value;
        });

        paraEl.appendChild(paraNumber);
        paraEl.appendChild(paraText);
        paraEl.appendChild(select);
        paragraphsEl.appendChild(paraEl);
    });

    // Load saved answers
    const answerKey = allExamsMode ? `part5_exam${currentExam}` : 'part5';
    if (userAnswers[answerKey]) {
        Object.keys(userAnswers[answerKey]).forEach(number => {
            const select = document.querySelector(`#paragraphs5 select[data-number="${number}"]`);
            if (select && userAnswers[answerKey][number]) {
                select.value = userAnswers[answerKey][number];
            }
        });
    }
    
    // Thêm nút check cho Part 5 (single exam mode)
    createCheckButton(5, data, null, 'check-container5');
}

function nextPart() {
    if (allExamsMode) {
        const totalItems = getAllExamItemsCount(currentPart);
        if (currentItemIndex < totalItems - 1) {
            currentItemIndex++;
            // Reload current part with new item index, don't change part
            loadPartContent(currentPart);
        }
    } else {
        if (currentPart < totalParts) {
            currentPart++;
            loadPart(currentPart);
        }
    }
}

function prevPart() {
    if (allExamsMode) {
        if (currentItemIndex > 0) {
            currentItemIndex--;
            // Reload current part with new item index, don't change part
            loadPartContent(currentPart);
        }
    } else {
        if (currentPart > 1) {
            currentPart--;
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

    showResults(score, total, results, examNumber);
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

