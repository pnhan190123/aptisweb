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
                "For end of term project, you need to choose at least 2 of these.",
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
                "Before becoming famous at a young age, he studied art and music at high school.",
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

// Listening data structure
const listeningData = {
    exam11: {
        title: "LISTENING : TRỘN 11",
        questions: [
            {
                number: 1,
                question: "tại sao cô ấy trở thành nhà khoa học?",
                options: [
                    { letter: "A", text: "A large stone", explanation: "Đúng vì trong bài nghe đề cập đến việc cô ấy tìm thấy một hòn đá lớn khi còn nhỏ, điều này đã khơi dậy niềm đam mê khoa học địa chất" },
                    { letter: "B", text: "A beautiful flower", explanation: "Sai vì không có đề cập đến hoa trong bài nghe" },
                    { letter: "C", text: "A science teacher", explanation: "Sai vì giáo viên khoa học không phải lý do cô ấy trở thành nhà khoa học" },
                    { letter: "D", text: "A family tradition", explanation: "Sai vì không có đề cập đến truyền thống gia đình" }
                ],
                answer: "A",
                tip: "Nhớ: A = A large stone (hòn đá lớn)",
                explanation: "Đáp án đúng là A (A large stone) vì trong đoạn nghe, cô ấy kể lại rằng khi còn nhỏ, việc tìm thấy một hòn đá lớn đã khơi dậy niềm đam mê và tò mò về khoa học địa chất, dẫn đến quyết định trở thành nhà khoa học."
            },
            {
                number: 2,
                question: "khi nào được chơi đá bóng ở trường học?",
                options: [
                    { letter: "A", text: "Monday morning", explanation: "Sai vì không phải sáng thứ Hai" },
                    { letter: "B", text: "Wednesday afternoon", explanation: "Đúng vì trong bài nghe nói rõ là chiều thứ Tư" },
                    { letter: "C", text: "Friday evening", explanation: "Sai vì không phải tối thứ Sáu" },
                    { letter: "D", text: "Saturday morning", explanation: "Sai vì không phải sáng thứ Bảy" }
                ],
                answer: "B",
                tip: "Nhớ: B = Wednesday afternoon (chiều thứ Tư)",
                explanation: "Đáp án đúng là B (Wednesday afternoon) vì trong đoạn nghe, thầy giáo thông báo rõ ràng rằng học sinh có thể chơi đá bóng vào chiều thứ Tư hàng tuần."
            },
            {
                number: 3,
                question: "thị trấn sẽ xây bao nhiêu tòa nhà?",
                options: [
                    { letter: "A", text: "1000", explanation: "Sai vì số lượng không đúng" },
                    { letter: "B", text: "1500", explanation: "Sai vì số lượng không đúng" },
                    { letter: "C", text: "2000", explanation: "Đúng vì trong bài nghe nói rõ là 2000 tòa nhà" },
                    { letter: "D", text: "2500", explanation: "Sai vì số lượng không đúng" }
                ],
                answer: "C",
                tip: "Nhớ số: C = 2000 (hai nghìn)",
                explanation: "Đáp án đúng là C (2000) vì trong đoạn nghe, người phát ngôn của thị trấn công bố kế hoạch xây dựng 2000 tòa nhà mới trong năm tới."
            },
            {
                number: 4,
                question: "nhà văn này làm nghề gì trước đó?",
                options: [
                    { letter: "A", text: "Teacher", explanation: "Đúng vì trong bài nghe nói rõ nhà văn từng là giáo viên" },
                    { letter: "B", text: "Doctor", explanation: "Sai vì không phải bác sĩ" },
                    { letter: "C", text: "Engineer", explanation: "Sai vì không phải kỹ sư" },
                    { letter: "D", text: "Lawyer", explanation: "Sai vì không phải luật sư" }
                ],
                answer: "A",
                tip: "Nhớ: A = Teacher (giáo viên)",
                explanation: "Đáp án đúng là A (Teacher) vì trong đoạn nghe, nhà văn chia sẻ rằng trước khi bắt đầu sự nghiệp viết lách, cô đã từng là giáo viên trong nhiều năm."
            },
            {
                number: 5,
                question: "cô ấy chụp ảnh cho ai?",
                options: [
                    { letter: "A", text: "The boy's team", explanation: "Sai vì không phải đội nam" },
                    { letter: "B", text: "The girl's team", explanation: "Đúng vì trong bài nghe nói rõ là đội nữ" },
                    { letter: "C", text: "The school", explanation: "Sai vì không phải cho trường học" },
                    { letter: "D", text: "Her family", explanation: "Sai vì không phải cho gia đình" }
                ],
                answer: "B",
                tip: "Nhớ: B = The girl's team (đội nữ)",
                explanation: "Đáp án đúng là B (The girl's team) vì trong đoạn nghe, cô ấy nói rằng cô được mời chụp ảnh cho đội bóng đá nữ của trường."
            },
            {
                number: 6,
                question: "gia đình này làm gì hầu hết các cuối tuần?",
                options: [
                    { letter: "A", text: "Goes for a walk", explanation: "Đúng vì trong bài nghe nói rõ gia đình thường đi dạo vào cuối tuần" },
                    { letter: "B", text: "Goes shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "C", text: "Stays at home", explanation: "Sai vì không phải ở nhà" },
                    { letter: "D", text: "Visits friends", explanation: "Sai vì không phải thăm bạn" }
                ],
                answer: "A",
                tip: "Nhớ: A = Goes for a walk (đi dạo)",
                explanation: "Đáp án đúng là A (Goes for a walk) vì trong đoạn nghe, người nói kể lại rằng hầu hết các cuối tuần, gia đình họ đều dành thời gian đi dạo cùng nhau ở công viên gần nhà."
            },
            {
                number: 7,
                question: "cô ấy muốn cái váy nào?",
                options: [
                    { letter: "A", text: "Short and blue", explanation: "Sai vì không phải ngắn và xanh" },
                    { letter: "B", text: "Long and red", explanation: "Đúng vì trong bài nghe nói rõ là dài và đỏ" },
                    { letter: "C", text: "Long and blue", explanation: "Sai vì không phải màu xanh" },
                    { letter: "D", text: "Short and red", explanation: "Sai vì không phải ngắn" }
                ],
                answer: "B",
                tip: "Nhớ: B = Long and red (dài và đỏ)",
                explanation: "Đáp án đúng là B (Long and red) vì trong đoạn nghe, cô ấy mô tả rõ ràng rằng cô muốn một chiếc váy dài màu đỏ, không phải các màu sắc hay kiểu dáng khác."
            },
            {
                number: 8,
                question: "mẹ gọi con gái nhờ mua gì?",
                options: [
                    { letter: "A", text: "Eggs", explanation: "Đúng vì trong bài nghe mẹ nhờ mua trứng" },
                    { letter: "B", text: "Milk", explanation: "Sai vì không phải sữa" },
                    { letter: "C", text: "Bread", explanation: "Sai vì không phải bánh mì" },
                    { letter: "D", text: "Fruits", explanation: "Sai vì không phải trái cây" }
                ],
                answer: "A",
                tip: "Nhớ: A = Eggs (trứng)",
                explanation: "Đáp án đúng là A (Eggs) vì trong đoạn nghe, người mẹ gọi điện cho con gái và yêu cầu mua trứng trên đường về nhà."
            },
            {
                number: 9,
                question: "hẹn nhau lúc mấy giờ?",
                options: [
                    { letter: "A", text: "9h00'", explanation: "Sai vì không phải 9 giờ" },
                    { letter: "B", text: "10h00'", explanation: "Đúng vì trong bài nghe nói rõ là 10 giờ" },
                    { letter: "C", text: "11h00'", explanation: "Sai vì không phải 11 giờ" },
                    { letter: "D", text: "12h00'", explanation: "Sai vì không phải 12 giờ" }
                ],
                answer: "B",
                tip: "Nhớ: B = 10h00' (10 giờ)",
                explanation: "Đáp án đúng là B (10h00') vì trong đoạn nghe, cả hai người đồng ý gặp nhau lúc 10 giờ sáng tại quán cà phê."
            },
            {
                number: 10,
                question: "cô ấy bận gì mà không đón con được?",
                options: [
                    { letter: "A", text: "Stay late at the office", explanation: "Đúng vì trong bài nghe nói rõ cô phải ở lại văn phòng muộn" },
                    { letter: "B", text: "Go to a meeting", explanation: "Sai vì không phải đi họp" },
                    { letter: "C", text: "Visit a client", explanation: "Sai vì không phải thăm khách hàng" },
                    { letter: "D", text: "Attend a conference", explanation: "Sai vì không phải tham dự hội nghị" }
                ],
                answer: "A",
                tip: "Nhớ: A = Stay late at the office (ở lại văn phòng muộn)",
                explanation: "Đáp án đúng là A (Stay late at the office) vì trong đoạn nghe, cô ấy giải thích rằng cô phải ở lại văn phòng làm việc muộn để hoàn thành dự án quan trọng, nên không thể đón con đúng giờ."
            },
            {
                number: 11,
                question: "cô ấy khuyên nên xem phim gì?",
                options: [
                    { letter: "A", text: "Action film", explanation: "Đúng vì trong bài nghe cô khuyên xem phim hành động" },
                    { letter: "B", text: "Romance film", explanation: "Sai vì không phải phim tình cảm" },
                    { letter: "C", text: "Comedy film", explanation: "Sai vì không phải phim hài" },
                    { letter: "D", text: "Horror film", explanation: "Sai vì không phải phim kinh dị" }
                ],
                answer: "A",
                tip: "Nhớ: A = Action film (phim hành động)",
                explanation: "Đáp án đúng là A (Action film) vì trong đoạn nghe, cô ấy nhiệt tình giới thiệu một bộ phim hành động mới và khuyên bạn nên đi xem."
            },
            {
                number: 12,
                question: "anh ấy đang ở đâu?",
                options: [
                    { letter: "A", text: "The town hall", explanation: "Đúng vì trong bài nghe nói rõ anh đang ở tòa thị chính" },
                    { letter: "B", text: "The library", explanation: "Sai vì không phải thư viện" },
                    { letter: "C", text: "The museum", explanation: "Sai vì không phải bảo tàng" },
                    { letter: "D", text: "The park", explanation: "Sai vì không phải công viên" }
                ],
                answer: "A",
                tip: "Nhớ: A = The town hall (tòa thị chính)",
                explanation: "Đáp án đúng là A (The town hall) vì trong đoạn nghe, anh ấy nói rõ rằng hiện tại anh đang ở tòa thị chính để làm một số thủ tục hành chính."
            },
            {
                number: 13,
                question: "đi làm bằng phương tiện gì?",
                options: [
                    { letter: "A", text: "By car", explanation: "Sai vì không phải bằng xe hơi" },
                    { letter: "B", text: "By bus", explanation: "Đúng vì trong bài nghe nói rõ là đi bằng xe buýt" },
                    { letter: "C", text: "By bike", explanation: "Sai vì không phải bằng xe đạp" },
                    { letter: "D", text: "On foot", explanation: "Sai vì không phải đi bộ" }
                ],
                answer: "B",
                tip: "Nhớ: B = By bus (bằng xe buýt)",
                explanation: "Đáp án đúng là B (By bus) vì trong đoạn nghe, người nói rõ ràng đề cập đến việc sử dụng xe buýt làm phương tiện đi lại hàng ngày đến nơi làm việc."
            },
            {
                number: 14,
                topic: "Running preferences",
                question: "Four people are talking about running. Complete the sentences below.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "prefer running in the street", vietnamese: "thích chạy trên đường phố" },
                    { letter: "B", text: "prefer running at the seaside", vietnamese: "thích chạy ở bờ biển" },
                    { letter: "C", text: "prefer running on the running track", vietnamese: "thích chạy trên đường đua" },
                    { letter: "D", text: "prefer running in the fitness center", vietnamese: "thích chạy trong phòng gym" }
                ],
                subQuestions: [
                    {
                        text: "Speaker A _____ prefer running in the street.",
                        answer: "A",
                        explanation: "Người nói thích sự nhộn nhịp của đường phố, dừng đèn đỏ và quan sát mọi người giúp họ tỉnh táo."
                    },
                    {
                        text: "Speaker B _____ at the seaside.",
                        answer: "B",
                        explanation: "Người nói thích không khí trong lành, cát, tiếng sóng và có thể nhảy xuống biển sau khi chạy."
                    },
                    {
                        text: "Speaker C _____ on the running track.",
                        answer: "C",
                        explanation: "Đường chạy giúp họ theo dõi quãng đường, mặt phẳng mịn tốt cho đầu gối và có thể chạy mọi lúc."
                    },
                    {
                        text: "Speaker D _____ in the fitness center.",
                        answer: "D",
                        explanation: "Chạy trên máy trong phòng tập giúp họ tránh thời tiết xấu, điều chỉnh độ dốc/tốc độ và theo dõi nhịp tim."
                    }
                ],
                tip: "Nhớ các từ khóa: street (đường phố), seaside (bờ biển), track (đường chạy), fitness centre (phòng gym).",
                explanation: "Ghép từng người với nơi họ thích chạy: A-street, B-seaside, C-track, D-fitness centre."
            },
            {
                number: 15,
                topic: "Building community",
                question: "Chọn B, W, hoặc M cho từng câu",
                mnemonic: "B-W-M-M",
                mnemonicPhrase: "Bạn - W - Mình - Mình",
                matchingType: true,
                persons: [
                    { letter: "B", label: "Both (Cả hai)" },
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" }
                ],
                subQuestions: [
                    {
                        text: "Community design can influence people's behavior.",
                        answer: "B",
                        explanation: "Đáp án đúng là B (Both - Cả hai) vì cả nam và nữ đều đề cập đến việc thiết kế cộng đồng ảnh hưởng đến hành vi."
                    },
                    {
                        text: "Creating a community can take time.",
                        answer: "W",
                        explanation: "Đáp án đúng là W (Women - Nữ) vì chỉ người nữ đề cập đến việc xây dựng cộng đồng cần thời gian."
                    },
                    {
                        text: "Work communities and social communities are the same.",
                        answer: "M",
                        isCorrect: false,
                        explanation: "Đáp án đúng là M (Man - Nam), nhưng câu này SAI vì cộng đồng công việc và cộng đồng xã hội khác nhau. Chỉ người nam nói câu này."
                    },
                    {
                        text: "Technology has changed how community forms.",
                        answer: "M",
                        explanation: "Đáp án đúng là M (Man - Nam) vì chỉ người nam đề cập đến việc công nghệ thay đổi cách hình thành cộng đồng."
                    }
                ],
                tip: "MẸO NHỚ: B-W-M-M = Bạn W Mình Mình. Câu 1 = B, Câu 2 = W, Câu 3 = M (sai), Câu 4 = M",
                explanation: "Đáp án: Câu 1 = B, Câu 2 = W, Câu 3 = M (sai), Câu 4 = M. Cộng đồng công việc và cộng đồng xã hội có mục đích và đặc điểm khác nhau, không thể coi là giống nhau."
            },
            {
                number: 16,
                topic: "Regional development plan",
                question: "kế hoạch phát triển vùng có vấn đề gì?",
                options: [
                    { 
                        letter: "A", 
                        text: "It doesn't do enough to promote alternatives to driving", 
                        explanation: "Đúng vì đây là một trong những vấn đề được đề cập trong bài nghe"
                    },
                    { 
                        letter: "B", 
                        text: "The plan is not making efficient use of existing land", 
                        explanation: "Đúng vì đây là vấn đề thứ hai được đề cập"
                    },
                    { 
                        letter: "C", 
                        text: "The plan lacks funding", 
                        explanation: "Sai vì không có đề cập đến vấn đề tài chính"
                    },
                    { 
                        letter: "D", 
                        text: "The plan is too expensive", 
                        explanation: "Sai vì không có đề cập đến chi phí"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A = không khuyến khích phương tiện thay thế",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Kế hoạch có hai vấn đề chính: không khuyến khích đủ các phương tiện thay thế cho việc lái xe, và không sử dụng đất hiện có một cách hiệu quả."
            },
            {
                number: 17,
                topic: "Work from home",
                question: "làm việc tại nhà như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "It wasn't as good as she had expected", 
                        vietnamese: "Nó không tốt như cô ấy kỳ vọng",
                        explanation: "Đúng vì đây là một trong những nhận xét về làm việc tại nhà"
                    },
                    { 
                        letter: "B", 
                        text: "It depends on your situation and personality", 
                        vietnamese: "Nó phụ thuộc vào tình huống và tính cách",
                        explanation: "Đúng vì đây là nhận xét thứ hai về làm việc tại nhà"
                    },
                    { 
                        letter: "C", 
                        text: "It is always better than office work", 
                        explanation: "Sai vì không phải lúc nào cũng tốt hơn"
                    },
                    { 
                        letter: "D", 
                        text: "It requires expensive equipment", 
                        explanation: "Sai vì không có đề cập đến thiết bị đắt tiền"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - không tốt như kỳ vọng, phụ thuộc vào tình huống",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Làm việc tại nhà có thể không tốt như kỳ vọng ban đầu, và hiệu quả của nó phụ thuộc vào tình huống cá nhân và tính cách của mỗi người."
            }
        ]
    },
    exam12: {
        title: "LISTENING : TRỘN 12",
        questions: [
            {
                number: 1,
                question: "bán được bao nhiêu bản copies?",
                options: [
                    { letter: "A", text: "Over 200000 copies", explanation: "Sai vì số lượng không đúng" },
                    { letter: "B", text: "Over 300000 copies", explanation: "Đúng vì trong bài nghe nói rõ là hơn 300000 bản" },
                    { letter: "C", text: "Over 400000 copies", explanation: "Sai vì số lượng không đúng" },
                    { letter: "D", text: "Over 500000 copies", explanation: "Sai vì số lượng không đúng" }
                ],
                answer: "B",
                tip: "Nhớ: B = Over 300000 copies (hơn 300 nghìn bản)",
                explanation: "Đáp án đúng là B (Over 300000 copies) vì trong đoạn nghe, người nói công bố rằng cuốn sách đã bán được hơn 300000 bản."
            },
            {
                number: 2,
                question: "2 người hẹn nhau lúc mấy giờ?",
                options: [
                    { letter: "A", text: "Quarter to seven", explanation: "Sai vì không phải 7 giờ kém 15" },
                    { letter: "B", text: "Quarter to eight", explanation: "Đúng vì trong bài nghe nói rõ là 8 giờ kém 15" },
                    { letter: "C", text: "Quarter past eight", explanation: "Sai vì không phải 8 giờ 15" },
                    { letter: "D", text: "Half past eight", explanation: "Sai vì không phải 8 giờ rưỡi" }
                ],
                answer: "B",
                tip: "Nhớ: B = Quarter to eight (8 giờ kém 15)",
                explanation: "Đáp án đúng là B (Quarter to eight) vì trong đoạn nghe, cả hai người đồng ý gặp nhau lúc 7 giờ 45 phút (quarter to eight)."
            },
            {
                number: 3,
                question: "cô ấy muốn cái váy nào?",
                options: [
                    { letter: "A", text: "Short and blue", explanation: "Sai vì không phải ngắn và xanh" },
                    { letter: "B", text: "Long and red", explanation: "Đúng vì trong bài nghe nói rõ là dài và đỏ" },
                    { letter: "C", text: "Long and blue", explanation: "Sai vì không phải màu xanh" },
                    { letter: "D", text: "Short and red", explanation: "Sai vì không phải ngắn" }
                ],
                answer: "B",
                tip: "Nhớ: B = Long and red (dài và đỏ)",
                explanation: "Đáp án đúng là B (Long and red) vì trong đoạn nghe, cô ấy mô tả rõ ràng rằng cô muốn một chiếc váy dài màu đỏ."
            },
            {
                number: 4,
                question: "cô ấy làm mất cái gì?",
                options: [
                    { letter: "A", text: "Phone", explanation: "Đúng vì trong bài nghe nói rõ cô làm mất điện thoại" },
                    { letter: "B", text: "Wallet", explanation: "Sai vì không phải ví" },
                    { letter: "C", text: "Keys", explanation: "Sai vì không phải chìa khóa" },
                    { letter: "D", text: "Bag", explanation: "Sai vì không phải túi" }
                ],
                answer: "A",
                tip: "Nhớ: A = Phone (điện thoại)",
                explanation: "Đáp án đúng là A (Phone) vì trong đoạn nghe, cô ấy nói rằng cô đã làm mất điện thoại của mình ở đâu đó."
            },
            {
                number: 5,
                question: "hẹn gặp ở đâu để đi bus về nhà?",
                options: [
                    { letter: "A", text: "Marketplace", explanation: "Đúng vì trong bài nghe nói rõ là hẹn ở chợ" },
                    { letter: "B", text: "Bus station", explanation: "Sai vì không phải trạm xe buýt" },
                    { letter: "C", text: "School", explanation: "Sai vì không phải trường học" },
                    { letter: "D", text: "Park", explanation: "Sai vì không phải công viên" }
                ],
                answer: "A",
                tip: "Nhớ: A = Marketplace (chợ)",
                explanation: "Đáp án đúng là A (Marketplace) vì trong đoạn nghe, họ đồng ý gặp nhau ở chợ để cùng đi xe buýt về nhà."
            },
            {
                number: 6,
                question: "người đàn ông uống nước gì?",
                options: [
                    { letter: "A", text: "Iced tea", explanation: "Đúng vì trong bài nghe nói rõ là trà đá" },
                    { letter: "B", text: "Coffee", explanation: "Sai vì không phải cà phê" },
                    { letter: "C", text: "Water", explanation: "Sai vì không phải nước lọc" },
                    { letter: "D", text: "Juice", explanation: "Sai vì không phải nước ép" }
                ],
                answer: "A",
                tip: "Nhớ: A = Iced tea (trà đá)",
                explanation: "Đáp án đúng là A (Iced tea) vì trong đoạn nghe, người đàn ông gọi một ly trà đá."
            },
            {
                number: 7,
                question: "cô ấy sẽ đi đâu?",
                options: [
                    { letter: "A", text: "The mountains", explanation: "Đúng vì trong bài nghe nói rõ cô sẽ đi núi" },
                    { letter: "B", text: "The beach", explanation: "Sai vì không phải bãi biển" },
                    { letter: "C", text: "The city", explanation: "Sai vì không phải thành phố" },
                    { letter: "D", text: "The countryside", explanation: "Sai vì không phải nông thôn" }
                ],
                answer: "A",
                tip: "Nhớ: A = The mountains (núi)",
                explanation: "Đáp án đúng là A (The mountains) vì trong đoạn nghe, cô ấy nói rằng cô sẽ đi leo núi vào cuối tuần này."
            },
            {
                number: 8,
                question: "năm ngoái họ đi đâu?",
                options: [
                    { letter: "A", text: "Camping", explanation: "Đúng vì trong bài nghe nói rõ năm ngoái họ đi cắm trại" },
                    { letter: "B", text: "Swimming", explanation: "Sai vì không phải đi bơi" },
                    { letter: "C", text: "Shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "D", text: "Traveling", explanation: "Sai vì không cụ thể" }
                ],
                answer: "A",
                tip: "Nhớ: A = Camping (cắm trại)",
                explanation: "Đáp án đúng là A (Camping) vì trong đoạn nghe, họ nhắc lại rằng năm ngoái họ đã đi cắm trại cùng nhau."
            },
            {
                number: 9,
                question: "cô ấy làm gì cuối tuần trước?",
                options: [
                    { letter: "A", text: "Stayed at home", explanation: "Đúng vì trong bài nghe nói rõ cô ở nhà" },
                    { letter: "B", text: "Went out", explanation: "Sai vì không phải đi chơi" },
                    { letter: "C", text: "Visited friends", explanation: "Sai vì không phải thăm bạn" },
                    { letter: "D", text: "Went shopping", explanation: "Sai vì không phải đi mua sắm" }
                ],
                answer: "A",
                tip: "Nhớ: A = Stayed at home (ở nhà)",
                explanation: "Đáp án đúng là A (Stayed at home) vì trong đoạn nghe, cô ấy nói rằng cuối tuần trước cô đã ở nhà để nghỉ ngơi."
            },
            {
                number: 10,
                question: "họ cần mua gì cho phòng khách?",
                options: [
                    { letter: "A", text: "Where to buy a new table", explanation: "Đúng vì trong bài nghe họ cần mua bàn mới" },
                    { letter: "B", text: "Where to buy a new chair", explanation: "Sai vì không phải ghế" },
                    { letter: "C", text: "Where to buy a new sofa", explanation: "Sai vì không phải ghế sofa" },
                    { letter: "D", text: "Where to buy a new TV", explanation: "Sai vì không phải TV" }
                ],
                answer: "A",
                tip: "Nhớ: A = Where to buy a new table (nơi mua bàn mới)",
                explanation: "Đáp án đúng là A (Where to buy a new table) vì trong đoạn nghe, họ đang thảo luận về việc cần mua một chiếc bàn mới cho phòng khách."
            },
            {
                number: 11,
                question: "tại sao chuyến bay bị huỷ?",
                options: [
                    { letter: "A", text: "Poor weather conditions", explanation: "Đúng vì trong bài nghe nói rõ do thời tiết xấu" },
                    { letter: "B", text: "Technical problems", explanation: "Sai vì không phải vấn đề kỹ thuật" },
                    { letter: "C", text: "Staff shortage", explanation: "Sai vì không phải thiếu nhân viên" },
                    { letter: "D", text: "Airport closure", explanation: "Sai vì không phải đóng cửa sân bay" }
                ],
                answer: "A",
                tip: "Nhớ: A = Poor weather conditions (thời tiết xấu)",
                explanation: "Đáp án đúng là A (Poor weather conditions) vì trong đoạn nghe, hãng hàng không thông báo rằng chuyến bay bị hủy do điều kiện thời tiết xấu."
            },
            {
                number: 12,
                question: "phòng nào to nhất?",
                options: [
                    { letter: "A", text: "Kitchen", explanation: "Đúng vì trong bài nghe nói rõ nhà bếp là phòng to nhất" },
                    { letter: "B", text: "Living room", explanation: "Sai vì không phải phòng khách" },
                    { letter: "C", text: "Bedroom", explanation: "Sai vì không phải phòng ngủ" },
                    { letter: "D", text: "Bathroom", explanation: "Sai vì không phải phòng tắm" }
                ],
                answer: "A",
                tip: "Nhớ: A = Kitchen (nhà bếp)",
                explanation: "Đáp án đúng là A (Kitchen) vì trong đoạn nghe, người nói mô tả rằng nhà bếp là phòng lớn nhất trong căn nhà."
            },
            {
                number: 13,
                question: "nhà văn này làm nghề gì trước đó?",
                options: [
                    { letter: "A", text: "Teacher", explanation: "Đúng vì trong bài nghe nói rõ nhà văn từng là giáo viên" },
                    { letter: "B", text: "Doctor", explanation: "Sai vì không phải bác sĩ" },
                    { letter: "C", text: "Engineer", explanation: "Sai vì không phải kỹ sư" },
                    { letter: "D", text: "Lawyer", explanation: "Sai vì không phải luật sư" }
                ],
                answer: "A",
                tip: "Nhớ: A = Teacher (giáo viên)",
                explanation: "Đáp án đúng là A (Teacher) vì trong đoạn nghe, nhà văn chia sẻ rằng trước khi bắt đầu sự nghiệp viết lách, cô đã từng là giáo viên trong nhiều năm."
            },
            {
                number: 14,
                topic: "Study habits",
                question: "Four people are sharing their study habits. Complete the sentences below.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "study at various places", vietnamese: "học ở nhiều nơi khác nhau" },
                    { letter: "B", text: "study in a quiet place", vietnamese: "học ở nơi yên tĩnh" },
                    { letter: "C", text: "study with music", vietnamese: "học cùng âm nhạc" },
                    { letter: "D", text: "study late at night", vietnamese: "học vào đêm muộn" }
                ],
                subQuestions: [
                    {
                        text: "Speaker A _____ study at various places.",
                        answer: "A",
                        explanation: "Người nói thay đổi địa điểm học (thư viện, quán cà phê, công viên) để giữ sự tập trung."
                    },
                    {
                        text: "Speaker B _____ in a quiet place.",
                        answer: "B",
                        explanation: "Họ thích phòng yên tĩnh ở nhà hoặc thư viện để không bị xao nhãng."
                    },
                    {
                        text: "Speaker C _____ with music.",
                        answer: "C",
                        explanation: "Âm nhạc nhẹ giúp họ duy trì năng lượng và động lực khi học."
                    },
                    {
                        text: "Speaker D _____ late at night.",
                        answer: "D",
                        explanation: "Ban đêm yên tĩnh giúp họ tập trung và làm việc hiệu quả nhất."
                    }
                ],
                tip: "Liên hệ từ khóa: various places, quiet place, music, late night.",
                explanation: "A: đổi địa điểm học; B: cần sự yên tĩnh; C: thích âm nhạc nền; D: học khuya."
            },
            {
                number: 15,
                topic: "Information and technology",
                question: "Chọn đúng/sai cho các câu (tráo giọng nam-nữ)",
                mnemonic: "M-W-W-B",
                mnemonicPhrase: "M - W - W - B",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "The future generation will fail to cope with new information", vietnamese: "thế hệ tương lai sẽ thất bại trong việc xử lý thông tin mới" },
                    { letter: "B", text: "The information revolution will be good for the economy", vietnamese: "cách mạng thông tin sẽ tốt cho nền kinh tế" },
                    { letter: "C", text: "No computer is superior to the human brain", vietnamese: "không có máy tính nào vượt trội hơn bộ não con người" },
                    { letter: "D", text: "More should be done to protect individual privacy", vietnamese: "cần làm nhiều hơn để bảo vệ quyền riêng tư cá nhân" }
                ],
                subQuestions: [
                    {
                        text: "A",
                        answer: "A",
                        isCorrect: false,
                        explanation: "Sai vì thế hệ tương lai sẽ có khả năng xử lý thông tin mới"
                    },
                    {
                        text: "B",
                        answer: "B",
                        isCorrect: true,
                        explanation: "Đúng vì cuộc cách mạng thông tin sẽ tốt cho nền kinh tế"
                    },
                    {
                        text: "C",
                        answer: "C",
                        isCorrect: true,
                        explanation: "Đúng vì không có máy tính nào vượt trội hơn bộ não con người"
                    },
                    {
                        text: "D",
                        answer: "D",
                        isCorrect: true,
                        explanation: "Đúng vì cần làm nhiều hơn để bảo vệ quyền riêng tư cá nhân"
                    }
                ],
                tip: "MẸO NHỚ: M-W-W-B. A sai, B đúng, C đúng, D đúng",
                explanation: "Đáp án: Câu 1 (A) = Sai, Câu 2 (B) = Đúng, Câu 3 (C) = Đúng, Câu 4 (D) = Đúng. Thế hệ tương lai sẽ có khả năng thích ứng với thông tin mới, cuộc cách mạng thông tin có lợi cho kinh tế, máy tính không thể vượt trội bộ não con người, và cần bảo vệ quyền riêng tư tốt hơn."
            },
            {
                number: 16,
                topic: "A critic reviews a book",
                question: "nhà phê bình đánh giá cuốn sách như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "It uses simple language to describe complex ideas", 
                        explanation: "Đúng vì đây là một trong những nhận xét về cuốn sách"
                    },
                    { 
                        letter: "B", 
                        text: "It is similar to the previous book about the scientist", 
                        explanation: "Đúng vì đây là nhận xét thứ hai về cuốn sách"
                    },
                    { 
                        letter: "C", 
                        text: "It is too difficult to understand", 
                        explanation: "Sai vì không có đề cập đến việc khó hiểu"
                    },
                    { 
                        letter: "D", 
                        text: "It lacks interesting content", 
                        explanation: "Sai vì không có đề cập đến nội dung không thú vị"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - dùng ngôn ngữ đơn giản, tương tự cuốn sách trước",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Nhà phê bình nhận xét rằng cuốn sách sử dụng ngôn ngữ đơn giản để mô tả những ý tưởng phức tạp, và nó tương tự như cuốn sách trước đó về nhà khoa học."
            },
            {
                number: 17,
                topic: "A musician's life",
                question: "cuộc sống của nhạc sĩ như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "He will probably retire from singing", 
                        explanation: "Đúng vì đây là một trong những thông tin về nhạc sĩ"
                    },
                    { 
                        letter: "B", 
                        text: "He could have been more successful", 
                        explanation: "Đúng vì đây là nhận xét thứ hai về nhạc sĩ"
                    },
                    { 
                        letter: "C", 
                        text: "He is planning a world tour", 
                        explanation: "Sai vì không có đề cập đến tour thế giới"
                    },
                    { 
                        letter: "D", 
                        text: "He is starting a new band", 
                        explanation: "Sai vì không có đề cập đến việc thành lập ban nhạc mới"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - có thể nghỉ hưu, có thể thành công hơn",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Nhạc sĩ có thể sẽ nghỉ hưu khỏi việc ca hát, và anh ấy có thể đã thành công hơn nếu có những quyết định khác trong sự nghiệp."
            }
        ]
    },
    exam13: {
        title: "LISTENING : THURSDAY 13TH",
        questions: [
            {
                number: 1,
                question: "buổi hẹn mới vào ngày bao nhiêu?",
                options: [
                    { letter: "A", text: "Thursday 13th", explanation: "Đúng vì trong bài nghe nói rõ là thứ Năm ngày 13" },
                    { letter: "B", text: "Friday 13th", explanation: "Sai vì không phải thứ Sáu" },
                    { letter: "C", text: "Wednesday 13th", explanation: "Sai vì không phải thứ Tư" },
                    { letter: "D", text: "Saturday 13th", explanation: "Sai vì không phải thứ Bảy" }
                ],
                answer: "A",
                tip: "Nhớ: A = Thursday 13th (thứ Năm ngày 13)",
                explanation: "Đáp án đúng là A (Thursday 13th) vì trong đoạn nghe, họ đồng ý đổi lịch hẹn sang thứ Năm ngày 13."
            },
            {
                number: 2,
                question: "người đàn ông uống nước gì?",
                options: [
                    { letter: "A", text: "Iced tea", explanation: "Đúng vì trong bài nghe nói rõ là trà đá" },
                    { letter: "B", text: "Coffee", explanation: "Sai vì không phải cà phê" },
                    { letter: "C", text: "Water", explanation: "Sai vì không phải nước lọc" },
                    { letter: "D", text: "Juice", explanation: "Sai vì không phải nước ép" }
                ],
                answer: "A",
                tip: "Nhớ: A = Iced tea (trà đá)",
                explanation: "Đáp án đúng là A (Iced tea) vì trong đoạn nghe, người đàn ông gọi một ly trà đá."
            },
            {
                number: 3,
                question: "cô ấy thường viết vào thời gian nào?",
                options: [
                    { letter: "A", text: "In the mornings", explanation: "Sai vì không phải buổi sáng" },
                    { letter: "B", text: "In the afternoons", explanation: "Đúng vì trong bài nghe nói rõ là buổi chiều" },
                    { letter: "C", text: "In the evenings", explanation: "Sai vì không phải buổi tối" },
                    { letter: "D", text: "At night", explanation: "Sai vì không phải ban đêm" }
                ],
                answer: "B",
                tip: "Nhớ: B = In the afternoons (buổi chiều)",
                explanation: "Đáp án đúng là B (In the afternoons) vì trong đoạn nghe, cô ấy chia sẻ rằng cô thường viết vào buổi chiều khi có nhiều năng lượng sáng tạo nhất."
            },
            {
                number: 4,
                question: "cô ấy làm mất cái gì?",
                options: [
                    { letter: "A", text: "Phone", explanation: "Đúng vì trong bài nghe nói rõ cô làm mất điện thoại" },
                    { letter: "B", text: "Wallet", explanation: "Sai vì không phải ví" },
                    { letter: "C", text: "Keys", explanation: "Sai vì không phải chìa khóa" },
                    { letter: "D", text: "Bag", explanation: "Sai vì không phải túi" }
                ],
                answer: "A",
                tip: "Nhớ: A = Phone (điện thoại)",
                explanation: "Đáp án đúng là A (Phone) vì trong đoạn nghe, cô ấy nói rằng cô đã làm mất điện thoại của mình ở đâu đó."
            },
            {
                number: 5,
                question: "2 người hẹn nhau lúc mấy giờ?",
                options: [
                    { letter: "A", text: "Quarter to seven", explanation: "Sai vì không phải 7 giờ kém 15" },
                    { letter: "B", text: "Quarter to eight", explanation: "Đúng vì trong bài nghe nói rõ là 8 giờ kém 15" },
                    { letter: "C", text: "Quarter past eight", explanation: "Sai vì không phải 8 giờ 15" },
                    { letter: "D", text: "Half past eight", explanation: "Sai vì không phải 8 giờ rưỡi" }
                ],
                answer: "B",
                tip: "Nhớ: B = Quarter to eight (8 giờ kém 15)",
                explanation: "Đáp án đúng là B (Quarter to eight) vì trong đoạn nghe, cả hai người đồng ý gặp nhau lúc 7 giờ 45 phút (quarter to eight)."
            },
            {
                number: 6,
                question: "anh ấy đi bằng phương tiện gì?",
                options: [
                    { letter: "A", text: "By car", explanation: "Sai vì không phải bằng xe hơi" },
                    { letter: "B", text: "By train", explanation: "Đúng vì trong bài nghe nói rõ là đi bằng tàu" },
                    { letter: "C", text: "By bus", explanation: "Sai vì không phải bằng xe buýt" },
                    { letter: "D", text: "By bike", explanation: "Sai vì không phải bằng xe đạp" }
                ],
                answer: "B",
                tip: "Nhớ: B = By train (bằng tàu)",
                explanation: "Đáp án đúng là B (By train) vì trong đoạn nghe, anh ấy nói rằng anh thường đi làm bằng tàu hỏa."
            },
            {
                number: 7,
                question: "cô ấy làm gì vào thứ bảy?",
                options: [
                    { letter: "A", text: "Sees her family", explanation: "Đúng vì trong bài nghe nói rõ cô gặp gia đình vào thứ Bảy" },
                    { letter: "B", text: "Goes shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "C", text: "Visits friends", explanation: "Sai vì không phải thăm bạn" },
                    { letter: "D", text: "Stays at home", explanation: "Sai vì không phải ở nhà" }
                ],
                answer: "A",
                tip: "Nhớ: A = Sees her family (gặp gia đình)",
                explanation: "Đáp án đúng là A (Sees her family) vì trong đoạn nghe, cô ấy nói rằng vào thứ Bảy hàng tuần, cô thường dành thời gian gặp gỡ gia đình."
            },
            {
                number: 8,
                question: "vợ anh ấy thích làm gì?",
                options: [
                    { letter: "A", text: "Photography", explanation: "Đúng vì trong bài nghe nói rõ vợ anh thích nhiếp ảnh" },
                    { letter: "B", text: "Painting", explanation: "Sai vì không phải vẽ tranh" },
                    { letter: "C", text: "Reading", explanation: "Sai vì không phải đọc sách" },
                    { letter: "D", text: "Cooking", explanation: "Sai vì không phải nấu ăn" }
                ],
                answer: "A",
                tip: "Nhớ: A = Photography (nhiếp ảnh)",
                explanation: "Đáp án đúng là A (Photography) vì trong đoạn nghe, anh ấy nói rằng vợ anh rất đam mê nhiếp ảnh và thường dành thời gian chụp ảnh."
            },
            {
                number: 9,
                question: "tại sao cô ấy trở thành nhà khoa học?",
                options: [
                    { letter: "A", text: "A large stone", explanation: "Đúng vì trong bài nghe đề cập đến việc cô ấy tìm thấy một hòn đá lớn khi còn nhỏ, điều này đã khơi dậy niềm đam mê khoa học địa chất" },
                    { letter: "B", text: "A beautiful flower", explanation: "Sai vì không có đề cập đến hoa trong bài nghe" },
                    { letter: "C", text: "A science teacher", explanation: "Sai vì giáo viên khoa học không phải lý do cô ấy trở thành nhà khoa học" },
                    { letter: "D", text: "A family tradition", explanation: "Sai vì không có đề cập đến truyền thống gia đình" }
                ],
                answer: "A",
                tip: "Nhớ: A = A large stone (hòn đá lớn)",
                explanation: "Đáp án đúng là A (A large stone) vì trong đoạn nghe, cô ấy kể lại rằng khi còn nhỏ, việc tìm thấy một hòn đá lớn đã khơi dậy niềm đam mê và tò mò về khoa học địa chất, dẫn đến quyết định trở thành nhà khoa học."
            },
            {
                number: 10,
                question: "cô ấy sẽ đi đâu?",
                options: [
                    { letter: "A", text: "The mountains", explanation: "Đúng vì trong bài nghe nói rõ cô sẽ đi núi" },
                    { letter: "B", text: "The beach", explanation: "Sai vì không phải bãi biển" },
                    { letter: "C", text: "The city", explanation: "Sai vì không phải thành phố" },
                    { letter: "D", text: "The countryside", explanation: "Sai vì không phải nông thôn" }
                ],
                answer: "A",
                tip: "Nhớ: A = The mountains (núi)",
                explanation: "Đáp án đúng là A (The mountains) vì trong đoạn nghe, cô ấy nói rằng cô sẽ đi leo núi vào cuối tuần này."
            },
            {
                number: 11,
                question: "hẹn nhau ở đâu để đi xe bus?",
                options: [
                    { letter: "A", text: "By the hotel's main entrance", explanation: "Đúng vì trong bài nghe nói rõ là hẹn ở lối vào chính của khách sạn" },
                    { letter: "B", text: "At the bus station", explanation: "Sai vì không phải trạm xe buýt" },
                    { letter: "C", text: "At the park", explanation: "Sai vì không phải công viên" },
                    { letter: "D", text: "At the market", explanation: "Sai vì không phải chợ" }
                ],
                answer: "A",
                tip: "Nhớ: A = By the hotel's main entrance (lối vào chính khách sạn)",
                explanation: "Đáp án đúng là A (By the hotel's main entrance) vì trong đoạn nghe, họ đồng ý gặp nhau ở lối vào chính của khách sạn để cùng đi xe buýt."
            },
            {
                number: 12,
                question: "trà được phục vụ ở đâu?",
                options: [
                    { letter: "A", text: "The river boat", explanation: "Đúng vì trong bài nghe nói rõ trà được phục vụ trên thuyền sông" },
                    { letter: "B", text: "The restaurant", explanation: "Sai vì không phải nhà hàng" },
                    { letter: "C", text: "The café", explanation: "Sai vì không phải quán cà phê" },
                    { letter: "D", text: "The hotel", explanation: "Sai vì không phải khách sạn" }
                ],
                answer: "A",
                tip: "Nhớ: A = The river boat (thuyền sông)",
                explanation: "Đáp án đúng là A (The river boat) vì trong đoạn nghe, người nói mô tả rằng trà được phục vụ trên một chiếc thuyền đi dọc sông."
            },
            {
                number: 13,
                question: "ở cuối buổi hoà nhạc có điều gì?",
                options: [
                    { letter: "A", text: "The city's favorite group", explanation: "Đúng vì trong bài nghe nói rõ là nhóm nhạc yêu thích của thành phố biểu diễn" },
                    { letter: "B", text: "A fireworks display", explanation: "Sai vì không phải pháo hoa" },
                    { letter: "C", text: "A dance performance", explanation: "Sai vì không phải biểu diễn múa" },
                    { letter: "D", text: "A speech", explanation: "Sai vì không phải bài phát biểu" }
                ],
                answer: "A",
                tip: "Nhớ: A = The city's favorite group (nhóm nhạc yêu thích của thành phố)",
                explanation: "Đáp án đúng là A (The city's favorite group) vì trong đoạn nghe, người nói đề cập rằng ở cuối buổi hòa nhạc, nhóm nhạc yêu thích của thành phố sẽ biểu diễn."
            },
            {
                number: 14,
                topic: "Internet purposes",
                question: "Listen to four people talking about why they use the internet. Complete the sentences.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "use the internet to watch films", vietnamese: "dùng internet để xem phim" },
                    { letter: "B", text: "use the internet to communicate with friends", vietnamese: "dùng internet để nói chuyện với bạn bè" },
                    { letter: "C", text: "use the internet to complete school assignments", vietnamese: "dùng internet để làm bài tập" },
                    { letter: "D", text: "use the internet to find transport information", vietnamese: "dùng internet để tìm thông tin phương tiện" }
                ],
                subQuestions: [
                    {
                        text: "Speaker A _____ watch films.",
                        answer: "A",
                        explanation: "Người nói thích xem phim trực tuyến để thư giãn mà không cần mua DVD."
                    },
                    {
                        text: "Speaker B _____ communicate with friends.",
                        answer: "B",
                        explanation: "Họ dùng mạng xã hội, gọi video để giữ liên lạc với bạn bè ở xa."
                    },
                    {
                        text: "Speaker C _____ complete school assignments.",
                        answer: "C",
                        explanation: "Internet giúp họ nghiên cứu, tải tài liệu và nộp bài."
                    },
                    {
                        text: "Speaker D _____ find transport information.",
                        answer: "D",
                        explanation: "Họ tra lịch tàu xe, mua vé và xem cập nhật chậm trễ."
                    }
                ],
                tip: "Từ khóa: films, friends, assignments, transport.",
                explanation: "A xem phim, B liên lạc bạn bè, C làm bài, D tìm thông tin di chuyển."
            },
            {
                number: 15,
                topic: "Music",
                question: "Chọn đúng/sai cho các câu (tráo giọng nam-nữ)",
                mnemonic: "M-B-W-B",
                mnemonicPhrase: "M - B - W - B",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Singers play a good role for young people", vietnamese: "ca sĩ đóng vai trò tốt cho giới trẻ" },
                    { letter: "B", text: "Taste in music is a highly personal thing", vietnamese: "sở thích âm nhạc là điều rất cá nhân" },
                    { letter: "C", text: "Music is a universal language", vietnamese: "âm nhạc là ngôn ngữ chung của nhân loại" },
                    { letter: "D", text: "Music can manipulate people's feelings", vietnamese: "âm nhạc có thể điều khiển cảm xúc con người" }
                ],
                subQuestions: [
                    {
                        text: "A",
                        answer: "A",
                        isCorrect: true,
                        explanation: "Đúng vì ca sĩ đóng vai trò tốt cho giới trẻ"
                    },
                    {
                        text: "B",
                        answer: "B",
                        isCorrect: true,
                        explanation: "Đúng vì sở thích âm nhạc là điều rất cá nhân"
                    },
                    {
                        text: "C",
                        answer: "C",
                        isCorrect: true,
                        explanation: "Đúng vì âm nhạc là ngôn ngữ chung của nhân loại"
                    },
                    {
                        text: "D",
                        answer: "D",
                        isCorrect: true,
                        explanation: "Đúng vì âm nhạc có thể điều khiển cảm xúc con người"
                    }
                ],
                tip: "MẸO NHỚ: M-B-W-B. A đúng, B đúng, C đúng, D đúng",
                explanation: "Đáp án: Câu 1 (A) = Đúng, Câu 2 (B) = Đúng, Câu 3 (C) = Đúng, Câu 4 (D) = Đúng. Tất cả các câu đều đúng: ca sĩ có vai trò tích cực với giới trẻ, sở thích âm nhạc là cá nhân, âm nhạc là ngôn ngữ chung, và âm nhạc có thể ảnh hưởng đến cảm xúc."
            },
            {
                number: 16,
                topic: "A musician's life",
                question: "cuộc sống của nhạc sĩ như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "He will probably retire from singing", 
                        explanation: "Đúng vì đây là một trong những thông tin về nhạc sĩ"
                    },
                    { 
                        letter: "B", 
                        text: "He could have been more successful", 
                        explanation: "Đúng vì đây là nhận xét thứ hai về nhạc sĩ"
                    },
                    { 
                        letter: "C", 
                        text: "He is planning a world tour", 
                        explanation: "Sai vì không có đề cập đến tour thế giới"
                    },
                    { 
                        letter: "D", 
                        text: "He is starting a new band", 
                        explanation: "Sai vì không có đề cập đến việc thành lập ban nhạc mới"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - có thể nghỉ hưu, có thể thành công hơn",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Nhạc sĩ có thể sẽ nghỉ hưu khỏi việc ca hát, và anh ấy có thể đã thành công hơn nếu có những quyết định khác trong sự nghiệp."
            },
            {
                number: 17,
                topic: "A new guide",
                question: "hướng dẫn mới như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "It creates a sense of adventure", 
                        explanation: "Đúng vì đây là một trong những đặc điểm của hướng dẫn mới"
                    },
                    { 
                        letter: "B", 
                        text: "It is only suitable for a particular generation", 
                        explanation: "Đúng vì đây là nhận xét thứ hai về hướng dẫn mới"
                    },
                    { 
                        letter: "C", 
                        text: "It is too expensive", 
                        explanation: "Sai vì không có đề cập đến giá cả"
                    },
                    { 
                        letter: "D", 
                        text: "It lacks detailed information", 
                        explanation: "Sai vì không có đề cập đến thiếu thông tin chi tiết"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - tạo cảm giác phiêu lưu, chỉ phù hợp một thế hệ",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Hướng dẫn mới tạo ra cảm giác phiêu lưu và thú vị, nhưng nó chỉ phù hợp với một thế hệ cụ thể."
            }
        ]
    },
    exam14: {
        title: "LISTENING : TRỘN 1.50 POUND",
        questions: [
            {
                number: 1,
                question: "trứng bao nhiêu tiền?",
                options: [
                    { letter: "A", text: "1.00", explanation: "Sai vì không phải 1.00" },
                    { letter: "B", text: "1.50", explanation: "Đúng vì trong bài nghe nói rõ là 1.50 pound" },
                    { letter: "C", text: "2.00", explanation: "Sai vì không phải 2.00" },
                    { letter: "D", text: "2.50", explanation: "Sai vì không phải 2.50" }
                ],
                answer: "B",
                tip: "Nhớ: B = 1.50 (một phẩy năm mươi)",
                explanation: "Đáp án đúng là B (1.50) vì trong đoạn nghe, người nói đề cập rõ ràng rằng giá trứng là 1.50 pound."
            },
            {
                number: 2,
                question: "tàu chạy lúc mấy giờ?",
                options: [
                    { letter: "A", text: "9.00", explanation: "Sai vì không phải 9 giờ" },
                    { letter: "B", text: "9.15", explanation: "Đúng vì trong bài nghe nói rõ là 9 giờ 15 phút" },
                    { letter: "C", text: "9.30", explanation: "Sai vì không phải 9 giờ 30" },
                    { letter: "D", text: "9.45", explanation: "Sai vì không phải 9 giờ 45" }
                ],
                answer: "B",
                tip: "Nhớ: B = 9.15 (chín giờ mười lăm)",
                explanation: "Đáp án đúng là B (9.15) vì trong đoạn nghe, lịch trình tàu được thông báo là 9 giờ 15 phút."
            },
            {
                number: 3,
                question: "cô ấy đi phương tiện gì tới chỗ làm?",
                options: [
                    { letter: "A", text: "She walks", explanation: "Đúng vì trong bài nghe nói rõ cô đi bộ" },
                    { letter: "B", text: "She drives", explanation: "Sai vì không phải lái xe" },
                    { letter: "C", text: "She takes the bus", explanation: "Sai vì không phải đi xe buýt" },
                    { letter: "D", text: "She cycles", explanation: "Sai vì không phải đi xe đạp" }
                ],
                answer: "A",
                tip: "Nhớ: A = She walks (cô đi bộ)",
                explanation: "Đáp án đúng là A (She walks) vì trong đoạn nghe, cô ấy nói rằng cô đi bộ đến nơi làm việc."
            },
            {
                number: 4,
                question: "mấy giờ có bữa trưa?",
                options: [
                    { letter: "A", text: "12pm", explanation: "Sai vì không phải 12 giờ trưa" },
                    { letter: "B", text: "1pm", explanation: "Sai vì không phải 1 giờ chiều" },
                    { letter: "C", text: "2pm", explanation: "Đúng vì trong bài nghe nói rõ là 2 giờ chiều" },
                    { letter: "D", text: "3pm", explanation: "Sai vì không phải 3 giờ chiều" }
                ],
                answer: "C",
                tip: "Nhớ: C = 2pm (hai giờ chiều)",
                explanation: "Đáp án đúng là C (2pm) vì trong đoạn nghe, bữa trưa được phục vụ lúc 2 giờ chiều."
            },
            {
                number: 5,
                question: "thường làm gì?",
                options: [
                    { letter: "A", text: "Go for a walk", explanation: "Đúng vì trong bài nghe nói rõ là đi dạo" },
                    { letter: "B", text: "Go shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "C", text: "Stay at home", explanation: "Sai vì không phải ở nhà" },
                    { letter: "D", text: "Visit friends", explanation: "Sai vì không phải thăm bạn" }
                ],
                answer: "A",
                tip: "Nhớ: A = Go for a walk (đi dạo)",
                explanation: "Đáp án đúng là A (Go for a walk) vì trong đoạn nghe, người nói chia sẻ rằng họ thường đi dạo vào buổi chiều."
            },
            {
                number: 6,
                question: "hẹn gặp nhau ở đâu?",
                options: [
                    { letter: "A", text: "At the park", explanation: "Đúng vì trong bài nghe nói rõ là hẹn ở công viên" },
                    { letter: "B", text: "At the café", explanation: "Sai vì không phải quán cà phê" },
                    { letter: "C", text: "At the library", explanation: "Sai vì không phải thư viện" },
                    { letter: "D", text: "At the station", explanation: "Sai vì không phải trạm" }
                ],
                answer: "A",
                tip: "Nhớ: A = At the park (ở công viên)",
                explanation: "Đáp án đúng là A (At the park) vì trong đoạn nghe, họ đồng ý gặp nhau ở công viên."
            },
            {
                number: 7,
                question: "gia đình này thường làm gì vào các cuối tuần?",
                options: [
                    { letter: "A", text: "Goes for a walk", explanation: "Đúng vì trong bài nghe nói rõ gia đình thường đi dạo vào cuối tuần" },
                    { letter: "B", text: "Goes shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "C", text: "Stays at home", explanation: "Sai vì không phải ở nhà" },
                    { letter: "D", text: "Visits relatives", explanation: "Sai vì không phải thăm họ hàng" }
                ],
                answer: "A",
                tip: "Nhớ: A = Goes for a walk (đi dạo)",
                explanation: "Đáp án đúng là A (Goes for a walk) vì trong đoạn nghe, gia đình thường dành thời gian đi dạo cùng nhau vào cuối tuần."
            },
            {
                number: 8,
                question: "thứ mấy gặp nhau?",
                options: [
                    { letter: "A", text: "Monday", explanation: "Sai vì không phải thứ Hai" },
                    { letter: "B", text: "Tuesday", explanation: "Đúng vì trong bài nghe nói rõ là thứ Ba" },
                    { letter: "C", text: "Wednesday", explanation: "Sai vì không phải thứ Tư" },
                    { letter: "D", text: "Thursday", explanation: "Sai vì không phải thứ Năm" }
                ],
                answer: "B",
                tip: "Nhớ: B = Tuesday (thứ Ba)",
                explanation: "Đáp án đúng là B (Tuesday) vì trong đoạn nghe, họ đồng ý gặp nhau vào thứ Ba hàng tuần."
            },
            {
                number: 9,
                question: "tương lai làm gì?",
                options: [
                    { letter: "A", text: "To work in business", explanation: "Đúng vì trong bài nghe nói rõ là làm việc trong lĩnh vực kinh doanh" },
                    { letter: "B", text: "To become a teacher", explanation: "Sai vì không phải trở thành giáo viên" },
                    { letter: "C", text: "To study more", explanation: "Sai vì không phải học thêm" },
                    { letter: "D", text: "To travel", explanation: "Sai vì không phải đi du lịch" }
                ],
                answer: "A",
                tip: "Nhớ: A = To work in business (làm việc trong kinh doanh)",
                explanation: "Đáp án đúng là A (To work in business) vì trong đoạn nghe, người nói chia sẻ kế hoạch tương lai là làm việc trong lĩnh vực kinh doanh."
            },
            {
                number: 10,
                question: "học khóa học về cái gì?",
                options: [
                    { letter: "A", text: "Computer", explanation: "Đúng vì trong bài nghe nói rõ là học về máy tính" },
                    { letter: "B", text: "English", explanation: "Sai vì không phải tiếng Anh" },
                    { letter: "C", text: "Math", explanation: "Sai vì không phải toán" },
                    { letter: "D", text: "Science", explanation: "Sai vì không phải khoa học" }
                ],
                answer: "A",
                tip: "Nhớ: A = Computer (máy tính)",
                explanation: "Đáp án đúng là A (Computer) vì trong đoạn nghe, người nói đang tham gia một khóa học về máy tính."
            },
            {
                number: 11,
                question: "làm nhà văn thì có gì khác với các nghề khác?",
                options: [
                    { letter: "A", text: "Irregular time", explanation: "Đúng vì trong bài nghe nói rõ là thời gian không đều đặn" },
                    { letter: "B", text: "Low income", explanation: "Sai vì không phải thu nhập thấp" },
                    { letter: "C", text: "No benefits", explanation: "Sai vì không phải không có phúc lợi" },
                    { letter: "D", text: "Long hours", explanation: "Sai vì không phải giờ làm dài" }
                ],
                answer: "A",
                tip: "Nhớ: A = Irregular time (thời gian không đều đặn)",
                explanation: "Đáp án đúng là A (Irregular time) vì trong đoạn nghe, nhà văn giải thích rằng điểm khác biệt của nghề này là thời gian làm việc không đều đặn, không giống các nghề khác."
            },
            {
                number: 12,
                question: "mua đồ ăn ở đâu?",
                options: [
                    { letter: "A", text: "At a new shopping centre", explanation: "Đúng vì trong bài nghe nói rõ là ở trung tâm mua sắm mới" },
                    { letter: "B", text: "At the market", explanation: "Sai vì không phải chợ" },
                    { letter: "C", text: "At the supermarket", explanation: "Sai vì không phải siêu thị" },
                    { letter: "D", text: "At a restaurant", explanation: "Sai vì không phải nhà hàng" }
                ],
                answer: "A",
                tip: "Nhớ: A = At a new shopping centre (ở trung tâm mua sắm mới)",
                explanation: "Đáp án đúng là A (At a new shopping centre) vì trong đoạn nghe, người nói đề cập đến việc mua đồ ăn ở một trung tâm mua sắm mới."
            },
            {
                number: 13,
                question: "tại sao ô nhiễm không khí?",
                options: [
                    { letter: "A", text: "Fire from the countryside", explanation: "Đúng vì trong bài nghe nói rõ là do lửa từ nông thôn" },
                    { letter: "B", text: "Car emissions", explanation: "Sai vì không phải khí thải xe hơi" },
                    { letter: "C", text: "Factory smoke", explanation: "Sai vì không phải khói nhà máy" },
                    { letter: "D", text: "Construction dust", explanation: "Sai vì không phải bụi xây dựng" }
                ],
                answer: "A",
                tip: "Nhớ: A = Fire from the countryside (lửa từ nông thôn)",
                explanation: "Đáp án đúng là A (Fire from the countryside) vì trong đoạn nghe, người nói giải thích rằng ô nhiễm không khí là do lửa từ các vùng nông thôn."
            },
            {
                number: 14,
                topic: "Listening to music",
                question: "Listen to the opinions of four people about when they listen to music. Complete the sentences.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "listen to music to relax", vietnamese: "nghe nhạc để thư giãn" },
                    { letter: "B", text: "listen to music while studying", vietnamese: "nghe nhạc khi học" },
                    { letter: "C", text: "listen to music while singing", vietnamese: "nghe nhạc khi hát" },
                    { letter: "D", text: "listen to music after waking up", vietnamese: "nghe nhạc sau khi thức dậy" }
                ],
                subQuestions: [
                    {
                        text: "Speaker A _____ to relax.",
                        answer: "A",
                        explanation: "Âm nhạc nhẹ giúp họ thư giãn sau ngày dài, thoát khỏi ồn ào cuộc sống."
                    },
                    {
                        text: "Speaker B _____ while studying.",
                        answer: "B",
                        explanation: "Nhạc không lời giúp họ tập trung và có động lực khi làm bài dài."
                    },
                    {
                        text: "Speaker C _____ while singing.",
                        answer: "C",
                        explanation: "Họ nghe nhạc để luyện giọng, hát theo và thậm chí ghi âm lại."
                    },
                    {
                        text: "Speaker D _____ after waking up.",
                        answer: "D",
                        explanation: "Ngay khi thức dậy họ bật playlist sôi động để có năng lượng cho ngày mới."
                    }
                ],
                tip: "Ghi nhớ bốn thời điểm: thư giãn, khi học, khi hát, sau khi thức dậy.",
                explanation: "A-thư giãn, B-học bài, C-luyện hát, D-mở nhạc buổi sáng."
            },
            {
                number: 15,
                topic: "University and technology",
                question: "Chọn B, W, hoặc M cho từng câu",
                mnemonic: "B-W-M-W",
                mnemonicPhrase: "B - W - M - W",
                matchingType: true,
                persons: [
                    { letter: "B", label: "Both (Cả hai)" },
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" }
                ],
                subQuestions: [
                    {
                        text: "Technology helps make education more accessible",
                        answer: "B",
                        explanation: "Đáp án đúng là B (Both - Cả hai) vì cả nam và nữ đều đề cập đến việc công nghệ giúp giáo dục dễ tiếp cận hơn."
                    },
                    {
                        text: "Social interaction is important",
                        answer: "W",
                        explanation: "Đáp án đúng là W (Women - Nữ) vì chỉ người nữ đề cập đến tầm quan trọng của tương tác xã hội."
                    },
                    {
                        text: "The diverse curriculum is not an advantage",
                        answer: "M",
                        explanation: "Đáp án đúng là M (Man - Nam) vì chỉ người nam đề cập đến việc chương trình học đa dạng không phải là lợi thế."
                    },
                    {
                        text: "University competition should be encouraged",
                        answer: "W",
                        explanation: "Đáp án đúng là W (Women - Nữ) vì chỉ người nữ đề cập đến việc nên khuyến khích cạnh tranh ở đại học."
                    }
                ],
                tip: "MẸO NHỚ: B-W-M-W. Câu 1 = B, Câu 2 = W, Câu 3 = M, Câu 4 = W",
                explanation: "Đáp án: Câu 1 = B (Both), Câu 2 = W (Women), Câu 3 = M (Man), Câu 4 = W (Women). Công nghệ giúp giáo dục dễ tiếp cận (cả hai), tương tác xã hội quan trọng (nữ), chương trình đa dạng không phải lợi thế (nam), nên khuyến khích cạnh tranh (nữ)."
            },
            {
                number: 16,
                topic: "Script production",
                question: "sản xuất kịch bản như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "The characters' background are not adequately explored", 
                        explanation: "Đúng vì đây là một trong những vấn đề được đề cập"
                    },
                    { 
                        letter: "B", 
                        text: "The new industry demands are negatively influencing script production", 
                        explanation: "Đúng vì đây là vấn đề thứ hai được đề cập"
                    },
                    { 
                        letter: "C", 
                        text: "The scripts are too expensive to produce", 
                        explanation: "Sai vì không có đề cập đến chi phí"
                    },
                    { 
                        letter: "D", 
                        text: "The scripts lack creativity", 
                        explanation: "Sai vì không có đề cập đến thiếu sáng tạo"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - không khám phá đủ nhân vật, yêu cầu ngành ảnh hưởng tiêu cực",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Sản xuất kịch bản có hai vấn đề: không khám phá đủ nền tảng của nhân vật, và các yêu cầu mới của ngành đang ảnh hưởng tiêu cực đến sản xuất kịch bản."
            },
            {
                number: 17,
                topic: "Transport",
                question: "giao thông có vấn đề gì?",
                options: [
                    { 
                        letter: "A", 
                        text: "It doesn't do enough to promote alternatives to drive", 
                        explanation: "Đúng vì đây là một trong những vấn đề được đề cập"
                    },
                    { 
                        letter: "B", 
                        text: "They are not making the efficient use of existing land", 
                        explanation: "Đúng vì đây là vấn đề thứ hai được đề cập"
                    },
                    { 
                        letter: "C", 
                        text: "The transport system lacks funding", 
                        explanation: "Sai vì không có đề cập đến thiếu tài chính"
                    },
                    { 
                        letter: "D", 
                        text: "The transport is too expensive", 
                        explanation: "Sai vì không có đề cập đến giá cả"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - không khuyến khích phương tiện thay thế, không sử dụng đất hiệu quả",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Hệ thống giao thông có hai vấn đề: không khuyến khích đủ các phương tiện thay thế cho việc lái xe, và không sử dụng đất hiện có một cách hiệu quả."
            }
        ]
    },
    exam15: {
        title: "LISTENING : TRỘN 24",
        questions: [
            {
                number: 1,
                question: "anh ấy gọi điện để nói gì?",
                options: [
                    { letter: "A", text: "To say thank you", explanation: "Đúng vì trong bài nghe nói rõ anh gọi để nói cảm ơn" },
                    { letter: "B", text: "To say sorry", explanation: "Sai vì không phải xin lỗi" },
                    { letter: "C", text: "To say goodbye", explanation: "Sai vì không phải chào tạm biệt" },
                    { letter: "D", text: "To say hello", explanation: "Sai vì không phải chào hỏi" }
                ],
                answer: "A",
                tip: "Nhớ: A = To say thank you (để nói cảm ơn)",
                explanation: "Đáp án đúng là A (To say thank you) vì trong đoạn nghe, anh ấy gọi điện để nói lời cảm ơn."
            },
            {
                number: 2,
                question: "bán được bao nhiêu bản copies?",
                options: [
                    { letter: "A", text: "Over 200000 copies", explanation: "Sai vì số lượng không đúng" },
                    { letter: "B", text: "Over 300000 copies", explanation: "Đúng vì trong bài nghe nói rõ là hơn 300000 bản" },
                    { letter: "C", text: "Over 400000 copies", explanation: "Sai vì số lượng không đúng" },
                    { letter: "D", text: "Over 500000 copies", explanation: "Sai vì số lượng không đúng" }
                ],
                answer: "B",
                tip: "Nhớ: B = Over 300000 copies (hơn 300 nghìn bản)",
                explanation: "Đáp án đúng là B (Over 300000 copies) vì trong đoạn nghe, người nói công bố rằng cuốn sách đã bán được hơn 300000 bản."
            },
            {
                number: 3,
                question: "hẹn gặp ở đâu để đi bus về nhà?",
                options: [
                    { letter: "A", text: "Marketplace", explanation: "Đúng vì trong bài nghe nói rõ là hẹn ở chợ" },
                    { letter: "B", text: "Bus station", explanation: "Sai vì không phải trạm xe buýt" },
                    { letter: "C", text: "School", explanation: "Sai vì không phải trường học" },
                    { letter: "D", text: "Park", explanation: "Sai vì không phải công viên" }
                ],
                answer: "A",
                tip: "Nhớ: A = Marketplace (chợ)",
                explanation: "Đáp án đúng là A (Marketplace) vì trong đoạn nghe, họ đồng ý gặp nhau ở chợ để cùng đi xe buýt về nhà."
            },
            {
                number: 4,
                question: "anh ấy để quên cái gì?",
                options: [
                    { letter: "A", text: "Glasses", explanation: "Đúng vì trong bài nghe nói rõ anh để quên kính" },
                    { letter: "B", text: "Phone", explanation: "Sai vì không phải điện thoại" },
                    { letter: "C", text: "Keys", explanation: "Sai vì không phải chìa khóa" },
                    { letter: "D", text: "Wallet", explanation: "Sai vì không phải ví" }
                ],
                answer: "A",
                tip: "Nhớ: A = Glasses (kính)",
                explanation: "Đáp án đúng là A (Glasses) vì trong đoạn nghe, anh ấy nhận ra rằng mình đã để quên kính ở đâu đó."
            },
            {
                number: 5,
                question: "anh ấy phải thuyết trình bao nhiêu phút?",
                options: [
                    { letter: "A", text: "10", explanation: "Sai vì không phải 10 phút" },
                    { letter: "B", text: "15", explanation: "Đúng vì trong bài nghe nói rõ là 15 phút" },
                    { letter: "C", text: "20", explanation: "Sai vì không phải 20 phút" },
                    { letter: "D", text: "25", explanation: "Sai vì không phải 25 phút" }
                ],
                answer: "B",
                tip: "Nhớ: B = 15 (mười lăm phút)",
                explanation: "Đáp án đúng là B (15) vì trong đoạn nghe, anh ấy được yêu cầu thuyết trình trong 15 phút."
            },
            {
                number: 6,
                question: "cô ấy chụp ảnh cho ai?",
                options: [
                    { letter: "A", text: "The boy's team", explanation: "Sai vì không phải đội nam" },
                    { letter: "B", text: "The girl's team", explanation: "Đúng vì trong bài nghe nói rõ là đội nữ" },
                    { letter: "C", text: "The school", explanation: "Sai vì không phải cho trường học" },
                    { letter: "D", text: "Her family", explanation: "Sai vì không phải cho gia đình" }
                ],
                answer: "B",
                tip: "Nhớ: B = The girl's team (đội nữ)",
                explanation: "Đáp án đúng là B (The girl's team) vì trong đoạn nghe, cô ấy nói rằng cô được mời chụp ảnh cho đội bóng đá nữ của trường."
            },
            {
                number: 7,
                question: "gia đình này làm gì hầu hết các cuối tuần?",
                options: [
                    { letter: "A", text: "Goes for a walk", explanation: "Đúng vì trong bài nghe nói rõ gia đình thường đi dạo vào cuối tuần" },
                    { letter: "B", text: "Goes shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "C", text: "Stays at home", explanation: "Sai vì không phải ở nhà" },
                    { letter: "D", text: "Visits friends", explanation: "Sai vì không phải thăm bạn" }
                ],
                answer: "A",
                tip: "Nhớ: A = Goes for a walk (đi dạo)",
                explanation: "Đáp án đúng là A (Goes for a walk) vì trong đoạn nghe, người nói kể lại rằng hầu hết các cuối tuần, gia đình họ đều dành thời gian đi dạo cùng nhau ở công viên gần nhà."
            },
            {
                number: 8,
                question: "cô ấy muốn cái váy nào?",
                options: [
                    { letter: "A", text: "Short and blue", explanation: "Sai vì không phải ngắn và xanh" },
                    { letter: "B", text: "Long and red", explanation: "Đúng vì trong bài nghe nói rõ là dài và đỏ" },
                    { letter: "C", text: "Long and blue", explanation: "Sai vì không phải màu xanh" },
                    { letter: "D", text: "Short and red", explanation: "Sai vì không phải ngắn" }
                ],
                answer: "B",
                tip: "Nhớ: B = Long and red (dài và đỏ)",
                explanation: "Đáp án đúng là B (Long and red) vì trong đoạn nghe, cô ấy mô tả rõ ràng rằng cô muốn một chiếc váy dài màu đỏ."
            },
            {
                number: 9,
                question: "phòng nào cô ấy thích nhất?",
                options: [
                    { letter: "A", text: "Bathroom", explanation: "Đúng vì trong bài nghe nói rõ cô thích phòng tắm nhất" },
                    { letter: "B", text: "Kitchen", explanation: "Sai vì không phải nhà bếp" },
                    { letter: "C", text: "Bedroom", explanation: "Sai vì không phải phòng ngủ" },
                    { letter: "D", text: "Living room", explanation: "Sai vì không phải phòng khách" }
                ],
                answer: "A",
                tip: "Nhớ: A = Bathroom (phòng tắm)",
                explanation: "Đáp án đúng là A (Bathroom) vì trong đoạn nghe, cô ấy nói rằng phòng tắm là phòng cô thích nhất trong căn nhà."
            },
            {
                number: 10,
                question: "cô ấy làm gì cuối tuần trước?",
                options: [
                    { letter: "A", text: "Stayed at home", explanation: "Đúng vì trong bài nghe nói rõ cô ở nhà" },
                    { letter: "B", text: "Went out", explanation: "Sai vì không phải đi chơi" },
                    { letter: "C", text: "Visited friends", explanation: "Sai vì không phải thăm bạn" },
                    { letter: "D", text: "Went shopping", explanation: "Sai vì không phải đi mua sắm" }
                ],
                answer: "A",
                tip: "Nhớ: A = Stayed at home (ở nhà)",
                explanation: "Đáp án đúng là A (Stayed at home) vì trong đoạn nghe, cô ấy nói rằng cuối tuần trước cô đã ở nhà để nghỉ ngơi."
            },
            {
                number: 11,
                question: "phòng nào to nhất?",
                options: [
                    { letter: "A", text: "Kitchen", explanation: "Đúng vì trong bài nghe nói rõ nhà bếp là phòng to nhất" },
                    { letter: "B", text: "Living room", explanation: "Sai vì không phải phòng khách" },
                    { letter: "C", text: "Bedroom", explanation: "Sai vì không phải phòng ngủ" },
                    { letter: "D", text: "Bathroom", explanation: "Sai vì không phải phòng tắm" }
                ],
                answer: "A",
                tip: "Nhớ: A = Kitchen (nhà bếp)",
                explanation: "Đáp án đúng là A (Kitchen) vì trong đoạn nghe, người nói mô tả rằng nhà bếp là phòng lớn nhất trong căn nhà."
            },
            {
                number: 12,
                question: "điều gì gây ô nhiễm môi trường?",
                options: [
                    { letter: "A", text: "Fire from the countryside", explanation: "Đúng vì trong bài nghe nói rõ là do lửa từ nông thôn" },
                    { letter: "B", text: "Car emissions", explanation: "Sai vì không phải khí thải xe hơi" },
                    { letter: "C", text: "Factory smoke", explanation: "Sai vì không phải khói nhà máy" },
                    { letter: "D", text: "Construction dust", explanation: "Sai vì không phải bụi xây dựng" }
                ],
                answer: "A",
                tip: "Nhớ: A = Fire from the countryside (lửa từ nông thôn)",
                explanation: "Đáp án đúng là A (Fire from the countryside) vì trong đoạn nghe, người nói giải thích rằng ô nhiễm môi trường là do lửa từ các vùng nông thôn."
            },
            {
                number: 13,
                question: "tại sao chuyến bay bị huỷ?",
                options: [
                    { letter: "A", text: "Poor weather conditions", explanation: "Đúng vì trong bài nghe nói rõ do thời tiết xấu" },
                    { letter: "B", text: "Technical problems", explanation: "Sai vì không phải vấn đề kỹ thuật" },
                    { letter: "C", text: "Staff shortage", explanation: "Sai vì không phải thiếu nhân viên" },
                    { letter: "D", text: "Airport closure", explanation: "Sai vì không phải đóng cửa sân bay" }
                ],
                answer: "A",
                tip: "Nhớ: A = Poor weather conditions (thời tiết xấu)",
                explanation: "Đáp án đúng là A (Poor weather conditions) vì trong đoạn nghe, hãng hàng không thông báo rằng chuyến bay bị hủy do điều kiện thời tiết xấu."
            },
            {
                number: 14,
                topic: "Internet purposes",
                question: "Listen to the opinions of four people about why they use the internet. Choose the correct answer.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "use the internet to watch films", vietnamese: "dùng internet để xem phim" },
                    { letter: "B", text: "use the internet to complete assignments", vietnamese: "dùng internet để làm bài tập" },
                    { letter: "C", text: "use the internet to communicate with friends", vietnamese: "dùng internet để trò chuyện với bạn bè" },
                    { letter: "D", text: "use the internet to find transport information", vietnamese: "dùng internet để tìm thông tin di chuyển" }
                ],
                subQuestions: [
                    {
                        text: "Speaker A _____ watch films.",
                        answer: "A",
                        explanation: "Là sinh viên mê phim, họ xem miễn phí tại nhà để tiết kiệm tiền và thời gian."
                    },
                    {
                        text: "Speaker B _____ complete assignments.",
                        answer: "B",
                        explanation: "Internet giúp họ tra cứu tài liệu, tìm câu trả lời nhanh khi làm bài cùng bạn."
                    },
                    {
                        text: "Speaker C _____ communicate with friends.",
                        answer: "C",
                        explanation: "Họ dùng mạng xã hội, gọi video để giữ liên lạc với người thân ở xa."
                    },
                    {
                        text: "Speaker D _____ find transport information.",
                        answer: "D",
                        explanation: "Người nói dùng internet để tìm đường, phương tiện công cộng và tránh lạc đường."
                    }
                ],
                tip: "Ghi nhớ: phim, bài tập, liên lạc, thông tin di chuyển.",
                explanation: "A-xem phim, B-làm bài, C-liên lạc, D-tìm đường/xe."
            },
            {
                number: 15,
                topic: "Arts",
                question: "Chọn W, M, hoặc B cho từng câu (tráo giọng nam-nữ so với phiên bản trước đó)",
                mnemonic: "W-M-B-M",
                mnemonicPhrase: "W - M - B - M",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Art is only suitable for the privileged few",
                        answer: "W",
                        explanation: "Đáp án đúng là W (Women - Nữ) vì chỉ người nữ đề cập đến việc nghệ thuật chỉ phù hợp với số ít người có đặc quyền."
                    },
                    {
                        text: "The government should invest more in arts",
                        answer: "M",
                        explanation: "Đáp án đúng là M (Man - Nam) vì chỉ người nam đề cập đến việc chính phủ nên đầu tư nhiều hơn vào nghệ thuật."
                    },
                    {
                        text: "Children should be exposed to art early",
                        answer: "B",
                        explanation: "Đáp án đúng là B (Both - Cả hai) vì cả nam và nữ đều đề cập đến việc trẻ em nên được tiếp xúc với nghệ thuật từ sớm."
                    },
                    {
                        text: "In the future, art will become more accessible",
                        answer: "M",
                        explanation: "Đáp án đúng là M (Man - Nam) vì chỉ người nam đề cập đến việc trong tương lai, nghệ thuật sẽ trở nên dễ tiếp cận hơn."
                    }
                ],
                tip: "MẸO NHỚ: W-M-B-M. Câu 1 = W, Câu 2 = M, Câu 3 = B, Câu 4 = M",
                explanation: "Đáp án: Câu 1 = W (Women), Câu 2 = M (Man), Câu 3 = B (Both), Câu 4 = M (Man). Nghệ thuật chỉ cho số ít (nữ), chính phủ nên đầu tư (nam), trẻ em nên tiếp xúc sớm (cả hai), tương lai dễ tiếp cận hơn (nam)."
            },
            {
                number: 16,
                topic: "Professionalism at work",
                question: "chuyên nghiệp tại nơi làm việc như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "Maintain the positive attitude", 
                        explanation: "Đúng vì đây là một trong những yếu tố được đề cập"
                    },
                    { 
                        letter: "B", 
                        text: "Change its definition", 
                        explanation: "Đúng vì đây là nhận xét thứ hai được đề cập"
                    },
                    { 
                        letter: "C", 
                        text: "Avoid conflicts", 
                        explanation: "Sai vì không có đề cập đến tránh xung đột"
                    },
                    { 
                        letter: "D", 
                        text: "Work longer hours", 
                        explanation: "Sai vì không có đề cập đến làm việc giờ dài hơn"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - duy trì thái độ tích cực, thay đổi định nghĩa",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Chuyên nghiệp tại nơi làm việc bao gồm duy trì thái độ tích cực, và định nghĩa về chuyên nghiệp đang thay đổi."
            },
            {
                number: 17,
                topic: "Criticism of the new novel",
                question: "phê bình cuốn tiểu thuyết mới như thế nào?",
                options: [
                    { 
                        letter: "A", 
                        text: "The characters were interesting", 
                        explanation: "Đúng vì đây là một trong những nhận xét về cuốn tiểu thuyết"
                    },
                    { 
                        letter: "B", 
                        text: "It will establish the author's popularity", 
                        explanation: "Đúng vì đây là nhận xét thứ hai về cuốn tiểu thuyết"
                    },
                    { 
                        letter: "C", 
                        text: "The plot was confusing", 
                        explanation: "Sai vì không có đề cập đến cốt truyện khó hiểu"
                    },
                    { 
                        letter: "D", 
                        text: "The ending was disappointing", 
                        explanation: "Sai vì không có đề cập đến kết thúc đáng thất vọng"
                    }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng - nhân vật thú vị, sẽ thiết lập danh tiếng tác giả",
                explanation: "Đáp án đúng là A và B (cả hai đều đúng). Phê bình về cuốn tiểu thuyết mới: các nhân vật rất thú vị, và cuốn sách sẽ thiết lập danh tiếng cho tác giả."
            }
        ]
    },
    exam16: {
        title: "LISTENING : TRỘN 250 POUNDS",
        questions: [
            {
                number: 1,
                question: "anh ấy trả bao nhiêu để mua máy tính?",
                options: [
                    { letter: "A", text: "150 pounds", explanation: "Sai vì không phải 150" },
                    { letter: "B", text: "200 pounds", explanation: "Sai vì không phải 200" },
                    { letter: "C", text: "250 pounds", explanation: "Đúng vì trong bài nghe nói rõ số tiền là 250 pounds" },
                    { letter: "D", text: "300 pounds", explanation: "Sai vì không phải 300" }
                ],
                answer: "C",
                tip: "Nhớ: C = 250 pounds",
                explanation: "Đáp án đúng là C (250 pounds) vì trong đoạn nghe, người đàn ông nói đã trả 250 pounds cho chiếc máy tính."
            },
            {
                number: 2,
                question: "số lượng dân cư ở 1 vùng quê?",
                options: [
                    { letter: "A", text: "5.000", explanation: "Sai vì không phải 5.000" },
                    { letter: "B", text: "8.000", explanation: "Sai vì không phải 8.000" },
                    { letter: "C", text: "10.000", explanation: "Đúng vì trong bài nghe nói rõ là 10.000" },
                    { letter: "D", text: "12.000", explanation: "Sai vì không phải 12.000" }
                ],
                answer: "C",
                tip: "Nhớ: C = 10.000 người",
                explanation: "Đáp án đúng là C (10.000) vì người dẫn chương trình nhắc đến con số 10.000 dân cư tại vùng quê."
            },
            {
                number: 3,
                question: "anh ấy muốn đi đâu vào ngày mai?",
                options: [
                    { letter: "A", text: "The town hall", explanation: "Đúng vì trong bài nghe nói rõ là đến tòa thị chính" },
                    { letter: "B", text: "The library", explanation: "Sai vì không phải thư viện" },
                    { letter: "C", text: "The museum", explanation: "Sai vì không phải bảo tàng" },
                    { letter: "D", text: "The cinema", explanation: "Sai vì không phải rạp chiếu phim" }
                ],
                answer: "A",
                tip: "Nhớ: A = The town hall",
                explanation: "Đáp án đúng là A vì nhân vật dự định đi đến tòa thị chính vào ngày mai."
            },
            {
                number: 4,
                question: "trận bóng đá lúc mấy giờ?",
                options: [
                    { letter: "A", text: "11am", explanation: "Sai vì không phải 11 giờ" },
                    { letter: "B", text: "12pm", explanation: "Sai vì không phải 12 giờ" },
                    { letter: "C", text: "1pm", explanation: "Đúng vì trong bài nghe nói rõ là 1 giờ chiều" },
                    { letter: "D", text: "3pm", explanation: "Sai vì không phải 3 giờ" }
                ],
                answer: "C",
                tip: "Nhớ: C = 1pm",
                explanation: "Đáp án đúng là C (1pm) vì lịch trận bóng đá được nhắc rõ là 1 giờ chiều."
            },
            {
                number: 5,
                question: "cô ấy phải làm gì khi phát biểu tại hội nghị?",
                options: [
                    { letter: "A", text: "Speaking at the conference", explanation: "Đúng vì nhiệm vụ chính là phát biểu" },
                    { letter: "B", text: "Prepare refreshments", explanation: "Sai vì không phải chuẩn bị nước" },
                    { letter: "C", text: "Manage registration", explanation: "Sai vì không phải quản lý đăng ký" },
                    { letter: "D", text: "Take photographs", explanation: "Sai vì không phải chụp ảnh" }
                ],
                answer: "A",
                tip: "Nhớ: A = Speaking at the conference",
                explanation: "Đáp án đúng là A vì công việc của cô ấy là phát biểu tại hội nghị."
            },
            {
                number: 6,
                question: "khi nào được chơi đá bóng ở trường học?",
                options: [
                    { letter: "A", text: "Monday afternoon", explanation: "Sai vì không phải thứ Hai" },
                    { letter: "B", text: "Wednesday afternoon", explanation: "Đúng vì trong bài nghe nói rõ là chiều thứ Tư" },
                    { letter: "C", text: "Friday morning", explanation: "Sai vì không phải sáng thứ Sáu" },
                    { letter: "D", text: "Sunday evening", explanation: "Sai vì không phải Chủ nhật" }
                ],
                answer: "B",
                tip: "Nhớ: B = Wednesday afternoon",
                explanation: "Đáp án đúng là B vì lịch đá bóng trong trường diễn ra chiều thứ Tư."
            },
            {
                number: 7,
                question: "chị gái cô ấy trông như thế nào?",
                options: [
                    { letter: "A", text: "Tall with long hair", explanation: "Sai vì không đúng mô tả" },
                    { letter: "B", text: "Short with dark hair", explanation: "Đúng vì trong bài nghe nói rõ như vậy" },
                    { letter: "C", text: "Tall with blonde hair", explanation: "Sai vì không phải tóc vàng" },
                    { letter: "D", text: "Short with red hair", explanation: "Sai vì không phải tóc đỏ" }
                ],
                answer: "B",
                tip: "Nhớ: B = Short với tóc đen",
                explanation: "Đáp án đúng là B vì mô tả của chị gái là thấp và tóc đen."
            },
            {
                number: 8,
                question: "môn thể thao nào cô ấy giỏi nhất?",
                options: [
                    { letter: "A", text: "Football", explanation: "Đúng vì trong bài nghe nói rõ cô ấy giỏi bóng đá" },
                    { letter: "B", text: "Tennis", explanation: "Sai vì không phải tennis" },
                    { letter: "C", text: "Basketball", explanation: "Sai vì không phải bóng rổ" },
                    { letter: "D", text: "Badminton", explanation: "Sai vì không phải cầu lông" }
                ],
                answer: "A",
                tip: "Nhớ: A = Football",
                explanation: "Đáp án đúng là A vì môn thể thao sở trường là bóng đá."
            },
            {
                number: 9,
                question: "2 người hẹn gặp nhau ở đâu?",
                options: [
                    { letter: "A", text: "At the park", explanation: "Đúng vì trong bài nghe nói rõ họ gặp ở công viên" },
                    { letter: "B", text: "At the café", explanation: "Sai vì không phải quán cà phê" },
                    { letter: "C", text: "At the cinema", explanation: "Sai vì không phải rạp chiếu phim" },
                    { letter: "D", text: "At the station", explanation: "Sai vì không phải nhà ga" }
                ],
                answer: "A",
                tip: "Nhớ: A = At the park",
                explanation: "Đáp án đúng là A vì điểm hẹn của họ là công viên."
            },
            {
                number: 10,
                question: "điều gì thu hút cô ấy nhất ở bộ phim?",
                options: [
                    { letter: "A", text: "The mountain scenes", explanation: "Đúng vì cô ấy thích nhất các cảnh núi" },
                    { letter: "B", text: "The music", explanation: "Sai vì không phải âm nhạc" },
                    { letter: "C", text: "The costumes", explanation: "Sai vì không phải trang phục" },
                    { letter: "D", text: "The acting", explanation: "Sai vì không phải diễn xuất" }
                ],
                answer: "A",
                tip: "Nhớ: A = The mountain scenes",
                explanation: "Đáp án đúng là A vì cô ấy nói rõ cảnh núi là điều thu hút nhất."
            },
            {
                number: 11,
                question: "động lực gì khiến cô ấy nghiên cứu khoa học?",
                options: [
                    { letter: "A", text: "A large stone", explanation: "Đúng vì trong bài nghe nói rõ là một hòn đá lớn" },
                    { letter: "B", text: "A teacher", explanation: "Sai vì không phải giáo viên" },
                    { letter: "C", text: "A book", explanation: "Sai vì không phải cuốn sách" },
                    { letter: "D", text: "A TV show", explanation: "Sai vì không phải chương trình TV" }
                ],
                answer: "A",
                tip: "Nhớ: A = A large stone",
                explanation: "Đáp án đúng là A vì hòn đá lớn đã khơi dậy niềm đam mê nghiên cứu khoa học."
            },
            {
                number: 12,
                question: "lời khuyên dành cho người thiếu động lực trong công việc?",
                options: [
                    { letter: "A", text: "Request a transfer", explanation: "Đúng vì lời khuyên là xin chuyển bộ phận" },
                    { letter: "B", text: "Take a vacation", explanation: "Sai vì không phải nghỉ phép" },
                    { letter: "C", text: "Change career", explanation: "Sai vì không phải đổi nghề" },
                    { letter: "D", text: "Work overtime", explanation: "Sai vì không phải làm thêm giờ" }
                ],
                answer: "A",
                tip: "Nhớ: A = Request a transfer",
                explanation: "Đáp án đúng là A vì lời khuyên cụ thể là xin chuyển sang vị trí khác để tìm động lực."
            },
            {
                number: 13,
                question: "Cô ấy sẽ làm gì?",
                options: [
                    { letter: "A", text: "Go coffee", explanation: "Đúng vì trong bài nghe nói rõ cô sẽ đi uống cà phê" },
                    { letter: "B", text: "Go shopping", explanation: "Sai vì không phải đi mua sắm" },
                    { letter: "C", text: "Go jogging", explanation: "Sai vì không phải chạy bộ" },
                    { letter: "D", text: "Cook dinner", explanation: "Sai vì không phải nấu ăn" }
                ],
                answer: "A",
                tip: "Nhớ: A = Go coffee",
                explanation: "Đáp án đúng là A vì kế hoạch của cô là đi uống cà phê."
            },
            {
                number: 14,
                topic: "Listening to music",
                question: "Listen to opinions of four people A-D about when they like listening to music.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "listen to music to relax", vietnamese: "nghe nhạc để thư giãn" },
                    { letter: "B", text: "listen to music while studying", vietnamese: "nghe nhạc khi học" },
                    { letter: "C", text: "listen to music while singing", vietnamese: "nghe nhạc khi hát" },
                    { letter: "D", text: "listen to music after waking up", vietnamese: "nghe nhạc sau khi thức dậy" }
                ],
                subQuestions: [
                    {
                        text: "Speaker A _____ to relax.",
                        answer: "A",
                        explanation: "Người nói nghe nhạc nhẹ để thư giãn, nằm trên ghế sofa hay đi dạo đều bật nhạc."
                    },
                    {
                        text: "Speaker B _____ while studying.",
                        answer: "B",
                        explanation: "Âm nhạc nền giúp họ tập trung khi làm bài dài hoặc ôn thi."
                    },
                    {
                        text: "Speaker C _____ while singing.",
                        answer: "C",
                        explanation: "Họ nghe nhạc để hát theo, luyện giọng và ghi âm lại để kiểm tra."
                    },
                    {
                        text: "Speaker D _____ after waking up.",
                        answer: "D",
                        explanation: "Ngay sau khi thức dậy họ bật playlist vui nhộn để có năng lượng bắt đầu ngày mới."
                    }
                ],
                tip: "Nhớ bốn thời điểm: thư giãn, học bài, luyện hát, buổi sáng sau khi thức dậy.",
                explanation: "A nghe để thư giãn, B vừa học vừa nghe, C luyện hát, D bật nhạc ngay khi thức dậy."
            },
            {
                number: 15,
                topic: "Actors",
                question: "Chọn M, W, B cho từng câu",
                mnemonic: "M-W-B-B",
                mnemonicPhrase: "M - W - B - B",
                matchingType: true,
                persons: [
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Auditions are the most important part of casting",
                        answer: "M",
                        explanation: "Đáp án đúng là M (Nam) vì chỉ người nam nhấn mạnh tầm quan trọng của buổi thử vai."
                    },
                    {
                        text: "Actors respond best to a strong script",
                        answer: "W",
                        explanation: "Đáp án đúng là W (Nữ) vì chỉ người nữ cho rằng kịch bản mạnh giúp diễn viên thể hiện tốt."
                    },
                    {
                        text: "Theatre acting and movie acting require different skills",
                        answer: "B",
                        explanation: "Đáp án đúng là B (Cả hai) vì cả nam và nữ đều nói sân khấu và điện ảnh cần kỹ năng khác nhau."
                    },
                    {
                        text: "Actors need to be praised",
                        answer: "B",
                        explanation: "Đáp án đúng là B (Cả hai) vì cả hai người đều nhấn mạnh diễn viên cần được khen ngợi."
                    }
                ],
                tip: "Nhớ: M-W-B-B",
                explanation: "Câu 1 = M, Câu 2 = W, Câu 3-4 = B."
            },
            {
                number: 16,
                topic: "A promotion campaign for a product",
                question: "chiến dịch quảng cáo có vấn đề gì?",
                options: [
                    { letter: "A", text: "It is making exaggerated claims", explanation: "Đúng vì quảng cáo bị phóng đại" },
                    { letter: "B", text: "It costs too much to make to be profitable", explanation: "Đúng vì chi phí quá cao" },
                    { letter: "C", text: "It lacks visual appeal", explanation: "Sai vì không đề cập" },
                    { letter: "D", text: "It targets the wrong audience", explanation: "Sai vì không đề cập" }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng",
                explanation: "Đáp án đúng là A và B (cả hai). Chiến dịch bị chê là phóng đại và chi phí cao nên khó có lãi."
            },
            {
                number: 17,
                topic: "Managing financial spending",
                question: "lời khuyên quản lý chi tiêu?",
                options: [
                    { letter: "A", text: "Monitor your spending for a weekly plan", explanation: "Đúng vì lời khuyên đầu tiên là lập kế hoạch tuần và theo dõi chi tiêu" },
                    { letter: "B", text: "Seek advice from someone who have experience", explanation: "Đúng vì lời khuyên thứ hai là hỏi người có kinh nghiệm" },
                    { letter: "C", text: "Invest in risky stocks", explanation: "Sai vì không đề cập" },
                    { letter: "D", text: "Only use cash", explanation: "Sai vì không đề cập" }
                ],
                answer: "A",
                tip: "Nhớ: A và B đều đúng",
                explanation: "Đáp án đúng là A và B. Hãy theo dõi chi tiêu hàng tuần và xin lời khuyên của người có kinh nghiệm."
            }
        ]
    },
    examPractice14: {
        title: "LISTENING PRACTICE - PART 4 QUESTION 14",
        questions: [
            {
                number: 1,
                topic: "Outdoor exercise set 1",
                question: "Speakers A-D talk about where they like to exercise outdoors. Match each speaker with the activity they mention.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Mountain biking", vietnamese: "đạp xe leo núi" },
                    { letter: "B", text: "Going for a run", vietnamese: "chạy bộ" },
                    { letter: "C", text: "Walking", vietnamese: "đi bộ" },
                    { letter: "D", text: "Horse riding", vietnamese: "cưỡi ngựa" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A nói về việc khám phá những con đường dốc bằng xe đạp leo núi." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B thích cảm giác nhịp nhàng khi chạy bộ." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C nhấn mạnh việc đi bộ thư giãn." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D mô tả trải nghiệm cưỡi ngựa." }
                ],
                tip: "Nhớ: A-bike trail, B-run, C-walk, D-horse.",
                explanation: "Thứ tự đúng: A = Mountain biking, B = Going for a run, C = Walking, D = Horse riding."
            },
            {
                number: 2,
                topic: "Feelings about exercise",
                question: "Speakers A-D describe how they feel about exercising. Match each speaker to the opinion mentioned.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Improve work performance", vietnamese: "cải thiện hiệu suất công việc" },
                    { letter: "B", text: "Find exercise tiring", vietnamese: "thấy tập luyện rất mệt" },
                    { letter: "C", text: "Have fun exercising with others", vietnamese: "vui khi tập cùng người khác" },
                    { letter: "D", text: "Hate exercising", vietnamese: "ghét tập luyện" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A tin rằng tập luyện giúp họ làm việc hiệu quả hơn." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B than mệt mỗi khi phải tập." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C thích sự vui vẻ khi tập cùng bạn bè." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D thẳng thắn nói rằng họ ghét luyện tập." }
                ],
                tip: "Hai cảm xúc tích cực (A,C) và hai tiêu cực (B,D).",
                explanation: "A = cải thiện hiệu suất, B = mệt, C = vui với người khác, D = ghét."
            },
            {
                number: 3,
                topic: "Protecting the environment",
                question: "Speakers A-D talk about how they protect the environment. Match each speaker with their action.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "using less electricity", vietnamese: "dùng ít điện hơn" },
                    { letter: "B", text: "not driving to work", vietnamese: "không lái xe đi làm" },
                    { letter: "C", text: "shopping online", vietnamese: "mua sắm trực tuyến" },
                    { letter: "D", text: "using less water", vietnamese: "dùng ít nước hơn" }
                ],
                subQuestions: [
                    { text: "Speaker A protects the environment by _____", answer: "A", explanation: "Giảm điện năng tiêu thụ giúp giảm khí thải." },
                    { text: "Speaker B protects the environment by _____", answer: "B", explanation: "Đi bộ hay đi xe công cộng thay cho lái xe cá nhân." },
                    { text: "Speaker C protects the environment by _____", answer: "C", explanation: "Mua sắm online để giảm di chuyển và bao bì." },
                    { text: "Speaker D protects the environment by _____", answer: "D", explanation: "Tiết kiệm nước trong sinh hoạt." }
                ],
                tip: "Nhớ 4 hành động: điện, xe, mua sắm, nước.",
                explanation: "A=less electricity, B=không lái xe, C=shopping online, D=less water."
            },
            {
                number: 4,
                topic: "Approach to arts",
                question: "Speakers A-D explain how they engage with arts. Match each speaker to the statement.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Doing arts as a social activity", vietnamese: "làm nghệ thuật như một hoạt động xã hội" },
                    { letter: "B", text: "Doing arts with children", vietnamese: "làm nghệ thuật cùng trẻ em" },
                    { letter: "C", text: "Doing arts as part of the job", vietnamese: "làm nghệ thuật trong công việc" },
                    { letter: "D", text: "Doing arts alone", vietnamese: "làm nghệ thuật một mình" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A coi nghệ thuật là dịp giao lưu với bạn bè." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B hướng dẫn trẻ em tham gia nghệ thuật." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C dùng nghệ thuật trong nghề nghiệp chính." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D thích sáng tạo một mình." }
                ],
                tip: "A-xã hội, B-trẻ em, C-công việc, D-một mình.",
                explanation: "Thứ tự đúng lần lượt theo mô tả."
            },
            {
                number: 5,
                topic: "Online shopping benefits set 1",
                question: "Match each speaker with the benefit of online shopping they mention.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "It saves time", vietnamese: "tiết kiệm thời gian" },
                    { letter: "B", text: "It is cheaper", vietnamese: "rẻ hơn" },
                    { letter: "C", text: "Products are delivered", vietnamese: "hàng được giao tận nơi" },
                    { letter: "D", text: "There are more choices", vietnamese: "có nhiều lựa chọn" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A thích đặt hàng nhanh không tốn thời gian đi lại." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B nhấn mạnh giá rẻ." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C thích hàng giao tận nhà." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D nói về kho lựa chọn phong phú." }
                ],
                tip: "Thứ tự: thời gian, tiền, giao hàng, lựa chọn.",
                explanation: "A=save time, B=cheaper, C=delivered, D=more options."
            },
            {
                number: 6,
                topic: "Study preferences set 1",
                question: "Speakers A-D talk about how they prefer to study. Match each speaker with the preference.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Prefer to study late at night", vietnamese: "thích học vào đêm khuya" },
                    { letter: "B", text: "Prefer to study at various places", vietnamese: "thích đổi địa điểm học" },
                    { letter: "C", text: "Prefer to study with music (calm playlist)", vietnamese: "thích học với nhạc nhẹ" },
                    { letter: "D", text: "Prefer to study with music (energetic playlist)", vietnamese: "thích học với nhạc sôi động" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A cảm thấy đêm khuya yên tĩnh nhất để học." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B thay đổi không gian học để giữ sự hứng thú." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C thích nhạc nhẹ giúp tập trung." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D cần nhạc sôi động để giữ năng lượng." }
                ],
                tip: "Hai lựa chọn về nhạc: C=nhạc nhẹ, D=nhạc mạnh.",
                explanation: "A=late night, B=various places, C/D=nhạc khác nhau."
            },
            {
                number: 7,
                topic: "Commuting choices",
                question: "Speakers A-D talk about how they travel to work. Match each speaker with their method.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Walk with friends", vietnamese: "đi bộ với bạn" },
                    { letter: "B", text: "Go by bus", vietnamese: "đi bằng xe buýt" },
                    { letter: "C", text: "Walk alone", vietnamese: "đi bộ một mình" },
                    { letter: "D", text: "Drive car", vietnamese: "lái ô tô" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A thích tán gẫu với bạn khi đi bộ." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B chọn xe buýt vì tiện." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C đi bộ một mình để suy nghĩ." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D lái xe cho nhanh." }
                ],
                tip: "Hai lựa chọn đi bộ và hai lựa chọn phương tiện.",
                explanation: "A=walk with friends, B=bus, C=walk alone, D=drive."
            },
            {
                number: 8,
                topic: "Online shopping benefits set 2",
                question: "Một nhóm người khác nói về mua sắm trực tuyến. Ghép mỗi người với lợi ích họ nêu.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Products are delivered", vietnamese: "giao hàng tận nơi" },
                    { letter: "B", text: "It is cheaper", vietnamese: "rẻ hơn" },
                    { letter: "C", text: "It saves time", vietnamese: "tiết kiệm thời gian" },
                    { letter: "D", text: "It has more choices", vietnamese: "nhiều lựa chọn hơn" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A đề cao việc không cần ra ngoài vì có giao hàng." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B luôn săn ưu đãi rẻ." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C đặt hàng để tiết kiệm thời gian." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D thích sự đa dạng sản phẩm." }
                ],
                tip: "Thứ tự khác với bộ 1 để luyện phản xạ.",
                explanation: "A=delivered, B=cheaper, C=save time, D=more choices."
            },
            {
                number: 9,
                topic: "Green lifestyle actions",
                question: "Match each speaker with the eco-friendly habit they mention.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "give away used items", vietnamese: "tặng đồ đã dùng" },
                    { letter: "B", text: "buy environmentally friendly products", vietnamese: "mua sản phẩm thân thiện môi trường" },
                    { letter: "C", text: "reuse containers for storing food", vietnamese: "tái sử dụng hộp đựng thức ăn" },
                    { letter: "D", text: "not buy commercial cleaning products", vietnamese: "không mua chất tẩy rửa thương mại" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A tặng lại đồ cũ." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B ưu tiên sản phẩm xanh." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C giữ hộp để dùng lại." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D tự làm dung dịch vệ sinh thay vì mua." }
                ],
                tip: "Nhớ: A-tặng, B-mua xanh, C-tái sử dụng, D-không mua chất tẩy.",
                explanation: "Thứ tự như mô tả."
            },
            {
                number: 10,
                topic: "Running preferences set 2",
                question: "Speakers A-D chia sẻ nơi họ thích chạy. Ghép mỗi người với lựa chọn đúng.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "prefer running in the street", vietnamese: "thích chạy trên đường phố" },
                    { letter: "B", text: "prefer running at the seaside", vietnamese: "thích chạy ở bờ biển" },
                    { letter: "C", text: "prefer running on the running track", vietnamese: "thích chạy trên đường chạy" },
                    { letter: "D", text: "prefer running in the fitness center", vietnamese: "thích chạy trong phòng gym" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A thích cảnh nhộn nhịp của đường phố." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B nói về gió biển và cát." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C nhắc đến vòng chạy chuẩn xác." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D chọn máy chạy trong phòng gym." }
                ],
                tip: "Giống đề thật: street, seaside, track, gym.",
                explanation: "A-street, B-seaside, C-track, D-gym."
            },
            {
                number: 11,
                topic: "Study preferences set 2",
                question: "Match each speaker with their preferred study environment.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "At various places", vietnamese: "ở nhiều nơi khác nhau" },
                    { letter: "B", text: "In a quiet place", vietnamese: "ở nơi yên tĩnh" },
                    { letter: "C", text: "With music", vietnamese: "nghe nhạc khi học" },
                    { letter: "D", text: "Late at night", vietnamese: "học vào đêm muộn" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A đổi chỗ học liên tục." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B cần sự yên tĩnh." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C luôn bật nhạc." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D thích đêm khuya." }
                ],
                tip: "Trật tự quen thuộc: nhiều nơi, yên tĩnh, nhạc, đêm.",
                explanation: "A=various places, B=quiet, C=music, D=late night."
            },
            {
                number: 12,
                topic: "Internet purposes set 1",
                question: "Người A-D nói về mục đích dùng internet. Ghép với lựa chọn đúng.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "watch films", vietnamese: "xem phim" },
                    { letter: "B", text: "communicate with friends", vietnamese: "nói chuyện với bạn bè" },
                    { letter: "C", text: "complete school assignments", vietnamese: "làm bài tập" },
                    { letter: "D", text: "find transport information", vietnamese: "tìm thông tin phương tiện" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A xem phim trên mạng." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B dùng mạng để trò chuyện." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C tìm tài liệu học." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D tra cứu lịch trình đi lại." }
                ],
                tip: "Bài luyện chuẩn: phim, bạn bè, bài tập, phương tiện.",
                explanation: "Thứ tự A-D như mô tả."
            },
            {
                number: 13,
                topic: "Music listening moments",
                question: "Speakers A-D chia sẻ khi nào họ nghe nhạc. Ghép với thời điểm phù hợp.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "To relax", vietnamese: "để thư giãn" },
                    { letter: "B", text: "While studying", vietnamese: "khi học bài" },
                    { letter: "C", text: "While singing", vietnamese: "khi luyện hát" },
                    { letter: "D", text: "After waking up", vietnamese: "sau khi thức dậy" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A nghe nhạc để xả stress." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B bật nhạc khi học." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C nghe nhạc để hát theo." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D bật playlist ngay khi thức giấc." }
                ],
                tip: "4 thời điểm: relax, study, sing, wake up.",
                explanation: "A=relax, B=study, C=sing, D=after waking."
            },
            {
                number: 14,
                topic: "Internet purposes set 2",
                question: "Một nhóm khác nói về mục đích dùng internet. Ghép mỗi người với lựa chọn đúng.",
                multiChoiceSubType: true,
                options: [
                    { letter: "A", text: "Watch films", vietnamese: "xem phim" },
                    { letter: "B", text: "Complete assignments", vietnamese: "làm bài tập" },
                    { letter: "C", text: "Communicate with friends", vietnamese: "trò chuyện với bạn bè" },
                    { letter: "D", text: "Find transport information", vietnamese: "tìm phương tiện di chuyển" }
                ],
                subQuestions: [
                    { text: "Speaker A _____", answer: "A", explanation: "Người A mê xem phim mới." },
                    { text: "Speaker B _____", answer: "B", explanation: "Người B dùng internet để hoàn thành bài tập." },
                    { text: "Speaker C _____", answer: "C", explanation: "Người C duy trì liên lạc bạn bè." },
                    { text: "Speaker D _____", answer: "D", explanation: "Người D tra cứu phương tiện và mua vé." }
                ],
                tip: "Sắp xếp khác với bộ 1 để luyện phản ứng.",
                explanation: "A=watch films, B=assignments, C=communicate, D=transport."
            }
        ]
    },
    examPractice15: {
        title: "LISTENING PRACTICE - PART 5 QUESTION 15",
        questions: [
            {
                number: 1,
                topic: "Internet opinions (Man/Woman)",
                question: "Match each statement to the correct speaker: Woman (W), Man (M), or Both (B).",
                mnemonic: "W-B-M-B",
                mnemonicPhrase: "Woman - Both - Man - Both",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "There is too much information on the Internet.",
                        answer: "W",
                        explanation: "Người nữ nhận xét rằng lượng thông tin trên Internet quá nhiều nên khó chọn lọc."
                    },
                    {
                        text: "Finding information on the Internet requires skills.",
                        answer: "B",
                        explanation: "Cả hai người đều đồng ý rằng cần kỹ năng để tìm thông tin chính xác."
                    },
                    {
                        text: "The use of Internet affects the way we think.",
                        answer: "M",
                        explanation: "Người nam nói rằng Internet đang thay đổi cách chúng ta suy nghĩ."
                    },
                    {
                        text: "The Internet makes young people less patient.",
                        answer: "B",
                        explanation: "Cả nam và nữ đều nhận thấy giới trẻ kém kiên nhẫn hơn vì Internet."
                    }
                ],
                tip: "Ghi nhớ chuỗi W-B-M-B để phân biệt phát biểu.",
                explanation: "Thứ tự phát biểu: Nữ nói về quá nhiều thông tin, cả hai nói cần kỹ năng, nam nói ảnh hưởng cách nghĩ, cả hai nói giới trẻ thiếu kiên nhẫn."
            },
            {
                number: 2,
                topic: "Politics opinions (Man/Woman)",
                question: "Match each statement about politics to the correct speaker: Woman (W), Man (M), or Both (B).",
                mnemonic: "B-W-M-B",
                mnemonicPhrase: "Both - Woman - Man - Both",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Young people are more into politics.",
                        answer: "B",
                        explanation: "Cả hai người đều đồng ý rằng giới trẻ ngày càng quan tâm đến chính trị."
                    },
                    {
                        text: "Social media change politics.",
                        answer: "W",
                        explanation: "Người nữ nhấn mạnh vai trò của mạng xã hội trong việc thay đổi chính trị."
                    },
                    {
                        text: "People are now better informed on politics.",
                        answer: "M",
                        explanation: "Người nam cho rằng hiện nay mọi người nắm thông tin chính trị tốt hơn."
                    },
                    {
                        text: "More women pursue politics.",
                        answer: "B",
                        explanation: "Cả hai đều ghi nhận số lượng phụ nữ tham gia chính trị tăng lên."
                    }
                ],
                tip: "Chuỗi nhớ: B-W-M-B.",
                explanation: "Câu 1 & 4 = Both, câu 2 = Woman, câu 3 = Man."
            },
            {
                number: 3,
                topic: "University life opinions",
                question: "Match each statement about university life to Woman (W), Man (M), or Both (B).",
                mnemonic: "B-M-W-M",
                mnemonicPhrase: "Both - Man - Woman - Man",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "The internet makes education more accessible.",
                        answer: "B",
                        explanation: "Cả hai người đều đồng ý Internet giúp tiếp cận giáo dục dễ hơn."
                    },
                    {
                        text: "Social interactions are essential to university life.",
                        answer: "M",
                        explanation: "Người nam nhấn mạnh vai trò của giao tiếp xã hội khi học đại học."
                    },
                    {
                        text: "A diverse curriculum is not always a good thing.",
                        answer: "W",
                        explanation: "Người nữ cảnh báo rằng chương trình quá đa dạng có thể gây quá tải."
                    },
                    {
                        text: "Competitions between universities should be encouraged.",
                        answer: "M",
                        explanation: "Người nam tin rằng cạnh tranh giữa các trường mang lại đổi mới."
                    }
                ],
                tip: "Nhớ chuỗi B-M-W-M để gán từng câu.",
                explanation: "1=Both, 2=Man, 3=Woman, 4=Man."
            },
            {
                number: 4,
                topic: "Urban farming opinions (set 1)",
                question: "Match each statement about farming space to the correct speaker.",
                mnemonic: "W-B-M-B",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Living space is more important than farming space.",
                        answer: "W",
                        explanation: "Người nữ ưu tiên không gian sống hơn khu trồng trọt."
                    },
                    {
                        text: "Farming space is appealing.",
                        answer: "B",
                        explanation: "Cả hai đều thấy mô hình nông nghiệp đô thị hấp dẫn."
                    },
                    {
                        text: "Farming space will benefit the urban economy.",
                        answer: "M",
                        explanation: "Người nam tin rằng kinh tế đô thị sẽ hưởng lợi."
                    },
                    {
                        text: "Farming space is in need of more food.",
                        answer: "B",
                        explanation: "Cả hai đồng ý rằng khu nông nghiệp giúp đáp ứng nhu cầu thực phẩm."
                    }
                ],
                tip: "W-B-M-B: nữ ưu tiên không gian sống, nam nói lợi ích kinh tế.",
                explanation: "Theo mô tả: 1=W,2=B,3=M,4=B."
            },
            {
                number: 5,
                topic: "Culture & festivals opinions",
                question: "Match each statement about culture to Woman (W), Man (M), or Both (B).",
                mnemonic: "M-B-W-W",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Exhibitions should be different and diverse.",
                        answer: "M",
                        explanation: "Người nam muốn các triển lãm phải đa dạng, mới mẻ."
                    },
                    {
                        text: "Traditional customs are gradually losing their significance.",
                        answer: "B",
                        explanation: "Cả hai đồng ý rằng phong tục đang mai một."
                    },
                    {
                        text: "Local festivals will disappear in the near future.",
                        answer: "W",
                        explanation: "Người nữ lo lắng lễ hội địa phương sẽ biến mất."
                    },
                    {
                        text: "Schools are important in shaping future generations.",
                        answer: "W",
                        explanation: "Người nữ nhấn mạnh vai trò của trường học."
                    }
                ],
                tip: "M-B-W-W: triển lãm (M), phong tục (B), lễ hội/trường học (W).",
                explanation: "Theo bài nói: 1=M,2=B,3=W,4=W."
            },
            {
                number: 6,
                topic: "Urban farming opinions (set 2)",
                question: "Một nhóm khác bàn về không gian nông nghiệp. Gán câu cho đúng người.",
                mnemonic: "M-W-W-B",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Living space is more important than farming space.",
                        answer: "M",
                        explanation: "Người nam cho rằng ưu tiên nhà ở."
                    },
                    {
                        text: "Farming space is appealing.",
                        answer: "W",
                        explanation: "Người nữ bị thu hút bởi nông nghiệp đô thị."
                    },
                    {
                        text: "Farming space will benefit the urban economy.",
                        answer: "W",
                        explanation: "Người nữ tin rằng kinh tế thành phố sẽ hưởng lợi."
                    },
                    {
                        text: "Farming space is in need of more food.",
                        answer: "B",
                        explanation: "Cả hai đồng ý cần thêm thực phẩm từ khu trồng trọt."
                    }
                ],
                tip: "M-W-W-B để phân biệt góc nhìn khác.",
                explanation: "1=M, 2=W, 3=W, 4=B."
            },
            {
                number: 7,
                topic: "Actors and performance",
                question: "Match each opinion about acting to Woman (W), Man (M), or Both (B).",
                mnemonic: "W-B-B",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Actors tend to respond best to strong and engaging scripts.",
                        answer: "W",
                        explanation: "Người nữ cho rằng kịch bản tốt giúp diễn viên diễn hay."
                    },
                    {
                        text: "Theater acting and screen acting are quite different from each other.",
                        answer: "B",
                        explanation: "Cả hai đồng ý sân khấu và điện ảnh đòi kỹ năng khác nhau."
                    },
                    {
                        text: "Actors should be praised and recognized as much as possible.",
                        answer: "B",
                        explanation: "Cả hai cho rằng diễn viên cần được ghi nhận."
                    }
                ],
                tip: "W-B-B theo đúng ba ý kiến nêu ra.",
                explanation: "Trật tự: W (kịch bản), B (sân khấu vs màn ảnh), B (khen ngợi)."
            },
            {
                number: 8,
                topic: "Building community",
                question: "Gán nhận định về cộng đồng cho W/M/B.",
                mnemonic: "M-W-B",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Creating community can take time.",
                        answer: "M",
                        explanation: "Người nam nhấn mạnh việc xây cộng đồng mất thời gian."
                    },
                    {
                        text: "Work communities and social communities are the same.",
                        answer: "W",
                        explanation: "Người nữ cho rằng hai loại cộng đồng giống nhau."
                    },
                    {
                        text: "Technology has changed how community forms.",
                        answer: "B",
                        explanation: "Cả hai thừa nhận công nghệ đổi cách hình thành cộng đồng."
                    }
                ],
                tip: "M-W-B: thời gian (M), định nghĩa (W), công nghệ (B).",
                explanation: "Theo phát biểu: 1=M,2=W,3=B."
            },
            {
                number: 9,
                topic: "Workplace priorities",
                question: "Match each workplace statement to W/M/B.",
                mnemonic: "M-W-B-M",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Continuity is very important in the workplace.",
                        answer: "M",
                        explanation: "Người nam đề cao tính liên tục."
                    },
                    {
                        text: "Job security cannot always be guaranteed.",
                        answer: "W",
                        explanation: "Người nữ cho rằng không thể đảm bảo an toàn việc làm."
                    },
                    {
                        text: "Job satisfaction is an important motivator.",
                        answer: "B",
                        explanation: "Cả hai đều xem sự hài lòng là động lực."
                    },
                    {
                        text: "Technology is good for the entire economy.",
                        answer: "M",
                        explanation: "Người nam tin công nghệ tốt cho kinh tế."
                    }
                ],
                tip: "M-W-B-M trùng với chuỗi ghi nhớ.",
                explanation: "1=M,2=W,3=B,4=M."
            },
            {
                number: 10,
                topic: "Technology concerns",
                question: "Match each technology statement to W/M/B.",
                mnemonic: "M-W-W-B",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Future generations fail to cope with technology information.",
                        answer: "M",
                        explanation: "Người nam lo giới trẻ không xử lý nổi thông tin."
                    },
                    {
                        text: "Technology revolution is good for the economy.",
                        answer: "W",
                        explanation: "Người nữ ủng hộ cuộc cách mạng công nghệ."
                    },
                    {
                        text: "No computer is superior to the human brain.",
                        answer: "W",
                        explanation: "Người nữ khẳng định máy tính không vượt não người."
                    },
                    {
                        text: "More should be done to protect individual privacy.",
                        answer: "B",
                        explanation: "Cả hai mong muốn bảo vệ quyền riêng tư."
                    }
                ],
                tip: "M-W-W-B đúng thứ tự.",
                explanation: "1=M,2=W,3=W,4=B."
            },
            {
                number: 11,
                topic: "Arts funding opinions",
                question: "Gán mỗi câu về nghệ thuật cho đúng người.",
                mnemonic: "M-W-B-W",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Art is only suitable for the privileged few.",
                        answer: "M",
                        explanation: "Người nam cho rằng nghệ thuật thuộc về số ít."
                    },
                    {
                        text: "The government should invest more in art.",
                        answer: "W",
                        explanation: "Người nữ kêu gọi nhà nước đầu tư."
                    },
                    {
                        text: "Children should be exposed to art early.",
                        answer: "B",
                        explanation: "Cả hai cùng đồng ý."
                    },
                    {
                        text: "In the future, art will become more accessible.",
                        answer: "W",
                        explanation: "Người nữ tin nghệ thuật sẽ phổ biến hơn."
                    }
                ],
                tip: "M-W-B-W theo thứ tự phát biểu.",
                explanation: "1=M,2=W,3=B,4=W."
            },
            {
                number: 12,
                topic: "Beauty perspectives",
                question: "Match each statement about beauty to W/M/B.",
                mnemonic: "M-W-B-W",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "People share similar ideas about beauty.",
                        answer: "M",
                        explanation: "Người nam nghĩ mọi người có quan điểm giống nhau."
                    },
                    {
                        text: "Ideas about beauty change over time.",
                        answer: "W",
                        explanation: "Người nữ tin rằng chuẩn đẹp thay đổi."
                    },
                    {
                        text: "Beauty can be found in unlikely places.",
                        answer: "B",
                        explanation: "Cả hai đồng ý vẻ đẹp có khắp nơi."
                    },
                    {
                        text: "Traditional ideas about beauty are going to change.",
                        answer: "W",
                        explanation: "Người nữ dự đoán quan niệm truyền thống sẽ thay đổi."
                    }
                ],
                tip: "Chuỗi M-W-B-W như mô tả.",
                explanation: "1=M,2=W,3=B,4=W."
            },
            {
                number: 13,
                topic: "Music opinions",
                question: "Match each statement about music to Woman (W), Man (M), or Both (B).",
                mnemonic: "W-B-M-B",
                mnemonicPhrase: "Woman - Both - Man - Both",
                matchingType: true,
                persons: [
                    { letter: "W", label: "Women (Nữ)" },
                    { letter: "M", label: "Man (Nam)" },
                    { letter: "B", label: "Both (Cả hai)" }
                ],
                subQuestions: [
                    {
                        text: "Singers can be good models for the young.",
                        answer: "W",
                        explanation: "Người nữ tin rằng ca sĩ có thể làm gương cho giới trẻ."
                    },
                    {
                        text: "Taste in music is a highly personal thing.",
                        answer: "B",
                        explanation: "Cả hai đồng ý sở thích âm nhạc mang tính cá nhân."
                    },
                    {
                        text: "Music is a universal language.",
                        answer: "M",
                        explanation: "Người nam cho rằng âm nhạc là ngôn ngữ chung."
                    },
                    {
                        text: "Music can be used to manipulate people's feelings.",
                        answer: "B",
                        explanation: "Cả hai nhận định âm nhạc có thể điều khiển cảm xúc."
                    }
                ],
                tip: "Nhớ chuỗi W-B-M-B.",
                explanation: "1=W, 2=B, 3=M, 4=B theo mô tả."
            }
        ]
    },
    examPractice16: {
        title: "LISTENING PRACTICE - QUESTION BANK 16",
        questions: [
            {
                number: 1,
                topic: "New novel review",
                question: "What does the announcer say about the new novel?",
                options: [
                    { letter: "A", text: "It is different from his earlier works", explanation: "Đáp án đúng: cuốn mới khác hẳn các tác phẩm trước đây." },
                    { letter: "B", text: "It is romantic and soft", explanation: "Sai: không mô tả là lãng mạn, mềm mại." },
                    { letter: "C", text: "It is less famous than his earlier works", explanation: "Sai: không nhắc đến mức độ nổi tiếng." }
                ],
                answer: "A",
                tip: "Nhớ từ khóa announcer nói: 'a departure from his earlier works'.",
                explanation: "Announcer nhấn mạnh rằng tiểu thuyết mới khác biệt hoàn toàn so với các tác phẩm trước của tác giả, nên đáp án A là đúng."
            },
            {
                number: 2,
                topic: "Advice for the writer",
                question: "What does the announcer say the writer should do in the future?",
                options: [
                    { letter: "A", text: "Continue to write this genre", explanation: "Sai: announcer không khuyên tiếp tục thể loại này." },
                    { letter: "B", text: "Go back to his original genre", explanation: "Sai: cũng không khuyên quay lại thể loại cũ." },
                    { letter: "C", text: "Listen to critics before writing the next work", explanation: "Đúng: announcer khuyên nên nghe phản hồi của giới phê bình trước khi viết tiếp." }
                ],
                answer: "C",
                tip: "Ghi nhớ câu 'he should listen to critics before diving into the next project'.",
                explanation: "Announcer đề xuất tác giả nên lắng nghe ý kiến phê bình trước khi bắt đầu tác phẩm mới, do đó chọn C."
            },
            {
                number: 3,
                topic: "Writing process",
                question: "What does the writer believe helps her the most in her writing process?",
                options: [
                    { letter: "A", text: "Writing every day for 15-20 minutes", explanation: "Sai: cô không nhấn mạnh viết 15-20 phút mỗi ngày." },
                    { letter: "B", text: "Creating dedicated periods for writing", explanation: "Đúng: cô tin việc dành các giai đoạn tập trung giúp viết tốt nhất." },
                    { letter: "C", text: "Finding a quiet space to work", explanation: "Sai: không đề cập là yếu tố quan trọng nhất." }
                ],
                answer: "B",
                tip: "Nhớ cụm 'blocked off time' = dành khung giờ riêng cho viết.",
                explanation: "Tác giả cho rằng việc đặt lịch thời gian dành riêng cho viết giúp cô giữ nhịp sáng tác hiệu quả nhất."
            },
            {
                number: 4,
                topic: "Writer's block regret",
                question: "What does the writer regret doing during her experience with writer's block?",
                options: [
                    { letter: "A", text: "Refusing to seek advice of others", explanation: "Đúng: cô hối tiếc vì không nhờ người khác tư vấn." },
                    { letter: "B", text: "Ignoring feedback from editors", explanation: "Sai: cô không nhắc đến việc bỏ qua biên tập viên." },
                    { letter: "C", text: "Writing without a plan", explanation: "Sai: không phải điều cô hối tiếc." }
                ],
                answer: "A",
                tip: "Nhớ: writer's block -> nên hỏi lời khuyên, cô đã không làm.",
                explanation: "Trong lúc bí ý tưởng, cô đã từ chối nhận lời khuyên nên sau đó cảm thấy hối hận."
            },
            {
                number: 5,
                topic: "Working at home",
                question: "What does she say about working at home?",
                options: [
                    { letter: "A", text: "There are no distractions", explanation: "Sai: cô không nói hoàn toàn không xao nhãng." },
                    { letter: "B", text: "It is not as good as expected", explanation: "Đúng: cô thất vọng vì làm ở nhà không như kỳ vọng." },
                    { letter: "C", text: "Video calls are superior to face-to-face conversation", explanation: "Sai: cô không so sánh video call và gặp trực tiếp theo hướng này." }
                ],
                answer: "B",
                tip: "Làm việc tại nhà => 'not as good as I expected'.",
                explanation: "Cô nói rằng làm ở nhà không tốt như dự đoán nên đáp án B chính xác."
            },
            {
                number: 6,
                topic: "Remote work perspective",
                question: "According to the author, working from home:",
                options: [
                    { letter: "A", text: "Needs a big home office", explanation: "Sai: không yêu cầu văn phòng lớn." },
                    { letter: "B", text: "Does not require self-motivation", explanation: "Sai: cô nhấn mạnh cần tự giác." },
                    { letter: "C", text: "Depends on your situation and personality", explanation: "Đúng: cô cho rằng hiệu quả tùy thuộc cá nhân." }
                ],
                answer: "C",
                tip: "Remote work => 'depends on your situation and personality'.",
                explanation: "Cô kết luận rằng làm việc tại nhà phù hợp hay không còn tùy vào hoàn cảnh và tính cách từng người."
            },
            {
                number: 7,
                topic: "TV series reception",
                question: "What happened to the TV series?",
                options: [
                    { letter: "A", text: "It didn't receive enough investment in the early stage", explanation: "Sai: không đề cập thiếu đầu tư ban đầu." },
                    { letter: "B", text: "It was overlooked by critics", explanation: "Sai: không bị giới phê bình bỏ qua." },
                    { letter: "C", text: "It caught the audience's attention from the start", explanation: "Đúng: phim thu hút khán giả ngay lập tức." }
                ],
                answer: "C",
                tip: "Nhớ cụm 'grabbed audiences from day one'.",
                explanation: "MC cho biết series thu hút người xem ngay từ khi ra mắt nên đáp án C đúng."
            },
            {
                number: 8,
                topic: "Series potential",
                question: "According to the expert, what is the series' potential?",
                options: [
                    { letter: "A", text: "New seasons will be produced due to great demand", explanation: "Sai trong bối cảnh này." },
                    { letter: "B", text: "It inspires young filmmakers to follow a new style", explanation: "Sai: không nhấn mạnh ảnh hưởng phong cách." },
                    { letter: "C", text: "It can help reach new customers", explanation: "Đúng: chuyên gia tin series mở rộng tệp khách hàng." }
                ],
                answer: "C",
                tip: "Potential = cơ hội chạm tới khách hàng mới.",
                explanation: "Chuyên gia cho rằng thành công của series giúp hãng tiếp cận thêm khán giả/khách hàng nên chọn C."
            },
            {
                number: 9,
                topic: "Movie disappointment",
                question: "What part of the movie is disappointing?",
                options: [
                    { letter: "A", text: "The dialogues seem unrealistic", explanation: "Đúng: lời thoại thiếu chân thực gây thất vọng." },
                    { letter: "B", text: "The settings don't make sense", explanation: "Sai: bối cảnh không phải vấn đề chính." },
                    { letter: "C", text: "The original cast was replaced", explanation: "Sai: không đề cập thay diễn viên." }
                ],
                answer: "A",
                tip: "Nhớ: 'dialogues felt unnatural'.",
                explanation: "Nhà phê bình phàn nàn rằng lời thoại nghe giả tạo nên A là đáp án đúng."
            },
            {
                number: 10,
                topic: "Movie industry comment",
                question: "What is the expert comment on the movie industry?",
                options: [
                    { letter: "A", text: "Technology will soon replace human actors", explanation: "Sai: không nói công nghệ thay diễn viên." },
                    { letter: "B", text: "The new industry demand is negatively influencing script production", explanation: "Đúng: nhu cầu thị trường khiến kịch bản đi xuống." },
                    { letter: "C", text: "New story plots should be invented to capture audiences", explanation: "Sai: không phải nhận xét chính." }
                ],
                answer: "B",
                tip: "Keyword: industry demand hurting scripts.",
                explanation: "Chuyên gia nhận xét áp lực thị trường mới đang làm chất lượng kịch bản giảm, nên B đúng."
            },
            {
                number: 11,
                topic: "Authors' past work",
                question: "What was the lecturer's opinion about both authors' past work?",
                options: [
                    { letter: "A", text: "They have both been overlooked by academics", explanation: "Đúng: giảng viên cho rằng giới học thuật bỏ qua họ." },
                    { letter: "B", text: "They make reference to each other's work", explanation: "Sai: không đề cập tới việc trích dẫn nhau." },
                    { letter: "C", text: "One was less successful than the other", explanation: "Sai: không so sánh thành công." }
                ],
                answer: "A",
                tip: "Nhớ cụm 'overlooked by academics'.",
                explanation: "Giảng viên nói cả hai tác giả từng bị giới học thuật lãng quên nên chọn A."
            },
            {
                number: 12,
                topic: "Authors' interpretation",
                question: "What did the lecturer say about both authors?",
                options: [
                    { letter: "A", text: "Their reputation goes beyond their target audience", explanation: "Sai: không nhấn mạnh danh tiếng vượt đối tượng." },
                    { letter: "B", text: "They should have been more popular", explanation: "Sai: không phải trọng tâm." },
                    { letter: "C", text: "It is not always easy for the meanings to be identified", explanation: "Đúng: giảng viên nói ý nghĩa tác phẩm khó giải mã." }
                ],
                answer: "C",
                tip: "Keywords: 'meanings are hard to identify'.",
                explanation: "Ông cho rằng việc hiểu thông điệp của cả hai tác giả không đơn giản nên C đúng."
            },
            {
                number: 13,
                topic: "TV series reception (set 2)",
                question: "What happened to the TV series?",
                options: [
                    { letter: "A", text: "It didn't receive enough investment at the early stage", explanation: "Sai: không bị thiếu đầu tư." },
                    { letter: "B", text: "It was overlooked by critics", explanation: "Sai: giới phê bình chú ý đến nó." },
                    { letter: "C", text: "It caught the audience's attention from the start", explanation: "Đúng: giống câu trước, thu hút khán giả ngay." }
                ],
                answer: "C",
                tip: "Lặp ý: audience attention from start.",
                explanation: "Người dẫn nhắc lại series được chú ý ngay khi phát sóng nên chọn C."
            },
            {
                number: 14,
                topic: "Series future demand",
                question: "According to the expert, what is the series' potential?",
                options: [
                    { letter: "A", text: "New seasons will be produced due to great demand", explanation: "Đúng: chuyên gia tin sẽ có mùa mới vì nhu cầu lớn." },
                    { letter: "B", text: "It inspires young filmmakers to follow a new style", explanation: "Sai trong ngữ cảnh này." },
                    { letter: "C", text: "Series are damaged by overexposure", explanation: "Sai: nhưng không phải quan điểm ở đây." }
                ],
                answer: "A",
                tip: "Từ khóa: 'already planning new seasons'.",
                explanation: "Chuyên gia dự đoán hãng sẽ làm thêm mùa mới vì lượng người xem cao, nên A đúng."
            },
            {
                number: 15,
                topic: "Regional plan criticism",
                question: "What is one of the main criticisms of the Regional Development Plan?",
                options: [
                    { letter: "A", text: "It doesn't provide enough alternatives to driving", explanation: "Đúng: kế hoạch thiếu lựa chọn thay thế việc lái xe." },
                    { letter: "B", text: "It places too much emphasis on public transportation", explanation: "Sai: không phải phàn nàn chính." },
                    { letter: "C", text: "It is too expensive to implement", explanation: "Sai: chi phí không phải trọng tâm." }
                ],
                answer: "A",
                tip: "Key: 'not enough alternatives to driving'.",
                explanation: "Người phỏng vấn nhắc kế hoạch bị chê vì không khuyến khích phương tiện khác xe hơi, nên A chuẩn."
            },
            {
                number: 16,
                topic: "Regional plan challenge",
                question: "What challenge is the Regional Development Plan likely to face?",
                options: [
                    { letter: "A", text: "It may be delayed due to funding issues", explanation: "Sai: không đề cập thiếu ngân sách." },
                    { letter: "B", text: "It could face difficulties in gaining government approval", explanation: "Sai: phê duyệt không phải trở ngại chính." },
                    { letter: "C", text: "It is likely to meet resistance from local communities", explanation: "Đúng: người dân địa phương có thể phản đối." }
                ],
                answer: "C",
                tip: "Remember: community resistance.",
                explanation: "Bản kế hoạch có thể bị cộng đồng địa phương phản đối nên C đúng."
            },
            {
                number: 17,
                topic: "Post-university life",
                question: "How does life change for graduates after university?",
                options: [
                    { letter: "A", text: "They feel more stressed about job seeking", explanation: "Sai: không nhấn mạnh stress tăng." },
                    { letter: "B", text: "They are likely to stick to their academic routines", explanation: "Sai: họ không giữ nếp học cũ." },
                    { letter: "C", text: "They are likely to be more flexible and open-minded", explanation: "Đúng: cuộc sống khiến họ linh hoạt, cởi mở hơn." }
                ],
                answer: "C",
                tip: "Graduates -> flexibility.",
                explanation: "Diễn giả cho rằng sau đại học, người trẻ trở nên linh hoạt và cởi mở, nên C đúng."
            },
            {
                number: 18,
                topic: "Job market trait",
                question: "What is a common characteristic of the job market after university?",
                options: [
                    { letter: "A", text: "More opportunities for networking", explanation: "Sai: không nhắc đến networking." },
                    { letter: "B", text: "It is more competitive", explanation: "Đúng: thị trường việc làm cạnh tranh hơn." },
                    { letter: "C", text: "Many jobs offer great benefits", explanation: "Sai: không phải đặc điểm chính." }
                ],
                answer: "B",
                tip: "Job market -> competition.",
                explanation: "Diễn giả nhấn mạnh thị trường việc làm sau tốt nghiệp rất cạnh tranh, chọn B."
            },
            {
                number: 19,
                topic: "Saving money strategy",
                question: "How does the speaker recommend saving money effectively?",
                options: [
                    { letter: "A", text: "Saving a large amount only on a daily basis", explanation: "Sai: không khuyên mỗi ngày tiết kiệm số lớn." },
                    { letter: "B", text: "Organizing their resources more effectively", explanation: "Đúng: bố trí nguồn lực hợp lý giúp tiết kiệm." },
                    { letter: "C", text: "Using credit cards to manage expenses", explanation: "Sai: không đề nghị dùng thẻ tín dụng." }
                ],
                answer: "B",
                tip: "Key phrase: organize resources.",
                explanation: "Người nói đề xuất kiểm soát tài nguyên để tiết kiệm tiền, do đó B chính xác."
            },
            {
                number: 20,
                topic: "Successful savers",
                question: "Who does the speaker believe can save money most successfully?",
                options: [
                    { letter: "A", text: "Those who get advice from people with experience", explanation: "Đúng: người tìm lời khuyên từ người có kinh nghiệm tiết kiệm tốt hơn." },
                    { letter: "B", text: "Those who keep all savings in a single account", explanation: "Sai: không phải chiến lược được khuyên." },
                    { letter: "C", text: "Those who avoid long-term financial plans", explanation: "Sai: tránh kế hoạch dài hạn không giúp tiết kiệm." }
                ],
                answer: "A",
                tip: "Advice từ người giàu kinh nghiệm.",
                explanation: "Theo diễn giả, người biết nhờ tư vấn sẽ tiết kiệm hiệu quả, nên A đúng."
            },
            {
                number: 21,
                topic: "Managing personal finances",
                question: "What does the speaker say about managing personal finances?",
                options: [
                    { letter: "A", text: "Spend less on non-essential items", explanation: "Sai: không phải trọng tâm chính." },
                    { letter: "B", text: "Organize their resources more effectively", explanation: "Đúng: tiếp tục nhấn mạnh việc tổ chức nguồn lực." },
                    { letter: "C", text: "Rely on online budgeting tools", explanation: "Sai: không nhắc đến công cụ trực tuyến." }
                ],
                answer: "B",
                tip: "Trùng thông điệp: organize resources.",
                explanation: "Người nói lặp lại rằng quản lý tài chính tức biết sắp xếp nguồn lực, nên chọn B."
            },
            {
                number: 22,
                topic: "Improving financial management",
                question: "What does the speaker suggest for improving financial management?",
                options: [
                    { letter: "A", text: "Invest in more financial apps", explanation: "Sai: không khuyên đầu tư app." },
                    { letter: "B", text: "Avoid talking about money with friends", explanation: "Sai: không đề nghị tránh trò chuyện tiền bạc." },
                    { letter: "C", text: "Seek advice from someone who is experienced", explanation: "Đúng: nên hỏi người có kinh nghiệm." }
                ],
                answer: "C",
                tip: "Advice từ người có kinh nghiệm (lặp logic).",
                explanation: "Ông khuyên nên hỏi người có kinh nghiệm để quản lý tài chính tốt hơn, nên C đúng."
            },
            {
                number: 23,
                topic: "Novel future advice",
                question: "What does the announcer say about the new novel?",
                options: [
                    { letter: "A", text: "It is different from his earlier works", explanation: "Sai trong câu hỏi này, vì trọng tâm là lời khuyên tiếp theo." },
                    { letter: "B", text: "It is romantic and soft", explanation: "Sai: không nói là lãng mạn." },
                    { letter: "C", text: "He should listen to critics before writing his next work", explanation: "Đúng: announcer nhắc lại lời khuyên cho tác giả." }
                ],
                answer: "C",
                tip: "Dù câu hỏi nhắc 'new novel', đáp án là lời khuyên: listen to critics.",
                explanation: "Announcer liên hệ phản hồi cho tiểu thuyết mới và khuyên tác giả nên nghe giới phê bình, nên chọn C."
            },
            {
                number: 24,
                topic: "Happiness research coverage",
                question: "What does the radio MC say about how the research on happiness has been covered by the media?",
                options: [
                    { letter: "A", text: "It has been accurately reported by the media", explanation: "Sai: MC cho rằng truyền thông đưa tin không chính xác." },
                    { letter: "B", text: "It has not been accurately reported by the media", explanation: "Đúng: ông nói tin tức bị bóp méo." },
                    { letter: "C", text: "It has been ignored completely by the media", explanation: "Sai: nghiên cứu vẫn được nhắc tới." }
                ],
                answer: "B",
                tip: "Key: 'media misrepresented the findings'.",
                explanation: "MC nói truyền thông không phản ánh chính xác nghiên cứu nên B đúng."
            },
            {
                number: 25,
                topic: "Happiness research outcome",
                question: "According to the radio MC, what is unlikely regarding the research on happiness?",
                options: [
                    { letter: "A", text: "To find personal happiness", explanation: "Sai: không bàn về cá nhân." },
                    { letter: "B", text: "To find a conclusive answer", explanation: "Đúng: khó có kết luận dứt khoát." },
                    { letter: "C", text: "To discuss happiness in the media", explanation: "Sai: truyền thông vẫn bàn tới." }
                ],
                answer: "B",
                tip: "Nhớ: kết quả nghiên cứu về hạnh phúc khó 'conclusive'.",
                explanation: "MC nói không thể kỳ vọng tìm ra câu trả lời cuối cùng, nên chọn B."
            },
            {
                number: 26,
                topic: "Short-term goals",
                question: "What does the speaker say about short-term goals?",
                options: [
                    { letter: "A", text: "They allow you to be more flexible", explanation: "Đúng: mục tiêu ngắn hạn giúp linh hoạt." },
                    { letter: "B", text: "They create pressure and limit creativity", explanation: "Sai: người nói không chê áp lực." },
                    { letter: "C", text: "They only apply to specific situations", explanation: "Sai: không giới hạn hoàn cảnh." }
                ],
                answer: "A",
                tip: "Short-term = flexibility.",
                explanation: "Theo diễn giả, đặt mục tiêu ngắn hạn giúp điều chỉnh linh hoạt nên A đúng."
            },
            {
                number: 27,
                topic: "Goal setting opinion",
                question: "What is the speaker's opinion about goal setting?",
                options: [
                    { letter: "A", text: "It can lead to confusion and distraction", explanation: "Sai: không nói gây rối." },
                    { letter: "B", text: "It can prevent you from making mistakes", explanation: "Đúng: mục tiêu rõ ràng giúp tránh sai lầm." },
                    { letter: "C", text: "It can bring about opportunities for individuals", explanation: "Sai: không phải luận điểm chính." }
                ],
                answer: "B",
                tip: "Goal setting -> tránh mắc lỗi.",
                explanation: "Diễn giả nhấn mạnh đặt mục tiêu giúp tránh sai sót, do đó B đúng."
            },
            {
                number: 28,
                topic: "Guidebook features",
                question: "What does this guidebook offer to its audience?",
                options: [
                    { letter: "A", text: "It focuses solely on historical landmarks", explanation: "Sai: không chỉ nhắc địa danh lịch sử." },
                    { letter: "B", text: "It creates an adventure", explanation: "Đúng: sách biến chuyến đi thành cuộc phiêu lưu." },
                    { letter: "C", text: "It is difficult to navigate", explanation: "Sai: không khó dùng." }
                ],
                answer: "B",
                tip: "Guidebook -> 'turns trip into adventure'.",
                explanation: "Diễn giả nói sách hướng dẫn tạo trải nghiệm phiêu lưu nên chọn B."
            },
            {
                number: 29,
                topic: "Guidebook suitability",
                question: "What is the speaker's opinion about this guidebook?",
                options: [
                    { letter: "A", text: "It caters only to seasoned travelers", explanation: "Sai: không giới hạn người nhiều kinh nghiệm." },
                    { letter: "B", text: "It is outdated and irrelevant", explanation: "Sai: không chê lỗi thời." },
                    { letter: "C", text: "It is suitable for particular generations", explanation: "Đúng: sách phù hợp với vài thế hệ nhất định." }
                ],
                answer: "C",
                tip: "Key phrase: 'tailored for certain generations'.",
                explanation: "Người nói cho rằng sách phù hợp với một số thế hệ nên đáp án C chính xác."
            }
        ]
    }
};

