export interface ProjectSection {
  title: string;
  text: string | string[]; // 배열이면 목록으로 표시
}
export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  imageIsPlaceholder: boolean;
  logo?: { src: string; alt: string; appIcon?: boolean }; // 프로젝트 로고 (카드·상세 한쪽에 표시)
  repository: string | null;
  storeLink?: { label: string; url: string }; // 앱스토어 등 배포 링크
  summary: {
    period: string;
    team: string;
    role: string;
    status: string;
    outcome: string;
  };
  overview: string;
  details: ProjectSection[];
  gallery: {
    src: string;
    alt: string;
    caption: string;
    layout?: "phone" | "store";
  }[];
}
export interface Experience {
  organization: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}
export interface SkillGroup {
  category: string;
  skills: { name: string; projects: string[]; url?: string }[];
}
export interface Achievement {
  date: string;
  event: string;
  title: string;
  result: string;
  description: string;
  project?: string; // 연결된 projects id
}
export interface ArchiveItem {
  year: string;
  date: string;
  title: string;
  note: string;
  tag: "HACKATHON" | "CONTEST" | "LIVING LAB" | "PROJECT" | "EDUCATION";
  inProgress?: boolean;
}
export interface Research {
  repository?: string;
  title: string;
  summary: string;
  course: string;
  advisor: string;
  period: string;
  tags: string[];
  inProgress: boolean;
}
export interface BeyondCode {
  icon: "press" | "band" | "mentor" | "study" | "travel";
  stamp: string; // 여권 도장처럼 보여 줄 짧은 라벨
  title: string;
  role: string;
  period: string;
  points: string[];
  articles?: {
    title: string;
    section: string;
    year: string;
    summary: string;
    pages: string[]; // 기사 지면 이미지 (창으로 열람)
  }[];
}

export const profile = {
  name: "JINJEONG SEO",
  koreanName: "서진정",
  year: "2026",
  university: "국립 한밭대학교",
  major: "컴퓨터공학",
  portrait: "images/profile.webp" as string | null,
  headline: "상상은 자유롭게. 구현은 집요하게.",
  introduction: "완벽한 시작보다, 꾸준한 개선을 믿습니다.",
  paragraphs: [
    "완벽하게 준비될 때까지 기다리기보다, 먼저 만들어 보고 부족한 부분을 채워 가는 편입니다. 견주여행도 여러 차례 베타 테스트를 거치며 고쳐 나간 끝에 App Store에 출시했습니다.",
    "아이디어는 늘 생각하지만, 기준은 실제로 누군가에게 도움이 되느냐입니다. 어르신 건강 알림 앱, 고령 보행자 앞에서 멈추는 자동차, 반려견 보호자를 위한 여행 앱이 그렇게 나왔습니다.",
    "해 보지 않은 분야도 일단 도전합니다. 앱 개발에서 시작해 자율주행, VR 게임, 보안, 경량 딥러닝까지 매번 새로운 것에 부딪히며 배우고 있습니다.",
  ],
  keywords: ["STEADY IMPROVEMENT", "IDEAS THAT HELP", "TAKE THE CHALLENGE"],
};

export const navigation = [
  { id: "about", title: "ABOUT ME", number: "02" },
  { id: "works", title: "SELECTED WORKS", number: "03" },
  { id: "experience", title: "EXPERIENCE", number: "04" },
  { id: "research", title: "RESEARCH", number: "05" },
  { id: "education", title: "EDUCATION", number: "06" },
  { id: "skills", title: "TECHNICAL SKILLS", number: "07" },
  { id: "activities", title: "AWARDS & ARCHIVE", number: "08" },
  { id: "contact", title: "CONTACT", number: "09" },
];

export const experiences: Experience[] = [
  {
    organization: "BOSCH KOREA",
    role: "Technical Sales Intern",
    period: "2026.01 — 2026.06",
    description:
      "기술영업팀에서 고객 단가·매출 데이터를 관리하고, SAP 기록과 대조해 데이터 정확성을 검토했습니다.",
    tags: ["DATA ANALYSIS", "TECHNICAL SALES", "SAP"],
  },
  {
    organization: "LIKELION",
    role: "스터디 그룹 운영",
    period: "2026.03 — 현재",
    description:
      "멋쟁이사자처럼에서 스터디 그룹을 운영하며, 아이디어톤과 해커톤에 참여했습니다.",
    tags: ["LEADERSHIP", "HACKATHON", "COLLABORATION"],
  },
];

// 개발 외 경험: 영어 소통과 사람을 대하는 경험
export const beyondCode: BeyondCode[] = [
  // 최신순(종료 시점 기준)
  {
    icon: "press",
    stamp: "PRESS",
    title: "THE HERALD",
    role: "영자신문사 기자",
    period: "2025.03 — 2026.08",
    points: [],
    articles: [
      {
        title: "Same AI, Different Results: How Prompts Make the Difference",
        section: "CULTURAL",
        year: "2026",
        summary:
          "같은 AI라도 프롬프트에 따라 결과가 달라지는 이유와 역할 지정·예시 제시 등 프롬프트 작성 팁 5가지",
        pages: [1, 2, 3, 4].map((n) => `articles/cultural-${n}.webp`),
      },
      {
        title: "TOPCIT Regular Assessment",
        section: "CAMPUS",
        year: "2025",
        summary: "학교의 TOPCIT 응시료 전액 지원과 응시자 혜택 소개",
        pages: ["articles/topcit-1.webp"],
      },
    ],
  },
  {
    icon: "band",
    stamp: "BASS",
    title: "BLACKSTONE",
    role: "교내 밴드 부회장 · 베이스",
    period: "2025.03 — 2026.08",
    points: [],
  },
  {
    icon: "mentor",
    stamp: "MENTOR",
    title: "대전광역시가족센터",
    role: "다문화가족 자녀 맞춤형 교육지원 멘토",
    period: "2025.01 — 2025.12",
    points: [
      "한국어를 어려워하는 초등학생에게 영어로 한글·수학 지도",
      "영어를 어려워하는 고등학생 영어 지도",
    ],
  },
  {
    icon: "study",
    stamp: "UK",
    title: "UNIVERSITY OF WOLVERHAMPTON",
    role: "영국 어학연수",
    period: "2025.07 — 2025.08",
    points: ["한 달간 영어 수업 수강"],
  },
  {
    icon: "travel",
    stamp: "AUSTRALIA",
    title: "AUSTRALIA",
    role: "워킹홀리데이 · 어학연수",
    period: "2020.06 — 2023.02",
    points: [],
  },
];

