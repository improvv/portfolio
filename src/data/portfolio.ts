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
  repository: string | null;
  overview: string;
  details: ProjectSection[];
  gallery: { src: string; alt: string; caption: string }[];
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
  skills: { name: string; projects: string[] }[];
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
  tag: "HACKATHON" | "CONTEST" | "LIVING LAB" | "PROJECT";
  inProgress?: boolean;
}
export interface Research {
  title: string;
  summary: string;
  course: string;
  advisor: string;
  period: string;
  tags: string[];
  inProgress: boolean;
}
export interface BeyondCode {
  title: string;
  role: string;
  period: string;
  points: string[];
}

export const profile = {
  name: "JINJEONG SEO",
  koreanName: "서진정",
  year: "2026",
  university: "국립 한밭대학교",
  major: "컴퓨터공학",
  portrait: "images/profile.webp" as string | null,
  introduction: "문제를 발견하고, 코드로 답을 찾아갑니다.",
  paragraphs: [
    "국립 한밭대학교에서 컴퓨터공학을 전공하며 소프트웨어를 만들고 있습니다. 일상 속 문제를 발견하고, 아이디어를 실제로 작동하는 서비스로 옮기는 과정에 관심이 있습니다.",
    "지금 가장 깊이 파고 있는 분야는 Computer Vision입니다. 보행자를 실시간으로 인식하는 자율주행 자동차를 만들었고, 제한된 환경에서도 빠르게 동작하는 경량 딥러닝 모델을 연구하고 있습니다.",
    "모바일 앱부터 AI, VR까지 폭넓게 만들어 왔습니다. 호주와 영국에서 생활하고 영자신문 기자로 활동하며 익힌 영어 소통 능력으로, 다양한 사람과 함께 결과를 만들어 갑니다.",
  ],
  keywords: ["COMPUTER VISION", "SOFTWARE DEVELOPMENT", "LEARNING BY BUILDING"],
};

export const navigation = [
  { id: "about", title: "ABOUT ME", number: "02" },
  { id: "experience", title: "EXPERIENCE", number: "03" },
  { id: "research", title: "RESEARCH", number: "04" },
  { id: "works", title: "SELECTED WORKS", number: "05" },
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
      "기술 영업 인턴으로 매출·고객 데이터를 분석하고 SAP 기반 업무를 수행했습니다. 엔지니어링과 비즈니스 사이에서 기술을 고객의 언어로 전달하는 법을 배웠습니다.",
    tags: ["DATA ANALYSIS", "TECHNICAL SALES", "SAP"],
  },
  {
    organization: "LIKELION",
    role: "운영진",
    period: "2026 — 현재",
    description:
      "멋쟁이사자처럼 운영진으로 활동하며 아이디어톤과 해커톤에 참여했습니다. 짧은 시간 안에 아이디어를 서비스로 구체화하고, 팀원들과 역할을 나눠 끝까지 완성하는 경험을 쌓고 있습니다.",
    tags: ["LEADERSHIP", "HACKATHON", "COLLABORATION"],
  },
];

// 개발 외 경험: 영어 소통과 사람을 대하는 경험
export const beyondCode: BeyondCode[] = [
  // 최신순(종료 시점 기준)
  {
    title: "THE HERALD",
    role: "영자신문사 기자",
    period: "2025.03 — 2026.08",
    points: ["한·영문 기사 작성", "한·영문 기사 피드백"],
  },
  {
    title: "BLACKSTONE",
    role: "교내 밴드 부회장 · 베이스",
    period: "2025.03 — 2026.08",
    points: [],
  },
  {
    title: "대전광역시가족센터",
    role: "다문화가족 자녀 맞춤형 교육지원 멘토",
    period: "2025.01 — 2025.12",
    points: [
      "한국어를 어려워하는 초등학생에게 영어로 한글·수학 지도",
      "영어를 어려워하는 고등학생 영어 지도",
    ],
  },
  {
    title: "UNIVERSITY OF WOLVERHAMPTON",
    role: "영국 어학연수",
    period: "2025.07 — 2025.08",
    points: ["한 달간 영어 수업 수강"],
  },
  {
    title: "AUSTRALIA",
    role: "학생 · 워킹홀리데이",
    period: "2019 — 2021",
    points: [],
  },
];

