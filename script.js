document.addEventListener('DOMContentLoaded', function() {
// 다국어 데이터 (한국어만)
const i18n = {
  startTitle: "🤖 나와 찰떡궁합인 AI 동료는?",
  startSubtitle: "5개의 질문으로 알아보는 AI 친밀도 테스트",
  startDesc1: "아래 5개의 질문을 통해 사용자의 AI 친밀도를 측정합니다.",
  startDesc2: "각 문항은 3지선다이며, 결과에 따라 최적의 AI 툴을 추천해드립니다!",
  startBtn: "테스트 시작하기",
  retakeBtn: "다시 테스트하기",
  solutionBtn: "문의하기",
  progress: (cur, total) => `질문 ${cur} / ${total}`,
  questions: [
    {
      question: "당신의 팀에 'AI 신입사원'이 온다면?",
      options: [
        { text: "최고! 내 일 좀 팍팍 덜어줘!", score: 3 },
        { text: "오... 진짜 잘할까? 일단 지켜본다.", score: 2 },
        { text: "에이, 그냥 내가 하는 게 빨라.", score: 1 }
      ]
    },
    {
      question: "매주 해야 하는 똑같은 보고서 작업, 너무 귀찮을 때 당신의 생각은?",
      options: [
        { text: "\"AI가 알아서 다 해주면 안 되나?\"", score: 3 },
        { text: "\"자료 찾는 것만 도와줘도 좋겠다.\"", score: 2 },
        { text: "\"어차피 내가 다시 봐야 해. 그냥 내가 할래.\"", score: 1 }
      ]
    },
    {
      question: "업무에 필요한 파일, 어디에 있는지 기억나지 않을 때 가장 먼저 하는 행동은?",
      options: [
        { text: "AI한테 바로 물어본다.", score: 3 },
        { text: "일단 내가 찾아보고, 없으면 AI에게 물어본다.", score: 2 },
        { text: "직접 찾는다.", score: 1 }
      ]
    },
    {
      question: "매일 오는 이메일 첨부파일, AI가 정리해 준다면?",
      options: [
        { text: "내 폴더까지 알아서 정리해 줘!", score: 3 },
        { text: "편하긴 하겠다. 중요한 건 내가 다시 확인해야지.", score: 2 },
        { text: "내 이메일을? 좀 불안해.", score: 1 }
      ]
    },
    {
      question: "AI 동료를 한 명만 둔다면?",
      options: [
        { text: "프로 일잘러", score: 3 },
        { text: "스마트 비서", score: 2 },
        { text: "성실한 인턴", score: 1 }
      ]
    }
  ],
  results: {
    one: {
      title: "🧩 보수적인 현실주의자",
      subtitle: "AI 신중관망파",
      description: "당신은 'AI 도입'이라는 키워드에 아직 신중하며, 검증된 도구나 확실한 성공 사례가 있을 때에만 행동하는 타입입니다. 자동화보다 직접 확인하는 것이 더 믿을 수 있다고 느끼며, 지금 방식이 더 안전하다고 판단합니다.",
      tools: "• [무료] <strong>DeepL</strong>, <strong>파파고</strong> – 외국어 이메일/자료 번역<br>• [무료] <strong>뤼튼(Wrtn)</strong>, <strong>클로바X</strong> – SNS/이메일 초안 작성 지원",
      solution: "AI는 새로운 게 아니라, 기존 업무의 연장선입니다. 당장 쓰는 툴에 AI 기능을 하나씩 추가하며 가장 익숙한 방식 안에서 변화를 경험해보세요. <strong>AI-UP의 교육</strong>을 통해 저희가 그 첫걸음을 도와드리겠습니다.",
      buttonText: "문의하기"
    },
    two: {
      title: "👀 신중한 관찰자",
      subtitle: "AI를 신중하게 관찰하고 천천히 익숙해지는 타입",
      description: "당신은 AI 도입에 신중하며, 검증된 기술로 확실한 성공을 경험하는 것이 중요한 현명한 관리자입니다. 거창한 혁신보다는, 당장 눈앞의 가장 번거로운 문제 하나를 해결하는 것에 집중합니다.",
      tools: "• ✍ 글쓰기/아이디어: <strong>Wrtn</strong>, <strong>네이버 ClovaX</strong><br>• 🌐 번역/요약: <strong>DeepL</strong>, <strong>파파고</strong>",
      solution: "뤼튼으로 글쓰기 초안을 만드는 경험, 편리하셨죠?<br>하지만 그 AI는 우리 회사의 제품 정보나 내부 규정을 알지 못합니다.<br><strong>AI-UP의 교육</strong>을 통해 오직 ‘우리 회사 데이터’만 학습하여, 24시간 정확한 정보만 답하는 ‘진짜 우리 회사 신입사원’을 만들 수 있습니다. 가장 안전하고 확실한 AI 도입의 첫걸음을 저희가 함께 하겠습니다.",
      buttonText: "문의하기"
    },
    three: {
      title: "🧠 호기심 많은 탐험가",
      subtitle: "실용성과 효율을 중시하는 AI 활용 실전파",
      description: "당신은 AI를 '똑똑한 비서'로 인식하고, 업무 효율을 극대화하는 데 큰 관심을 가진 실용주의자입니다. 이제 단순 활용을 넘어, 여러 도구를 연결하여 시너지를 내고 싶어 합니다.",
      tools: "• [무료] <strong>Notion AI</strong>, <strong>Gamma</strong> – 발표자료 자동화, 회의록 요약<br>• [유료] <strong>ChatGPT Plus</strong>, <strong>Perplexity Pro</strong> – 리서치, 보고서 작성",
      solution: "ChatGPT Plus로 특정 웹페이지를 요약하는 건 강력하죠.<br>하지만 구글 드라이브, 노션, 로컬 폴더에 흩어진 수십 개의 문서를 한 번에 분석할 수는 없습니다.<br><br><strong>AI-UP의 교육</strong>을 통해 이렇게 흩어진 데이터를 모두 연결하고 학습하여, '우리 회사만의 전용 검색 엔진이자 똑똑한 분석가'를 만들 수 있습니다. '그 자료 어디 있더라?' 라는 말은 이제 사라집니다.",
      buttonText: "문의하기"
    },
    four: {
      title: "🧠 진화하는 실천가",
      subtitle: "AI 자동화 구축파",
      description: "당신은 AI를 단순 활용을 넘어서 업무 자동화와 맞춤형 설정까지 시도해본 분입니다. 기존의 툴 조합에 한계를 느끼며, 직접 도구를 연결하고 최적화하는 법을 고민하는 타입입니다.",
      tools: "• [무료/유료] <strong>Zapier</strong>, <strong>n8n</strong> – 반복 업무 자동화<br>• [유료] <strong>GPT 커스터마이징</strong>  – 프롬프트 설계, 특정 업무 맞춤 응답 구성",
      solution: "반복 업무를 자동화하는 흐름은 익숙하시죠?<br>이제는 <strong>'AI가 주도적으로 생각하고 판단하는 구조'</strong>로 진화할 차례입니다. 당신의 반복된 클릭과 복붙을 없애드릴게요.",
      buttonText: "문의하기"
    },
    five: {
      title: "🚀 적극적인 프론티어",
      subtitle: "AI를 전략적 파트너로 삼고자 하는 개척자",
      description: "당신은 AI를 단순한 도구를 넘어, 비즈니스 프로세스를 혁신하는 <strong>전략적 파트너</strong>로 활용할 준비가 된 개척자입니다. 자동화 워크플로우 구축과 '판단하는 AI'에 관심이 많습니다.",
      tools: "• [창작] <strong>Claude 3 (Opus)</strong>, <strong>Midjourney</strong> – 전략/마케팅 활용<br>• [직접 구축] <strong>n8n.io</strong> – 앱 연결 자동화, 데이터 처리 시각화",
      solution: "n8n을 통해 자동화의 강력함을 이미 알고 계시군요.<br>하지만 정교한 비즈니스 로직, 복잡한 예외 처리,<br>그리고 'AI의 지능적인 판단'을 녹여내는 건 전문가의 영역입니다.<br><br><strong>AI-UP의 교육</strong>을 통해 n8n과 같은 자동화 흐름에 '맞춤형 AI 두뇌'를 탑재하는 것과 같습니다. 단순 규칙 기반이 아닌, 상황을 이해하고 스스로 판단하여 업무를 처리하는 '진정한 AI 직원'을 채용하여 비즈니스 전체를 혁신하세요.",
      buttonText: "문의하기"
    }
  },
  sectionTitles: {
    diagnosis: "📋 진단 내용",
    tools: "🛠 추천 AI 툴킷",
    solution: "🧠 솔루션 제안"
  }
};

// 1. 변수 선언 (항상 콜백 내부에서!)
let currentQuestion = 0;
let totalScore = 0;
let userAnswers = [];
let currentShuffledOptions = [];

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

// 2. 함수 선언
function updateAllTexts() {
  // 제목
  const startTitleEl = document.getElementById('start-title');
  if (startTitleEl) {
    startTitleEl.innerHTML = i18n.startTitle + ' <span style="color:#4A90E2;">🤖</span>';
  }
  // 부제목
  const startSubtitleEl = document.getElementById('start-subtitle');
  if (startSubtitleEl) {
    startSubtitleEl.textContent = i18n.startSubtitle;
  }
  // 시작 버튼
  if (startBtn) {
    startBtn.textContent = i18n.startBtn + '  →';
  }
  // 안내 문구
  const guideEl = document.getElementById('start-guide');
  if (guideEl) {
    guideEl.textContent = 'AI와 함께하는 새로운 업무 방식을 발견해보세요';
  }

  // 질문 화면
  if (questionScreen && questionScreen.classList.contains('active')) {
    loadQuestion();
  }
  // 결과 화면
  if (resultScreen && resultScreen.classList.contains('active')) {
    updateResultTexts();
  }
  // 결과 섹션 제목도 변경
  const diagnosisEl = document.getElementById('result-section-diagnosis');
  if (diagnosisEl) diagnosisEl.textContent = i18n.sectionTitles.diagnosis;
  const toolsEl = document.getElementById('result-section-tools');
  if (toolsEl) toolsEl.textContent = i18n.sectionTitles.tools;
  const solutionEl = document.getElementById('result-section-solution');
  if (solutionEl) solutionEl.textContent = i18n.sectionTitles.solution;
}

function updateResultTexts() {
  if (userAnswers.length === 0) return;
  totalScore = userAnswers.reduce((sum, answer) => sum + answer.score, 0);
  let resultType;
  if (totalScore >= 14) {
    resultType = 'five';
  } else if (totalScore >= 12) {
    resultType = 'four';
  } else if (totalScore >= 9) {
    resultType = 'three';
  } else if (totalScore >= 7) {
    resultType = 'two';
  } else {
    resultType = 'one';
  }
  
  const result = i18n.results[resultType];
  const titleEl = document.getElementById('result-title');
  if (titleEl) titleEl.textContent = result.title;
  const subtitleEl = document.getElementById('result-subtitle');
  if (subtitleEl) subtitleEl.textContent = result.subtitle;
  const descEl = document.getElementById('result-description');
  if (descEl) descEl.innerHTML = result.description;
  const toolsEl = document.getElementById('recommended-tools');
  if (toolsEl) toolsEl.innerHTML = result.tools;
  const solEl = document.getElementById('solution-package');
  if (solEl) solEl.innerHTML = result.solution;
  if (solutionBtn) solutionBtn.textContent = result.buttonText;

  // 결과 이미지 변경
  const resultImgDiv = document.querySelector('#result-screen .result-header div img');
  if (resultImgDiv) {
    if (resultType === 'one') resultImgDiv.src = 'images/result1.png';
    else if (resultType === 'two') resultImgDiv.src = 'images/result1.png';
    else if (resultType === 'three') resultImgDiv.src = 'images/result2.png';
    else if (resultType === 'four') resultImgDiv.src = 'images/result2.png';
    else if (resultType === 'five') resultImgDiv.src = 'images/result3.png';
  }
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
  const qData = i18n.questions[currentQuestion];
  // 문항(옵션) 랜덤 셔플
  const shuffled = qData.options.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  currentShuffledOptions = shuffled; // 전역에 저장
  // 랜덤 순서로 버튼에 할당
  if (questionText) questionText.textContent = qData.question;
  optionBtns.forEach((btn, index) => {
    const optText = btn.querySelector('.option-text');
    if (optText) optText.textContent = shuffled[index].text;
    btn.classList.remove('selected');
    btn.dataset.score = shuffled[index].score;
  });
  const progress = ((currentQuestion + 1) / i18n.questions.length) * 100;
  if (progressFill) progressFill.style.width = progress + '%';
  if (progressText) progressText.textContent = i18n.progress(currentQuestion + 1, i18n.questions.length);
  optionBtns.forEach((btn, index) => {
    btn.onclick = () => selectOption(index, parseInt(btn.dataset.score));
  });
}

function selectOption(optionIndex, score) {
  optionBtns.forEach(btn => btn.classList.remove('selected'));
  optionBtns[optionIndex].classList.add('selected');
  userAnswers[currentQuestion] = {
    question: i18n.questions[currentQuestion].question,
    answer: currentShuffledOptions[optionIndex].text,
    score: currentShuffledOptions[optionIndex].score
  };
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < i18n.questions.length) {
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

// 3. 이벤트 등록 (null 방지)
startBtn?.addEventListener('click', startTest);
retakeBtn?.addEventListener('click', resetTest);

// 4. 최초 실행
updateAllTexts();
}); 