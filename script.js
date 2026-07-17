// Assessment Questions
const questions = [
    {
        question: "Do you enjoy working in teams or alone?",
        category: "teamwork",
        options: [
            { text: "Strongly prefer working in teams", score: 80 },
            { text: "Prefer teams but can work alone", score: 60 },
            { text: "No preference", score: 50 },
            { text: "Prefer working alone but can team up", score: 40 },
            { text: "Strongly prefer working alone", score: 20 }
        ]
    },
    {
        question: "Do you make decisions using logic or emotions?",
        category: "logic",
        options: [
            { text: "Always logic-driven", score: 90 },
            { text: "Mostly logic with some emotion", score: 70 },
            { text: "Balanced approach", score: 50 },
            { text: "Mostly emotion with some logic", score: 30 },
            { text: "Always emotion-driven", score: 10 }
        ]
    },
    {
        question: "How do you react under pressure?",
        category: "stress",
        options: [
            { text: "Thrive and perform better", score: 90 },
            { text: "Handle it well", score: 75 },
            { text: "Cope reasonably", score: 50 },
            { text: "Struggle but manage", score: 30 },
            { text: "Become overwhelmed", score: 10 }
        ]
    },
    {
        question: "What motivates you the most?",
        category: "motivation",
        options: [
            { text: "Personal achievement and growth", score: 85 },
            { text: "Helping others", score: 80 },
            { text: "Financial rewards", score: 70 },
            { text: "Recognition and status", score: 60 },
            { text: "Job security and stability", score: 50 }
        ]
    },
    {
        question: "How do you prefer to learn new skills?",
        category: "learning",
        options: [
            { text: "Reading and studying", score: 80, learningStyle: "reading" },
            { text: "Watching videos and tutorials", score: 80, learningStyle: "video" },
            { text: "Hands-on practice", score: 80, learningStyle: "hands-on" },
            { text: "Listening to lectures", score: 80, learningStyle: "listening" },
            { text: "Mix of all methods", score: 70, learningStyle: "mixed" }
        ]
    },
    {
        question: "How creative do you consider yourself?",
        category: "creativity",
        options: [
            { text: "Very creative and innovative", score: 95 },
            { text: "Quite creative", score: 75 },
            { text: "Moderately creative", score: 50 },
            { text: "Less creative, more practical", score: 30 },
            { text: "Not very creative", score: 10 }
        ]
    },
    {
        question: "What's your preferred work environment?",
        category: "environment",
        options: [
            { text: "Fast-paced and dynamic", score: 85 },
            { text: "Structured but flexible", score: 70 },
            { text: "Quiet and focused", score: 60 },
            { text: "Collaborative and social", score: 75 },
            { text: "Independent and autonomous", score: 65 }
        ]
    },
    {
        question: "How do you handle failure or setbacks?",
        category: "resilience",
        options: [
            { text: "Learn and move forward quickly", score: 90 },
            { text: "Get discouraged briefly then recover", score: 70 },
            { text: "Need time to process", score: 50 },
            { text: "Struggle to move past it", score: 30 },
            { text: "Feel defeated", score: 10 }
        ]
    },
    {
        question: "What's your communication style?",
        category: "communication",
        options: [
            { text: "Direct and assertive", score: 80 },
            { text: "Diplomatic and thoughtful", score: 75 },
            { text: "Friendly and casual", score: 70 },
            { text: "Reserved and careful", score: 60 },
            { text: "Quiet and minimal", score: 40 }
        ]
    },
    {
        question: "How organized are you typically?",
        category: "organization",
        options: [
            { text: "Very organized and detail-oriented", score: 90 },
            { text: "Mostly organized", score: 70 },
            { text: "Somewhat organized", score: 50 },
            { text: "Not very organized", score: 30 },
            { text: "Chaotic and spontaneous", score: 20 }
        ]
    },
    {
        question: "Are you a natural leader?",
        category: "leadership",
        options: [
            { text: "Yes, strong leadership qualities", score: 90 },
            { text: "Yes, but prefer not to lead", score: 70 },
            { text: "Can lead if needed", score: 50 },
            { text: "Prefer to follow", score: 30 },
            { text: "No, not a leader", score: 10 }
        ]
    },
    {
        question: "How do you approach problem-solving?",
        category: "problemSolving",
        options: [
            { text: "Analytical and systematic", score: 85 },
            { text: "Intuitive and creative", score: 85 },
            { text: "Collaborative and discussion-based", score: 75 },
            { text: "Cautious and thorough", score: 65 },
            { text: "Trial and error", score: 45 }
        ]
    },
    {
        question: "What's your relationship with technology?",
        category: "tech",
        options: [
            { text: "Love it, always learning", score: 90 },
            { text: "Comfortable and proficient", score: 75 },
            { text: "Use it but don't love it", score: 50 },
            { text: "Struggle with it sometimes", score: 30 },
            { text: "Prefer non-tech solutions", score: 10 }
        ]
    },
    {
        question: "How ambitious are you?",
        category: "ambition",
        options: [
            { text: "Very ambitious, want to achieve big", score: 95 },
            { text: "Ambitious but realistic", score: 75 },
            { text: "Moderately ambitious", score: 50 },
            { text: "Prefer work-life balance", score: 40 },
            { text: "Not particularly ambitious", score: 20 }
        ]
    },
    {
        question: "How well do you adapt to change?",
        category: "adaptability",
        options: [
            { text: "Embrace change and thrive", score: 90 },
            { text: "Adapt well with some effort", score: 75 },
            { text: "Can adapt but prefer stability", score: 50 },
            { text: "Struggle with change", score: 30 },
            { text: "Resist and resent change", score: 10 }
        ]
    }
];