// 진행 중인 연구 프로젝트
export const research: Research[] = [
  {
    repository: "https://github.com/IoT-Kimjangs/har-quantization",
    title: "HAR Quantization — IoT 센서 기반 행동 인식 모델의 양자화 효율 분석",
    summary:
      "웨어러블 센서 행동 인식(HAR) Transformer를 WISDM·PAMAP2에서 재현하고, Keras·TFLite FP32·FP16·INT8 등 6가지 실행 방식의 크기·지연시간·메모리·정확도를 비교합니다. 런타임 변경 효과와 양자화 효과를 나눠 측정하며, Mac(ARM) 실행 환경 구성·재현·측정을 맡았습니다. 현재 실험 규약과 협업 체계를 마련했고, 측정은 진행 전입니다.",
    course: "사물인터넷 전공 팀프로젝트",
    advisor: "우성필 교수",
    period: "2026.09 —",
    tags: ["ON-DEVICE AI", "QUANTIZATION", "TFLITE"],
    inProgress: true,
  },
  {
    repository: "https://github.com/NLP-Cactus/KoImplicit",
    title: "KoImplicit — 한국어 다중턴 대화에서 LLM의 생략 주어 추적 능력 분석",
    summary:
      "화자·청자·담화 대상이 바뀌는 한국어 대화를 직접 설계하고, 생략 주어 추적 능력을 평가하는 파이프라인을 구축했습니다. 2인 검수·조정을 거친 파일럿에서 17개 표본을 채택하고 CLI 모델 점검 결과를 기록했습니다. 다음 배치 후보 100개와 모델 검수 자료를 작성했으며, 조정·동결과 정식 API 평가는 아직 진행 전입니다.",
    course: "자연어처리 전공 팀프로젝트",
    advisor: "박천음 교수",
    period: "2026.09 —",
    tags: ["NLP", "LLM", "KOREAN DIALOGUE"],
    inProgress: true,
  },
];

type DetailTitle =
  | "Problem & Motivation"
  | "My Role"
  | "Architecture"
  | "Key Features"
  | "Challenges & Solutions"
  | "Results";

const detailOrder: DetailTitle[] = [
  "Problem & Motivation",
  "My Role",
  "Architecture",
  "Key Features",
  "Challenges & Solutions",
  "Results",
];

// 내용이 있는 섹션만 정해진 순서로 표시합니다.
const projectDetails = (
  known: Partial<Record<DetailTitle, string | string[]>>,
): ProjectSection[] =>
  detailOrder.flatMap((title) =>
    known[title] ? [{ title, text: known[title] }] : [],
  );

