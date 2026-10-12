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
  title: string;
  date: string;
  organization: string;
  description: string;
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
  { id: "works", title: "SELECTED WORKS", number: "04" },
  { id: "education", title: "EDUCATION", number: "05" },
  { id: "skills", title: "TECHNICAL SKILLS", number: "06" },
  { id: "activities", title: "ACTIVITIES", number: "07" },
  { id: "contact", title: "CONTACT", number: "08" },
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
    role: "Leadership & Development",
    period: "활동 기간 추가 예정",
    description:
      "동아리 운영과 프로젝트 협업을 경험했습니다. 구체적인 역할과 활동 기록은 추가 예정입니다.",
    tags: ["LEADERSHIP", "COLLABORATION", "DEVELOPMENT"],
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
    subtitle: "Human Pose Estimation 기반 AI 자세 교정 헬스 앱",
    category: "CAPSTONE DESIGN",
    technologies: ["Flutter", "Backend", "AI"],
    image: "images/posture.svg",
    imageAlt: "관절 좌표와 인체 포즈를 표현한 자세 교정 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "Human Pose Estimation을 활용한 AI 자세 교정 헬스 앱을 주제로 한 캡스톤 디자인 프로젝트입니다.",
    details: pendingDetails(),
    gallery: [],
  },
  {
    id: "pet-travel",
    number: "02",
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
  {
    id: "morselingo",
    number: "03",
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
    id: "rhythm-mama",
    number: "04",
    title: "RHYTHM MAMA",
    subtitle: "리듬에 맞춰 요리하는 VR 게임",
    category: "VR / GAME DEVELOPMENT",
    technologies: ["Unity", "C#", "Meta Quest"],
    image: "images/rhythm.svg",
    imageAlt: "음반과 리듬 파형을 표현한 VR 리듬 요리 게임 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "Unity와 C#으로 제작한 Meta Quest용 VR 기반 리듬 요리 게임 프로젝트입니다.",
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
      { name: "Python", projects: ["morselingo"] },
      { name: "OpenCV", projects: ["morselingo"] },
      { name: "PyTorch", projects: [] },
    ],
  },
  {
    category: "TOOLS & INTERACTIVE",
    skills: [
      { name: "Git / GitHub", projects: [] },
      { name: "Unity", projects: ["rhythm-mama"] },
    ],
  },
];

export const achievements: Achievement[] = [];

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