// Personality Types
const personalityTypes = {
    "The Innovator": { range: [80, 100], traits: ["Creative", "Ambitious", "Risk-taker", "Visionary"] },
    "The Leader": { range: [70, 79], traits: ["Confident", "Decisive", "Charismatic", "Influential"] },
    "The Analyzer": { range: [60, 69], traits: ["Logical", "Detail-oriented", "Systematic", "Objective"] },
    "The Collaborator": { range: [50, 59], traits: ["Team-oriented", "Empathetic", "Communicative", "Supportive"] },
    "The Supporter": { range: [40, 49], traits: ["Caring", "Reliable", "Patient", "Humble"] }
};

// Career Paths
const careerPaths = {
    "tech": [
        { title: "Software Developer", description: "Build innovative applications" },
        { title: "Data Scientist", description: "Analyze and interpret complex data" },
        { title: "AI/ML Engineer", description: "Create intelligent systems" },
        { title: "DevOps Engineer", description: "Manage infrastructure and deployment" }
    ],
    "creative": [
        { title: "UI/UX Designer", description: "Create beautiful user experiences" },
        { title: "Graphic Designer", description: "Visual communication expert" },
        { title: "Content Creator", description: "Produce engaging content" },
        { title: "Animator", description: "Bring motion and life to visuals" }
    ],
    "business": [
        { title: "Product Manager", description: "Lead product strategy" },
        { title: "Entrepreneur", description: "Start your own venture" },
        { title: "Management Consultant", description: "Guide business transformation" },
        { title: "Financial Analyst", description: "Make data-driven decisions" }
    ],
    "social": [
        { title: "Teacher", description: "Educate and inspire others" },
        { title: "HR Manager", description: "Manage people and culture" },
        { title: "Counselor", description: "Help others achieve their goals" },
        { title: "Community Manager", description: "Build engaged communities" }
    ]
};

// State Management
let currentQuestion = 0;
let answers = [];
let userProfile = null;
let goals = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadFromStorage();
    setupThemeToggle();
    displayQuestion();
});

// Theme Management
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeToggleIcon();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Navigation
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    
    if (pageId === 'dashboardPage') {
        loadDashboard();
    }
}

// Assessment Flow
function displayQuestion() {
    if (currentQuestion >= questions.length) {
        generateResults();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById('questionText').textContent = q.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index, option);
        optionsContainer.appendChild(optionDiv);
    });

    updateProgress();
    updateButtons();
}