// 진행 중인 연구 프로젝트
export const research: Research[] = [
  {
    title: "Lightweight Deep Learning for Resource-Constrained Environments",
    summary:
      "Pruning·Quantization·Knowledge Distillation 등 경량화 기법을 학습합니다. EfficientSAM(CVPR 2024)과 공식 구현을 분석하고, 모델 크기·추론 속도·분할 성능을 비교하는 실험을 설계하고 있습니다.",
    course: "사물인터넷 전공 팀프로젝트",
    advisor: "우성필 교수",
    period: "2026.09 —",
    tags: ["COMPUTER VISION", "MODEL COMPRESSION", "EFFICIENTSAM"],
    inProgress: true,
  },
  {
    title:
      "한국어 다중턴 대화에서 화자·청자·담화 대상 전환에 따른 LLM의 생략 논항 추적 능력 분석",
    summary:
      "대화 속 화자·청자·담화 대상이 바뀔 때, LLM이 생략된 논항을 얼마나 정확히 추적하는지 분석합니다.",
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

// 확인된 내용만 덮어쓰고, 나머지는 "추가 예정"으로 둡니다.
const pendingDetails = (
  known: Partial<Record<DetailTitle, string | string[]>> = {},
): ProjectSection[] =>
  basePendingDetails().map((section) => ({
    ...section,
    text: known[section.title as DetailTitle] ?? section.text,
  }));

const basePendingDetails = (): ProjectSection[] => [
  {
    title: "Problem & Motivation",
    text: "해결하려던 문제, 대상 사용자, 프로젝트를 시작하게 된 계기를 추가할 예정입니다.",
  },
  {
    title: "My Role",
    text: "팀 구성, 개인 담당 범위, 직접 구현한 기능과 기여 내용을 추가할 예정입니다.",
  },
  {
    title: "Architecture",
    text: "실제 구현을 확인한 뒤 시스템 구성도, 데이터 흐름과 모듈 간 연결을 추가할 예정입니다.",
  },
  {
    title: "Key Features",
    text: "구현이 확인된 주요 기능과 실제 동작 화면을 추가할 예정입니다.",
  },
  {
    title: "Challenges & Solutions",
    text: "발생했던 문제, 검토한 대안, 선택한 해결 방법과 그 근거를 추가할 예정입니다.",
  },
  {
    title: "Results",
    text: "검증 가능한 결과와 회고를 추가할 예정입니다. 성능 수치와 사용자 반응은 확인된 자료만 기재합니다.",
  },
];

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
      "RTMPose-s",
      "MotionAGFormer-XS",
      "Firebase",
    ],
    image: "images/posture.svg",
    imageAlt: "관절 좌표와 인체 포즈를 표현한 자세 교정 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: "https://github.com/Hanbat-Personal-Training-AI-Agent/BPT",
    overview:
      "BPT는 스마트폰 카메라만으로 운동 자세를 실시간 분석해 반복 횟수·세트 진행·자세 상태를 알려주는 AI 트레이닝 앱입니다. 카메라 프레임은 서버로 보내지 않고 iPhone 안에서 바로 처리합니다. 한밭대학교 캡스톤 디자인 3인 팀 프로젝트로, 2026년 한 해 동안 진행하고 있습니다.",
    details: pendingDetails({
      "Problem & Motivation":
        "혼자 운동할 때는 자세가 잘못되어도 스스로 알아차리기 어렵고, 잘못된 자세는 운동 효과를 떨어뜨리고 부상으로 이어질 수 있습니다. 트레이너 없이도 스마트폰 하나로 자세를 확인하고 교정할 수 있는 앱을 목표로 했습니다.",
      "My Role": [
        "프론트엔드 담당 — 앱의 모든 화면과 사용자 흐름을 Flutter로 설계·구현",
        "Riverpod 상태 관리, go_router 선언적 라우팅과 인증 가드",
        "온보딩(성별·신체 정보·목표)과 4방향 체형 자동 촬영 플로우",
        "운동 설정·카메라 배치 안내·카운트다운·실시간 HUD·결과 화면으로 이어지는 운동 흐름",
        "리포트(운동량·분석 탭), 운동 기록 캘린더, 내정보·계정 관리 화면",
        "회원가입·로그인·계정 찾기 등 백엔드 API 연동과 토큰 갱신",
        "저장소 전체 커밋 126개 중 71개 작성 (2026.10 기준)",
      ],
      Architecture: [
        "Flutter UI — 운동 선택, 목표 설정, 운동 진행 화면, 반복 수·세트 HUD, 리포트",
        "iOS 네이티브(Swift/CoreML) — 카메라 프레임 수집, RTMPose-s 2D 관절 추정, 운동별 평가기",
        "연결 — PlatformView로 네이티브 카메라 화면을 임베드하고, MethodChannel로 추론 결과(status·rep·done)를 Flutter에 전달",
        "데이터 — Firebase 인증, 운동 기록 저장·조회와 기간별 통계 집계",
        "Feature-First 폴더 구조에 Riverpod 단방향 상태 관리를 적용해, UI 위젯이 데이터 로직을 직접 호출하지 않고 Provider로 필요한 상태만 받도록 분리",
      ],
      "Key Features": [
        "스쿼트·벤치프레스·데드리프트·바벨로우·푸쉬업·랫풀다운 6종 운동의 실시간 자세 분석",
        "반복 횟수와 세트 진행률을 보여주는 운동 HUD",
        "가이드 조건을 만족하면 정면·양쪽 사선·뒷면 4장을 자동으로 찍는 체형 촬영",
        "운동 전 종목별 카메라 배치 안내와 3·2·1 카운트다운",
        "캐릭터 ‘코리’의 실시간 음성 피드백 (ElevenLabs TTS)",
        "운동량·자주 나온 실수를 집계하는 리포트와 운동 기록 캘린더",
      ],
      "Challenges & Solutions": [
        "잘못된 카메라 각도로 운동을 시작하면 분석이 부정확해짐 → 시작 버튼을 눌러도 바로 추론으로 넘어가지 않고, 종목별 카메라 배치 안내를 확인해야 운동 화면으로 이동하도록 흐름을 설계",
        "로그인 상태에서 액세스 토큰이 만료되면 요청이 실패함 → 만료 시 리프레시 토큰으로 자동 갱신한 뒤 실패한 요청을 다시 보내도록 처리",
        "체형 촬영 중 코리 음성이 같은 안내를 쉬지 않고 반복함 → 안내 반복 조건을 조정해 필요한 순간에만 말하도록 수정",
        "체형 촬영 후 전송 대기 페이지에서 흐름이 끊김 → 대기 페이지를 없애고 로딩 화면에서 자동 전송하도록 단순화",
      ],
      Results: [
        "캡스톤 디자인 I을 1차 마일스톤으로 마치고, 캡스톤 디자인 II에서 고도화 진행 중",
        "macOS 프로토타입 기준 추론·후처리 평균 12.73ms (RTMPose-s 2.56ms, MotionAGFormer-XS 7.93ms) — 팀 AI 파이프라인 측정값",
        "다음 단계: MotionAGFormer-XS 3D 자세 추정의 iOS 연결, Android 실시간 추론 지원",
      ],
    }),
    gallery: [],
  },

  {
    id: "rhythm-mama",
    number: "02",
    title: "RHYTHM MAMA",
    subtitle: "리듬에 맞춰 요리하는 VR 게임",
    category: "HCI · VR GAME",
    technologies: ["Unity", "C#", "Meta Quest"],
    image: "images/rhythm.svg",
    imageAlt: "음반과 리듬 파형을 표현한 VR 리듬 요리 게임 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "인간과 컴퓨터 상호작용 전공 수업(이정 교수)에서 2026년 9월부터 진행 중인 프로젝트입니다. 음악의 리듬에 맞춰 재료를 손질하고 요리하는 Meta Quest용 VR 게임을 Unity와 C#으로 만들고 있습니다.",
    details: pendingDetails({
      "Problem & Motivation":
        "VR에서는 손동작 자체가 입력이 됩니다. 요리라는 익숙한 행동과 리듬 게임을 결합해, 별도의 학습 없이도 몸으로 자연스럽게 즐길 수 있는 상호작용을 HCI 관점에서 설계해 보고자 했습니다.",
    }),
    gallery: [],
  },
  {
    id: "firewall-rule-verification",
    number: "03",
    title: "FIREWALL RULE VERIFIER",
    subtitle: "AI가 생성한 방화벽 룰을 자동으로 검증하는 프로젝트",
    category: "SECURITY · IN PROGRESS",
    technologies: [],
    image: "images/firewall.svg",
    imageAlt:
      "방화벽 벽돌과 검증 체크 표시를 표현한 방화벽 룰 검증 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "컴퓨터공학 특론 전공 팀프로젝트(박재현 교수)로, 2026년 9월부터 진행 중입니다. AI가 생성한 방화벽 룰을 자동으로 검증하는 것을 목표로 합니다.",
    details: pendingDetails({
      "Problem & Motivation":
        "AI로 방화벽 룰을 생성하면 작성 속도는 빨라지지만, 생성된 룰이 의도대로 동작하는지 사람이 하나하나 확인하기는 어렵습니다. 생성된 룰을 자동으로 검증해, AI가 만든 보안 설정도 믿고 쓸 수 있게 하는 것이 이 프로젝트의 출발점입니다.",
    }),
    gallery: [],
  },
  {
    id: "pet-travel",
    number: "04",
    title: "PET TRAVEL",
    subtitle: "반려견과 함께 떠나는 경주 여행 코스 추천 앱",
    category: "PERSONAL PROJECT",
    technologies: ["React Native", "Mobile Application"],
    image: "images/travel.svg",
    imageAlt:
      "경주의 산과 여행 경로를 추상적으로 표현한 반려견 여행 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "반려견과 함께 여행하려는 보호자를 위해, 반려견 동반 여행 코스를 추천하는 경주 여행 모바일 애플리케이션입니다.",
    details: pendingDetails({
      "Problem & Motivation":
        "반려견과 여행을 떠나려면 동반 가능한 장소를 일일이 찾아봐야 합니다. 경주 여행을 계획하는 보호자가 반려견과 함께 갈 수 있는 코스를 한 번에 확인할 수 있도록 하고자 했습니다.",
    }),
    gallery: [],
  },
  {
    id: "silver-stop",
    number: "05",
    title: "SILVER STOP",
    subtitle: "보행자(노인)를 인식하면 멈추는 AI 자율주행 자동차",
    category: "AUTONOMOUS DRIVING · 금상",
    technologies: ["Python", "YOLO", "Raspberry Pi Pico", "Ultrasonic Sensor"],
    image: "images/silverstop.svg",
    imageAlt:
      "도로 위 자동차와 보행자 인식 박스를 표현한 자율주행 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "한밭모비 자율주행 캠프(2025.07.08–11)에서 진행한 프로젝트입니다. 라즈베리파이 피코를 탑재한 AI 자동차가 초음파 센서로 거리를 측정하고, 카메라 영상 스트림에 YOLO를 적용해 보행자(노인)를 실시간으로 인식하면 정지합니다. 캠프에서 금상을 받았습니다.",
    details: pendingDetails({
      "Problem & Motivation":
        "고령 보행자는 차량을 피하는 반응이 느려 교통사고에 더 취약합니다. 자동차가 스스로 보행자를 알아보고 먼저 멈출 수 있다면 사고를 줄일 수 있다고 생각했습니다.",
      "Key Features":
        "카메라 영상 스트림에서 YOLO로 보행자를 실시간 인식합니다. 초음파 센서로 앞 물체와의 거리를 측정해, 보행자가 가까워지면 차량을 정지시킵니다.",
      Results: "한밭모비 자율주행 캠프에서 금상을 받았습니다.",
    }),
    gallery: [],
  },
  {
    id: "morselingo",
    number: "06",
    title: "MORSELINGO",
    subtitle: "눈 깜빡임 인식으로 시작하는 모스부호 학습",
    category: "COMPUTER VISION",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    image: "images/morse.svg",
    imageAlt:
      "눈의 형태와 모스부호 신호를 표현한 Computer Vision 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "눈 깜빡임의 길고 짧음을 모스부호 신호로 인식해, 손을 쓰지 않고 눈으로 모스부호를 익히는 학습 프로젝트입니다. Python과 OpenCV로 구현했습니다.",
    details: pendingDetails({
      "Problem & Motivation":
        "모스부호는 짧은 신호와 긴 신호만으로 의사를 전달할 수 있는 단순하고 강력한 언어입니다. 눈 깜빡임을 입력으로 삼으면 손을 쓰지 않고도 모스부호를 배우고 전달할 수 있다는 점에 주목했습니다.",
    }),
    gallery: [],
  },
];

