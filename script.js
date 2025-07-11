// 다국어 데이터
const i18n = {
  ko: {
    startTitle: "🤖 나와 찰떡궁합인 AI 동료는?",
    startSubtitle: "5개의 질문으로 알아보는 AI 친밀도 테스트",
    startDesc1: "아래 5개의 질문을 통해 사용자의 AI 친밀도를 측정합니다.",
    startDesc2: "각 문항은 3지선다이며, 결과에 따라 최적의 AI 툴을 추천해드립니다!",
    startBtn: "테스트 시작하기",
    retakeBtn: "다시 테스트하기",
    solutionBtn: "솔루션 자세히 보기",
    progress: (cur, total) => `질문 ${cur} / ${total}`,
    questions: [
      {
        question: "당신의 팀에 'AI 신입사원'이 온다면?",
        options: [
          "최고! 내 일 좀 팍팍 덜어줘!",
          "오... 진짜 잘할까? 일단 지켜본다.",
          "에이, 그냥 내가 하는 게 빨라."
        ]
      },
      {
        question: "매주 해야 하는 똑같은 보고서 작업, 너무 귀찮을 때 당신의 생각은?",
        options: [
          "\"AI가 알아서 다 해주면 안 되나?\"",
          "\"자료 찾는 것만 도와줘도 좋겠다.\"",
          "\"어차피 내가 다시 봐야 해. 그냥 내가 할래.\""
        ]
      },
      {
        question: "업무에 필요한 파일, 어디에 있는지 기억나지 않을 때 가장 먼저 하는 행동은?",
        options: [
          "AI한테 바로 물어본다.",
          "일단 내가 찾아보고, 없으면 AI에게 물어본다.",
          "직접 찾는다."
        ]
      },
      {
        question: "매일 오는 이메일 첨부파일, AI가 정리해 준다면?",
        options: [
          "내 폴더까지 알아서 정리해 줘!",
          "편하긴 하겠다. 중요한 건 내가 다시 확인해야지.",
          "내 이메일을? 좀 불안해."
        ]
      },
      {
        question: "AI 동료를 한 명만 둔다면?",
        options: [
          "프로 일잘러",
          "스마트 비서",
          "성실한 인턴"
        ]
      }
    ],
    results: {
      low: {
        title: "👀 신중한 관찰자",
        subtitle: "AI를 신중하게 관찰하고 천천히 익숙해지는 타입",
        description: "대표님은 AI 도입에 신중하며, 검증된 기술로 확실한 성공을 경험하는 것이 중요한 현명한 관리자입니다. 거창한 혁신보다는, 당장 눈앞의 가장 번거로운 문제 하나를 해결하는 것에 집중합니다.",
        tools: "• ✍ 글쓰기/아이디어: <strong>Wrtn</strong>, <strong>네이버 ClovaX</strong><br>• 🌐 번역/요약: <strong>DeepL</strong>, <strong>파파고</strong>",
        solution: "뤼튼으로 글쓰기 초안을 만드는 경험, 편리하셨죠?<br>하지만 그 AI는 우리 회사의 제품 정보나 내부 규정을 알지 못합니다.<br><strong>AI-UP의 스타터 에이전트</strong>는 오직 '우리 회사 데이터'만 학습하여,<br>정확한 정보만 제공하는 '우리 회사 전용 신입사원'이 되어드립니다.",
        buttonText: "Starter 솔루션 자세히 보기"
      },
      medium: {
        title: "🧠 호기심 많은 탐험가",
        subtitle: "실용성과 효율을 중시하는 AI 활용 실전파",
        description: "대표님은 AI를 '똑똑한 비서'로 인식하고, 업무 효율을 극대화하는 데 큰 관심을 가진 실용주의자입니다. 이제 단순 활용을 넘어, 여러 도구를 연결하여 시너지를 내고 싶어 합니다.",
        tools: "• [무료] <strong>Notion AI</strong>, <strong>Gamma</strong> – 발표자료 자동화, 회의록 요약<br>• [유료] <strong>ChatGPT Plus</strong>, <strong>Perplexity Pro</strong> – 리서치, 보고서 작성",
        solution: "ChatGPT Plus로 특정 웹페이지를 요약하는 건 강력하죠.<br>하지만 구글 드라이브, 노션, 로컬 폴더에 흩어진 수십 개의 문서를<br>한 번에 분석할 수는 없습니다.<br><br><strong>AI-UP의 스탠다드 에이전트</strong>는 이런 데이터를 자동으로 연결하고<br>학습하여, <strong>우리 회사만의 전용 검색 엔진</strong>이 되어줍니다.",
        buttonText: "Standard 솔루션 자세히 보기"
      },
      high: {
        title: "🚀 적극적인 프론티어",
        subtitle: "AI를 전략적 파트너로 삼고자 하는 개척자",
        description: "대표님은 AI를 단순한 도구를 넘어, 비즈니스 프로세스를 혁신하는 <strong>전략적 파트너</strong>로 활용할 준비가 된 개척자입니다. 자동화 워크플로우 구축과 '판단하는 AI'에 관심이 많습니다.",
        tools: "• [창작] <strong>Claude 3 (Opus)</strong>, <strong>Midjourney</strong> – 전략/마케팅 활용<br>• [직접 구축] <strong>n8n.io</strong> – 앱 연결 자동화, 데이터 처리 시각화",
        solution: "n8n을 통해 자동화의 강력함을 이미 알고 계시군요.<br>하지만 정교한 비즈니스 로직, 복잡한 예외 처리,<br>그리고 'AI의 지능적인 판단'을 녹여내는 건 전문가의 영역입니다.<br><br><strong>AI-UP의 프리미엄 에이전트</strong>는 단순한 자동화 도구가 아닙니다.<br>상황을 이해하고 스스로 판단하는 '진짜 AI 직원'을 채용하는 것입니다.",
        buttonText: "Premium 솔루션 자세히 보기"
      }
    },
    solutionAlert: "AI-UP 솔루션에 대한 자세한 정보는 곧 제공될 예정입니다!",
    sectionTitles: {
      diagnosis: "📋 진단 내용",
      tools: "🛠 추천 AI 툴킷",
      solution: "🧠 솔루션 제안"
    }
  },
  en: {
    startTitle: "🤖 Which AI Teammate is Your Perfect Match?",
    startSubtitle: "Discover your AI affinity in 5 questions",
    startDesc1: "Measure your AI affinity with the 5 questions below.",
    startDesc2: "Each question has 3 choices. Get the best AI tool recommendations for you!",
    startBtn: "Start Test",
    retakeBtn: "Retake Test",
    solutionBtn: "See Solution Details",
    progress: (cur, total) => `Question ${cur} / ${total}`,
    questions: [
      {
        question: "If a new 'AI employee' joins your team, what do you think?",
        options: [
          "Awesome! Let it take over my work!",
          "Hmm... Will it really do well? Let's wait and see.",
          "Nah, it's faster if I just do it myself."
        ]
      },
      {
        question: "When you’re tired of making the same weekly report, what do you wish?",
        options: [
          '"Can’t AI just do it all for me?"',
          '"I’d be happy if it just helped me find data."',
          '"I’ll have to check it anyway. I’ll just do it myself."'
        ]
      },
      {
        question: "When you can’t remember where a work file is, what do you do first?",
        options: [
          "Ask AI right away.",
          "I look for it myself, and if I can't, I ask AI.",
          "I search for it myself."
        ]
      },
      {
        question: "If AI organized your daily email attachments, how would you feel?",
        options: [
          "Let it organize my folders too!",
          "That’d be convenient, but I’ll double-check important things.",
          "My email? That’s a bit worrying."
        ]
      },
      {
        question: "If you could have only one AI teammate, who would it be?",
        options: [
          "A pro problem-solver",
          "A smart assistant",
          "A diligent intern"
        ]
      }
    ],
    results: {
      low: {
        title: "👀 Careful Observer",
        subtitle: "You observe AI carefully and adapt gradually.",
        description: "You are prudent about adopting AI, valuing proven technology and certain success. Rather than grand innovation, you focus on solving the most tedious problem at hand.",
        tools: "• ✍ Writing/Ideas: <strong>Wrtn</strong>, <strong>Naver ClovaX</strong><br>• 🌐 Translation/Summary: <strong>DeepL</strong>, <strong>Papago</strong>",
        solution: "You’ve enjoyed drafting with Wrtn, right?<br>But that AI doesn’t know your company’s product info or internal rules.<br><strong>AI-UP’s Starter Agent</strong> learns only your company’s data,<br>becoming your exclusive, accurate ‘new hire’.",
        buttonText: "See Starter Solution"
      },
      medium: {
        title: "🧠 Curious Explorer",
        subtitle: "A practical user who values efficiency and utility.",
        description: "You see AI as a ‘smart assistant’ and are keen to maximize work efficiency. Now you want to connect multiple tools for synergy.",
        tools: "• [Free] <strong>Notion AI</strong>, <strong>Gamma</strong> – Automated slides, meeting notes<br>• [Paid] <strong>ChatGPT Plus</strong>, <strong>Perplexity Pro</strong> – Research, report writing",
        solution: "Summarizing a web page with ChatGPT Plus is powerful.<br>But you can’t analyze dozens of docs scattered across Google Drive, Notion, and local folders at once.<br><br><strong>AI-UP’s Standard Agent</strong> connects and learns from all your data,<br>becoming your company’s exclusive search engine.",
        buttonText: "See Standard Solution"
      },
      high: {
        title: "🚀 Active Frontier",
        subtitle: "A pioneer ready to make AI a strategic partner.",
        description: "You’re ready to use AI as a strategic partner to transform business processes. You’re interested in building automated workflows and ‘judgmental AI’.",
        tools: "• [Creation] <strong>Claude 3 (Opus)</strong>, <strong>Midjourney</strong> – Strategy/Marketing<br>• [Build] <strong>n8n.io</strong> – App automation, data visualization",
        solution: "You already know the power of automation with n8n.<br>But sophisticated business logic, complex exceptions, and ‘intelligent judgment’ require experts.<br><br><strong>AI-UP’s Premium Agent</strong> isn’t just an automation tool.<br>It’s like hiring a real AI employee who understands and decides on its own.",
        buttonText: "See Premium Solution"
      }
    },
    solutionAlert: "Detailed information about AI-UP solutions will be available soon!",
    sectionTitles: {
      diagnosis: "📋 Diagnosis",
      tools: "🛠 Recommended AI Toolkit",
      solution: "🧠 Solution Suggestion"
    }
  }
};

