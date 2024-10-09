
const questions = {
    level1: [
        "What do you think my major is?",
        "Do you think I've ever been in love?",
        "Do you think I’ve ever had my heart broken?",
        "Do you think I've ever been fired?",
        "Do you think I was popular in high school?",
        "What do you think I will prefer? Hot Cheetos or onion rings?",
        "Do you think I like being a couch potato?",
        "Do you think I am an extrovert?",
        "Do you think I have a sibling? Older or younger?",
        "Where do you think I grew up?",
        "Do you think I am mainly cooking or getting takeout?",
        "What do you think I have been binge-watching lately?",
        "Do you think I hate waking up early?",
        "What is the nicest thing you can remember doing for a friend?",
        "What type of social situation makes you feel the most awkward?",
        "Who do you think is my favorite idol?",
        "When do I usually have dinner?",
        "Do you think I like wearing red?",
        "What do you think is my favorite dish?",
        "Do you think I'm in Greek life?",
        "Do you know what my dream career is?",
        "Do you know where my dream vacation is?",
        "Do you think I used to be bullied in school?",
        "Do you think I am a talkative person?",
        "Do you think I am a cold fish?",
        "What do you think my favorite Starbucks drink is?",
        "Do you think I love reading books?",
        "When do you think I most usually like to stay alone?",
        "Which part of a house do you think is my favorite place?",
        "Do you think I like playing video games?"
    ],
    level2: [
        "How likely do you think I will change my career?",
        "What was your first impression of me?",
        "What is the last thing you lied about?",
        "What have you been hiding all those years?",
        "What is your weirdest thinking?",
        "What is the last thing you lied to your mom about?",
        "What's the biggest mistake you've made?",
        "What is the worst pain you have ever been in?",
        "What are you still trying to prove to yourself?",
        "What is your most defining personality?",
        "What is the hardest part about dating you?",
        "What is the best thing about your father or mother?",
        "What is the favorite lyric you can't stop thinking about in your head?",
        "Are you lying to yourself about anything?",
        "What animal that you want to raise?",
        "What would you feel best to fully accept in this current status?",
        "When was the last time you felt lucky to be you?",
        "What is the adjective that best describes you in the past and now?",
        "What would your younger self not believe about your life today?",
        "Which part of your family that you want to keep or let go of?",
        "What is your favorite memory from your childhood?",
        "How long does it take to be friends with you?",
        "What takes someone from a friend to a best friend for you?",
        "What question are you trying to answer in your life right now?",
        "What would you tell your younger self?",
        "What is your most regretful action?",
        "When was the last time you cried?",
        "What are you better at than most people you know?",
        "Who do you want to talk to when you feel lonely?",
        "What is the hardest part of being abroad?"
    ],
    level3: [
        "What do you want to change in your personality right now?",
        "Who do you want to say sorry or thank the most?",
        "If you made a playlist for me, what 5 songs would be on it?",
        "What about me surprised you?",
        "What do you think my superpower is?",
        "Do you think we have some similarities or differences?",
        "Who do you think can be my right partner?",
        "What do I need to read as soon as I have time?",
        "Where am I most qualified to give advice?",
        "What did you learn about yourself while playing this game?",
        "What question were you most afraid to answer?",
        "Why's 'sorority' still important to college life?",
        "What would be the perfect gift for me?",
        "What part of yourself do you see in me?",
        "Based on what you learned about me, what would you suggest I would read?",
        "What would you remember about me when we're no longer in contact?",
        "From what I've heard about me, what Netflix film do you recommend me to watch?",
        "What can I help you with?",
        "How does Sigma Kappa continue to impact your life?",
        "Can you tolerate someone who used to hurt you?",
        "What do I need to hear right now?",
        "Would you dare to do something out of your comfort zone next week?",
        "Do you think people come into your life for some reason?",
        "Why do you think we met?",
        "What do you think I fear the most?",
        "What is a lesson you will take away from your chat?",
        "What do you suggest I should let go of?",
        "Admit something",
        "What about me that you hardly understand?",
        "How would you describe me to a stranger?"
    ],
    wildcards: [
        "Draw a picture together (60 seconds)",
        "Tell a story together (1 minute)",
        "Write a message to each other and give it to each other. Open it once you have left.",
        "Take a selfie together",
        "Create your own question on anything. Make it count!",
        "Look into each other's eyes for 30 seconds. What did you notice?",
        "Show your photo when you are a kid (in the nude)",
        "Sing a favorite song",
        "Tell the other person to close their eyes and to keep them closed (wait for 15 seconds and kiss them)",
        "Write a note to your younger selves. After 1 minute, open and compare."
    ]
};