export const education = {
  institution: "HANBAT NATIONAL UNIVERSITY",
  major: "Computer Engineering",
  description:
    "국립 한밭대학교 · 컴퓨터공학 전공. Computer Vision과 AI를 중심으로 경량 딥러닝, 자연어처리, 인간과 컴퓨터 상호작용, 네트워크 보안까지 폭넓게 공부하고 있습니다.",
  period: null as string | null,
  graduation: "2027.02" as string | null, // 졸업 예정
  gpa: "4.12 / 4.5" as string | null,
  subjects: [
    "Computer Vision",
    "Artificial Intelligence",
    "Software Development",
  ],
  // 최신 취득순 → 전공 관련도순
  certificates: [
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
    category: "FRONTEND & LANGUAGE",
    skills: [
      { name: "TypeScript", projects: [] },
      { name: "Java", projects: [] },
    ],
  },
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
      { name: "Python", projects: ["morselingo", "silver-stop"] },
      { name: "OpenCV", projects: ["morselingo"] },
      { name: "YOLO", projects: ["silver-stop"] },
      { name: "PyTorch", projects: [] },
    ],
  },
  {
    category: "TOOLS & INTERACTIVE",
    skills: [
      { name: "Git / GitHub", projects: [] },
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
    event: "한밭모비 자율주행 캠프",
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
    date: "2026",
    title: "멋사 해커톤",
    note: "WHS After Mate — 예약부터 사후 관리까지 한 곳에서 다루는 클리닉 통합 관리 서비스",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026",
    title: "멋사 아이디어톤",
    note: "내가해냄 — 쉬었음 청년을 위한 게이미피케이션 정신 건강 관리 앱",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026 —",
    title: "대전 빵사대",
    note: "대전에 놀러 온 사람들을 위한 빵 맛집 지도 앱 · 백엔드 팀원 1명과 진행",
    tag: "PROJECT",
    inProgress: true,
  },
  {
    year: "2026",
    date: "2026.04",
    title: "Cliary",
    note: "피부 상태를 기록하고 관리 루틴을 돕는 1인 개발 피부관리 앱",
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

export function assetUrl(path: string): string {
  if (/^(https?:\/\/|data:)/.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