let currentLang = 'ko';
let currentQuestion = 0;
let totalScore = 0;
let userAnswers = [];

// DOM 요소들
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const progressFill = document.querySelector('.progress-fill');
const progressText = document.getElementById('current-question');
const questionText = document.getElementById('question-text');
const optionBtns = document.querySelectorAll('.option-btn');
const retakeBtn = document.getElementById('retake-btn');
const solutionBtn = document.getElementById('solution-btn');
const langSelect = document.getElementById('lang');

langSelect.addEventListener('change', (e) => {
  currentLang = e.target.value;
  updateAllTexts();
});

startBtn.addEventListener('click', startTest);
retakeBtn.addEventListener('click', resetTest);
solutionBtn.addEventListener('click', () => {
  alert(i18n[currentLang].solutionAlert);
});

function updateAllTexts() {
  // 시작 화면
  document.querySelector('.header h1').textContent = i18n[currentLang].startTitle;
  document.querySelector('.subtitle').textContent = i18n[currentLang].startSubtitle;
  document.querySelector('.intro p:nth-child(1)').textContent = i18n[currentLang].startDesc1;
  document.querySelector('.intro p:nth-child(2)').textContent = i18n[currentLang].startDesc2;
  startBtn.textContent = i18n[currentLang].startBtn;
  retakeBtn.textContent = i18n[currentLang].retakeBtn;
  solutionBtn.textContent = i18n[currentLang].solutionBtn;

  // 질문 화면
  if (questionScreen.classList.contains('active')) {
    loadQuestion();
  }
  // 결과 화면
  if (resultScreen.classList.contains('active')) {
    updateResultTexts();
  }
  // 결과 섹션 제목도 변경
  document.getElementById('result-section-diagnosis').textContent = i18n[currentLang].sectionTitles.diagnosis;
  document.getElementById('result-section-tools').textContent = i18n[currentLang].sectionTitles.tools;
  document.getElementById('result-section-solution').textContent = i18n[currentLang].sectionTitles.solution;
}

