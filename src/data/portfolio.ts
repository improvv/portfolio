export interface ProjectSection {
  title: string;
  text: string;
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
    "모바일 앱부터 Computer Vision, AI, VR까지. 프로젝트를 기획하고 동료와 협업하며, 결과만큼 문제를 해결하는 과정과 그 안에서의 배움을 중요하게 생각합니다.",
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
      "데이터 분석, 매출 및 고객 분석, SAP 관련 업무를 경험했습니다.",
    tags: ["DATA ANALYSIS", "TECHNICAL SALES", "SAP"],
  },
  {
    organization: "LIKELION",
    role: "운영진",
    period: "2026 — 현재",
    description:
      "멋쟁이사자처럼 운영진으로 활동하며, 아이디어톤·중앙해커톤·연합해커톤에 참여했습니다.",
    tags: ["LEADERSHIP", "HACKATHON", "COLLABORATION"],
  },
];

// 개발 외 경험: 영어 소통과 사람을 대하는 경험
export const beyondCode: BeyondCode[] = [
  {
    title: "THE HERALD",
    role: "영자신문사 기자",
    period: "2025",
    points: ["한·영문 기사 작성", "한·영문 기사 피드백"],
  },
  {
    title: "대전광역시가족센터",
    role: "다문화가족 자녀 맞춤형 교육지원 멘토",
    period: "2025",
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
    period: "20세부터",
    points: [
      "한인 치킨집에서 일하며 영어 울렁증 극복",
      "일본 레스토랑 웨이트리스",
      "현지 레스토랑 바텐더",
    ],
  },
  {
    title: "BLACKSTONE",
    role: "교내 밴드 부회장 · 베이스",
    period: "2025 — 2025.07",
    points: [],
  },
];

// 진행 중인 연구 프로젝트
export const research: Research[] = [
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
  {
    title: "AI 생성 방화벽 룰 자동 검증",
    summary: "AI가 생성한 방화벽 룰을 자동으로 검증하는 방법을 연구합니다.",
    course: "컴퓨터공학 특론 전공 팀프로젝트",
    advisor: "박재현 교수",
    period: "2026.09 —",
    tags: ["NETWORK SECURITY", "LLM", "VERIFICATION"],
    inProgress: true,
  },
];

const pendingDetails = (): ProjectSection[] => [
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
    title: "AI POSTURE CORRECTION",
    subtitle: "BPT — Human Pose Estimation 기반 AI 자세 교정 헬스 앱",
    category: "CAPSTONE DESIGN",
    technologies: ["Flutter", "Backend", "AI"],
    image: "images/posture.svg",
    imageAlt: "관절 좌표와 인체 포즈를 표현한 자세 교정 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "Human Pose Estimation을 활용한 AI 자세 교정 헬스 앱을 주제로, 2026년 1년 동안 진행하는 캡스톤 디자인 프로젝트입니다.",
    details: pendingDetails(),
    gallery: [],
  },
  {
    id: "silver-stop",
    number: "02",
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
    details: pendingDetails(),
    gallery: [],
  },
  {
    id: "rhythm-mama",
    number: "03",
    title: "RHYTHM MAMA",
    subtitle: "리듬에 맞춰 요리하는 VR 게임",
    category: "HCI · VR GAME",
    technologies: ["Unity", "C#", "Meta Quest"],
    image: "images/rhythm.svg",
    imageAlt: "음반과 리듬 파형을 표현한 VR 리듬 요리 게임 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "인간과 컴퓨터 상호작용 전공 수업(이정 교수)에서 2026년 9월부터 진행 중인 프로젝트입니다. Unity와 C#으로 Meta Quest용 VR 리듬 요리 게임을 만들고 있습니다.",
    details: pendingDetails(),
    gallery: [],
  },
  {
    id: "morselingo",
    number: "04",
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
      "눈 깜빡임 인식을 활용한 모스부호 학습 프로젝트입니다. Python과 OpenCV를 사용했습니다.",
    details: pendingDetails(),
    gallery: [],
  },
  {
    id: "daejeon-bakery",
    number: "05",
    title: "DAEJEON BAKERY",
    subtitle: "대전 빵집 앱",
    category: "PERSONAL PROJECT · IN PROGRESS",
    technologies: [],
    image: "images/bakery.svg",
    imageAlt: "빵과 지도 핀을 표현한 대전 빵집 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "백엔드 팀원 한 명과 함께 2026년부터 진행 중인 개인 프로젝트입니다.",
    details: pendingDetails(),
    gallery: [],
  },
  {
    id: "pet-travel",
    number: "06",
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
      "반려견을 동반한 경주 여행 코스를 추천하는 모바일 애플리케이션 프로젝트입니다.",
    details: pendingDetails(),
    gallery: [],
  },
];

export const education = {
  institution: "HANBAT NATIONAL UNIVERSITY",
  major: "Computer Engineering",
  description: "국립 한밭대학교 · 컴퓨터공학 전공",
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
    description: "",
  },
  {
    date: "2026.05",
    event: "한국조폐공사 공공데이터 활용 공모전",
    title: "마실 — 소상공인 커뮤니티",
    result: "예선 통과",
    description: "",
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
      "금산 시민 인터뷰와 포털 자료 조사로 지역 문제를 찾고, 웨어러블 기기와 연동해 어르신의 건강 이상 신호를 보호자와 병원에 알리는 앱을 Figma 프로토타입으로 제안했습니다.",
  },
];

// 자잘한 활동은 연도별 아카이브로
export const archive: ArchiveItem[] = [
  {
    year: "2026",
    date: "2026.09 —",
    title: "유성 리빙랩",
    note: "유성 로테이션 소개팅",
    tag: "LIVING LAB",
    inProgress: true,
  },
  {
    year: "2026",
    date: "2026.08 —",
    title: "소방안전 공공데이터 활용 공모전",
    note: "",
    tag: "CONTEST",
    inProgress: true,
  },
  {
    year: "2026",
    date: "2026",
    title: "멋사 해커톤",
    note: "WHS After Mate — 클리닉 통합 관리 서비스",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026",
    title: "멋사 연합해커톤",
    note: "",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026",
    title: "멋사 중앙해커톤",
    note: "",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026",
    title: "멋사 아이디어톤",
    note: "내가해냄",
    tag: "HACKATHON",
  },
  {
    year: "2026",
    date: "2026.05",
    title: "현대 배리어프리 공모전",
    note: "",
    tag: "CONTEST",
  },
  {
    year: "2026",
    date: "2026.04",
    title: "Cliary",
    note: "1인 개인 프로젝트 — 피부관리 앱",
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