function selectOption(index, option) {
    answers[currentQuestion] = option;
    
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) {
        alert('Please select an option before proceeding');
        return;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        generateResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentQuestion === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'See Results →';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

// Results Generation
function generateResults() {
    const scores = calculateScores();
    const personality = determinePersonality(scores.overall);
    
    userProfile = {
        personalityType: personality,
        scores: scores,
        strengths: determineStrengths(scores),
        improvements: determineImprovements(scores),
        communicationStyle: determineCommunicationStyle(scores),
        learningStyle: determineLearningStyle(scores),
        careers: determineCareers(scores)
    };

    saveToStorage();
    displayResults();
    navigateTo('resultsPage');
}

function calculateScores() {
    let overall = 0;
    let teamwork = 0;
    let creativity = 0;
    let confidence = 0;
    let problemSolving = 0;
    let count = {
        overall: 0,
        teamwork: 0,
        creativity: 0,
        confidence: 0,
        problemSolving: 0
    };

    answers.forEach((answer, index) => {
        const category = questions[index].category;
        const score = answer.score;
        
        overall += score;
        count.overall++;

        if (category === 'teamwork') {
            teamwork += score;
            count.teamwork++;
        }
        if (category === 'creativity') {
            creativity += score;
            count.creativity++;
        }
        if (category === 'stress' || category === 'resilience') {
            confidence += score;
            count.confidence++;
        }
        if (category === 'problemSolving') {
            problemSolving += score;
            count.problemSolving++;
        }
    });

    return {
        overall: Math.round(overall / count.overall),
        teamwork: Math.round(teamwork / count.teamwork) || 0,
        creativity: Math.round(creativity / count.creativity) || 0,
        confidence: Math.round(confidence / count.confidence) || 0,
        problemSolving: Math.round(problemSolving / count.problemSolving) || 0
    };
}

function determinePersonality(score) {
    for (const [type, data] of Object.entries(personalityTypes)) {
        if (score >= data.range[0] && score <= data.range[1]) {
            return type;
        }
    }
    return "The Balanced Individual";
}

function determineStrengths(scores) {
    const strengths = [];
    if (scores.overall >= 70) strengths.push("High achiever");
    if (scores.teamwork >= 70) strengths.push("Team player");
    if (scores.creativity >= 70) strengths.push("Creative thinker");
    if (scores.confidence >= 75) strengths.push("Confident");
    if (scores.problemSolving >= 75) strengths.push("Problem solver");
    if (strengths.length === 0) strengths.push("Reliable", "Steady", "Dependable");
    return strengths;
}

function determineImprovements(scores) {
    const improvements = [];
    if (scores.teamwork < 50) improvements.push("Collaboration skills");
    if (scores.creativity < 50) improvements.push("Creative thinking");
    if (scores.confidence < 50) improvements.push("Self-confidence");
    if (scores.problemSolving < 50) improvements.push("Problem-solving skills");
    if (improvements.length === 0) improvements.push("Public speaking", "Time management", "Delegation");
    return improvements;
}

function determineCommunicationStyle(scores) {
    const answerTexts = answers.map((a, i) => a.text);
    const directCount = answerTexts.filter(t => t.includes("Direct")).length;
    const diplomaticCount = answerTexts.filter(t => t.includes("Diplomatic")).length;
    const friendlyCount = answerTexts.filter(t => t.includes("Friendly")).length;

    if (directCount > diplomaticCount && directCount > friendlyCount) {
        return "You're a direct communicator who values honesty and clarity.";
    } else if (diplomaticCount > friendlyCount) {
        return "You're a thoughtful communicator who considers others' feelings.";
    } else {
        return "You're a friendly communicator who builds rapport easily.";
    }
}

function determineLearningStyle(scores) {
    const learningStyles = answers
        .filter(a => a.learningStyle)
        .map(a => a.learningStyle);

    if (learningStyles.includes('video')) return "You learn best by watching videos and tutorials.";
    if (learningStyles.includes('hands-on')) return "You learn best through hands-on practice and experimentation.";
    if (learningStyles.includes('reading')) return "You learn best by reading and studying.";
    if (learningStyles.includes('listening')) return "You learn best by listening to lectures and discussions.";
    return "You have a mixed learning style and benefit from various methods.";
}

function determineCareers(scores) {
    let category = 'business';
    if (scores.creativity > 70) category = 'creative';
    if (scores.teamwork > 70 && scores.problemSolving < 70) category = 'social';
    if (scores.problemSolving > 75) category = 'tech';

    return careerPaths[category] || careerPaths['business'];
}

function displayResults() {
    const profile = userProfile;
    
    document.getElementById('personalityType').textContent = profile.personalityType;
    
    const confidence = Math.min(100, Math.max(0, profile.scores.confidence));
    const creativity = Math.min(100, Math.max(0, profile.scores.creativity));
    const teamwork = Math.min(100, Math.max(0, profile.scores.teamwork));

    document.getElementById('confidenceBar').style.width = confidence + '%';
    document.getElementById('confidenceScore').textContent = confidence + '%';
    
    document.getElementById('creativityBar').style.width = creativity + '%';
    document.getElementById('creativityScore').textContent = creativity + '%';
    
    document.getElementById('teamworkBar').style.width = teamwork + '%';
    document.getElementById('teamworkScore').textContent = teamwork + '%';

    // Strengths
    const strengthsList = document.getElementById('strengthsList');
    strengthsList.innerHTML = profile.strengths
        .map(s => `<div class="strength-badge">${s}</div>`)
        .join('');

    // Improvements
    const improvementsList = document.getElementById('improvementsList');
    improvementsList.innerHTML = profile.improvements
        .map(i => `<div class="improvement-badge">${i}</div>`)
        .join('');

    // Communication Style
    document.getElementById('communicationStyle').textContent = profile.communicationStyle;

    // Learning Style
    document.getElementById('learningStyle').textContent = profile.learningStyle;

    // Careers
    const careersList = document.getElementById('careersList');
    careersList.innerHTML = profile.careers
        .map(c => `<div class="career-badge"><strong>${c.title}</strong><p>${c.description}</p></div>`)
        .join('');
}

// Dashboard
function loadDashboard() {
    if (!userProfile) {
        alert('Please complete the assessment first');
        navigateTo('assessmentPage');
        return;
    }

    loadGoals();
    createCharts();
}

function createCharts() {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { display: false }
        }
    };

    const createGauge = (canvasId, value, label) => {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: ['#6366f1', '#e5e7eb'],
                    borderWidth: 0
                }]
            },
            options: {
                ...chartOptions,
                cutout: '75%'
            }
        });
    };

    createGauge('confidenceChart', userProfile.scores.confidence, 'Confidence');
    createGauge('creativityChart', userProfile.scores.creativity, 'Creativity');
    createGauge('teamworkChart', userProfile.scores.teamwork, 'Teamwork');
    createGauge('problemSolvingChart', userProfile.scores.problemSolving, 'Problem-Solving');
}