// Expansion packs
const expansionPacks = {
    couples: [
        "What do you think will be perfect for your wedding?",
        "What would make you feel closer to me?",
        "Is there any time you want to leave me?",
        "How many children do you want?",
        "What can we create together?",
        "Do you think I am still a virgin?",
        "What's the most attractive quality about me that isn't physical?",
        "What is the story about you that I cannot miss?",
        "What do you think my perfect date night would be?",
        "Do you think I have never been in a relationship?"
    ],
    friendship: [
        "What do you think my weakness is?",
        "What do you think my strength is?",
        "What do you think I should know about myself that perhaps I'm unaware of?",
        "How do our personalities complement each other?",
        "What do you admire most about me?",
        "In one word, describe how you feel right now!",
        "What answer of mine made you light up?",
        "Can I trust you to say something private?",
        "What are you overthinking right now?",
        "Do you think I am a good kisser?"
    ],
    workplace: [
        "What's one professional accomplishment you're most proud of, and why?",
        "Share a time when you faced a significant challenge at work and how you overcame it.",
        "What is a skill or strength you possess that you feel is underutilized in your current role?",
        "Reflecting on your career, what has been the most valuable lesson you've learned so far?",
        "Describe a work-related goal or aspiration you have for the future.",
        "Share a mentor or colleague who has had a significant impact on your professional growth, and why.",
        "How do you handle work-life balance and maintain well-being in a demanding work environment?",
        "What is one thing you believe your teammates or colleagues don't know about you?",
        "Describe a moment when you felt a strong sense of teamwork or collaboration in your workplace.",
        "Reflecting on your current job, what is the most rewarding aspect of your work?"
    ],
    family: [
        "What are you most excited about today?",
        "What is the most fun you've ever had?",
        "What is the saddest story you've ever heard?",
        "What have you wanted to tell me for a long time?",
        "What takes you so long to tell me the truth?",
        "Do you think I am the person you can talk to?",
        "What activities do you wish to do with me?",
        "What's the most unexplainable thing that's ever happened to you?",
        "What is your day like?",
        "When do you think is the best time to talk about what happened to you?"
    ]
};


let currentLevel = 1;
let currentIndex = 0;
let currentPlayer = 1;
let shuffledQuestions = {};

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start game function, includes expansion pack selections
function startGame() {
    let selectedQuestions = {
        level1: [...questions.level1],
        level2: [...questions.level2],
        level3: [...questions.level3]
    };

    // Check if expansion packs are selected
    if (document.getElementById("couples-pack").checked) {
        selectedQuestions.level2 = selectedQuestions.level2.concat(expansionPacks.couples);
    }
    if (document.getElementById("friendship-pack").checked) {
        selectedQuestions.level2 = selectedQuestions.level2.concat(expansionPacks.friendship);
    }
    if (document.getElementById("workplace-pack").checked) {
        selectedQuestions.level3 = selectedQuestions.level3.concat(expansionPacks.workplace);
    }
    if (document.getElementById("family-pack").checked) {
        selectedQuestions.level3 = selectedQuestions.level3.concat(expansionPacks.family);
    }

    // Shuffle the questions
    shuffledQuestions.level1 = shuffleArray(selectedQuestions.level1);
    shuffledQuestions.level2 = shuffleArray(selectedQuestions.level2);
    shuffledQuestions.level3 = shuffleArray(selectedQuestions.level3);

    // Hide the expansion pack selection and show the game interface
    document.getElementById('expansion-packs').style.display = 'none';
    document.getElementById('player-turn').style.display = 'block';
    document.getElementById('card').style.display = 'block';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('wildcard-btn').style.display = 'inline-block';
    document.getElementById('skip-btn').style.display = 'inline-block';
    document.getElementById('level-indicator').style.display = 'block';
    document.getElementById('remaining-cards').style.display = 'block';

    // Initialize game state
    currentLevel = 1;
    currentIndex = 0;
    currentPlayer = 1;
    updateGameState();
}

