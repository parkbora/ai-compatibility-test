# AI 호환성 테스트 프로젝트 인계 문서

## 📋 프로젝트 개요
- **프로젝트명**: AI 호환성 테스트
- **유형**: 정적 웹 애플리케이션 (HTML/CSS/JavaScript)
- **목적**: 사용자의 AI 활용 성향을 진단하고 맞춤형 AI 도구를 추천하는 설문조사 서비스

## 🌐 배포 정보

### 현재 배포 상태
- **배포 플랫폼**: Vercel
- **배포 URL**: https://ai-compatibility-test.vercel.app
- **GitHub 저장소**: https://github.com/parkbora/ai-compatibility-test.git
- **자동 배포**: GitHub main 브랜치에 push하면 Vercel에 자동 배포됨

### Vercel 계정 정보
- Vercel 계정으로 GitHub 연동되어 있음
- 배포 상태는 https://vercel.com/dashboard 에서 확인 가능

## 📁 프로젝트 구조

```
ai-compatibility-test/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 로직
├── README.md           # 프로젝트 설명
├── HANDOVER.md         # 인계 문서 (이 파일)
└── images/             # 이미지 파일들
    ├── character.png   # 시작 화면 캐릭터
    ├── result1.png     # 신중한 관찰자 결과 이미지
    ├── result2.png     # 호기심 많은 탐험가 결과 이미지
    └── result3.png     # 적극적인 프론티어 결과 이미지
```

## 🔧 개발 환경 설정

### 로컬 개발
```bash
# 1. 저장소 클론
git clone https://github.com/parkbora/ai-compatibility-test.git
cd ai-compatibility-test

# 2. 로컬 서버 실행 (Python 사용)
python3 -m http.server 8000

# 3. 브라우저에서 확인
# http://localhost:8000
```

### 배포 방법
```bash
# 1. 변경사항 커밋
git add .
git commit -m "변경사항 설명"

# 2. GitHub에 푸시 (자동 배포 트리거)
git push origin main
```

## 🎯 주요 기능

### 1. 설문조사 진행
- **3개 질문**: 각 질문마다 3개의 선택지
- **점수 시스템**: 각 선택지마다 1-3점 배점
- **랜덤 순서**: 질문의 선택지가 랜덤하게 섞여서 출력

### 2. 결과 분석
- **점수 범위별 결과**:
  - 3-5점: 신중한 관찰자 (result1.png)
  - 6-7점: 호기심 많은 탐험가 (result2.png)
  - 8-9점: 적극적인 프론티어 (result3.png)

### 3. 번역 기능
- **Elfsight Website Translator** 위젯 사용
- 모든 동적 텍스트가 `<div>`, `<p>`, `<strong>` 태그로 래핑되어 번역 호환성 확보

## 🛠 기술 스택

### 프론트엔드
- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, Flexbox 레이아웃
- **Vanilla JavaScript**: ES6+ 문법 사용

### 주요 JavaScript 기능
- **DOM 조작**: `getElementById`, `querySelector` 등
- **이벤트 처리**: 버튼 클릭, 화면 전환
- **데이터 관리**: `i18n` 객체로 다국어 텍스트 관리
- **랜덤화**: Fisher-Yates 알고리즘으로 선택지 섞기

### 외부 서비스
- **Elfsight Website Translator**: 자동 번역 위젯
- **Google Forms**: 문의하기 버튼 연결

## 📝 코드 구조 설명

### script.js 주요 함수
- `showScreen(screen)`: 화면 전환
- `loadQuestion(index)`: 질문 로드 및 선택지 랜덤화
- `selectOption(optionIndex, score)`: 선택지 선택 처리
- `showResults()`: 결과 계산 및 표시
- `updateAllTexts()`: 텍스트 업데이트 (번역 호환)

### 데이터 구조
```javascript
const i18n = {
  startScreen: { title, subtitle, guide, time, count, buttonText },
  questions: [
    { question: "질문 내용", options: [{ text: "선택지", score: 점수 }] }
  ],
  results: {
    one: { title, subtitle, description, tools, solution, more, next, contact, buttonText },
    // ...
  }
}
```

## 🚨 중요 주의사항

### 1. 번역 기능 관련
- 모든 동적 텍스트는 반드시 HTML 태그로 래핑
- `textContent` 대신 `innerHTML` 사용
- 따옴표(`""`) 사용 시 번역이 안 될 수 있음

### 2. 이미지 파일
- `images/` 폴더의 모든 이미지가 git에 포함되어야 함
- 파일명에 특수문자나 숨김 문자가 없는지 확인

### 3. 배포 시 확인사항
- Vercel 배포는 1-3분 소요
- 브라우저 캐시 때문에 변경사항이 즉시 안 보일 수 있음 (Ctrl+F5로 강제 새로고침)

## 🔍 디버깅 가이드

### 자주 발생하는 오류
1. **`Cannot read properties of null`**: DOM 요소가 로드되기 전에 접근
   - 해결: `DOMContentLoaded` 이벤트 내에서 실행

2. **번역이 안 되는 경우**:
   - HTML 태그 확인 (`<div>`, `<p>`, `<strong>`)
   - 따옴표 사용 여부 확인
   - `innerHTML` 사용 여부 확인

3. **이미지가 안 보이는 경우**:
   - 파일 경로 확인
   - git에 커밋되었는지 확인

## 📞 문의사항
추가 질문이나 이해가 안 되는 부분이 있으면 언제든 문의해주세요.

---
**작성일**: 2024년 
**마지막 업데이트**: 번역 딜레이 코드 제거 및 결과 페이지 추가 정보 업데이트