export const projects: Project[] = [
  {
    id: "ai-posture-correction",
    number: "01",
    title: "BPT",
    subtitle:
      "스마트폰 카메라만으로 운동 자세를 실시간 분석하는 AI 트레이닝 앱",
    category: "CAPSTONE DESIGN · 3인 팀",
    technologies: [
      "Flutter",
      "Riverpod",
      "go_router",
      "Swift",
      "CoreML",
      "RTMPose",
      "MotionAGFormer-XS",
      "Spring Boot",
      "PostgreSQL",
    ],
    image: "images/posture.svg",
    imageAlt: "관절 좌표와 인체 포즈를 표현한 자세 교정 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    logo: { src: "images/logo-bpt.webp", alt: "BPT 로고" },
    repository: "https://github.com/Hanbat-Personal-Training-AI-Agent/BPT",
    summary: {
      period: "2026 — 현재",
      team: "3인 팀",
      role: "PM · UI/UX · Flutter 프론트엔드",
      status: "iOS 운동 흐름 구현 · 통합 고도화 중",
      outcome: "실시간 운동 UI·백엔드 연동·계정별 오프라인 기록 동기화 구현",
    },
    overview:
      "BPT는 스마트폰 카메라만으로 운동 자세를 실시간 분석해 반복 횟수·세트 진행·자세 상태를 알려주는 AI 트레이닝 앱입니다. 실시간 운동 카메라 프레임은 iPhone 안에서 처리하며, 운동 기록은 Spring Boot 백엔드와 연동합니다. 체형 캘리브레이션용 사진 4장은 별도 분석 서버로 전송하며, 분석 결과를 앱 화면에 연결하는 작업은 남아 있습니다. 한밭대학교 캡스톤 디자인 3인 팀 프로젝트로, 2026년 한 해 동안 진행하고 있습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "혼자 운동할 때는 자세가 잘못되어도 스스로 알아차리기 어렵고, 잘못된 자세는 운동 효과를 떨어뜨리고 부상으로 이어질 수 있습니다. 트레이너 없이도 스마트폰 하나로 자세를 확인하고 교정할 수 있는 앱을 목표로 했습니다.",
      "My Role": [
        "PM — 일정·역할 분담·요구사항 정리 등 프로젝트 운영 총괄",
        "UI/UX 디자인 — 자세 분석 결과와 맞춤형 운동 피드백 화면 설계",
        "프론트엔드 담당 — 앱의 모든 화면과 사용자 흐름을 Flutter로 구현",
        "Riverpod 상태 관리, go_router 선언적 라우팅과 인증 가드",
        "온보딩(성별·신체 정보·목표)과 4방향 체형 자동 촬영 플로우",
        "운동 설정·카메라 배치 안내·카운트다운·실시간 HUD·결과 화면으로 이어지는 운동 흐름",
        "리포트(운동량·분석 탭), 운동 기록 캘린더, 내정보·계정 관리 화면",
        "회원가입·로그인·계정 찾기 등 백엔드 API 연동과 토큰 갱신",
        "계정별 캐시와 전송 대기열을 이용한 오프라인 운동 기록 동기화",
        "푸쉬업 가로 화면 전환, 운동 중 화면 자동 잠금 방지, 코리 음소거·음성 간격 개선",
      ],
      Architecture: [
        "Flutter UI — 운동 선택, 목표 설정, 운동 진행 화면, 반복 수·세트 HUD, 리포트",
        "iOS 네이티브(Swift/CoreML) — 카메라 프레임 수집, 운동 카메라 RTMPose-m·체형 촬영 RTMPose-s 기반 2D 관절 추정과 운동별 평가기",
        "연결 — PlatformView로 네이티브 카메라 화면을 임베드하고, MethodChannel로 추론 결과(status·rep·done)를 Flutter에 전달",
        "데이터 — Spring Boot REST API·JWT 인증·PostgreSQL 운동 기록 저장과 홈·캘린더·리포트 집계",
        "오프라인 — SharedPreferences 계정별 캐시와 전송 대기열로 기록을 보관하고 서버에 재전송",
        "Feature-First 폴더 구조에 Riverpod 단방향 상태 관리를 적용해, UI 위젯이 데이터 로직을 직접 호출하지 않고 Provider로 필요한 상태만 받도록 분리",
      ],
      "Key Features": [
        "스쿼트·벤치프레스·데드리프트·바벨로우·푸쉬업 5종 운동 평가기와 실시간 자세·반복 수 표시",
        "반복 횟수와 세트 진행률을 보여주는 운동 HUD",
        "가이드 조건을 만족하면 정면·왼쪽·뒷면·오른쪽 4장을 자동으로 찍는 체형 촬영",
        "운동 전 종목별 카메라 배치 안내와 3·2·1 카운트다운",
        "캐릭터 ‘코리’의 말풍선·음성 피드백과 음소거 — ElevenLabs 실패 시 iOS 기본 음성 사용",
        "운동량·자주 나온 실수를 집계하는 리포트와 운동 기록 캘린더",
      ],
      "Challenges & Solutions": [
        "잘못된 카메라 각도로 운동을 시작하면 분석이 부정확해짐 → 시작 버튼을 눌러도 바로 추론으로 넘어가지 않고, 종목별 카메라 배치 안내를 확인해야 운동 화면으로 이동하도록 흐름을 설계",
        "로그인 상태에서 액세스 토큰이 만료되면 요청이 실패함 → 만료 시 리프레시 토큰으로 자동 갱신한 뒤 실패한 요청을 다시 보내도록 처리",
        "체형 촬영 중 코리 음성이 같은 안내를 쉬지 않고 반복함 → 안내 반복 조건을 조정해 필요한 순간에만 말하도록 수정",
        "체형 촬영 후 전송 대기 페이지에서 흐름이 끊김 → 대기 페이지를 없애고 로딩 화면에서 자동 전송하도록 단순화",
        "네트워크가 끊긴 상태에서 끝낸 운동 기록이 유실될 수 있음 → 계정별 전송 대기열에 보관하고 연결되면 해당 계정으로 재전송",
      ],
      Results: [
        "캡스톤 디자인 I을 1차 마일스톤으로 마치고, 캡스톤 디자인 II에서 고도화 진행 중",
        "macOS 프로토타입 기준 추론·후처리 평균 12.73ms (RTMPose-s 2.56ms, MotionAGFormer-XS 7.93ms) — 팀 AI 파이프라인 측정값",
        "다음 단계: 체형 분석 서버 결과 표시, MotionAGFormer-XS 3D 자세 추정의 iOS 연결, Android 실시간 추론 지원",
        "현재 한계: 운동 다시보기는 데모 영상이며, 푸쉬업 가로 화면의 네이티브 카메라·AI 입력 방향 정렬과 자세 경고 기준값 검증이 남아 있음",
      ],
    }),
    gallery: [
      {
        src: "images/bpt-workout-setup.webp",
        alt: "BPT 운동 설정 화면 — 운동 종목, 세트 수, 반복 횟수, 무게와 쉬는 시간 설정",
        caption:
          "운동 종목과 세트 수, 반복 횟수·무게·쉬는 시간을 설정하고 운동을 시작합니다.",
        layout: "store",
      },
      {
        src: "images/bpt-workout.webp",
        alt: "BPT 바벨로우 실행 화면 — 관절 오버레이와 반복 횟수·세트 HUD, 코리 피드백",
        caption:
          "바벨로우 운동 실행 화면. 관절 오버레이와 반복 횟수·세트 진행을 표시하고, 코리가 자세 안내를 제공합니다.",
        layout: "store",
      },
    ],
  },

  {
    id: "pet-travel",
    number: "02",
    title: "GYEONJU TRAVEL",
    subtitle: "견주여행 — 반려견과 함께 떠나는 경주 여행 코스 추천 앱",
    category: "TEAM PROJECT · PM & FRONTEND",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Kakao Map",
      "한국관광공사 API",
      "Tmap API",
      "EAS · TestFlight",
    ],
    image: "images/travel.svg",
    imageAlt:
      "경주의 산과 여행 경로를 추상적으로 표현한 반려견 여행 콘셉트 그래픽",
    imageIsPlaceholder: true,
    logo: { src: "images/logo-gyeonju.webp", alt: "견주여행 로고" },
    storeLink: {
      label: "App Store에서 보기",
      url: "https://apps.apple.com/kr/app/%EA%B2%AC%EC%A3%BC%EC%97%AC%ED%96%89/id6802208144",
    },
    repository: "https://github.com/Gyeonju-Travel/FE",
    summary: {
      period: "2026.06 — 현재",
      team: "팀 프로젝트",
      role: "PM · React Native 프론트엔드 · 배포",
      status: "App Store 출시",
      outcome: "TestFlight 베타 5차 배포를 거쳐 정식 출시",
    },
    overview:
      "견주여행은 반려견과 함께 경주를 여행하는 보호자를 위한 모바일 앱입니다. 반려견 정보에 맞춘 여행 코스 추천, 지도, 일정, 도보 경로, 관광지 도착 스탬프 기능이 있습니다. 팀 프로젝트로 2026년 6월부터 PM과 프론트엔드를 맡았고, TestFlight 베타 테스트를 거쳐 App Store에 출시했습니다. 한국관광공사 공모전에도 출품해 진행 중입니다.",
    details: projectDetails({
      "Problem & Motivation":
        "반려견과 여행을 떠나려면 동반 가능한 장소를 일일이 찾아봐야 하고, 반려견의 크기나 성향까지 고려하기는 더 어렵습니다. 경주를 찾는 보호자가 반려견과 함께 갈 수 있는 코스를 한 번에 추천받고, 여행하는 동안의 기록까지 남길 수 있도록 하고자 했습니다.",
      "My Role": [
        "PM — 기획·일정·역할 분담 등 프로젝트 운영 총괄",
        "프론트엔드 개발 — 앱 전체 화면과 사용자 흐름을 React Native(Expo)로 구현 (프론트엔드 저장소 커밋 116개)",
        "한국관광공사·Kakao Map API 연동",
        "백엔드 API 연동, 액세스 토큰 자동 갱신, 로그인 상태 관리",
        "EAS 빌드, TestFlight 베타 배포, App Store 출시까지 배포 전 과정 관리",
      ],
      Architecture: [
        "Expo Router 기반 파일 라우팅 — 홈·지도·일정·저장·마이페이지 5개 탭과 인증·온보딩 화면",
        "백엔드 통신을 공용 request 함수 하나로 모아 인증 헤더와 토큰 갱신을 일관되게 처리",
        "Kakao Map(WebView)으로 지도 표시, Tmap 보행자 경로 API로 실제 인도를 따라가는 도보 경로 계산",
        "expo-location 백그라운드 위치 추적과 지오펜스로 관광지 도착을 감지하고, 로컬에 먼저 기록한 뒤 서버에 동기화",
      ],
      "Key Features": [
        "반려견 크기·성향을 반영한 경주 여행 코스 추천",
        "관광지·카페·식당을 보여주는 지도와 장소 저장",
        "여행 일정 관리와 일정 알림",
        "관광지에 도착하면 자동으로 받는 스탬프와 스탬프 앨범",
        "걸은 거리 100m마다 쌓이는 발자국, 하루 여행을 이미지로 남기는 오늘의 스크랩",
        "여행지 날씨 정보",
      ],
      "Challenges & Solutions": [
        "백그라운드에서 위치를 기록하다 보면 네트워크 문제로 서버 저장이 실패함 → 방문·발자국 기록을 로컬에 먼저 남기고, 스크랩 화면을 열기 직전 등 성공률이 높은 시점에 밀린 기록을 다시 전송",
        "로그아웃·탈퇴 후 다른 계정으로 로그인하면 이전 계정의 스탬프와 일정이 섞여 보임 → 계정 전환 시 로컬 데이터를 함께 정리",
        "재설치하거나 같은 조건이 반복되면 스탬프 축하 알림이 중복으로 뜸 → 지급 이력을 확인해 한 번만 지급되도록 수정",
        "여행 중 경주를 벗어나면 일정이 어정쩡한 상태로 남음 → 경주 이탈을 감지하면 일정을 자동으로 취소하고 화면 상태도 바로 갱신",
      ],
      Results: [
        "2026.08.22부터 09.09까지 TestFlight 베타 5차 배포",
        "배포 회차마다 수정 사항을 기록하며 실사용 피드백을 반영",
        "App Store 정식 출시",
      ],
    }),
    gallery: [
      {
        src: "images/gyeonju-appstore-1.webp",
        alt: "견주여행 App Store 스크린샷 — 홈 화면",
        caption: "반려견 프로필과 추천 경로, 방문 스탬프를 확인하는 홈",
        layout: "store",
      },
      {
        src: "images/gyeonju-appstore-2.webp",
        alt: "견주여행 App Store 스크린샷 — 동반 가능 장소 지도",
        caption: "관광지·카페·식당을 지도에서 탐색",
        layout: "store",
      },
      {
        src: "images/gyeonju-appstore-3.webp",
        alt: "견주여행 App Store 스크린샷 — 장소 상세 정보",
        caption: "반려견 동반 조건과 방문 전 안내 사항 확인",
        layout: "store",
      },
      {
        src: "images/gyeonju-appstore-4.webp",
        alt: "견주여행 App Store 스크린샷 — 장소 저장 목록",
        caption: "가고 싶은 장소를 카테고리별로 모아 관리",
        layout: "store",
      },
      {
        src: "images/gyeonju-appstore-5.webp",
        alt: "견주여행 App Store 스크린샷 — 여행 일정",
        caption: "저장한 장소를 연결해 날짜별 여행 코스 구성",
        layout: "store",
      },
    ],
  },

  {
    id: "rhythm-mama",
    number: "03",
    title: "RHYTHM MAMA",
    subtitle: "음악의 박자에 맞춰 샌드위치를 만드는 VR 요리 리듬게임",
    category: "HCI · VR GAME · 4인 팀",
    technologies: [
      "Unity 6",
      "C#",
      "URP",
      "Meta XR SDK",
      "OpenXR",
      "Meta Quest 3",
    ],
    image: "images/rhythm.svg",
    imageAlt: "음반과 리듬 파형을 표현한 VR 리듬 요리 게임 콘셉트 그래픽",
    imageIsPlaceholder: true,
    logo: {
      src: "images/logo-rhythm.webp",
      alt: "RhythmMaMa 로고",
      appIcon: true,
    },
    repository: null,
    summary: {
      period: "2026.09 — 현재",
      team: "4인 팀",
      role: "PM · 리듬 시스템",
      status: "리듬 코어 구현 · VR 통합 진행 중",
      outcome: "68동작 박자맵·DSP 카운트다운·박자 판정·키보드 테스트 입력 구현",
    },
    overview:
      "RhythmMaMa는 Meta Quest 3에서 플레이하는 요리 리듬게임입니다. 음악의 박자에 맞춰 재료를 썰고, 굽고, 쌓아서 샌드위치를 완성한 뒤 손님에게 서빙합니다. 동작한 타이밍이 박자와 얼마나 맞았는지에 따라 Perfect·Good·Bad로 판정합니다. 국립한밭대학교 인간과 컴퓨터 상호작용 수업(이정 교수)의 4인 팀 프로젝트로, 2026년 9월부터 진행하고 있습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "VR에서는 손동작이 곧 입력입니다. 썰기·뒤집기·쌓기 같은 익숙한 요리 동작을 리듬 게임의 입력으로 쓰면, 따로 조작법을 배우지 않아도 플레이할 수 있다고 봤습니다.",
      "My Role": [
        "PM — 4주 개발 계획·역할별 주차 체크리스트·Git 규칙 수립과 주간 회의 운영",
        "Rhythm 담당 — 음악과 박자에 관한 시스템 전체",
        "DSP 시간 기반 Conductor와 예약 재생, 박자에 맞춘 3·2·1·GO 카운트다운 구현",
        "JSON 박자맵 포맷과 검증 로더 구현, Audacity 라벨을 보정해 샌드위치 Easy 68동작 박자맵 제작",
        "줄어드는 원(BeatTarget)의 진행값, Perfect·Good·Bad 판정과 놓친 박자 처리 구현",
        "키보드 테스트 입력과 디버그 HUD로 VR 동작 연동 전 리듬 코어를 점검",
        "Quest 실기기 오디오 지연 측정과 오프셋 보정은 후속 검증 과제로 관리",
        "Unity VR 프로젝트 초기 설정, 개발 환경 가이드·Git 규칙·4주 개발 계획 문서 작성",
      ],
      Architecture: [
        "VR Interaction — 컨트롤러 동작(썰기·뒤집기·놓기 등)이 일어난 순간을 감지해 이벤트로 알림",
        "Rhythm — 같은 동작의 가장 가까운 미판정 박자와 비교하고, 대상 불일치·입력 누락을 포함해 판정 결과를 발행",
        "Game System — 단계 상태 머신(재료 준비→썰기→굽기→데코→서빙), 작업대 전환, 점수·콤보·별점",
        "Asset & UI — 주방 환경, 재료·도구 모델, 판정 표시와 이펙트",
        "담당끼리는 공용 이벤트 규약으로만 연결해, 각자 Sandbox 씬에서 독립적으로 개발하고 통합 빌드에서 합치는 구조",
      ],
      "Key Features": [
        "작업대 위에서 점점 작아지는 원이 타깃과 겹치는 순간이 박자 — 원 위 아이콘의 동작을 박자에 맞춰 수행",
        "68개 동작이 담긴 샌드위치 Easy 박자맵, Perfect·Good·Bad 판정과 미입력 처리",
        "키보드 테스트 입력으로 리듬 판정과 원 진행값 점검 — 실제 요리 동작 감지와의 통합은 진행 중",
        "두 컨트롤러를 함께 슬라이드해 작업대 전환",
        "별점·점수·Max Combo를 보여주는 결과 화면",
      ],
      "Challenges & Solutions": [
        "프레임 시간 기준으로 박자를 계산하면 프레임 변동에 따라 싱크가 밀림 → 오디오 DSP 시간(AudioSettings.dspTime)을 기준으로 곡 시간과 현재 박자를 계산하고, 시작 시점을 예약 재생으로 고정하도록 구현",
        "BPM이 빠른 곡에서는 동작이 촉박해짐 → 동작별로 박 수 간격을 정해 여유 확보 (옮기기 4박, 썰기 2박, 원이 줄어드는 시간 4박)",
        "VR 헤드셋마다 오디오 지연이 다름 → 박자에 맞춰 버튼을 눌러 평균 오차를 계산하는 오프셋 보정 기능 계획",
      ],
      Results: [
        "샌드위치 Easy 박자맵 68동작, DSP 카운트다운·로더·판정 시스템과 키보드 테스트 입력 구현",
        "게임 매니저·공용 타입·메인 씬과 작업대·UI 시연 구성을 통합하며 1차 개발 진행 중 (2026.10.12 — 11.08)",
        "다음 단계: VR 동작 감지·점수·UI 통합, Quest 3 실기기 싱크 확인과 오디오 지연 보정",
      ],
    }),
    gallery: [],
  },

  {
    id: "firewall-rule-verification",
    number: "04",
    title: "AI FIREWALL VALIDATION",
    subtitle:
      "AI가 생성한 방화벽 룰을 격리 랩에서 정적·동적으로 검증하는 파이프라인",
    category: "SECURITY · 4인 팀",
    technologies: [
      "Python",
      "Ollama",
      "Qwen2.5",
      "nftables",
      "Podman",
      "JSON Schema",
    ],
    image: "images/firewall.svg",
    imageAlt:
      "방화벽 벽돌과 검증 체크 표시를 표현한 방화벽 룰 검증 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: "https://github.com/fire-balll/ai-firewall-validation",
    summary: {
      period: "2026.09 — 현재",
      team: "4인 팀",
      role: "시나리오 · 오류 주입 · LLM 생성기",
      status: "개발·검증 진행 중",
      outcome: "시나리오 10종 · 오류 주입 25개 · Qwen2.5 생성 후보 30개 구축",
    },
    overview:
      "자연어 요구사항으로 AI가 생성한 방화벽 룰을 격리된 컨테이너 랩에서 정적·동적으로 검증하고, 위험도에 따라 선별 적용하며, 이상이 생기면 자동으로 롤백하는 파이프라인입니다. 컴퓨터공학 특론 수업(박재현 교수)의 4인 팀 프로젝트로, 2026년 9월부터 진행하고 있습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "AI로 방화벽 룰을 만들면 작성 속도는 빨라지지만, 문법적으로 맞는 룰도 실제로는 막아야 할 트래픽을 통과시킬 수 있습니다. 정적 검증만 통과한 룰 중 실제 트래픽을 흘려 봐야만 드러나는 오류가 얼마나 되는지, 위험도 기반 적용으로 사람의 검토량을 얼마나 줄이면서 안전성을 지킬 수 있는지를 연구 질문으로 삼았습니다.",
      "My Role": [
        "시나리오 담당 — 스마트홈 환경의 자연어 요구사항, 정답 룰셋, 정상·공격 프로브 정의 10종 작성",
        "오류 주입 담당 — 기존 11개 유형 15개에 응답 트래픽 누락(state) 10개를 더해, 12개 유형·25개 룰셋 구축",
        "유형별로 정적 검증에 잡히는지에 대한 가설을 세우고, 시뮬레이터로 어떤 프로브가 실패하는지 정리",
        "오류 주입 커버리지 분석기 작성과 프로브 보강",
        "Ollama 구조화 출력 기반 LLM 생성기를 구현하고, 자연어 요구사항을 JSON 룰 IR로 변환",
        "Qwen2.5:14b로 시나리오 10종 × seed 3개의 후보 30개를 생성하고 모델·프롬프트·실행 조건을 기록",
      ],
      Architecture: [
        "scenario → generator(LLM) → 후보 룰셋 → validator(정적 검증·위험도 판정) → deployer(적용·감시·롤백) → eval(지표 계산)",
        "검증 실패 룰은 적용하지 않고 기록, 고위험 룰은 사람 승인을 거쳐 적용",
        "Podman 격리 랩 — 방화벽 컨테이너와 IoT 기기·공격자·내부 PC·서버 컨테이너로 구성된 스마트홈 네트워크",
        "모든 모듈을 JSON 입력 → JSON 출력 CLI로 만들어, 앞 모듈이 없어도 예시 JSON으로 독립 개발",
      ],
      "Key Features": [
        "스키마·포트·nft 문법 검사와 범위 기준에 따른 위험도 판정",
        "룰 간 이상 4종 탐지 (shadowing·redundancy·correlation·generalization)",
        "정상·공격 트래픽을 실제로 흘려 보는 능동 프로빙",
        "적용 후 이상이 감지되면 자동 롤백",
        "실험마다 커밋 해시·인자·결과를 남기는 재현 가능한 배치 실행",
      ],
      "Challenges & Solutions": [
        "한 룰셋에 오류가 여러 개 섞이면 어떤 오류를 어느 검증이 잡았는지 가를 수 없음 → 오류 주입 파일 하나에 오류를 하나만 넣는 원칙을 세움",
        "IR로 응답 트래픽 누락을 표현할 수 없음 → state 오류 주입 파일에 한해 변환기에서 상태 추적 룰을 제외하는 옵션을 연결하고, 시뮬레이터로 검출할 수 없는 유형을 별도 관리",
        "구현이 진행되며 가설이 실제 검증기 동작과 어긋남 → 검증기 결과를 확인해 order 유형 가설을 correlation 기준으로 수정",
      ],
      Results: [
        "스마트홈 시나리오 10종, 12개 유형의 오류 주입 룰셋 25개와 Qwen2.5:14b 생성 후보 30개 구축",
        "게스트 망과 두 번째 PC를 추가한 격리 랩, curl·nmap 프로브로 검증 범위를 확대",
        "생성 후보는 검증 실험의 입력이며, 전체 랩 실험의 정량 성과는 아직 집계 전",
        "시뮬레이터 분석 결과, 포트 오기·범위 경계·출발지와 목적지 뒤바뀜·룰 누락·범위 축소 오류는 정적 검증에서 저위험으로 통과하지만 프로브에서는 실패 — 동적 검증이 필요한 이유를 확인",
      ],
    }),
    gallery: [],
  },

  {
    id: "etf-chatbot",
    number: "05",
    title: "CONNECT TO ETF",
    subtitle: "ETF 상품설명서를 근거로 답하는 RAG 기반 질의응답 챗봇",
    category: "COMENTO 현직자 멘토링 · 개인 프로젝트",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "OpenAI GPT-4o",
      "Streamlit",
      "PyMuPDF",
      "yfinance",
    ],
    image: "images/etf.svg",
    imageAlt:
      "문서 검색 결과와 ETF 비교 막대 차트를 표현한 RAG 챗봇 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: "https://github.com/improvv/connect-to-etf",
    summary: {
      period: "2026.08",
      team: "개인 프로젝트",
      role: "기획 · RAG 파이프라인 · UI · 문서화",
      status: "PoC 구현 완료",
      outcome: "멘토 코드 리뷰 2회 · 주요 개선점 5가지 반영",
    },
    overview:
      "한국투자신탁운용의 「LLM을 활용한 ETF 질의응답 챗봇 구축」 RFP를 바탕으로 만든 챗봇 PoC입니다. ACE ETF 5종의 공개 간이투자설명서와 상품 정형 데이터를 근거로 질문에 답하고, 출처를 함께 보여 줍니다. 2026년 8월 한 달 동안 코멘토에서 현직 실무자에게 멘토링을 받으며 혼자 개발했고, 두 차례 코드 리뷰를 받아 개선했습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "금융 상품 챗봇은 틀린 수치를 말하거나 투자를 권유하면 안 됩니다. 그런데 PDF에서 뽑은 표는 컬럼이 밀리거나 깨지기 쉽고, 프롬프트 지시만으로는 완곡한 권유 표현까지 막기 어렵습니다. 수치는 검증된 데이터로, 설명은 문서 검색으로 나누고 답변을 사후 검증하는 구조로 이 문제를 풀고자 했습니다.",
      "My Role": [
        "1인 프로젝트 — RFP 분석부터 RAG 파이프라인, Streamlit UI, 문서화까지 전 과정 담당",
        "현직 멘토의 1·2차 코드 리뷰를 받고 지적 사항을 반영",
      ],
      Architecture: [
        "PDF 로드(PyMuPDF) → 400자 청크 분할 → OpenAI 임베딩 → FAISS 벡터 DB → 검색 → 프롬프트 → GPT-4o → 출처를 붙여 출력",
        "수치 질문은 정형 데이터(etf_data.json)를 우선 근거로, 서술형 질문은 문서 검색 결과로 답하도록 역할 분리",
        "기본 5종 벡터 DB는 서버 프로세스당 한 번만 불러와 모든 세션이 공유하고, 사용자가 올린 PDF는 세션별 저장소에 따로 담아 다른 사용자와 섞이지 않게 함",
        "기본 DB와 업로드 DB를 각각 검색한 뒤 L2 거리 기준으로 합쳐 정렬",
        "ETF 비교 화면은 LLM 없이 정형 데이터로 표와 Altair 차트를 직접 렌더링",
      ],
      "Key Features": [
        "모든 답변에 문서명·페이지 또는 정형 데이터 기준일 출처 표시",
        "정규식 + 저비용 LLM(gpt-4o-mini) 이중 판정으로 매수·매도 권유와 가격 예측 표현 차단",
        "ETF 7개 지표 비교표와 차트",
        "멀티턴 대화 — 지시 표현이 있는 후속 질문을 독립 질문으로 바꿔 검색",
        "초보자·경험자 모드, 한국어·영어 전환 (답변과 컴플라이언스 검증까지 언어별로 분리)",
        "추적 지수 관련 최신 뉴스 요약(yfinance), 후속 질문 3개 추천, ETF PDF 추가 업로드",
      ],
      "Challenges & Solutions": [
        "서버가 재시작될 때마다 PDF 5종을 다시 임베딩함 → PDF 파일명·수정 시각·크기 해시로 인덱스를 디스크에 캐싱해, PDF가 바뀌지 않으면 재임베딩 없이 로드",
        '정규식은 "장기 보유 관점에서 매력적인 선택지" 같은 완곡한 권유를 놓침 → 정규식이 아무것도 못 잡았을 때만 작은 모델로 한 번 더 판정해 비용을 아끼면서 보완',
        "후속 질문이 이전 대화와 무관하게 검색됨 → 대화 이력으로 질문을 재작성해 검색하고, 답변 생성에도 대화 이력을 전달",
        '"이거 총보수 얼마야?"처럼 ETF명이 없는 질문에는 정형 데이터가 빠짐 → 검색된 문서 청크의 ETF 메타데이터도 함께 보고 정형 데이터를 포함',
        "선택한 ETF 문서에 결과가 없으면 조용히 전체 검색으로 넘어감 → 전체 문서에서 검색했다는 안내를 화면에 표시",
        "임베딩 요청이 분당 토큰 한도를 넘으면 앱이 멈춤 → PDF 단위로 나눠 요청하고 RateLimitError 발생 시 지수 백오프로 재시도",
      ],
      Results: [
        "1차 코드 리뷰의 개선점 중 디스크 캐싱, 컴플라이언스 이중화, 멀티턴 검색, 정형 데이터 판단, 폴백 안내 5가지를 2차에서 반영",
        "다음 과제: LLM 컴플라이언스 판정이 실패했을 때 그냥 통과시키지 않고 안내하기, 언어별 리소스를 한 곳으로 모으기",
      ],
    }),
    gallery: [],
  },

  {
    id: "silver-stop",
    number: "06",
    title: "SILVER STOP",
    subtitle: "보행자(노인)를 인식하면 멈추는 AI 자율주행 자동차",
    category: "AUTONOMOUS DRIVING CAMP · 금상",
    technologies: [
      "Python",
      "YOLO",
      "Raspberry Pi",
      "Ultrasonic Sensor",
      "Camera",
    ],
    image: "images/silverstop.svg",
    imageAlt:
      "도로 위 자동차와 보행자 인식 박스를 표현한 자율주행 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    summary: {
      period: "2025.07",
      team: "팀 프로젝트",
      role: "PM · 보행자 인식 및 정지 제어",
      status: "캠프 프로젝트 완료",
      outcome: "한밭 MOBI 자율주행 캠프 금상",
    },
    overview:
      "한밭 MOBI 자율주행 캠프에서 진행한 팀 프로젝트입니다. 라즈베리파이를 탑재한 소형 자율주행 자동차에서 캠프가 제공한 YOLO 예제를 활용해 보행자(노인)를 인식하고, 카메라 실시간 영상과 초음파 거리 측정을 결합해 자동으로 멈추게 했습니다. 캠프에서 금상을 받았습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "고령 보행자는 차량을 피하는 반응이 느려 교통사고에 취약합니다. 차량이 보행자를 인식하면 먼저 멈추도록 만드는 것을 목표로 했습니다.",
      "My Role": [
        "PM — 아이디어 기획, 일정·역할 분담 등 팀 운영 총괄",
        "캠프 실습 코드를 바탕으로 보행자 인식과 정지 동작을 조합해 프로젝트 주제에 맞게 구현",
      ],
      Architecture: [
        "카메라 영상 → YOLO 객체 인식으로 보행자 검출",
        "초음파 센서로 앞 물체와의 거리 측정",
        "보행자가 인식되고 일정 거리 안으로 들어오면 모터를 정지시키는 제어 로직",
        "라즈베리파이에서 인식과 주행 제어를 함께 처리",
      ],
      "Key Features": [
        "카메라 영상 스트림에서 YOLO로 보행자를 실시간 인식",
        "초음파 거리 측정으로 보행자가 가까워지면 차량 정지",
        "보행자가 사라지면 다시 주행",
      ],
      "Challenges & Solutions": [
        "라즈베리파이에서 YOLO 추론이 느려 보행자를 인식해도 정지가 한 박자 늦음 → 입력 해상도를 낮추고 인식 대상을 사람 클래스로 좁혀 반응 속도를 확보",
        "초음파 거리값이 순간적으로 튀어 차량이 불필요하게 멈칫함 → 여러 번 측정한 값을 함께 보고 판단하도록 조정",
        "카메라 인식과 거리 측정이 따로 동작해 판단이 엇갈림 → 보행자 인식과 거리 조건을 모두 만족할 때만 정지하도록 제어 로직을 정리",
      ],
      Results: "한밭 MOBI 자율주행 캠프에서 금상을 받았습니다.",
    }),
    gallery: [],
  },

  {
    id: "morselingo",
    number: "07",
    title: "MORSELINGO",
    subtitle:
      "눈 깜빡임으로 한글 모스부호를 연습하는 Computer Vision 학습 프로젝트",
    category: "PERSONAL PROJECT · COMPUTER VISION",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    image: "images/morse.svg",
    imageAlt:
      "눈의 형태와 모스부호 신호를 표현한 Computer Vision 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: "https://github.com/improvv/MorseLingo",
    summary: {
      period: "2026.10",
      team: "개인 프로젝트",
      role: "기획 · Computer Vision · 구현 · 문서화",
      status: "프로토타입 완성",
      outcome: "macOS 웹캠 기반 한글 모스부호 입력·채점 구현",
    },
    overview:
      "MorseLingo는 웹캠으로 눈 깜빡임을 인식해, 짧게 감으면 점·길게 감으면 선으로 한글 모스부호를 입력하며 연습하는 프로젝트입니다. 장기 목표는 듀오링고처럼 단계별로 배우는 학습 서비스이며, 현재는 macOS에서 동작하는 Python 웹캠 프로토타입입니다. 2026년 10월에 혼자 기획하고 개발했습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "모스부호는 짧은 신호와 긴 신호 두 가지로 입력할 수 있습니다. 눈 깜빡임의 길이로 점과 선을 구분하면 손을 쓰지 않고도 입력할 수 있어서, 한글 모스부호를 눈으로 연습하는 도구를 만들었습니다.",
      "My Role": [
        "1인 개인 프로젝트 — 기획부터 구현, 문서화까지 전 과정 담당",
        "MediaPipe Face Landmarker 기반 눈 랜드마크 추정과 EAR(Eye Aspect Ratio) 계산",
        "눈 감김 시작·종료 추적과 감은 시간 기반 점·선 분류",
        "한글 문장을 초성·중성·종성으로 분해해 자모별 모스부호로 변환하는 규칙 구현",
        "목표 부호와 실제 입력을 비교해 보여주는 고대비 화면 패널",
      ],
      Architecture: [
        "웹캠 프레임 → RGB 변환 → 얼굴·눈 랜드마크 추정 → EAR 계산",
        "→ 눈 감김 시작·종료 추적 → 감은 시간을 점·선으로 변환",
        "→ 목표 부호열과 비교 → 화면 피드백",
        "eye_metrics(EAR) · blink_tracker(시간 측정) · morse(변환·채점) · sentence_overlay(화면) 모듈로 분리",
      ],
      "Key Features": [
        "양쪽 눈 EAR이 0.15 미만이면 감김으로 판단, 300ms 미만은 점·이상은 선으로 입력",
        "터미널에서 입력한 한글 문장을 자모별 모스부호로 변환해 목표로 제시",
        "목표 부호 바로 아래에 실제 입력을 정렬하고, 일치 여부를 초록·빨강으로 표시",
        "입력 개수와 일치한 부호 수, 완료한 글자 표시, 긴 부호열은 입력 위치에 맞춰 자동 페이지 전환",
        "삭제·초기화·제출·새 문장 입력을 키보드로 조작하는 READY → INPUT → REVIEW 상태 흐름",
      ],
      "Challenges & Solutions": [
        "프레임 수로 시간을 재면 프레임 속도에 따라 점·선 판정이 흔들림 → 단조 증가 시계로 감은 시간을 측정",
        "얼굴 추적이 끊기거나 프레임 공백이 생기면 잘못된 입력이 들어감 → 추적 유실·EAR 계산 실패·1초 초과 공백 시 진행 중인 측정을 취소",
        "Mac 환경에서 최신 MediaPipe로 모델 초기화 시 강제 종료 발생 → 버전을 바꿔 가며 원인을 좁혀 0.10.35에서 안정 동작 확인",
        "쌍자음·겹받침 등 부호표에 없는 자모 → 구성 자모로 나누는 확장 규칙 정의",
      ],
      Results: [
        "macOS 웹캠 프로토타입 완성 — 한글 문장을 눈 깜빡임만으로 입력하고 채점",
        "다음 단계: 자연스러운 깜빡임과 의도적 입력 구분, 사용자별 임계값 보정, 흔들림을 줄이는 디바운싱",
      ],
    }),
    gallery: [],
  },
];

