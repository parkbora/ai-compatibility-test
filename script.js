document.addEventListener('DOMContentLoaded', function() {
// 다국어 데이터 (한국어만)
const i18n = {
  startTitle: "<div>🤖 나와 찰떡궁합인 AI 동료는?</div>",
  startSubtitle: "<div>5개의 질문으로 알아보는 AI 친밀도 테스트</div>",
  startDesc1: "아래 5개의 질문을 통해 사용자의 AI 친밀도를 측정합니다.",
  startDesc2: "각 문항은 3지선다이며, 결과에 따라 최적의 AI 툴을 추천해드립니다!",
  startBtn: "<div>테스트 시작하기</div>",
  retakeBtn: "<div>다시 테스트하기</div>",
  solutionBtn: "<div>문의하기</div>",
  progress: (cur, total) => `Question ${cur} / ${total}`,
  questions: [
    {
      question: "<div>당신의 팀에 'AI 신입사원'이 온다면?</div>",
      options: [
        { text: "<div>최고! 내 일 좀 팍팍 덜어줘!</div>", score: 3 },
        { text: "<div>오... 진짜 잘할까? 일단 지켜본다.</div>", score: 2 },
        { text: "<div>에이, 그냥 내가 하는 게 빨라.</div>", score: 1 }
      ]
    },
    {
      question: "<div>매주 해야 하는 똑같은 보고서 작업, 너무 귀찮을 때 당신의 생각은?</div>",
      options: [
        { text: "<div>AI가 알아서 다 해주면 안 되나?</div>", score: 3 },
        { text: "<div>자료 찾는 것만 도와줘도 좋겠다.</div>", score: 2 },
        { text: "<div>어차피 내가 다시 봐야 해. 그냥 내가 할래.</div>", score: 1 }
      ]
    },
    {
      question: "<div>업무에 필요한 파일, 어디에 있는지 기억나지 않을 때 가장 먼저 하는 행동은?</div>",
      options: [
        { text: "<div>AI한테 바로 물어본다.</div>", score: 3 },
        { text: "<div>일단 내가 찾아보고, 없으면 AI에게 물어본다.</div>", score: 2 },
        { text: "<div>직접 찾는다.</div>", score: 1 }
      ]
    },
    {
      question: "<div>매일 오는 이메일 첨부파일, AI가 정리해 준다면?</div>",
      options: [
        { text: "<div>내 폴더까지 알아서 정리해 줘!</div>", score: 3 },
        { text: "<div>편하긴 하겠다. 중요한 건 내가 다시 확인해야지.</div>", score: 2 },
        { text: "<div>내 이메일을? 좀 불안해.</div>", score: 1 }
      ]
    },
    {
      question: "<div>AI 동료를 한 명만 둔다면?</div>",
      options: [
        { text: "<div>프로 일잘러</div>", score: 3 },
        { text: "<div>스마트 비서</div>", score: 2 },
        { text: "<div>성실한 인턴</div>", score: 1 }
      ]
    }
  ],
  results: {
    one: {
      title: "<div>🧩 보수적인 현실주의자</div>",
      subtitle: "<div>AI 신중관망파</div>",
      description: "<div>당신은 'AI 도입'이라는 키워드에 아직 신중하며, 검증된 도구나 확실한 성공 사례가 있을 때에만 행동하는 타입입니다. 자동화보다 직접 확인하는 것이 더 믿을 수 있다고 느끼며, 지금 방식이 더 안전하다고 판단합니다.</div>",
      tools: "<div>• [무료] DeepL, 파파고 – 외국어 이메일/자료 번역</div><div>• [무료] 뤼튼(Wrtn), 클로바X – SNS/이메일 초안 작성 지원</div>",
      solution: "<div>AI는 새로운 게 아니라, 기존 업무의 연장선입니다. 당장 쓰는 툴에 AI 기능을 하나씩 추가하며 가장 익숙한 방식 안에서 변화를 경험해보세요. AI-UP의 교육을 통해 저희가 그 첫걸음을 도와드리겠습니다.</div>",
      more: "<div>클로바X나 뤼튼을 쓸 때, 매번 입력하는 글 구조나 문장 스타일을 템플릿화해보세요.</div><div>이메일 초안 작성도 AI가 제안하는 문장을 한 단계 더 다듬도록 요청해보면 품질이 달라집니다.</div>",
      next: "<div>Notion AI나 Gamma로 회의록 요약, 보고서 구조 잡기를 시도해보세요.</div><div>파일 이름/폴더 정리, 일정 예약 등 ‘손이 자주 가는 루틴’을 AI에게 넘기는 연습이 필요합니다.</div>",
      contact: "<div>AI를 도입하고 싶지만 잘못되면 더 번거로워질까봐 걱정이시죠?</div><div>AI-UP은 현실적인 목표에서 시작합니다. 당신의 기존 워크플로우에 자연스럽게 녹아드는 ‘업무형 AI 신입사원’을 함께 설계해드립니다.</div><div>❗ '하나의 업무라도 자동화되면 큰 차이를 만든다'는 걸 증명해보세요.</div>",
      buttonText: "<div>문의하기</div>"
    },
    two: {
      title: "<div>👀 신중한 관찰자</div>",
      subtitle: "<div>AI를 신중하게 관찰하고 천천히 익숙해지는 타입</div>",
      description: "<div>당신은 AI 도입에 신중하며, 검증된 기술로 확실한 성공을 경험하는 것이 중요한 현명한 관리자입니다. 거창한 혁신보다는, 당장 눈앞의 가장 번거로운 문제 하나를 해결하는 것에 집중합니다.</div>",
      tools: "<div>• ✍ 글쓰기/아이디어: Wrtn, 네이버 ClovaX</div><div>• 🌐 번역/요약: DeepL, 파파고</div>",
      solution: "<div>뤼튼으로 글쓰기 초안을 만드는 경험, 편리하셨죠?<br>하지만 그 AI는 우리 회사의 제품 정보나 내부 규정을 알지 못합니다.<br><strong>AI-UP의 교육</strong>을 통해 오직 ‘우리 회사 데이터’만 학습하여, 24시간 정확한 정보만 답하는 ‘진짜 우리 회사 신입사원’을 만들 수 있습니다. 가장 안전하고 확실한 AI 도입의 첫걸음을 저희가 함께 하겠습니다.</div>",
      more: "<div>뤼튼으로 생성한 초안을 반복 활용할 수 있게 템플릿화하거나 프롬프트를 저장해보세요.</div><div>번역 툴에 요약 명령을 넣어 한 줄 핵심만 추출하는 실험도 추천합니다.</div>",
      next: "<div>ChatGPT를 사용한 문서 피드백, 요약 요청에 익숙해지세요.</div><div>자주 쓰는 업무 흐름을 n8n이나 Make로 자동화해보는 것도 도전할 만합니다.</div>",
      contact: "<div>툴은 알겠는데… 뭘 자동화해야 할지 막막하지 않으세요?</div><div>AI-UP은 당신의 업무를 진단한 뒤, 반복 업무, 커뮤니케이션, 문서 작업 중 가장 먼저 자동화할 수 있는 지점을 찾아드립니다.</div><div>🎯 단 1개의 자동화 루틴으로도 시간 30% 절약 효과를 경험하세요.</div>",
      buttonText: "<div>문의하기</div>"
    },
    three: {
      title: "<div>🧠 호기심 많은 탐험가</div>",
      subtitle: "<div>실용성과 효율을 중시하는 AI 활용 실전파</div>",
      description: "<div>당신은 AI를 '똑똑한 비서'로 인식하고, 업무 효율을 극대화하는 데 큰 관심을 가진 실용주의자입니다. 이제 단순 활용을 넘어, 여러 도구를 연결하여 시너지를 내고 싶어 합니다.</div>",
      tools: "<div>• [무료] <strong>Notion AI</strong>, <strong>Gamma</strong> – 발표자료 자동화, 회의록 요약<br>• [유료] <strong>ChatGPT Plus</strong>, <strong>Perplexity Pro</strong> – 리서치, 보고서 작성</div>",
      solution: "<div>ChatGPT Plus로 특정 웹페이지를 요약하는 건 강력하죠.<br>하지만 구글 드라이브, 노션, 로컬 폴더에 흩어진 수십 개의 문서를 한 번에 분석할 수는 없습니다.<br><br><strong>AI-UP의 교육</strong>을 통해 이렇게 흩어진 데이터를 모두 연결하고 학습하여, '우리 회사만의 전용 검색 엔진이자 똑똑한 분석가'를 만들 수 있습니다. '그 자료 어디 있더라?' 라는 말은 이제 사라집니다.</div>",
      more: "<div>Notion AI에서 템플릿 + 요약 + 작성 흐름 자동화까지 설정해보세요.</div><div>ChatGPT에 자주 쓰는 업무 스타일 Prompt 세트를 저장해두면 결과 품질이 올라갑니다.</div>",
      next: "<div>여러 AI 툴을 자동화 플랫폼(n8n, Make 등)으로 연결해보세요.</div><div>자신의 회사/직무에 맞는 Custom GPT를 만드는 것도 추천합니다.</div>",
      contact: "<div>툴은 많은데, 연결이 안 되고 결국 손이 많이 가죠?</div><div>저희는 당신의 사용 툴들을 기반으로, AI가 알아서 정리하고 요약하고 응답하는 자동화 시나리오를 설계합니다.</div><div>🧠 AI가 툴이 아닌 '실제 팀원처럼 일하는 구조'를 만나보세요.</div>",
      buttonText: "<div>문의하기</div>"
    },
    four: {
      title: "<div>🧠 진화하는 실천가</div>",
      subtitle: "<div>AI 자동화 구축파</div>",
      description: "<div>당신은 AI를 단순 활용을 넘어서 업무 자동화와 맞춤형 설정까지 시도해본 분입니다. 기존의 툴 조합에 한계를 느끼며, 직접 도구를 연결하고 최적화하는 법을 고민하는 타입입니다.</div",
      tools: "<div>• [무료/유료] <strong>Zapier</strong>, <strong>n8n</strong> – 반복 업무 자동화<br>• [유료] <strong>GPT 커스터마이징</strong>  – 프롬프트 설계, 특정 업무 맞춤 응답 구성</div>",
      solution: "<div>반복 업무를 자동화하는 흐름은 익숙하시죠?<br>이제는 <strong>'AI가 주도적으로 생각하고 판단하는 구조'</strong>로 진화할 차례입니다. 당신의 반복된 클릭과 복붙을 없애드릴게요.</div>",
      more: "<div>n8n, Make 사용 경험이 있다면, 조건 분기, 다중 앱 연결, 데이터 필터링까지 확장해보세요.</div><div>프롬프트에 따라 자동화된 결과가 다르게 나올 수 있도록 Prompt-Driven Workflow를 시도해보세요.</div>",
      next: "<div>n8n 기반의 오픈소스 자동화로 더욱 정교한 흐름을 구성해보세요.</div><div>AI가 단순 처리뿐 아니라 상황을 파악하고 판단하는 흐름을 구현해보는 것도 추천됩니다.</div>",
      contact: "<div>이론은 알겠는데, 정작 데이터 연결이나 예외 처리에서 막히시죠?</div><div>AI-UP은 당신의 업무 시스템, 폴더 구조, 템플릿, 사내 문서 등을 분석하여 ‘진짜 우리 회사 맞춤형 자동화 시나리오’를 설계해드립니다.</div>div>📊 이제는 코드 없이, AI가 업무 전체를 인식하고 처리하게 해보세요.</div>",
      buttonText: "<div>문의하기</div>"
    },
    five: {
      title: "<div>🚀 적극적인 프론티어</div>",
      subtitle: "<div>AI를 전략적 파트너로 삼고자 하는 개척자</div>",
      description: "<div>당신은 AI를 단순한 도구를 넘어, 비즈니스 프로세스를 혁신하는 <strong>전략적 파트너</strong>로 활용할 준비가 된 개척자입니다. 자동화 워크플로우 구축과 '판단하는 AI'에 관심이 많습니다.</div>",
      tools: "<div>• [창작] <strong>Claude 3 (Opus)</strong>, <strong>Midjourney</strong> – 전략/마케팅 활용<br>• [직접 구축] <strong>n8n.io</strong> – 앱 연결 자동화, 데이터 처리 시각화</div>",
      solution: "<div>n8n을 통해 자동화의 강력함을 이미 알고 계시군요.<br>하지만 정교한 비즈니스 로직, 복잡한 예외 처리,<br>그리고 'AI의 지능적인 판단'을 녹여내는 건 전문가의 영역입니다.<br><br><strong>AI-UP의 교육</strong>을 통해 n8n과 같은 자동화 흐름에 '맞춤형 AI 두뇌'를 탑재하는 것과 같습니다. 단순 규칙 기반이 아닌, 상황을 이해하고 스스로 판단하여 업무를 처리하는 '진정한 AI 직원'을 채용하여 비즈니스 전체를 혁신하세요.</div>",
      more: "<div>n8n에 AI 판단 로직을 삽입해, 상황에 따라 의사결정 자동화를 실험해보세요.</div><div>RAG 구조를 도입하여 문서 검색형 AI Q&A 시스템을 구성할 수 있습니다.</div>",
      next: "<div>사내 데이터 전체를 연결하고, Context-aware Agent를 설계해보세요.</div><div>AI의 판단에 기반해 실제 액션(메일 발송, 보고서 전송 등)이 연결되도록 만드는 것이 핵심입니다.</div>",
      contact: "<div>우리는 이미 자동화를 잘하고 있어요.</div><div>그렇다면 이제 다음 단계입니다. AI-UP은 전사 AI 전략 설계, 사내 데이터 기반 Agent 구축, 그리고 AI가 스스로 판단하는 고도화 흐름까지 완성해드립니다.</div>div>🧩 AI를 도입하는 것이 아니라, AI로 회사를 다시 설계하는 것, 그 출발점을 함께 만들어보세요.</div>",
      buttonText: "<div>문의하기</div>"
    }
  },
  sectionTitles: {
    diagnosis: "<div>📋 진단 내용</div>",
    tools: "<div>🛠 추천 AI 툴킷</div>",
    solution: "<div>🧠 솔루션 제안</div>"
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
    startTitleEl.innerHTML = i18n.startTitle + '<span style="color:#4A90E2;">🤖</span>';
  }
  // 부제목
  const startSubtitleEl = document.getElementById('start-subtitle');
  if (startSubtitleEl) {
    startSubtitleEl.innerHTML = i18n.startSubtitle;
  }
  // 시작 버튼
  if (startBtn) {
    startBtn.innerHTML = i18n.startBtn + '<span>  →</span>';
  }
  // 안내 문구
  const guideEl = document.getElementById('start-guide');
  if (guideEl) {
    guideEl.innerHTML = '<div>AI와 함께하는 새로운 업무 방식을 발견해보세요</div>';
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
  if (diagnosisEl) diagnosisEl.innerHTML = i18n.sectionTitles.diagnosis;
  const toolsEl = document.getElementById('result-section-tools');
  if (toolsEl) toolsEl.innerHTML = i18n.sectionTitles.tools;
  const solutionEl = document.getElementById('result-section-solution');
  if (solutionEl) solutionEl.innerHTML = i18n.sectionTitles.solution;
  const moreEl = document.getElementById('result-section-more');
  if (moreEl) moreEl.innerHTML = i18n.sectionTitles.more;
  const nextEl = document.getElementById('result-section-next');
  if (nextEl) nextEl.innerHTML = i18n.sectionTitles.next;
  const contactEl = document.getElementById('result-section-contact');
  if (contactEl) contactEl.innerHTML = i18n.sectionTitles.contact;
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
  if (titleEl) titleEl.innerHTML = result.title;
  const subtitleEl = document.getElementById('result-subtitle');
  if (subtitleEl) subtitleEl.innerHTML = result.subtitle;
  const descEl = document.getElementById('result-description');
  if (descEl) descEl.innerHTML = result.description;
  const toolsEl = document.getElementById('recommended-tools');
  if (toolsEl) toolsEl.innerHTML = result.tools;
  const solEl = document.getElementById('solution-package');
  if (solEl) solEl.innerHTML = result.solution;
  if (solutionBtn) solutionBtn.innerHTML = result.buttonText;

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
  if (questionText) questionText.innerHTML = qData.question;
  optionBtns.forEach((btn, index) => {
    const optText = btn.querySelector('.option-text');
    if (optText) optText.innerHTML = shuffled[index].text;
    btn.classList.remove('selected');
    btn.dataset.score = shuffled[index].score;
  });
  const progress = ((currentQuestion + 1) / i18n.questions.length) * 100;
  if (progressFill) progressFill.style.width = progress + '%';
  if (progressText) progressText.innerHTML = i18n.progress(currentQuestion + 1, i18n.questions.length);
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