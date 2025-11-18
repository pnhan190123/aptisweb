// Structure: exams[examNumber-1].partX
const exams = [
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading part 1",
        instructions: "Choose one word from the list for each gap. The first one is done for you.",
        wordList: ["clear", "sun", "working", "enjoyable", "read"],
        sentences: [
            {
                text: "The water is so",
                gap: "clear",
                answer: "clear",
                after: "and I can see the fish."
            },
            {
                text: "The",
                gap: "sun",
                answer: "sun",
                after: "is always out and it's very hot."
            },
            {
                text: "After",
                gap: "working",
                answer: "working",
                after: "so hard, I need to rest."
            },
            {
                text: "I am having an",
                gap: "enjoyable",
                answer: "enjoyable",
                after: "holiday."
            },
            {
                text: "Hope to",
                gap: "read",
                answer: "read",
                after: "a letter from you soon."
            }
        ]
    },
    part2: {
        title: "[Mai Hien key 6.0] - Reading plus - part 2 - Visiting an island",
        passageTitle: "Visiting an island",
        firstSentence: "Last summer, I visited a beautiful tropical island with my family.",
        sentences: [
            "In the past, only rich people could afford to travel.",
            "The invention of trains and cars made travel easier and affordable for everyone.",
            "After the two means of transportation, travel was also easier with aero planes.",
            "Flying was so fast so it helps people to travel especially for holiday and business.",
            "Nowadays, traveling to different parts of the world is easier with the improvements."
        ]
    },
    part3: {
        title: "[Mai Hien key 6.0] - Reading part 2 - Healthy eating",
        passageTitle: "Healthy eating",
        firstSentence: "Over the years, people's eating habits have changed a lot as they become more aware of their health.",
        sentences: [
            "In the past, meals were often filled with sugar and unhealthy fats.",
            "Limited access to fresh produce made healthy eating much more difficult years ago.",
            "Modern diets now focus on fresh, whole foods rather than processed ones.",
            "Nutritionists today educate people on how to plan balanced and nutritious meals.",
            "Nowadays, mobile apps help track calories and suggest healthy recipes to support a healthier lifestyle."
        ]
    },
    part4: {
        title: "[Mai Hien key 6.0] - Reading part 3 - Childhood memories",
        instructions: "Four people respond in the comments section of an online magazine article about childhood memories. Read the texts and then answer the questions below.",
        opinions: [
            {
                person: "Person A",
                text: "Growing up, I loved listening to my grandfather's folktales by the fireplace. Those stories taught me the value of imagination. Nowadays, I share stories with my nieces using interactive storybooks on tablets. I appreciate how tradition blends with modern technology for intergenerational storytelling."
            },
            {
                person: "Person B",
                text: "I remember riding my bike through the village with friends, feeling free and independent. Those adventures were unforgettable. Today's children spend more time indoors with screens. I miss those carefree outdoor days and the value of friendship and the outdoors."
            },
            {
                person: "Person C",
                text: "As a child, I was passionate about sketching animals, trees, and landscapes with crayons and pencils. That passion evolved into my career as a graphic designer. Now I use digital tools for precision, but the creative feeling remains the same. Drawing has always been my source of happiness and expression."
            },
            {
                person: "Person D",
                text: "Growing up, I loved camping trips in the countryside with my family. We set up tents, cooked outdoors, and spent hours staring at the stars. Those experiences made me feel close to nature and gave me lasting memories. Of course, bad weather sometimes forced us to stay indoors, which always left me a little disappointed. Nowadays, instead of outdoor adventures, I enjoy visiting museums and exhibitions. Learning about history through artifacts and stories gives me the same sense of wonder, but in a calmer and more comfortable environment."
            }
        ],
        questions: [
            {
                question: "Who loved camping as a child?",
                answer: "Person D"
            },
            {
                question: "Who enjoys storytelling with family?",
                answer: "Person A"
            },
            {
                question: "Who loved drawing as a child?",
                answer: "Person C"
            },
            {
                question: "Who loved bike riding as a child?",
                answer: "Person B"
            },
            {
                question: "Who now enjoys graphic design?",
                answer: "Person C"
            },
            {
                question: "Who finds modern books more engaging?",
                answer: "Person A"
            },
            {
                question: "Who now prefers museum visits?",
                answer: "Person D"
            }
        ]
    },
    part5: {
        title: "[Mai Hien key 6.0] - Reading part 4 - CULTURAL EXCHANGE",
        passageTitle: "CULTURAL EXCHANGE",
        instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
        headings: [
            "Redefining global cultural understanding",
            "Encouraging cross-cultural festivals",
            "Promoting language exchange programs",
            "Overemphasis on commercial tourism",
            "Concerns about cultural preservation",
            "Building mutual respect among communities",
            "Focusing on authentic cultural experiences"
        ],
        paragraphs: [
            {
                number: 1,
                text: "Cultural exchange has become increasingly important in our globalized world. As people from different backgrounds interact more frequently, there is a growing need to understand and appreciate diverse cultural perspectives. This understanding helps break down barriers and fosters international cooperation.",
                answer: "Redefining global cultural understanding"
            },
            {
                number: 2,
                text: "Many communities organize festivals that celebrate their unique traditions while welcoming others to participate. These events provide opportunities for people to experience different foods, music, dances, and customs firsthand. Such celebrations create lasting memories and promote cross-cultural friendships.",
                answer: "Encouraging cross-cultural festivals"
            },
            {
                number: 3,
                text: "Language is a key component of culture, and learning another language opens doors to understanding different worldviews. Many programs now connect native speakers with learners, allowing them to practice together and share cultural insights. These exchanges go beyond vocabulary and grammar, creating meaningful connections between people.",
                answer: "Promoting language exchange programs"
            },
            {
                number: 4,
                text: "However, some critics argue that modern tourism often prioritizes profit over authentic cultural experiences. Tourist attractions may be overly commercialized, offering superficial representations of local culture designed to entertain rather than educate. This approach can distort the true essence of cultural traditions.",
                answer: "Overemphasis on commercial tourism"
            },
            {
                number: 5,
                text: "There are legitimate concerns that rapid globalization might lead to the loss of unique cultural identities. As younger generations adopt global trends, traditional practices, languages, and customs risk being forgotten. Communities must find ways to preserve their heritage while embracing positive aspects of change.",
                answer: "Concerns about cultural preservation"
            },
            {
                number: 6,
                text: "Successful cultural exchange requires mutual respect and open-mindedness. When people approach different cultures with genuine curiosity and respect, they build bridges rather than walls. This foundation of respect enables deeper understanding and creates harmonious relationships between diverse groups.",
                answer: "Building mutual respect among communities"
            },
            {
                number: 7,
                text: "The most meaningful cultural exchanges happen when people engage with local communities in authentic settings. Instead of just visiting tourist sites, travelers are encouraged to participate in daily life, learn traditional crafts, and share meals with local families. These genuine interactions provide rich, transformative experiences.",
                answer: "Focusing on authentic cultural experiences"
            }
        ]
    }
    },
    // Đề 2
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading part 1 - Đề 2",
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["station", "stops", "green", "dinner", "films"],
            sentences: [
                { text: "Tomorrow, I have to go to the main bus", gap: "station", answer: "station", after: "to meet my cousin." },
                { text: "Luckily, one of the bus", gap: "stops", answer: "stops", after: "is very close to my house." },
                { text: "My house is easy to find - it's", gap: "green", answer: "green", after: "and stands out from the others." },
                { text: "This evening I'll make some eggs for", gap: "dinner", answer: "dinner", after: "because it's quick and simple." },
                { text: "After that, we can relax and watch some", gap: "films", answer: "films", after: "together on TV." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - The famous singer",
            passageTitle: "The famous singer",
            firstSentence: "Many people dream of becoming a famous singer, but only a few achieve it.",
            sentences: [
                "He is a famous singer who is loved by many fans.",
                "At the age of fifteen, he studied music at a special school.",
                "Before becoming famous, he had to practice very hard every day.",
                "With his unique style and clothes, he soon attracted attention.",
                "Thanks to his talent and style, he became more and more famous and well-known.",
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 3 - Family Sports Day",
            passageTitle: "Family Sports Day",
            firstSentence: "Last weekend, it was good weather, so the town had a family sport day in the park",
            sentences: [
                "It started on early Saturday morning with a ten-mile race for adults",
                "Sixty men and women ran in this, and Ms Kamur won with a very fast time",
                "After receiving her prize, the children's activities and competitions began",
                "These included football, swimming and jumping and the children had lots of fun.",
                "They were all hungry after all of these, so the children had tasty food and drinks with their parents."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading part 3 - Extreme sports",
            instructions: "Four people share their feelings about extreme sports. Read their answers and answer the questions below.",
            opinions: [
                { 
                    person: "Person A", 
                    text: "I think preparation is very important before doing extreme sports. Some people think it's only about excitement and bravery, but I disagree. I took a rock-climbing course before trying it. I learned about safety equipment and techniques. When I finally tried rock climbing, I felt more confident and enjoyed it more. Training made the experience less stressful and much more fun." 
                },
                { 
                    person: "Person B", 
                    text: "I usually prefer traditional sports like swimming and running because they're good for health and safe. However, I tried bungee jumping once during a holiday. It was unforgettable and really thrilling! I enjoyed the experience, but I still prefer swimming for regular exercise. It's safer and more practical. Extreme sports can be fun to try once, but I don't think I'll make them a regular habit." 
                },
                { 
                    person: "Person C", 
                    text: "I don't really understand why people do extreme sports. I think they're risky and unnecessary. I've never tried an extreme sport and I have no plans to try one. My friends have invited me to go snowboarding and paragliding, but I always say no. I enjoy other sports like cycling and tennis, but I don't see the point of risking my health for a few seconds of excitement. I think extreme sports are not important for a happy life." 
                },
                { 
                    person: "Person D", 
                    text: "I love extreme sports because they take place in nature. I've tried kayaking on a wild river and mountain biking in a forest. I love the fresh air, the freedom, and being close to nature. These experiences make me feel alive and connected to the natural world. I wish I had more time and money to do extreme sports more often." 
                }
            ],
            questions: [
                { question: "Who thinks preparation is necessary before doing extreme sports?", answer: "Person A" },
                { question: "Who usually does ordinary sports?", answer: "Person B" },
                { question: "Who once tried an extreme sport and enjoyed it?", answer: "Person B" },
                { question: "Who enjoys being outdoors when doing extreme sports?", answer: "Person D" },
                { question: "Who wishes to do more extreme sports in the future?", answer: "Person D" },
                { question: "Who believes extreme sports are not important?", answer: "Person C" },
                { question: "Who always avoids extreme sports?", answer: "Person C" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - The Arrival of the Four-Day Workweek",
            passageTitle: "The Arrival of the Four-Day Workweek",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "A way of life now out of date",
                "Benefits for employees",
                "Undesired financial consequences",
                "Unforeseen challenges for employees",
                "Difficult to give up bad habits",
                "An unfair plan for some people",
                "Alternative solutions worth considering"
            ],
            paragraphs: [
                { number: 1, text: "The traditional five-day workweek has been the standard for decades, but many argue it's outdated in today's technology-driven world. With advances in automation and efficiency, some believe we can achieve the same productivity in less time. This model worked well in the past, but modern workplaces may need to adapt to new realities.", answer: "A way of life now out of date" },
                { number: 2, text: "Employees who work four days instead of five report having more time for family and personal activities. Many find it easier to balance work and care responsibilities. Parents especially appreciate the extra day to spend with children or attend to family needs. This improved work-life balance can lead to greater job satisfaction and reduced stress.", answer: "Benefits for employees" },
                { number: 3, text: "However, some business owners worry that reducing working hours could negatively impact productivity and profits. Companies might need to hire more staff to cover the same workload, increasing labor costs. There are concerns that shorter workweeks might make businesses less competitive, especially in industries that require constant presence.", answer: "Undesired financial consequences" },
                { number: 4, text: "While the idea sounds appealing, some workers face unexpected problems. Condensing five days of work into four can lead to longer daily hours and increased stress. There's also the risk that companies might use this as an opportunity to reduce staff, leaving remaining employees with heavier workloads. Not everyone benefits equally from this change.", answer: "Unforeseen challenges for employees" },
                { number: 5, text: "Some employees struggle with the transition to having more free time. After years of working five days a week, adjusting to a four-day schedule can be difficult. People might not know what to do with the extra day and could feel bored or disconnected. Old habits die hard, and change isn't always easy to accept.", answer: "Difficult to give up bad habits" },
                { number: 6, text: "The four-day workweek isn't feasible for all professions. Teachers, police officers, healthcare workers, and many service industry employees cannot simply reduce their working hours. These essential workers need to be available when society needs them. A universal four-day week would create inequality between different types of jobs.", answer: "An unfair plan for some people" },
                { number: 7, text: "Instead of a mandatory four-day workweek, some suggest increasing annual holidays or offering more flexible time-off options. This approach allows companies and employees to find solutions that work best for their specific situations. Flexible scheduling might be more practical than a one-size-fits-all approach to reducing work hours.", answer: "Alternative solutions worth considering" }
            ]
        }
    },
    // Đề 3
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading part 1 - Đề 3",
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["morning", "friends", "leave", "good", "food"],
            sentences: [
                { text: "When I wake up in the", gap: "morning", answer: "morning", after: ", I go running." },
                { text: "My", gap: "friends", answer: "friends", after: "come with me and we run in the park." },
                { text: "I", gap: "leave", answer: "leave", after: "my car at home and walk to work." },
                { text: "I like doing exercises because it is", gap: "good", answer: "good", after: "for my body." },
                { text: "I also drink more water and eat healthy", gap: "food", answer: "food", after: "." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - Writing about a place",
            passageTitle: "Writing about a place",
            firstSentence: "Writing about places is an exciting way to share your knowledge and experience.",
            sentences: [
                "Before writing about a place, you need to do some research on it.",
                "It is important to learn about the people and the history there carefully.",
                "Even if you cannot visit the place, your writing will still look similar to real experiences.",
                "You should also compare that place with your own country.",
                "Such comparisons will make your writing more interesting and meaningful."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - a new coffee shop",
            passageTitle: "My visit to a new coffee shop",
            firstSentence: "Last night I went to the cafe opening The Corner Cafe near my house.",
            sentences: [
                "It was full of people and the staff were busy on their opening day.",
                "Despite the crowd, they got me a nice table and gave me the menu.",
                "When I first looked at it, I was disappointed because I hoped for a variety of dishes.",
                "I had to choose one so I chose the most expensive sandwich.",
                "It tasted really good with cheese topping and I will definitely return here."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading part 3 - Childhood",
            instructions: "Four people respond in the comments section of an online magazine article about games from childhood. Read the texts and then answer the questions below.",
            opinions: [
                { 
                    person: "Person A", 
                    text: "When I was younger, I really enjoyed playing board games with my cousins. They were easy to understand, and we always laughed a lot. Now, as a parent, I still choose board games to spend time with my children because I want to reduce their computer use. However, I sometimes find these games challenging since modern versions include more characters, complicated rules, and require more thinking. Even though it's harder than before, the time we share together is worth it, and both my children and I always finish our games with smiles and happy memories." 
                },
                { 
                    person: "Person B", 
                    text: "As a child, I loved playing soccer with other kids from my neighborhood. Most afternoons we played in the schoolyard, but sometimes we found open spaces nearby and made our own little football field. We divided ourselves into teams, argued about rules, and then ran until we were out of breath. I still remember the excitement when I scored goals and the laughter when we made mistakes. Soccer gave me a sense of teamwork, energy, and joy, and even now I still enjoy watching games on TV because they remind me of those happy childhood afternoons." 
                },
                { 
                    person: "Person C", 
                    text: "When I was a child, I didn't really like outdoor activities. While my friends were running outside, I preferred to stay home with a book. Reading was my favorite way to spend the day, and through stories I felt I could travel to other worlds and imagine exciting adventures. Books shaped my childhood by helping me dream and think creatively. Now that I am older, I also enjoy playing modern games with colorful graphics and eye-catching designs. They make me feel relaxed and give me new ways to use my imagination, just like reading books once did." 
                },
                { 
                    person: "Person D", 
                    text: "Growing up, I loved outdoor activities more than anything else. On days with good weather, I would spend hours outside running, climbing, or simply playing games. But when the weather turned bad, I felt disappointed and often stood by the window, waiting for the rain to stop. At those times, my mother would hand me paper and a box of crayons, and I would happily spend hours drawing. Creating colorful pictures made me forget the sadness of staying indoors, and that is how I first discovered my love for art, which still remains with me today." 
                }
            ],
            questions: [
                { question: "Who likes to play with children?", answer: "Person A" },
                { question: "Who likes to play with small friends?", answer: "Person B" },
                { question: "Who looked forward to going out to play?", answer: "Person D" },
                { question: "Who liked arts when being a child?", answer: "Person D" },
                { question: "Who likes modern games when growing up?", answer: "Person C" },
                { question: "Who finds the games nowadays much more difficult?", answer: "Person A" },
                { question: "Who liked reading books when being a child?", answer: "Person C" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - MOUNTAINS AND HUMAN CONNECTIONS",
            passageTitle: "MOUNTAINS AND HUMAN CONNECTIONS",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Our changing perceptions toward mountains",
                "A unique sense of achievement",
                "Publicising one's achievements",
                "A wrong priority",
                "A disturbing revelation",
                "A new focus on sustainability",
                "An intimate relationship"
            ],
            paragraphs: [
                { number: 1, text: "Throughout history, human attitudes toward mountains have undergone significant transformations. In ancient times, many cultures regarded mountains with fear and reverence, viewing them as the dwelling places of gods or spirits that were best left undisturbed. However, as scientific understanding advanced and human confidence grew, these towering peaks began to be seen as challenges to be conquered rather than sacred spaces to be avoided. The romantic era of the 19th century further shifted perceptions, as artists and writers began to celebrate mountains as sources of sublime beauty and spiritual inspiration. Today, mountains are simultaneously viewed as adventure playgrounds, environmental treasures, and places of personal growth, reflecting our complex and evolving relationship with these natural wonders.", answer: "Our changing perceptions toward mountains" },
                { number: 2, text: "For countless climbers and hikers, reaching a mountain summit provides a unique sense of achievement that cannot be replicated in other pursuits. Unlike many modern accomplishments that feel abstract or virtual, standing atop a mountain peak offers tangible proof of one's physical and mental capabilities. The journey to the summit requires months or even years of preparation, careful planning, and the development of technical skills. During the actual climb, individuals must overcome physical exhaustion, unpredictable weather conditions, and their own psychological barriers. When the summit is finally reached, the combination of physical exertion, mental determination, and the breathtaking view creates an overwhelming sense of personal triumph that validates all the effort invested. This achievement feels deeply personal and authentic because it cannot be bought, faked, or easily shared—it must be earned through genuine commitment and effort.", answer: "A unique sense of achievement" },
                { number: 3, text: "In our contemporary digital age, social media platforms have transformed mountain climbing from a private pursuit into a highly publicized activity. Climbers now regularly document their expeditions through photographs, videos, and detailed posts, sharing their experiences with thousands of followers. This publicity serves multiple purposes: it allows climbers to inspire others, build their personal brands, attract sponsors, and create lasting digital records of their accomplishments. However, this trend toward publicising one's achievements has also created new dynamics in the climbing community. Some argue that the focus on sharing has shifted attention away from the intrinsic value of the experience toward its external recognition. The pressure to create impressive content can sometimes overshadow the quiet, personal rewards that mountain experiences traditionally offered, leading to concerns about whether the essence of mountain climbing is being altered by the demands of social media visibility.", answer: "Publicising one's achievements" },
                { number: 4, text: "As mountain climbing has become more popular and accessible, some critics argue that our priorities have shifted in problematic ways. The emphasis on reaching summits, setting records, and achieving personal goals sometimes overshadows the fundamental importance of safety, environmental responsibility, and respect for local communities. Many experienced mountaineers express concern that the commercialization of mountain experiences has created a culture where completing challenging routes matters more than understanding the history, culture, and environmental significance of these places. The focus on individual achievement and social media recognition can lead climbers to take unnecessary risks or overlook the delicate ecosystems they traverse. When the priority becomes the accomplishment rather than the journey itself, the deeper meanings and responsibilities associated with mountain experiences may be lost, representing what some see as a wrong priority in how we approach these magnificent natural spaces.", answer: "A wrong priority" },
                { number: 5, text: "For many people who venture into mountain environments, the experience brings forth a disturbing revelation about the true state of our natural world. What was once imagined as pristine wilderness often reveals the harsh reality of human impact: trails littered with waste, ecosystems damaged by overuse, and wildlife disrupted by constant human presence. Climbers who expected to find solitude and untouched nature instead discover that even the most remote peaks show signs of human influence. This revelation extends beyond environmental concerns to include uncomfortable truths about our relationship with nature. The mountains expose how our desire for adventure and personal achievement can conflict with the very preservation of these spaces. Confronting this reality forces individuals to reconsider their own impact and question whether their pursuit of mountain experiences contributes to the degradation of places they claim to love. This disturbing revelation often leads to a crisis of conscience that challenges climbers to find more sustainable and respectful ways to engage with mountain environments.", answer: "A disturbing revelation" },
                { number: 6, text: "In response to growing awareness of environmental challenges, the mountain climbing community has developed a new focus on sustainability. This shift represents a fundamental change in how climbers approach their relationship with mountain environments. Conservation organizations, guide services, and individual climbers are now implementing practices designed to minimize environmental impact while maintaining access to these special places. The new focus on sustainability includes principles such as 'Leave No Trace,' which emphasizes packing out all waste, respecting wildlife habitats, and staying on established trails. Sustainable climbing also involves supporting local economies in mountain regions, respecting indigenous cultures and their traditional relationships with these landscapes, and contributing to conservation efforts through fees, donations, and volunteer work. This sustainability focus extends beyond individual behavior to include advocacy for policies that protect mountain ecosystems, reduce carbon footprints associated with mountain travel, and ensure that future generations can experience the same natural beauty that draws climbers today.", answer: "A new focus on sustainability" },
                { number: 7, text: "Beyond the physical challenges and environmental considerations, many people develop what they describe as an intimate relationship with mountains. This relationship transcends the temporary experiences of climbing or hiking and becomes a deep, ongoing connection that influences how individuals see themselves and their place in the world. Like any intimate relationship, this bond with mountains involves understanding, respect, and a willingness to learn. Climbers often speak of knowing a particular mountain through multiple seasons, understanding its moods and changes, and feeling a sense of belonging when they return to familiar peaks. This intimate relationship provides emotional support during difficult times, inspiration for personal growth, and a sense of identity that extends beyond the activities of climbing itself. The relationship is reciprocal in that mountains offer lessons about patience, humility, and resilience, while climbers bring attention, care, and advocacy for these natural spaces. This deep connection explains why many climbers feel protective of mountain environments and why the degradation of these places feels like a personal loss rather than merely an environmental concern.", answer: "An intimate relationship" }
            ]
        }
    },
    // Đề 4
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading part 1 - Đề 4",
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["small", "stay", "garden", "trees", "old"],
            sentences: [
                { text: "Yesterday, we visited a", gap: "small", answer: "small", after: "village." },
                { text: "We", gap: "stay", answer: "stay", after: "in a small house in the village." },
                { text: "There is a", gap: "garden", answer: "garden", after: "in the house." },
                { text: "There are a lot of", gap: "trees", answer: "trees", after: "in the garden." },
                { text: "Today, we are going to visit the", gap: "old", answer: "old", after: "buildings in this village." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - Wellness fair",
            passageTitle: "Wellness fair",
            firstSentence: "Last weekend, the community organized a special event to inspire people to live healthier lives.",
            sentences: [
                "The wellness fair took place on Saturday afternoon, promoting healthy habits and lifestyles.",
                "Over sixty participants joined the event, with Dr. Patel leading an exciting fitness workshop.",
                "The fair also featured activities such as cooking demonstrations, mindfulness sessions, and a fun run.",
                "After the workshops, prizes were given to those with the most creative health posters.",
                "Families had a great time sampling healthy snacks and learning useful tips about overall wellness."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - Making films",
            passageTitle: "Making films",
            firstSentence: "In 1985, the Grand Café in France showed the first ever commercial film.",
            sentences: [
                "Films from that period were very different from films of today.",
                "This is because they were all in black and white, and they had no sound.",
                "In addition to technical limitations, the film producers also had a limited budget.",
                "This lack of money affected mainly actors, and they didn't earn a lot of money.",
                "Things have changed over time, and some of them now earn millions of dollars after appearing in films."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading part 3 - Music festival (Music event)",
            instructions: "Four people respond in the comments section of an online magazine article about a music event. Read the texts and then answer the questions below.",
            opinions: [
                { 
                    person: "Nadia", 
                    text: "I went to the music event this year. The weather was bad at first - it rained a lot and everything was wet. I was disappointed about the weather. However, on the final day, everything improved. The performances were amazing and the crowd was so excited. I really enjoyed the final day and I'm glad I decided to go." 
                },
                { 
                    person: "Cora", 
                    text: "I attend this music event every year. This year, I found the event poorly organized and it lacked the exciting vibe I usually experience. Overall, I'm not impressed by the event this year. I won't return next year because it wasn't worth the time and effort." 
                },
                { 
                    person: "Alek", 
                    text: "I'm not keen on one particular type of music, but I attended the event anyway. I enjoyed all the music of the event and found the performances very energetic. However, I thought the fees were expensive. The ticket price was too expensive, and I ended up spending more than I expected. I hope the organizers will lower the fees for future events." 
                },
                { 
                    person: "Farhan", 
                    text: "I'm one of the band members playing at the music event. I really enjoyed meeting some of my old band members and performing together. It was great to see old friends again. However, I didn't like the location. The location was far away and difficult to get to. I hope they choose a more convenient location for the next event." 
                }
            ],
            questions: [
                { question: "Who enjoyed the final day?", answer: "Nadia" },
                { question: "Who is not impressed by the event overall?", answer: "Cora" },
                { question: "Who liked meeting old friends?", answer: "Farhan" },
                { question: "Who was disappointed about the weather?", answer: "Nadia" },
                { question: "Who thought the fees were expensive?", answer: "Alek" },
                { question: "Who liked all the music of the event?", answer: "Alek" },
                { question: "Who didn't like the location?", answer: "Farhan" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - WELLNESS TRENDS",
            passageTitle: "WELLNESS TRENDS",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining holistic health approaches",
                "Promoting mental health awareness",
                "Encouraging community fitness programs",
                "Overemphasis on trendy diets",
                "Concerns about wellness misinformation",
                "Building supportive health communities",
                "Focusing on sustainable lifestyle changes"
            ],
            paragraphs: [
                { number: 1, text: "Modern wellness trends are moving away from traditional, isolated approaches to health. Instead, there's a growing recognition that physical, mental, and emotional well-being are interconnected. This holistic perspective encourages people to consider their entire lifestyle when making health decisions, rather than focusing on single aspects like diet or exercise alone.", answer: "Redefining holistic health approaches" },
                { number: 2, text: "Mental health has gained significant attention in recent wellness discussions. More people are recognizing the importance of psychological well-being alongside physical fitness. Educational campaigns and public conversations have helped reduce stigma around mental health issues, encouraging individuals to seek support and prioritize their emotional wellness.", answer: "Promoting mental health awareness" },
                { number: 3, text: "Local communities are creating opportunities for people to exercise together through group activities and fitness programs. These initiatives bring neighbors together, making physical activity more social and enjoyable. Community fitness programs often include walking groups, outdoor yoga sessions, and team sports that foster both health and social connections.", answer: "Encouraging community fitness programs" },
                { number: 4, text: "However, some wellness trends place too much emphasis on fashionable diets that promise quick results. These trendy diets often gain popularity through social media and celebrity endorsements, but may lack scientific backing. Critics worry that focusing on the latest diet fad can distract from proven, balanced nutrition principles.", answer: "Overemphasis on trendy diets" },
                { number: 5, text: "There are growing concerns about misinformation spreading through wellness communities. With so much health information available online, it can be difficult for people to distinguish between evidence-based advice and unverified claims. This misinformation can lead to ineffective or potentially harmful health practices.", answer: "Concerns about wellness misinformation" },
                { number: 6, text: "Effective wellness approaches thrive when people support each other in their health journeys. Supportive health communities provide encouragement, share experiences, and create accountability. These networks help individuals maintain motivation and make sustainable improvements to their well-being through mutual support and understanding.", answer: "Building supportive health communities" },
                { number: 7, text: "The most successful wellness trends focus on sustainable lifestyle changes rather than short-term fixes. These approaches encourage gradual, realistic modifications that people can maintain long-term. Sustainable changes create lasting benefits and help individuals develop habits that support their health throughout their lives.", answer: "Focusing on sustainable lifestyle changes" }
            ]
        }
    },
    // Đề 5
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading plus - part 1 - Janny",
            instructions: "Read the email from Janny to her friend. Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["home", "customers", "easy", "prepare", "watch"],
            sentences: [
                { text: "Hi Jessica, I use my laptop to work from", gap: "home", answer: "home", after: "every day." },
                { text: "The café has free Wi-Fi for all", gap: "customers", answer: "customers", after: "." },
                { text: "My phone case is yellow, making it", gap: "easy", answer: "easy", after: "to spot." },
                { text: "For snacks, we", gap: "prepare", answer: "prepare", after: "popcorn and fruit smoothies." },
                { text: "On weekends, we", gap: "watch", answer: "watch", after: "videos on our smart TV." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading plus - part 2 - Cultural Festival",
            passageTitle: "Cultural Festival",
            firstSentence: "Last Sunday, the community organized a cultural festival to honor traditions and bring people together.",
            sentences: [
                "The cultural festival was held on Sunday, celebrating local traditions.",
                "About 70 people participated, with Ms. Nguyen leading a dance group.",
                "Activities included pottery workshops, folk music, and food tasting.",
                "After the main event, awards were given for the best costume.",
                "Families enjoyed the event, taking photos and sharing meals."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - a university open day",
            passageTitle: "A university open day",
            firstSentence: "This year, the university will hold its Open Day in June.",
            sentences: [
                "Before the open day, you should call or email us so that we can take your personal details.",
                "With this information, we will create an identification card for you to collect on arrival.",
                "You must show it to access the introductory talk and the morning lectures.",
                "Each visitor can join a question-and-answer session with current students.",
                "Following these presentations, you will have the opportunity to visit different departments."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading plus - part 3 - Choosing a Career",
            instructions: "Four people respond in the comments section of an online magazine article about choosing a career. Read the texts and then answer the questions below.",
            opinions: [
                { 
                    person: "Person A", 
                    text: "She had just graduated from university, but instead of immediately starting a paid job, she chose to volunteer for several charity organizations. She strongly believed that working without pay could help her gain valuable skills and real-world experience. She also felt that the personal satisfaction she received was more rewarding than money at that stage of her life. Her friends sometimes questioned her choice, but she remained confident that this path would eventually benefit her career in the long run." 
                },
                { 
                    person: "Person B", 
                    text: "From the very beginning of her studies, she had always planned to become a teacher. After finishing university, she decided to follow this career path without hesitation. She worked as a trainee in several schools and enjoyed every single moment of her training. The children, the classroom atmosphere, and even the daily challenges motivated her a lot. She described the whole process as exciting and truly rewarding, which confirmed that she had made the right career decision." 
                },
                { 
                    person: "Person C", 
                    text: "He had worked for years as a manual laborer, mainly as a plumber, but he wanted a fresh start in his career. Eventually, he decided to take a professional course to become an electrician. The program was designed to last for two months, but he was very eager to finish it earlier so that he could start working as soon as possible. Although the training required a lot of effort, he was determined to succeed. Changing jobs was not easy, but he felt it was the right move for his future." 
                },
                { 
                    person: "Person D", 
                    text: "After graduation, she faced many difficulties in finding a job because her work experience was very limited. She sent out dozens of applications but received very few replies. Finally, she managed to find some freelance opportunities online. She could complete her tasks from home in the evenings, which gave her a lot of flexibility. Although she still hoped for a permanent position, she appreciated the freedom and independence that freelance work provided." 
                }
            ],
            questions: [
                { question: "Who worked without pay?", answer: "Person A" },
                { question: "Who was enthusiastic throughout her training?", answer: "Person B" },
                { question: "Who did manual work?", answer: "Person C" },
                { question: "Who wanted to finish his training earlier?", answer: "Person C" },
                { question: "Who struggled to find a job after graduation?", answer: "Person D" },
                { question: "Who stayed in the same career path she had chosen before?", answer: "Person B" },
                { question: "Who worked in a flexible environment?", answer: "Person D" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - DIGITAL INNOVATION",
            passageTitle: "DIGITAL INNOVATION",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining leisure in the digital era",
                "Enhancing connectivity with mobile apps",
                "Promoting essential digital literacy",
                "The risks of excessive screen-based entertainment",
                "Ongoing concerns about data privacy",
                "Building inclusive and respectful online communities",
                "Prioritizing user-friendly and human-centered designs"
            ],
            paragraphs: [
                { number: 1, text: "Digital technology has fundamentally changed how people spend their free time. Traditional forms of entertainment like reading books or playing board games have been supplemented, and sometimes replaced, by digital alternatives. People now access entertainment through streaming services, online games, and social media platforms, creating new ways to relax and enjoy leisure activities.", answer: "Redefining leisure in the digital era" },
                { number: 2, text: "Mobile applications have transformed how people connect with others and access services. Communication apps allow instant messaging and video calls across distances. Service apps provide convenient access to shopping, banking, and transportation. These tools have made it easier for people to stay connected and accomplish daily tasks from anywhere.", answer: "Enhancing connectivity with mobile apps" },
                { number: 3, text: "As digital tools become essential in daily life, there's a growing need to ensure people have the skills to use them effectively. Educational programs now include digital literacy training, teaching people how to navigate online platforms safely and efficiently. These skills are becoming as important as reading and writing were in previous generations.", answer: "Promoting essential digital literacy" },
                { number: 4, text: "However, there are concerns about spending too much time on digital entertainment. Excessive screen time can lead to physical health issues, sleep problems, and reduced face-to-face social interaction. Critics worry that people, especially children, may become overly dependent on digital devices for entertainment and lose interest in other activities.", answer: "The risks of excessive screen-based entertainment" },
                { number: 5, text: "Privacy remains a major concern in the digital age. Personal information is constantly collected by apps and websites, often without users fully understanding how it's used. Data breaches and unauthorized sharing of personal information raise questions about how well digital companies protect user privacy and what rights users should have over their own data.", answer: "Ongoing concerns about data privacy" },
                { number: 6, text: "Successful digital platforms create spaces where people feel welcome and respected. These communities encourage positive interactions, discourage harmful behavior, and provide tools for users to protect themselves. Building such environments requires careful moderation, clear community guidelines, and a commitment to fostering respectful communication among diverse users.", answer: "Building inclusive and respectful online communities" },
                { number: 7, text: "The best digital innovations prioritize ease of use and human needs. Designers focus on creating interfaces that are intuitive and accessible to people with different abilities and backgrounds. These user-friendly designs ensure that technology serves people rather than requiring them to adapt to complicated systems, making digital tools more welcoming and effective for everyone.", answer: "Prioritizing user-friendly and human-centered designs" }
            ]
        }
    },
    // Đề 6
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading plus - part 1",
            instructions: "Read the email from John to her friend. Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["country", "clean", "class", "other", "words"],
            sentences: [
                { text: "The", gap: "country", answer: "country", after: "is really new to me and other students." },
                { text: "The park is really", gap: "clean", answer: "clean", after: "and we can have talks or walk there." },
                { text: "We love to have some games after", gap: "class", answer: "class", after: "." },
                { text: "I live with", gap: "other", answer: "other", after: "students who come from different countries." },
                { text: "We can learn some", gap: "words", answer: "words", after: "which are really good for speaking." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - presentation",
            passageTitle: "Presentation",
            firstSentence: "Our class is working on group presentations this week.",
            sentences: [
                "First, we prepare materials for our group presentation.",
                "Then, we present our topic for five minutes.",
                "During the presentation, we use pictures and our own words to explain the ideas.",
                "After the presentation, the other students ask questions.",
                "Finally, group members take turns answering the questions."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - social media",
            passageTitle: "Social media",
            firstSentence: "Over the past two decades, social media has transformed the way people connect and share information.",
            sentences: [
                "In the past, limited internet speeds made it difficult to stream or upload video content.",
                "Early platforms only offered simple features, such as text posts and basic images.",
                "Over the years, social media platforms have evolved significantly in both design and functionality.",
                "Modern platforms now rely on algorithms to personalize and shape each user's feed.",
                "Today, influencers earn money mainly through sponsorships and online advertisements."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading plus - part 3 - extreme sport ver 2",
            instructions: "Four people respond in the comments section of an online magazine article about extreme sports. Read the texts and then answer the questions below.",
            opinions: [
                { 
                    person: "Liam", 
                    text: "Before trying any extreme sport, I believe it's absolutely essential to train properly. These kinds of activities are exciting, but they can also be dangerous if you don't know what you're doing. I've seen people get hurt because they didn't prepare well. That's why I always make sure to take a training course and understand the safety rules before I try anything new. With the right preparation, I think extreme sports can be a great experience." 
                },
                { 
                    person: "Noah", 
                    text: "I've always been more into traditional sports like swimming, running, or playing tennis. They're fun and easy to do regularly. But a few months ago, I went bungee jumping during a holiday, and it was an incredible experience. I didn't expect to enjoy it so much! I still prefer regular sports for everyday fitness, but now I'm definitely more open to trying extreme sports once in a while for the adventure." 
                },
                { 
                    person: "Sophia", 
                    text: "What I love most about extreme sports is how they let me enjoy nature in a different way. Activities like rock climbing or mountain biking allow me to explore amazing places while challenging myself physically and mentally. It's a way to disconnect from daily life and feel completely alive. If I had more time and money, I'd love to do these kinds of sports more often — especially in wild, remote areas." 
                },
                { 
                    person: "Olivia", 
                    text: "I know some people find extreme sports exciting, but for me, they've never been important. I actually avoid them as much as possible. I don't like the idea of putting myself in danger just for fun. There are plenty of safer ways to stay active and enjoy life. I'd rather go for a walk or do yoga than jump out of a plane or climb a mountain. It's just not my thing." 
                }
            ],
            questions: [
                { question: "Who enjoy nature?", answer: "Sophia" },
                { question: "Who still like extreme sports after playing once?", answer: "Noah" },
                { question: "Who want to play more extreme sports?", answer: "Sophia" },
                { question: "Who always avoid playing extreme sports?", answer: "Olivia" },
                { question: "Who find extreme sports unimportant?", answer: "Olivia" },
                { question: "Who like traditional sports like swimming?", answer: "Noah" },
                { question: "Who find training before participating important?", answer: "Liam" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - MISSION TO MARS",
            passageTitle: "MISSION TO MARS",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "A long and challenging journey in space",
                "A truly successful outcome",
                "Only an experiment in simulation",
                "Imitating real life in outer space",
                "The many difficulties of living in space",
                "Is space really the future for mankind?",
                "A distant and mysterious new world"
            ],
            paragraphs: [
                { number: 1, text: "Traveling to Mars represents one of humanity's most ambitious undertakings. The journey itself would take several months, requiring astronauts to endure long periods in a confined spacecraft. This extended travel through space presents numerous challenges, from maintaining physical health to dealing with psychological stress during months of isolation from Earth.", answer: "A long and challenging journey in space" },
                { number: 2, text: "Despite the immense challenges, a successful Mars mission would mark a historic achievement for humanity. It would demonstrate our ability to overcome seemingly impossible obstacles and expand human presence beyond Earth. Such an accomplishment would inspire future generations and prove that ambitious goals, when pursued with dedication and innovation, can become reality.", answer: "A truly successful outcome" },
                { number: 3, text: "Before attempting a real Mars mission, scientists conduct extensive simulations. These experiments recreate conditions that astronauts might face on Mars, allowing researchers to test equipment and procedures in controlled environments. However, some critics argue that these simulations are limited and cannot fully prepare for the unpredictable nature of an actual mission.", answer: "Only an experiment in simulation" },
                { number: 4, text: "Training programs for Mars missions involve creating environments that closely resemble life in outer space. Astronauts practice living in habitats designed to mimic Martian conditions, learning to operate equipment and manage resources as they would on Mars. These realistic simulations help prepare crews for the unique challenges they'll face millions of miles from Earth.", answer: "Imitating real life in outer space" },
                { number: 5, text: "Living in space presents numerous physical and psychological difficulties. Astronauts must cope with zero gravity, radiation exposure, and the absence of Earth's protective atmosphere. Daily life requires careful management of resources like water, air, and food, while isolation from loved ones and limited communication can create significant mental stress.", answer: "The many difficulties of living in space" },
                { number: 6, text: "Some experts question whether space exploration, particularly missions to Mars, represents the best use of resources and human effort. While expanding into space offers exciting possibilities, critics argue that Earth faces pressing problems that need immediate attention. The debate continues about whether space should be humanity's next frontier or if we should focus on solving challenges closer to home.", answer: "Is space really the future for mankind?" },
                { number: 7, text: "Mars captures our imagination as a distant world that might hold secrets about the universe and life itself. Its red surface, thin atmosphere, and potential for ancient water make it a fascinating target for exploration. Scientists hope that studying this mysterious planet could provide insights into Earth's past and future, as well as answer fundamental questions about life in the universe.", answer: "A distant and mysterious new world" }
            ]
        }
    },
    // Đề 7
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading plus - part 1",
            instructions: "Read the email from Atoni to her friend. Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["farm", "exciting", "left", "street", "drink"],
            sentences: [
                { text: "I had a chance to visit", gap: "farm", answer: "farm", after: "where my uncle lives." },
                { text: "It was really", gap: "exciting", answer: "exciting", after: "to play with my cousins every day." },
                { text: "Sometimes, they", gap: "left", answer: "left", after: "me alone in a field." },
                { text: "I had to try to find the", gap: "street", answer: "street", after: "to get home." },
                { text: "We also sometimes", gap: "drink", answer: "drink", after: "cane juice when we feel tired." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - Workplace Evolution",
            passageTitle: "Workplace Evolution",
            firstSentence: "Workplaces have changed significantly from the past to the present.",
            sentences: [
                "In the past, employees followed strict nine-to-five schedules.",
                "Limited technology once restricted remote work possibilities.",
                "Modern workplaces are adopting more flexible work models.",
                "Managers now use software to track project progress remotely.",
                "Today, companies experiment with shorter workweeks to boost productivity."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading plus - part 2 - Tourism",
            passageTitle: "Tourism",
            firstSentence: "Tourism has changed significantly over time, from the way trips were planned in the past to the diverse experiences available today.",
            sentences: [
                "Modern tourism now offers far more options than in the past.",
                "In earlier times, travelers often relied mainly on guidebooks and paper maps.",
                "However, limited technology back then also meant fewer booking options were available.",
                "Today, online platforms make it much easier to plan carefully and book trips quickly.",
                "In addition, local guides now offer personalized tours for visitors, creating more authentic experiences."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading part 3 - jobs and training",
            instructions: "Four people respond in the comments section of an online magazine article about jobs and training. Read the texts and then answer the questions below.",
            opinions: [
                { person: "Person A", text: "After graduating from school, I was undecided about what to do. I joined several volunteer programs to gain experience. I found volunteering helpful in choosing a career. It provided valuable experiences and allowed me to help people." },
                { person: "Person B", text: "I knew I wanted to become a teacher while I was still at school. I studied education at university, which was free in my country. I completed practical training in schools, which I found useful for my future job." },
                { person: "Person C", text: "When I was young, I helped a plumber neighbor. I learned tasks like measuring pipes and using tools, which felt natural. Later, I studied for two years at university to become an electrician. Now I regret not having chosen shorter courses in the field instead." },
                { person: "Person D", text: "Finding a job after graduation was very difficult due to a lack of experience. I was rejected by many companies. Eventually, I worked for a gaming company from home. I worked at night while my colleagues worked during the day, which I was fine with." }
            ],
            questions: [
                { question: "Who thinks they benefited from working for free?", answer: "Person A" },
                { question: "Who did not want to choose another job?", answer: "Person B" },
                { question: "Who enjoys working during their training?", answer: "Person B" },
                { question: "Who likes working with their hands?", answer: "Person C" },
                { question: "Who thinks their training was too long?", answer: "Person C" },
                { question: "Who thinks it is very hard to get your first job?", answer: "Person D" },
                { question: "Who enjoys working in a flexible working environment?", answer: "Person D" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - DIGITAL TRANSFORMATION",
            passageTitle: "DIGITAL TRANSFORMATION",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining business",
                "Enhancing productivity",
                "Promoting digital training",
                "Over-reliance",
                "Concerns about cybersecurity risks",
                "Building inclusive digital",
                "Focusing on ethical technology"
            ],
            paragraphs: [
                { number: 1, text: "Digital transformation has fundamentally changed how businesses operate and compete in the modern world. Companies are reimagining their processes, customer interactions, and business models to leverage new technologies. This shift requires organizations to adapt quickly or risk being left behind in an increasingly digital marketplace.", answer: "Redefining business" },
                { number: 2, text: "Technology tools and automation have significantly improved efficiency across various industries. Cloud computing, artificial intelligence, and data analytics enable companies to work faster and make better decisions. Employees can accomplish more in less time, leading to increased output and better resource utilization.", answer: "Enhancing productivity" },
                { number: 3, text: "As digital skills become essential in the workplace, organizations are investing in training programs to help employees adapt. These programs teach practical skills like using new software, understanding data analytics, and working with digital tools effectively. Companies recognize that well-trained employees are crucial for successful digital transformation.", answer: "Promoting digital training" },
                { number: 4, text: "However, there are concerns about becoming too dependent on digital systems. When technology fails or systems go down, businesses can face significant disruptions. Some organizations struggle to function without their digital infrastructure, creating vulnerability in critical operations.", answer: "Over-reliance" },
                { number: 5, text: "Security threats have become a major worry as more data moves online. Cyberattacks, data breaches, and privacy violations are growing concerns for businesses and individuals. Organizations must invest heavily in security measures to protect sensitive information and maintain trust with customers.", answer: "Concerns about cybersecurity risks" },
                { number: 6, text: "Digital transformation should be accessible to everyone, regardless of their background or technical skills. Companies are working to create user-friendly interfaces and provide support for those who may struggle with new technologies. Ensuring digital inclusion helps bridge the gap between different groups and creates equal opportunities.", answer: "Building inclusive digital" },
                { number: 7, text: "As technology becomes more powerful, there's a growing emphasis on developing solutions that respect human values and well-being. This includes considering the ethical implications of automation, artificial intelligence, and data usage. Technology should serve people's needs while maintaining respect for privacy, fairness, and human dignity.", answer: "Focusing on ethical technology" }
            ]
        }
    },
    // Đề 8
    {
        part1: {
            title: `[Mai Hien key 6.0] - Reading part 1 - Đề 8`,
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["clear", "sun", "working", "enjoyable", "read"],
            sentences: [
                { text: "The water is so", gap: "clear", answer: "clear", after: "and I can see the fish." },
                { text: "The", gap: "sun", answer: "sun", after: "is always out and it's very hot." },
                { text: "After", gap: "working", answer: "working", after: "so hard, I need to rest." },
                { text: "I am having an", gap: "enjoyable", answer: "enjoyable", after: "holiday." },
                { text: "Hope to", gap: "read", answer: "read", after: "a letter from you soon." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading plus - part 2 - Tech fair",
            passageTitle: "Tech fair",
            firstSentence: "This weekend, our city organized a special tech fair to highlight creativity and innovation.",
            sentences: [
                "The tech fair was held on Saturday morning, showcasing exciting new gadgets.",
                "Over 50 exhibitors took part, with Dr. Lee presenting an impressive robot demo.",
                "The fair featured engaging activities such as VR gaming, coding workshops, and thrilling drone races.",
                "After the demonstrations, awards were presented for the most innovative product.",
                "Visitors enjoyed complimentary coffee and snacks while exploring the interactive exhibits."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - Company Wellness Day",
            passageTitle: "Company Wellness Day",
            firstSentence: "Our company organized a special wellness day for all employees.",
            sentences: [
                "The wellness day was held on Friday, promoting work-life balance.",
                "Over 50 employees participated, with Mr. Nguyen leading a stress-relief workshop.",
                "Activities included team yoga, time management talks, and a group walk.",
                "After the workshops, awards were given for the best wellness idea.",
                "Employees enjoyed healthy snacks and shared tips for managing stress."
            ]
        },
        part4: {
            title: "[Mai Hien key 6.0] - Reading plus - part 3 - free time activities",
            instructions: "Four people respond in the comments section of an online magazine article about free time activities. Read the texts and then answer the questions below.",
            opinions: [
                { person: "Person A", text: "As a teenager, I truly enjoyed recording short stories on a simple tape recorder together with my cousins. We often spent hours coming up with ideas and acting them out. Now, we create podcasts using modern apps that simplify editing and publishing, making the whole process smoother and more enjoyable. Although the technology helps a lot, we still devote plenty of time to planning episodes carefully. For me, podcasting has become a creative way to share ideas and connect with others on a deeper level." },
                { person: "Person B", text: "When I was young, I spent many sunny afternoons flying kites in the park with my siblings. Watching my kite soar high into the sky always filled me with joy and excitement. Those simple but memorable moments taught me valuable lessons about patience and coordination. Even today, whenever I see children in the park with their kites, I feel a sense of nostalgia and warmth. Those carefree days remain some of my most cherished childhood memories." },
                { person: "Person C", text: "As a kid, I was completely fascinated by solving jigsaw puzzles with my family. The challenge of carefully fitting the pieces together gave me both fun and satisfaction. Now that I am older, I find myself playing strategy-based video games, which I see as a kind of digital puzzle. They are not only entertaining but also help to keep my mind sharp and focused. These games give me the same sense of challenge and achievement that puzzles once did, but in a more dynamic and interactive form." },
                { person: "Person D", text: "Growing up near a beautiful lake, I used to go swimming almost every day with my friends. It was my favorite way to spend time outdoors, although rainy days often kept me inside feeling restless and bored. Nowadays, I practice yoga at home as a way to relax and recharge after long hours of work. Yoga has taught me how to stay calm, balanced, and focused, and it has become an important part of my daily routine for both my physical and mental health." }
            ],
            questions: [
                { question: "Who now prefers yoga?", answer: "Person D" },
                { question: "Who finds modern apps easier to use?", answer: "Person A" },
                { question: "Who loved kite flying as a child?", answer: "Person B" },
                { question: "Who loved swimming as a child?", answer: "Person D" },
                { question: "Who loved puzzles as a child?", answer: "Person C" },
                { question: "Who enjoys podcasting with friends?", answer: "Person A" },
                { question: "Who now enjoys video games?", answer: "Person C" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading part 4 - Đề 8",
            passageTitle: "WELLNESS TRENDS",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining holistic health approaches",
                "Promoting mental health awareness",
                "Encouraging community fitness programs",
                "Overemphasis on trendy diets",
                "Concerns about wellness misinformation",
                "Building supportive health communities",
                "Focusing on sustainable lifestyle changes"
            ],
            paragraphs: [
                { number: 1, text: "Wellness is no longer just about physical health; it encompasses mental, emotional, and spiritual well-being. This broader perspective encourages individuals to look at all aspects of their lives to achieve true balance and health. It moves beyond simple fitness routines to a more integrated approach.", answer: "Redefining holistic health approaches" },
                { number: 2, text: "There's a growing recognition of the importance of mental health, with more initiatives aimed at reducing stigma and increasing access to support. Campaigns are actively working to educate the public about mental well-being, encouraging open conversations and providing resources for those in need. This shift helps create a more understanding society.", answer: "Promoting mental health awareness" },
                { number: 3, text: "Local communities are increasingly organizing free or low-cost fitness activities, making healthy living accessible to everyone. These programs range from group yoga sessions in parks to community running clubs, fostering a sense of togetherness while promoting physical activity. Such initiatives help build healthier neighborhoods.", answer: "Encouraging community fitness programs" },
                { number: 4, text: "The wellness industry often sees a rapid rise and fall of trendy diets, many of which lack scientific backing and can be unsustainable. People are frequently bombarded with new eating plans promising quick results, leading to confusion and potential health risks. This focus on fads can distract from balanced, long-term nutrition.", answer: "Overemphasis on trendy diets" },
                { number: 5, text: "With the proliferation of online information, distinguishing credible health advice from misinformation has become a significant challenge. Social media platforms, in particular, can spread unverified claims about wellness products and practices, leading to public confusion and distrust. It's crucial for individuals to critically evaluate sources.", answer: "Concerns about wellness misinformation" },
                { number: 6, text: "Creating environments where people feel supported in their health journeys is vital. This includes online forums, local support groups, and workplaces that prioritize employee well-being. When individuals feel connected and understood, they are more likely to maintain healthy habits and seek help when needed. These communities offer invaluable encouragement.", answer: "Building supportive health communities" },
                { number: 7, text: "Instead of quick fixes, there's a growing emphasis on adopting lifestyle changes that are sustainable over the long term. This means focusing on habits that can be maintained consistently, rather than extreme measures that are difficult to keep up. The goal is to integrate healthy choices seamlessly into daily life for lasting benefits.", answer: "Focusing on sustainable lifestyle changes" }
            ]
        }
    },
    // Đề 9
    {
        part1: {
            title: `[Mai Hien key 6.0] - Reading part 1 - Đề 9`,
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["clear", "sun", "working", "enjoyable", "read"],
            sentences: [
                { text: "The water is so", gap: "clear", answer: "clear", after: "and I can see the fish." },
                { text: "The", gap: "sun", answer: "sun", after: "is always out and it's very hot." },
                { text: "After", gap: "working", answer: "working", after: "so hard, I need to rest." },
                { text: "I am having an", gap: "enjoyable", answer: "enjoyable", after: "holiday." },
                { text: "Hope to", gap: "read", answer: "read", after: "a letter from you soon." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading plus - part 2 - Mae's Journey (The first African American woman in space)",
            passageTitle: "Mae's Journey (The first African American woman in space)",
            firstSentence: "Mae's father was a skilled worker and her mother was a teacher.",
            sentences: [
                "With the support of her parents, she went to the university and studied science.",
                "Her degree in this subject enabled her to get a place on a training course in the USA.",
                "This was about space and it helped Mae to become one of the members of a research team.",
                "As a part of this group, she travelled to space and did a lot of experiments there.",
                "Some of those were about growing plants and some animals in a spaceship."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading plus - part 2 - End of term project",
            passageTitle: "End of term project",
            firstSentence: "This year we have studied several chapters about the local history.",
            sentences: [
                "Your end of term project needs to focus on at least two of them.",
                "It has to include relevant pictures and your own written text about the topic.",
                "You then have to use these pictures and your written work to create a presentation for the class.",
                "This talk will give your key points and it should be around five minutes.",
                "After this time, other students will be able to ask some questions and you will answer those."
            ]
        },
        part4: {
            title: `[Mai Hien key 6.0] - Reading part 3 - Đề 9`,
            instructions: "Four people respond in the comments section of an online magazine article about childhood memories. Read the texts and then answer the questions below.",
            opinions: [
                { person: "Person A", text: "Growing up, I loved listening to my grandfather's folktales by the fireplace. Those stories taught me the value of imagination. Nowadays, I share stories with my nieces using interactive storybooks on tablets. I appreciate how tradition blends with modern technology for intergenerational storytelling." },
                { person: "Person B", text: "I remember riding my bike through the village with friends, feeling free and independent. Those adventures were unforgettable. Today's children spend more time indoors with screens. I miss those carefree outdoor days and the value of friendship and the outdoors." },
                { person: "Person C", text: "As a child, I was passionate about sketching animals, trees, and landscapes with crayons and pencils. That passion evolved into my career as a graphic designer. Now I use digital tools for precision, but the creative feeling remains the same. Drawing has always been my source of happiness and expression." },
                { person: "Person D", text: "Growing up, I loved camping trips in the countryside with my family. We set up tents, cooked outdoors, and spent hours staring at the stars. Those experiences made me feel close to nature and gave me lasting memories. Of course, bad weather sometimes forced us to stay indoors, which always left me a little disappointed. Nowadays, instead of outdoor adventures, I enjoy visiting museums and exhibitions. Learning about history through artifacts and stories gives me the same sense of wonder, but in a calmer and more comfortable environment." }
            ],
            questions: [
                { question: "Who loved camping as a child?", answer: "Person D" },
                { question: "Who enjoys storytelling with family?", answer: "Person A" },
                { question: "Who loved drawing as a child?", answer: "Person C" },
                { question: "Who loved bike riding as a child?", answer: "Person B" },
                { question: "Who now enjoys graphic design?", answer: "Person C" },
                { question: "Who finds modern books more engaging?", answer: "Person A" },
                { question: "Who now prefers museum visits?", answer: "Person D" }
            ]
        },
        part5: {
            title: "[Mai Hien key 6.0] - Reading plus - part 4 - WOMEN IN MATHEMATICS",
            passageTitle: "WOMEN IN MATHEMATICS",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7) from the drop-down box. There is one more heading than you need.",
            headings: [
                "Gender obscures achievements",
                "Acknowledging achievement of a pioneer",
                "Men unfairly credited",
                "A long career showing exceptional ability",
                "Labels can change perspective on people",
                "Attempting to create a gender balance",
                "Uniformity as a Disadvantage",
                "Historical context of women in science"
            ],
            paragraphs: [
                { number: 1, text: "For many years, the gender of a mathematician often overshadowed her achievements. Women's work was overlooked simply because society paid more attention to their identity as women than to their intellectual contributions.", answer: "Gender obscures achievements" },
                { number: 2, text: "One pioneering woman finally received recognition for her achievement in mathematics. She opened the way for future generations, proving that women could excel at the highest academic level.", answer: "Acknowledging achievement of a pioneer" },
                { number: 3, text: "There were times when the credit for discoveries made by women was given to men. Such unfair practices delayed recognition of women's true role in the history of mathematics.", answer: "Men unfairly credited" },
                { number: 4, text: "One mathematician had a long career marked by exceptional ability. Despite challenges, she consistently produced influential work, leaving an important legacy in the field.", answer: "A long career showing exceptional ability" },
                { number: 5, text: "The way society labels people strongly affects how their work is valued. Changing these labels has gradually shifted perspectives, allowing women mathematicians to be seen more fairly.", answer: "Labels can change perspective on people" },
                { number: 6, text: "Efforts are now directed at creating gender balance in universities and research. Programs encourage women to enter mathematics, ensuring more equal opportunities for future scholars.", answer: "Attempting to create a gender balance" },
                { number: 7, text: "When everyone is expected to follow a single uniform model of success, it often becomes a disadvantage. Women's different approaches and experiences should be valued instead of being forced into sameness.", answer: "Uniformity as a Disadvantage" }
            ]
        }
    },
    // Đề 10
    {
        part1: {
            title: `[Mai Hien key 6.0] - Reading part 1 - Đề 10`,
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["clear", "sun", "working", "enjoyable", "read"],
            sentences: [
                { text: "The water is so", gap: "clear", answer: "clear", after: "and I can see the fish." },
                { text: "The", gap: "sun", answer: "sun", after: "is always out and it's very hot." },
                { text: "After", gap: "working", answer: "working", after: "so hard, I need to rest." },
                { text: "I am having an", gap: "enjoyable", answer: "enjoyable", after: "holiday." },
                { text: "Hope to", gap: "read", answer: "read", after: "a letter from you soon." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading plus - part 2 - Internet of Things (IoT)",
            passageTitle: "Internet of Things (IoT)",
            firstSentence: "This article introduces the growing impact of the Internet of Things on our daily lives.",
            sentences: [
                "The Internet of Things connects everyday devices to enhance functionality.",
                "Early IoT devices were limited by slow internet speeds and compatibility issues.",
                "High development costs restricted IoT adoption in the past.",
                "Engineers now design smart devices for homes and industries.",
                "Modern IoT systems enable real-time data monitoring and automation."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 3 - Family Sport Day",
            passageTitle: "Family Sport Day",
            firstSentence: "It started early on Saturday morning with a ten-mile race for adults.",
            sentences: [
                "It started early on Saturday morning with a ten-mile race for adults",
                "Sixty men and women ran in this, and Ms Kamur won with a very fast time.",
                "After receiving the prize, the children's activities and competitions began.",
                "These activities included football, jumping, and swimming, and they had lots of fun.",
                "They were all very hungry after all these, so they enjoyed tasty food and drinks with their parents."
            ]
        },
        part4: {
            title: `[Mai Hien key 6.0] - Reading part 3 - Đề 10`,
            instructions: "Four people respond in the comments section of an online magazine article about childhood memories. Read the texts and then answer the questions below.",
            opinions: [
                { person: "Person A", text: "Growing up, I loved listening to my grandfather's folktales by the fireplace. Those stories taught me the value of imagination. Nowadays, I share stories with my nieces using interactive storybooks on tablets. I appreciate how tradition blends with modern technology for intergenerational storytelling." },
                { person: "Person B", text: "I remember riding my bike through the village with friends, feeling free and independent. Those adventures were unforgettable. Today's children spend more time indoors with screens. I miss those carefree outdoor days and the value of friendship and the outdoors." },
                { person: "Person C", text: "As a child, I was passionate about sketching animals, trees, and landscapes with crayons and pencils. That passion evolved into my career as a graphic designer. Now I use digital tools for precision, but the creative feeling remains the same. Drawing has always been my source of happiness and expression." },
                { person: "Person D", text: "Growing up, I loved camping trips in the countryside with my family. We set up tents, cooked outdoors, and spent hours staring at the stars. Those experiences made me feel close to nature and gave me lasting memories. Of course, bad weather sometimes forced us to stay indoors, which always left me a little disappointed. Nowadays, instead of outdoor adventures, I enjoy visiting museums and exhibitions. Learning about history through artifacts and stories gives me the same sense of wonder, but in a calmer and more comfortable environment." }
            ],
            questions: [
                { question: "Who loved camping as a child?", answer: "Person D" },
                { question: "Who enjoys storytelling with family?", answer: "Person A" },
                { question: "Who loved drawing as a child?", answer: "Person C" },
                { question: "Who loved bike riding as a child?", answer: "Person B" },
                { question: "Who now enjoys graphic design?", answer: "Person C" },
                { question: "Who finds modern books more engaging?", answer: "Person A" },
                { question: "Who now prefers museum visits?", answer: "Person D" }
            ]
        },
        part5: {
            title: `[Mai Hien key 6.0] - Reading part 4 - Đề 10`,
            passageTitle: "CULTURAL EXCHANGE",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining global cultural understanding",
                "Encouraging cross-cultural festivals",
                "Promoting language exchange programs",
                "Overemphasis on commercial tourism",
                "Concerns about cultural preservation",
                "Building mutual respect among communities",
                "Focusing on authentic cultural experiences"
            ],
            paragraphs: [
                { number: 1, text: "Cultural exchange has become increasingly important in our globalized world. As people from different backgrounds interact more frequently, there is a growing need to understand and appreciate diverse cultural perspectives. This understanding helps break down barriers and fosters international cooperation.", answer: "Redefining global cultural understanding" },
                { number: 2, text: "Many communities organize festivals that celebrate their unique traditions while welcoming others to participate. These events provide opportunities for people to experience different foods, music, dances, and customs firsthand. Such celebrations create lasting memories and promote cross-cultural friendships.", answer: "Encouraging cross-cultural festivals" },
                { number: 3, text: "Language is a key component of culture, and learning another language opens doors to understanding different worldviews. Many programs now connect native speakers with learners, allowing them to practice together and share cultural insights. These exchanges go beyond vocabulary and grammar, creating meaningful connections between people.", answer: "Promoting language exchange programs" },
                { number: 4, text: "However, some critics argue that modern tourism often prioritizes profit over authentic cultural experiences. Tourist attractions may be overly commercialized, offering superficial representations of local culture designed to entertain rather than educate. This approach can distort the true essence of cultural traditions.", answer: "Overemphasis on commercial tourism" },
                { number: 5, text: "There are legitimate concerns that rapid globalization might lead to the loss of unique cultural identities. As younger generations adopt global trends, traditional practices, languages, and customs risk being forgotten. Communities must find ways to preserve their heritage while embracing positive aspects of change.", answer: "Concerns about cultural preservation" },
                { number: 6, text: "Successful cultural exchange requires mutual respect and open-mindedness. When people approach different cultures with genuine curiosity and respect, they build bridges rather than walls. This foundation of respect enables deeper understanding and creates harmonious relationships between diverse groups.", answer: "Building mutual respect among communities" },
                { number: 7, text: "The most meaningful cultural exchanges happen when people engage with local communities in authentic settings. Instead of just visiting tourist sites, travelers are encouraged to participate in daily life, learn traditional crafts, and share meals with local families. These genuine interactions provide rich, transformative experiences.", answer: "Focusing on authentic cultural experiences" }
            ]
        }
    },
    // Đề 11
    {
        part1: {
            title: `[Mai Hien key 6.0] - Reading part 1 - Đề 11`,
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["clear", "sun", "working", "enjoyable", "read"],
            sentences: [
                { text: "The water is so", gap: "clear", answer: "clear", after: "and I can see the fish." },
                { text: "The", gap: "sun", answer: "sun", after: "is always out and it's very hot." },
                { text: "After", gap: "working", answer: "working", after: "so hard, I need to rest." },
                { text: "I am having an", gap: "enjoyable", answer: "enjoyable", after: "holiday." },
                { text: "Hope to", gap: "read", answer: "read", after: "a letter from you soon." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - End Term projects",
            passageTitle: "End Term projects",
            firstSentence: "For end of term project, you need to choose at least 2 of these.",
            sentences: [
                "It needs to include relevant images and your own text about the topic.",
                "Then you need to use images and written work to create a presentation.",
                "Your presentation offer your key points and you have around 5 minutes to talk.",
                "After this time, other students are able to ask questions and you need to answer them."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - College Welcoming Day",
            passageTitle: "College Welcoming Day",
            firstSentence: "The day starts at 10 a.m in the morning with a short presentation.",
            sentences: [
                "The day starts at 10 a.m in the morning with a short presentation.",
                "At the end of this talk, you will meet the heads of departments and teachers.",
                "These staff members will give you a guided tour in the buildings and our sport facilities in small groups.",
                "During this visit, you will need to stay with these students until lunch break.",
                "This meal will be provided on the second floor of the engineering building."
            ]
        },
        part4: {
            title: `[Mai Hien key 6.0] - Reading part 3 - Đề 11`,
            instructions: "Four people respond in the comments section of an online magazine article about childhood memories. Read the texts and then answer the questions below.",
            opinions: [
                { person: "Person A", text: "Growing up, I loved listening to my grandfather's folktales by the fireplace. Those stories taught me the value of imagination. Nowadays, I share stories with my nieces using interactive storybooks on tablets. I appreciate how tradition blends with modern technology for intergenerational storytelling." },
                { person: "Person B", text: "I remember riding my bike through the village with friends, feeling free and independent. Those adventures were unforgettable. Today's children spend more time indoors with screens. I miss those carefree outdoor days and the value of friendship and the outdoors." },
                { person: "Person C", text: "As a child, I was passionate about sketching animals, trees, and landscapes with crayons and pencils. That passion evolved into my career as a graphic designer. Now I use digital tools for precision, but the creative feeling remains the same. Drawing has always been my source of happiness and expression." },
                { person: "Person D", text: "Growing up, I loved camping trips in the countryside with my family. We set up tents, cooked outdoors, and spent hours staring at the stars. Those experiences made me feel close to nature and gave me lasting memories. Of course, bad weather sometimes forced us to stay indoors, which always left me a little disappointed. Nowadays, instead of outdoor adventures, I enjoy visiting museums and exhibitions. Learning about history through artifacts and stories gives me the same sense of wonder, but in a calmer and more comfortable environment." }
            ],
            questions: [
                { question: "Who loved camping as a child?", answer: "Person D" },
                { question: "Who enjoys storytelling with family?", answer: "Person A" },
                { question: "Who loved drawing as a child?", answer: "Person C" },
                { question: "Who loved bike riding as a child?", answer: "Person B" },
                { question: "Who now enjoys graphic design?", answer: "Person C" },
                { question: "Who finds modern books more engaging?", answer: "Person A" },
                { question: "Who now prefers museum visits?", answer: "Person D" }
            ]
        },
        part5: {
            title: `[Mai Hien key 6.0] - Reading part 4 - Đề 11`,
            passageTitle: "CULTURAL EXCHANGE",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining global cultural understanding",
                "Encouraging cross-cultural festivals",
                "Promoting language exchange programs",
                "Overemphasis on commercial tourism",
                "Concerns about cultural preservation",
                "Building mutual respect among communities",
                "Focusing on authentic cultural experiences"
            ],
            paragraphs: [
                { number: 1, text: "Cultural exchange has become increasingly important in our globalized world. As people from different backgrounds interact more frequently, there is a growing need to understand and appreciate diverse cultural perspectives. This understanding helps break down barriers and fosters international cooperation.", answer: "Redefining global cultural understanding" },
                { number: 2, text: "Many communities organize festivals that celebrate their unique traditions while welcoming others to participate. These events provide opportunities for people to experience different foods, music, dances, and customs firsthand. Such celebrations create lasting memories and promote cross-cultural friendships.", answer: "Encouraging cross-cultural festivals" },
                { number: 3, text: "Language is a key component of culture, and learning another language opens doors to understanding different worldviews. Many programs now connect native speakers with learners, allowing them to practice together and share cultural insights. These exchanges go beyond vocabulary and grammar, creating meaningful connections between people.", answer: "Promoting language exchange programs" },
                { number: 4, text: "However, some critics argue that modern tourism often prioritizes profit over authentic cultural experiences. Tourist attractions may be overly commercialized, offering superficial representations of local culture designed to entertain rather than educate. This approach can distort the true essence of cultural traditions.", answer: "Overemphasis on commercial tourism" },
                { number: 5, text: "There are legitimate concerns that rapid globalization might lead to the loss of unique cultural identities. As younger generations adopt global trends, traditional practices, languages, and customs risk being forgotten. Communities must find ways to preserve their heritage while embracing positive aspects of change.", answer: "Concerns about cultural preservation" },
                { number: 6, text: "Successful cultural exchange requires mutual respect and open-mindedness. When people approach different cultures with genuine curiosity and respect, they build bridges rather than walls. This foundation of respect enables deeper understanding and creates harmonious relationships between diverse groups.", answer: "Building mutual respect among communities" },
                { number: 7, text: "The most meaningful cultural exchanges happen when people engage with local communities in authentic settings. Instead of just visiting tourist sites, travelers are encouraged to participate in daily life, learn traditional crafts, and share meals with local families. These genuine interactions provide rich, transformative experiences.", answer: "Focusing on authentic cultural experiences" }
            ]
        }
    },
    // Đề 12
    {
        part1: {
            title: "[Mai Hien key 6.0] - Reading part 1 - Đề 12",
            instructions: "Choose one word from the list for each gap. The first one is done for you.",
            wordList: ["station", "stops", "green", "dinner", "films"],
            sentences: [
                { text: "Tomorrow, I have to go to the main bus", gap: "station", answer: "station", after: "to meet my cousin." },
                { text: "Luckily, one of the bus", gap: "stops", answer: "stops", after: "is very close to my house." },
                { text: "My house is easy to find - it's", gap: "green", answer: "green", after: "and stands out from the others." },
                { text: "This evening I'll make some eggs for", gap: "dinner", answer: "dinner", after: "because it's quick and simple." },
                { text: "After that, we can relax and watch some", gap: "films", answer: "films", after: "together on TV." }
            ]
        },
        part2: {
            title: "[Mai Hien key 6.0] - Reading part 2 - Music show at the park",
            passageTitle: "Music show at the park",
            firstSentence: "The local authority planned, sponsored, and paid for everything.",
            sentences: [
                "Because of this, it was free and five thousand people attended it.",
                "Many of them arrived early and visited nearby shops while they were waiting for it to begin.",
                "The staff there had a busy day, but they were able to close early and watch the famous singer perform.",
                "He performed for two hours and everyone had great fun."
            ]
        },
        part3: {
            title: "[Mai Hien key 6.0] - Reading part 2 - A singer",
            passageTitle: "A singer",
            firstSentence: "Before becoming famous at a young age, he studied art and music at high school.",
            sentences: [
                "During this education, he started to perform on stage.",
                "During his performances on stage, he likes to wear colorful clothes and paint his face.",
                "This strange ways of dressing and his songs attracted people's attention.",
                "They started to follow him on social media and he is now very famous."
            ]
        },
        part4: {
            title: `[Mai Hien key 6.0] - Reading part 3 - Đề 12`,
            instructions: "Four people respond in the comments section of an online magazine article about childhood memories. Read the texts and then answer the questions below.",
            opinions: [
                { person: "Person A", text: "Growing up, I loved listening to my grandfather's folktales by the fireplace. Those stories taught me the value of imagination. Nowadays, I share stories with my nieces using interactive storybooks on tablets. I appreciate how tradition blends with modern technology for intergenerational storytelling." },
                { person: "Person B", text: "I remember riding my bike through the village with friends, feeling free and independent. Those adventures were unforgettable. Today's children spend more time indoors with screens. I miss those carefree outdoor days and the value of friendship and the outdoors." },
                { person: "Person C", text: "As a child, I was passionate about sketching animals, trees, and landscapes with crayons and pencils. That passion evolved into my career as a graphic designer. Now I use digital tools for precision, but the creative feeling remains the same. Drawing has always been my source of happiness and expression." },
                { person: "Person D", text: "Growing up, I loved camping trips in the countryside with my family. We set up tents, cooked outdoors, and spent hours staring at the stars. Those experiences made me feel close to nature and gave me lasting memories. Of course, bad weather sometimes forced us to stay indoors, which always left me a little disappointed. Nowadays, instead of outdoor adventures, I enjoy visiting museums and exhibitions. Learning about history through artifacts and stories gives me the same sense of wonder, but in a calmer and more comfortable environment." }
            ],
            questions: [
                { question: "Who loved camping as a child?", answer: "Person D" },
                { question: "Who enjoys storytelling with family?", answer: "Person A" },
                { question: "Who loved drawing as a child?", answer: "Person C" },
                { question: "Who loved bike riding as a child?", answer: "Person B" },
                { question: "Who now enjoys graphic design?", answer: "Person C" },
                { question: "Who finds modern books more engaging?", answer: "Person A" },
                { question: "Who now prefers museum visits?", answer: "Person D" }
            ]
        },
        part5: {
            title: `[Mai Hien key 6.0] - Reading part 4 - Đề 12`,
            passageTitle: "CULTURAL EXCHANGE",
            instructions: "Read the passage quickly. Choose a heading for each numbered paragraph (1-7). There is one more heading than you need.",
            headings: [
                "Redefining global cultural understanding",
                "Encouraging cross-cultural festivals",
                "Promoting language exchange programs",
                "Overemphasis on commercial tourism",
                "Concerns about cultural preservation",
                "Building mutual respect among communities",
                "Focusing on authentic cultural experiences"
            ],
            paragraphs: [
                { number: 1, text: "Cultural exchange has become increasingly important in our globalized world. As people from different backgrounds interact more frequently, there is a growing need to understand and appreciate diverse cultural perspectives. This understanding helps break down barriers and fosters international cooperation.", answer: "Redefining global cultural understanding" },
                { number: 2, text: "Many communities organize festivals that celebrate their unique traditions while welcoming others to participate. These events provide opportunities for people to experience different foods, music, dances, and customs firsthand. Such celebrations create lasting memories and promote cross-cultural friendships.", answer: "Encouraging cross-cultural festivals" },
                { number: 3, text: "Language is a key component of culture, and learning another language opens doors to understanding different worldviews. Many programs now connect native speakers with learners, allowing them to practice together and share cultural insights. These exchanges go beyond vocabulary and grammar, creating meaningful connections between people.", answer: "Promoting language exchange programs" },
                { number: 4, text: "However, some critics argue that modern tourism often prioritizes profit over authentic cultural experiences. Tourist attractions may be overly commercialized, offering superficial representations of local culture designed to entertain rather than educate. This approach can distort the true essence of cultural traditions.", answer: "Overemphasis on commercial tourism" },
                { number: 5, text: "There are legitimate concerns that rapid globalization might lead to the loss of unique cultural identities. As younger generations adopt global trends, traditional practices, languages, and customs risk being forgotten. Communities must find ways to preserve their heritage while embracing positive aspects of change.", answer: "Concerns about cultural preservation" },
                { number: 6, text: "Successful cultural exchange requires mutual respect and open-mindedness. When people approach different cultures with genuine curiosity and respect, they build bridges rather than walls. This foundation of respect enables deeper understanding and creates harmonious relationships between diverse groups.", answer: "Building mutual respect among communities" },
                { number: 7, text: "The most meaningful cultural exchanges happen when people engage with local communities in authentic settings. Instead of just visiting tourist sites, travelers are encouraged to participate in daily life, learn traditional crafts, and share meals with local families. These genuine interactions provide rich, transformative experiences.", answer: "Focusing on authentic cultural experiences" }
            ]
        }
    }
];