export const education = {
  institution: "HANBAT NATIONAL UNIVERSITY",
  major: "Computer Engineering",
  description:
    "국립 한밭대학교 · 컴퓨터공학 전공. Computer Vision, 자연어처리, 사물인터넷, 인간과 컴퓨터 상호작용 수업을 듣고 있습니다.",
  period: "2025.03 — 현재 · 3학년 편입" as string | null,
  creditBank: "1·2학년 과정은 학점은행제로 이수",
  toeic: "830",
  graduation: "2027.02" as string | null, // 졸업 예정
  gpa: "4.12 / 4.5" as string | null,
  subjects: [
    "Computer Vision",
    "Object Detection & Tracking",
    "Human / Animal Behavior Understanding",
    "Lightweight Deep Learning",
  ],
  // 최신 취득순 → 전공 관련도순
  certificates: [
    "NAVER Cloud Platform Certified Associate (NCA)",
    "AWS Certified Cloud Practitioner",
    "정보처리기사 (필기 합격)",
    "리눅스마스터 2급",
    "네트워크관리사 2급",
    "컴퓨터활용능력 1급",
    "한국사능력검정시험 1급",
  ] as string[],
};

// 프로젝트 연결은 제공된 정보로 확인되는 경우에만 지정합니다.
export const skillGroups: SkillGroup[] = [
  {
    category: "MOBILE DEVELOPMENT",
    skills: [
      { name: "Flutter", projects: ["ai-posture-correction"] },
      { name: "Riverpod", projects: ["ai-posture-correction"] },
      { name: "React Native", projects: ["pet-travel"] },
    ],
  },
  {
    category: "AI & COMPUTER VISION",
    skills: [
      {
        name: "Python",
        projects: ["etf-chatbot", "morselingo", "silver-stop"],
      },
      { name: "LangChain", projects: ["etf-chatbot"] },
      { name: "OpenCV", projects: ["morselingo"] },
      { name: "YOLO", projects: ["silver-stop"] },
      { name: "PyTorch", projects: [] },
    ],
  },
  {
    category: "TOOLS & INTERACTIVE",
    skills: [
      {
        name: "Git / GitHub",
        projects: [],
        url: "https://github.com/improvv",
      },
      { name: "Notion", projects: [] },
      { name: "Unity", projects: ["rhythm-mama"] },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    date: "2026.08",
    event: "리빙랩",
    title: "일회용컵 반환 제도",
    result: "장려상",
    description:
      "일회용컵 반환이 번거로운 이유를 시민 관점에서 분석, 반환율을 높이는 개선 방안 제안",
  },
  {
    date: "2026.05",
    event: "한국조폐공사 공공데이터 활용 공모전",
    title: "마실",
    result: "예선 통과",
    description:
      "공공데이터로 동네 소상공인과 주민을 잇는 지역 기반 소상공인 커뮤니티 서비스",
  },
  {
    date: "2025.07",
    event: "한밭 MOBI 자율주행 캠프",
    title: "Silver Stop",
    result: "금상",
    description: "YOLO로 보행자를 실시간 인식해 멈추는 AI 자동차",
    project: "silver-stop",
  },
  {
    date: "2025.06",
    event: "창업캠프",
    title: "금산삐뽀",
    result: "장려상",
    description:
      "금산 시민 인터뷰·포털 자료 조사로 지역 문제 도출, 웨어러블 연동 어르신 건강 이상 알림 앱 Figma 프로토타입 제안",
  },
];

// 자잘한 활동은 연도별 아카이브로
export const archive: ArchiveItem[] = [
  {
    year: "2026",
    date: "2026.09 —",
    title: "유성구청 리빙랩",
    note: "유성 로테이션 소개팅 — 지역 청년의 자연스러운 만남을 잇는 참여형 프로그램 기획",
    tag: "LIVING LAB",
    inProgress: true,
  },
  {
    year: "2026",
    date: "2026.08",
    title: "멋사 해커톤",
    note: "WHS After Mate — 예약부터 사후 관리까지 한 곳에서 다루는 클리닉 통합 관리 서비스",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026.05",
    title: "멋사 아이디어톤",
    note: "내가해냄 — 쉬었음 청년을 위한 게이미피케이션 정신 건강 관리 앱",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026.04",
    title: "멋사 애니멀 리그",
    note: "도라에몽 핑계빵 — 공부 안 하는 이유를 합리화하는 문장을 암기빵에 찍어 먹는 타자 게임",
    tag: "PROJECT",
  },
  {
    year: "2026",
    date: "2026.04",
    title: "Cliary",
    note: "피부 상태를 기록하고 관리 루틴을 돕는 1인 개발 피부관리 앱",
    tag: "PROJECT",
  },
  {
    year: "2025",
    date: "2025.10",
    title: "소중한 SW특강: 네이버 클라우드 실무 2기",
    note: "네이버 클라우드 플랫폼 기반 클라우드 실무 교육 수료 · NCA 자격 취득",
    tag: "EDUCATION",
  },
  {
    year: "2025",
    date: "2025.09",
    title: "AWS Cloud Practitioner Essentials",
    note: "AWS 클라우드 개념과 핵심 서비스 기초 교육 수료 · AWS Certified Cloud Practitioner 취득",
    tag: "EDUCATION",
  },
  {
    year: "2025",
    date: "2025.06 — 2025.10",
    title: "대전 빵사대",
    note: "대전에 놀러 온 사람들을 위한 빵 맛집 지도 앱 · 백엔드 팀원 1명과 진행",
    tag: "PROJECT",
  },
];

export const contacts: { label: string; url: string | null }[] = [
  { label: "GitHub", url: "https://github.com/improvv" },
  { label: "Email", url: "mailto:jinjeong619@gmail.com" },
  { label: "Blog", url: "https://howsitgoin.tistory.com/" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jinjeong-seo-a03b06385/",
  },
];

export const cv = {
  file: "files/jinjeong-seo-cv.pdf",
  downloadName: "서진정_CV.pdf",
};

export function assetUrl(path: string): string {
  if (/^(https?:\/\/|data:)/.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