// Function to get the next question based on the level
function getNextQuestion() {
    let questionList;

    if (currentLevel === 1) {
        questionList = shuffledQuestions.level1;
    } else if (currentLevel === 2) {
        questionList = shuffledQuestions.level2;
    } else if (currentLevel === 3) {
        questionList = shuffledQuestions.level3;
    }

    if (currentIndex < questionList.length) {
        return questionList[currentIndex++];
    } else {
        // Move to the next level if we reached the end of the current level
        currentLevel++;
        currentIndex = 0;
        if (currentLevel <= 3) {
            return getNextQuestion();  // Get the first question of the next level
        } else {
            // Game is over, show restart button
            document.getElementById('next-btn').style.display = 'none';
            document.getElementById('wildcard-btn').style.display = 'none';
            document.getElementById('skip-btn').style.display = 'none';
            document.getElementById('restart-btn').style.display = 'inline-block';
            return "Game over! You’ve completed all levels.";
        }
    }
}

// Function to update the game state
function updateGameState() {
    const question = getNextQuestion();
    document.getElementById("question-text").textContent = question;
    document.getElementById("player-turn").textContent = `Player ${currentPlayer}'s Turn`;

    // Update level indicator and number of cards remaining
    document.getElementById("level-indicator").textContent = `Level ${currentLevel}`;
    let remainingCards;
    if (currentLevel === 1) {
        remainingCards = shuffledQuestions.level1.length - currentIndex;
    } else if (currentLevel === 2) {
        remainingCards = shuffledQuestions.level2.length - currentIndex;
    } else if (currentLevel === 3) {
        remainingCards = shuffledQuestions.level3.length - currentIndex;
    }
    document.getElementById("remaining-cards").textContent = `Remaining cards in this level: ${remainingCards}`;

    // Alternate the players
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Skip to the next level
function skipToNextLevel() {
    currentLevel++;
    currentIndex = 0;

    // Update game state if there are more levels to play
    if (currentLevel <= 3) {
        updateGameState();
    } else {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('wildcard-btn').style.display = 'none';
        document.getElementById('skip-btn').style.display = 'none';
        document.getElementById('restart-btn').style.display = 'inline-block';
        document.getElementById("question-text").textContent = "Game over! You’ve completed all levels.";
    }
}

// Restart the game
function restartGame() {
    // Reset game state
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('expansion-packs').style.display = 'block';

    // Hide game UI
    document.getElementById('player-turn').style.display = 'none';
    document.getElementById('card').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('wildcard-btn').style.display = 'none';
    document.getElementById('skip-btn').style.display = 'none';
    document.getElementById('level-indicator').style.display = 'none';
    document.getElementById('remaining-cards').style.display = 'none';
}

// Event listener for "Next Question" button
document.getElementById('next-btn').addEventListener('click', updateGameState);

// Event listener for "Draw a Wildcard" button
document.getElementById('wildcard-btn').addEventListener('click', function () {
    const wildcard = questions.wildcards[Math.floor(Math.random() * questions.wildcards.length)];
    document.getElementById("question-text").textContent = wildcard;
});

// Event listener for "Start Game" button
document.getElementById('start-btn').addEventListener('click', startGame);

// Event listener for "Skip to Next Level" button
document.getElementById('skip-btn').addEventListener('click', skipToNextLevel);

// Event listener for "Restart Game" button
document.getElementById('restart-btn').addEventListener('click', restartGame);