// Goals Management
function addGoal() {
    const input = document.getElementById('goalInput');
    const deadline = document.getElementById('goalDeadline');

    if (!input.value.trim()) {
        alert('Please enter a goal');
        return;
    }

    const goal = {
        id: Date.now(),
        title: input.value,
        deadline: deadline.value || 'No deadline',
        completed: false,
        createdAt: new Date().toLocaleDateString()
    };

    goals.push(goal);
    saveToStorage();
    loadGoals();
    input.value = '';
    deadline.value = '';
}

function completeGoal(id) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.completed = !goal.completed;
        saveToStorage();
        loadGoals();
    }
}

function deleteGoal(id) {
    goals = goals.filter(g => g.id !== id);
    saveToStorage();
    loadGoals();
}

function loadGoals() {
    const goalsList = document.getElementById('goalsList');
    if (goals.length === 0) {
        goalsList.innerHTML = '<p style="text-align: center; color: #6b7280;">No goals yet. Add one to get started!</p>';
        return;
    }

    goalsList.innerHTML = goals.map(goal => `
        <div class="goal-item ${goal.completed ? 'completed' : ''}">
            <div class="goal-info">
                <div class="goal-title">${goal.completed ? '✓ ' : ''}${goal.title}</div>
                <div class="goal-deadline">Deadline: ${goal.deadline}</div>
            </div>
            <div class="goal-actions">
                <button class="goal-btn complete" onclick="completeGoal(${goal.id})">
                    ${goal.completed ? 'Undo' : 'Done'}
                </button>
                <button class="goal-btn delete" onclick="deleteGoal(${goal.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Storage Management
function saveToStorage() {
    localStorage.setItem('mirrorMindProfile', JSON.stringify(userProfile));
    localStorage.setItem('mirrorMindGoals', JSON.stringify(goals));
    localStorage.setItem('mirrorMindAnswers', JSON.stringify(answers));
}

function loadFromStorage() {
    const savedProfile = localStorage.getItem('mirrorMindProfile');
    const savedGoals = localStorage.getItem('mirrorMindGoals');
    const savedAnswers = localStorage.getItem('mirrorMindAnswers');

    if (savedProfile) userProfile = JSON.parse(savedProfile);
    if (savedGoals) goals = JSON.parse(savedGoals);
    if (savedAnswers) answers = JSON.parse(savedAnswers);
}