function updateResultTexts() {
  if (userAnswers.length === 0) return;
  
  totalScore = userAnswers.reduce((sum, answer) => sum + answer.score, 0);
  let resultType;
  if (totalScore >= 13) {
    resultType = 'high';
  } else if (totalScore >= 8) {
    resultType = 'medium';
  } else {
    resultType = 'low';
  }
  
  const result = i18n[currentLang].results[resultType];
  document.getElementById('result-title').textContent = result.title;
  document.getElementById('result-subtitle').textContent = result.subtitle;
  document.getElementById('result-description').innerHTML = result.description;
  document.getElementById('recommended-tools').innerHTML = result.tools;
  document.getElementById('solution-package').innerHTML = result.solution;
  solutionBtn.textContent = result.buttonText;
}

function startTest() {
  showScreen(questionScreen);
  loadQuestion();
}

function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function loadQuestion() {
  const qData = i18n[currentLang].questions[currentQuestion];
  questionText.textContent = qData.question;
  optionBtns.forEach((btn, index) => {
    btn.querySelector('.option-text').textContent = qData.options[index];
    btn.classList.remove('selected');
  });
  // 진행률
  const progress = ((currentQuestion + 1) / i18n[currentLang].questions.length) * 100;
  progressFill.style.width = progress + '%';
  progressText.textContent = i18n[currentLang].progress(currentQuestion + 1, i18n[currentLang].questions.length);
  // 옵션 버튼 이벤트
  optionBtns.forEach((btn, index) => {
    btn.onclick = () => selectOption(index, parseInt(btn.dataset.score));
  });
}

function selectOption(optionIndex, score) {
  optionBtns.forEach(btn => btn.classList.remove('selected'));
  optionBtns[optionIndex].classList.add('selected');
  userAnswers[currentQuestion] = {
    question: i18n[currentLang].questions[currentQuestion].question,
    answer: i18n[currentLang].questions[currentQuestion].options[optionIndex],
    score: score
  };
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < i18n[currentLang].questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 500);
}

function showResult() {
  showScreen(resultScreen);
  updateResultTexts();
}

function resetTest() {
  currentQuestion = 0;
  totalScore = 0;
  userAnswers = [];
  showScreen(startScreen);
  updateAllTexts();
}

// 최초 로딩 시 텍스트 세팅
updateAllTexts(); 