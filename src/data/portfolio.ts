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
  }[];
}

export const profile = {
  name: "JINJEONG SEO",
  koreanName: "서진정",
  year: "2026",
  university: "국립 한밭대학교",
  major: "컴퓨터공학",
  portrait: "images/profile.webp" as string | null,
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
      "기술영업팀에서 고객 단가·매출 데이터를 관리하고, SAP 기록과 대조해 데이터 정확성을 검토했습니다.",
    tags: ["DATA ANALYSIS", "TECHNICAL SALES", "SAP"],
  },
  {
    organization: "LIKELION",
    role: "운영진",
    period: "2026 — 현재",
    description:
      "멋쟁이사자처럼 운영진으로 활동하며 아이디어톤과 해커톤에 참여했습니다.",
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
    points: ["한·영문 기사 작성", "한·영문 기사 피드백"],
    articles: [
      {
        title: "Same AI, Different Results: How Prompts Make the Difference",
        section: "CULTURAL",
        year: "2026",
        summary:
          "같은 AI라도 프롬프트에 따라 결과가 달라지는 이유와 역할 지정·예시 제시 등 프롬프트 작성 팁 5가지",
      },
      {
        title: "TOPCIT Regular Assessment",
        section: "CAMPUS",
        year: "2025",
        summary: "학교의 TOPCIT 응시료 전액 지원과 응시자 혜택 소개",
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
      "RTMPose-s",
      "MotionAGFormer-XS",
      "Firebase",
    ],
    image: "images/posture.svg",
    imageAlt: "관절 좌표와 인체 포즈를 표현한 자세 교정 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    logo: { src: "images/logo-bpt.webp", alt: "BPT 로고" },
    repository: null,
    overview:
      "BPT는 스마트폰 카메라만으로 운동 자세를 실시간 분석해 반복 횟수·세트 진행·자세 상태를 알려주는 AI 트레이닝 앱입니다. 카메라 프레임은 서버로 보내지 않고 iPhone 안에서 바로 처리합니다. 한밭대학교 캡스톤 디자인 3인 팀 프로젝트로, 2026년 한 해 동안 진행하고 있습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "혼자 운동할 때는 자세가 잘못되어도 스스로 알아차리기 어렵고, 잘못된 자세는 운동 효과를 떨어뜨리고 부상으로 이어질 수 있습니다. 트레이너 없이도 스마트폰 하나로 자세를 확인하고 교정할 수 있는 앱을 목표로 했습니다.",
      "My Role": [
        "PM — 일정·역할 분담·요구사항 정리 등 프로젝트 운영 총괄",
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
    overview:
      "RhythmMaMa는 Meta Quest 3에서 플레이하는 요리 리듬게임입니다. 음악의 박자에 맞춰 재료를 썰고, 굽고, 쌓아서 샌드위치를 완성한 뒤 손님에게 서빙합니다. 동작한 타이밍이 박자와 얼마나 맞았는지에 따라 Perfect·Good·Bad로 판정합니다. 국립한밭대학교 인간과 컴퓨터 상호작용 수업(이정 교수)의 4인 팀 프로젝트로, 2026년 9월부터 진행하고 있습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "VR에서는 손동작이 곧 입력입니다. 썰기·뒤집기·쌓기 같은 익숙한 요리 동작을 리듬 게임의 입력으로 쓰면, 따로 조작법을 배우지 않아도 플레이할 수 있다고 봤습니다.",
      "My Role": [
        "PM — 4주 개발 계획·역할별 주차 체크리스트·Git 규칙 수립과 주간 회의 운영",
        "Rhythm 담당 — 음악과 박자에 관한 시스템 전체",
        "곡 재생과 싱크를 맡는 Conductor, 박자에 맞춘 3·2·1·GO 카운트다운",
        "박자맵(JSON) 포맷 정의와 로더, 곡을 들으며 타이밍을 기록하는 에디터용 박자맵 제작 도구",
        "줄어드는 원(BeatTarget)의 타이밍 계산과 Perfect·Good·Bad 판정 시스템",
        "Quest 실기기 오디오 지연 측정과 오프셋 보정",
        "Unity VR 프로젝트 초기 설정, 개발 환경 가이드·Git 규칙·4주 개발 계획 문서 작성",
      ],
      Architecture: [
        "VR Interaction — 컨트롤러 동작(썰기·뒤집기·놓기 등)이 일어난 순간을 감지해 이벤트로 알림",
        "Rhythm — 동작 이벤트를 같은 동작·같은 타깃의 가장 가까운 박자와 비교해 판정하고 결과를 발행",
        "Game System — 단계 상태 머신(재료 준비→썰기→굽기→데코→서빙), 작업대 전환, 점수·콤보·별점",
        "Asset & UI — 주방 환경, 재료·도구 모델, 판정 표시와 이펙트",
        "담당끼리는 공용 이벤트 규약으로만 연결해, 각자 Sandbox 씬에서 독립적으로 개발하고 통합 빌드에서 합치는 구조",
      ],
      "Key Features": [
        "작업대 위에서 점점 작아지는 원이 타깃과 겹치는 순간이 박자 — 원 위 아이콘의 동작을 박자에 맞춰 수행",
        "썰기·모으기·뒤집기·놓기·소스 짜기 등 요리 동작 기반 리듬 판정 (Perfect·Good·Bad)",
        "두 컨트롤러를 함께 슬라이드해 작업대 전환",
        "별점·점수·Max Combo를 보여주는 결과 화면",
      ],
      "Challenges & Solutions": [
        "프레임 시간 기준으로 박자를 계산하면 프레임 변동에 따라 싱크가 밀림 → 오디오 DSP 시간(AudioSettings.dspTime)을 기준으로 곡 시간과 현재 박자를 계산하고, 시작 시점을 예약 재생으로 고정하는 방식으로 설계",
        "BPM이 빠른 곡에서는 동작이 촉박해짐 → 동작별로 박 수 간격을 정해 여유 확보 (옮기기 4박, 썰기 2박, 원이 줄어드는 시간 4박)",
        "VR 헤드셋마다 오디오 지연이 다름 → 박자에 맞춰 버튼을 눌러 평균 오차를 계산하는 오프셋 보정 기능 계획",
      ],
      Results:
        "2026.10.12부터 4주간 1차 개발 진행 중입니다. 1차 범위는 샌드위치 1종, Easy 난이도, Quest 3 컨트롤러 조작이며, 이후 다른 요리와 난이도, 핸드 트래킹으로 확장할 예정입니다.",
    }),
    gallery: [],
  },

  {
    id: "firewall-rule-verification",
    number: "03",
    title: "AI FIREWALL VALIDATION",
    subtitle:
      "AI가 생성한 방화벽 룰을 격리 랩에서 정적·동적으로 검증하는 파이프라인",
    category: "SECURITY · 4인 팀",
    technologies: ["Python", "LLM", "nftables", "Podman", "JSON Schema"],
    image: "images/firewall.svg",
    imageAlt:
      "방화벽 벽돌과 검증 체크 표시를 표현한 방화벽 룰 검증 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "자연어 요구사항으로 AI가 생성한 방화벽 룰을 격리된 컨테이너 랩에서 정적·동적으로 검증하고, 위험도에 따라 선별 적용하며, 이상이 생기면 자동으로 롤백하는 파이프라인입니다. 컴퓨터공학 특론 수업(박재현 교수)의 4인 팀 프로젝트로, 2026년 9월부터 진행하고 있습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "AI로 방화벽 룰을 만들면 작성 속도는 빨라지지만, 문법적으로 맞는 룰도 실제로는 막아야 할 트래픽을 통과시킬 수 있습니다. 정적 검증만 통과한 룰 중 실제 트래픽을 흘려 봐야만 드러나는 오류가 얼마나 되는지, 위험도 기반 적용으로 사람의 검토량을 얼마나 줄이면서 안전성을 지킬 수 있는지를 연구 질문으로 삼았습니다.",
      "My Role": [
        "시나리오 담당 — 스마트홈 환경의 자연어 요구사항, 정답 룰셋, 정상·공격 프로브 정의 10종 작성",
        "오류 주입 담당 — 정답 룰셋을 일부러 망가뜨린 룰셋 15개를 11가지 유형(order·widen·port·swap·missing·action 등)으로 설계",
        "유형별로 정적 검증에 잡히는지에 대한 가설을 세우고, 시뮬레이터로 어떤 프로브가 실패하는지 정리",
        "오류 주입 커버리지 분석기 작성과 프로브 보강",
        "자연어 요구사항을 룰 IR로 바꾸는 LLM 생성기 담당",
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
        "현재 룰 표현(IR)으로는 응답 트래픽 누락 같은 오류를 표현할 수 없음 → 막히는 이유와 두 가지 해결안을 정리해 팀 논의로 올림",
        "구현이 진행되며 가설이 실제 검증기 동작과 어긋남 → 검증기 결과를 확인해 order 유형 가설을 correlation 기준으로 수정",
      ],
      Results: [
        "스마트홈 시나리오 10종과 11개 유형의 오류 주입 룰셋 15개로 검증 실험용 데이터셋 구축",
        "시뮬레이터 분석 결과, 포트 오기·범위 경계·출발지와 목적지 뒤바뀜·룰 누락·범위 축소 오류는 정적 검증에서 저위험으로 통과하지만 프로브에서는 실패 — 동적 검증이 필요한 이유를 확인",
      ],
    }),
    gallery: [],
  },

  {
    id: "pet-travel",
    number: "04",
    title: "GYEONJU TRAVEL",
    subtitle: "견주여행 — 반려견과 함께 떠나는 경주 여행 코스 추천 앱",
    category: "MOBILE APP · PM & FRONTEND",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Kakao Map",
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
    repository: null,
    overview:
      "견주여행은 반려견과 함께 경주를 여행하는 보호자를 위한 모바일 앱입니다. 반려견 정보에 맞춘 여행 코스 추천, 지도, 일정, 도보 경로, 관광지 도착 스탬프 기능이 있습니다. 2026년 6월부터 프론트엔드를 맡아 개발했고, TestFlight 베타 테스트를 거쳐 App Store에 출시했습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "반려견과 여행을 떠나려면 동반 가능한 장소를 일일이 찾아봐야 하고, 반려견의 크기나 성향까지 고려하기는 더 어렵습니다. 경주를 찾는 보호자가 반려견과 함께 갈 수 있는 코스를 한 번에 추천받고, 여행하는 동안의 기록까지 남길 수 있도록 하고자 했습니다.",
      "My Role": [
        "PM — 기획·일정·역할 분담 등 프로젝트 운영 총괄",
        "프론트엔드 단독 개발 — 앱 전체 화면과 사용자 흐름을 React Native(Expo)로 구현 (커밋 116개)",
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
    gallery: [],
  },

  {
    id: "silver-stop",
    number: "05",
    title: "SILVER STOP",
    subtitle: "보행자(노인)를 인식하면 멈추는 AI 자율주행 자동차",
    category: "AUTONOMOUS DRIVING CAMP · 금상",
    technologies: ["Python", "YOLO", "Raspberry Pi", "LiDAR", "Camera"],
    image: "images/silverstop.svg",
    imageAlt:
      "도로 위 자동차와 보행자 인식 박스를 표현한 자율주행 프로젝트 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
    overview:
      "한밭 자율주행 캠프에서 진행한 프로젝트입니다. 라즈베리파이를 탑재한 소형 자율주행 자동차에 카메라와 라이다를 달고, 캠프 실습 코드를 바탕으로 보행자(노인)를 실시간으로 인식하면 스스로 멈추는 기능을 구현했습니다. 캠프에서 금상을 받았습니다.",
    details: projectDetails({
      "Problem & Motivation":
        "고령 보행자는 차량을 피하는 반응이 느려 교통사고에 취약합니다. 차량이 보행자를 인식하면 먼저 멈추도록 만드는 것을 목표로 했습니다.",
      "My Role": [
        "PM — 아이디어 기획, 일정·역할 분담 등 팀 운영 총괄",
        "캠프 실습 코드를 바탕으로 보행자 인식과 정지 동작을 조합해 프로젝트 주제에 맞게 구현",
      ],
      Architecture: [
        "카메라 영상 → YOLO 객체 인식으로 보행자 검출",
        "라이다로 앞 물체와의 거리 측정",
        "보행자가 인식되고 일정 거리 안으로 들어오면 모터를 정지시키는 제어 로직",
        "라즈베리파이에서 인식과 주행 제어를 함께 처리",
      ],
      "Key Features": [
        "카메라 영상 스트림에서 YOLO로 보행자를 실시간 인식",
        "라이다 거리 측정으로 보행자가 가까워지면 차량 정지",
        "보행자가 사라지면 다시 주행",
      ],
      "Challenges & Solutions": [
        "라즈베리파이에서 YOLO 추론이 느려 보행자를 인식해도 정지가 한 박자 늦음 → 입력 해상도를 낮추고 인식 대상을 사람 클래스로 좁혀 반응 속도를 확보",
        "라이다 거리값이 순간적으로 튀어 차량이 불필요하게 멈칫함 → 여러 번 측정한 값을 함께 보고 판단하도록 조정",
        "카메라 인식과 거리 측정이 따로 동작해 판단이 엇갈림 → 보행자 인식과 거리 조건을 모두 만족할 때만 정지하도록 제어 로직을 정리",
      ],
      Results: "한밭 자율주행 캠프에서 금상을 받았습니다.",
    }),
    gallery: [],
  },

  {
    id: "morselingo",
    number: "06",
    title: "MORSELINGO",
    subtitle:
      "눈 깜빡임으로 한글 모스부호를 연습하는 Computer Vision 학습 프로젝트",
    category: "PERSONAL PROJECT · COMPUTER VISION",
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    image: "images/morse.svg",
    imageAlt:
      "눈의 형태와 모스부호 신호를 표현한 Computer Vision 콘셉트 그래픽",
    imageIsPlaceholder: true,
    repository: null,
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
    event: "한밭 자율주행 캠프",
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
