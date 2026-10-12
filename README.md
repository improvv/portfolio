# JINJEONG SEO — Portfolio 2026

레트로 잡지 편집 디자인을 적용한 개인 개발자 포트폴리오입니다. 크림 `#F5EBD3`, 레드 `#DC382B`, 블랙 `#171717`, 그레이 `#8B887F`와 Anton 대문자 제목, Noto Sans KR 본문을 사용합니다. 폰트는 npm 패키지로 자체 호스팅합니다.

## 로컬 실행

Node.js **22.12 이상**(22 LTS 권장)이 필요합니다.

```bash
cd /Users/jinjeong/portfolio-2026
npm ci
npm run dev
```

터미널에 표시되는 주소(기본 `http://127.0.0.1:5173`)를 엽니다.

```bash
npm run typecheck  # TypeScript 검사
npm run build      # 타입 검사 + dist/ 생성
npm run preview    # 빌드 결과 확인
npm run format     # 소스 코드 포맷 정리
```

## 구성

```text
src/
  data/portfolio.ts          # 프로필, 프로젝트, 경력, 기술, 학력, 활동, 연락처
  components/
    Header.tsx              # PC / 모바일 메뉴
    Home.tsx                # Hero 및 7개 본문 섹션
    ProjectDetail.tsx       # 프로젝트 상세 / 없는 페이지
    Editorial.tsx           # 스크롤 등장, 섹션 메타, 프로젝트 카드
    Motion.tsx              # 스크롤 방향·진행 바·마퀴·글자 분할 등 모션 유틸
    Contact.tsx             # 연락처 및 푸터
  App.tsx                   # HashRouter 경로, 페이지 전환, 스크롤/포커스
  styles.css                # 반응형 에디토리얼 그리드와 디자인 토큰
public/images/              # 교체 가능한 SVG 콘셉트 이미지
.github/workflows/deploy.yml
```

React / TypeScript / Vite 8 / Tailwind CSS 4 / Motion / Lucide React / React Router를 사용합니다. 재사용 스타일은 CSS에, 색상·유틸리티는 Tailwind의 `@theme`에 정의했습니다.

## 내용 업데이트

`src/data/portfolio.ts`를 편집합니다. 제공되지 않은 사실은 만들어 넣지 않았습니다.

- `profile`: 소개, 이름, 키워드. `portrait`는 `images/profile.webp`(배경 투명 PNG를 WebP로 변환)이며, 레이어 배경과 함께 표시됩니다.
- `experiences`: 기간, 조직, 역할, 활동, 태그. LIKELION 활동 기간은 미입력 상태입니다.
- `projects`: 프로젝트명, 설명, 기술, 대표 이미지, 상세 내용, 갤러리, 저장소 URL.
- `education`: 재학 기간, 학습 분야, 자격증. 아직 모르는 값은 `null` 또는 빈 배열로 둡니다.
- `skillGroups`: 기술 카테고리와 프로젝트 연결. `projects`에는 실제 사용이 확인된 프로젝트 ID만 넣습니다. 빈 배열이면 활용 기록 추가 예정으로 표시됩니다.
- `achievements`: 빈 배열이면 중립적인 기록 준비 중 레이아웃이 표시됩니다. 확인된 내용만 추가합니다.
- `contacts`: URL이 `null`이면 클릭되지 않는 추가 예정 상태로 표시됩니다. 이메일은 `mailto:실제주소` 형식입니다.

활동 데이터 예시(실제 활동 확인 후 입력):

```ts
{ title: '확인된 활동명', date: 'YYYY.MM', organization: '주관 기관', description: '직접 수행한 활동과 확인 가능한 결과' }
```

### 프로젝트 이미지 교체

1. 압축된 WebP/AVIF/JPEG 스크린샷을 `public/images/`에 넣습니다. 대표 이미지 가로 1200~1600px, 300KB 이하를 권장합니다.
2. 해당 프로젝트의 `image`와 `imageAlt`를 수정합니다.
3. 실제 화면으로 교체하면 `imageIsPlaceholder: false`로 변경합니다.
4. `gallery`에 `{ src: 'images/detail.webp', alt: '화면의 의미를 설명하는 대체 텍스트', caption: '설명' }`를 추가합니다.
5. 상세 `details`의 동기·역할·아키텍처·기능·문제 해결·결과 내용을 실제 구현 근거로 수정합니다. `repository`에 공개 가능한 GitHub 주소를 넣습니다.

현재 4개 SVG는 직접 제작한 주제별 콘셉트 그래픽이며 실제 앱 화면이 아닙니다. 페이지에도 이를 명시합니다. 성능 수치, 수상 내역, 연락처, 팀 역할은 임의 생성하지 않았습니다.

## GitHub Pages 배포

1. 코드를 `main` 브랜치에 push합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source: GitHub Actions**를 선택합니다.
3. `main`에 push하거나 **Actions → Deploy portfolio to GitHub Pages → Run workflow**를 실행합니다.
4. 성공하면 워크플로의 `github-pages` 환경에 배포 주소가 표시됩니다.

Vite `base`는 기본 `./`입니다. 빌드 에셋·폰트·이미지가 상대 경로를 사용해 사용자 사이트와 `/저장소이름/` 프로젝트 사이트 모두 지원합니다. 특정 절대 경로가 필요하면 `VITE_BASE_PATH=/저장소이름/ npm run build`를 사용합니다.

상세 페이지는 `/#/projects/morselingo` 형태의 **HashRouter**를 사용합니다. GitHub Pages에 별도 서버 리라이트나 `404.html` 우회 없이 상세 URL 직접 접근과 새로고침이 가능합니다. 홈 내부 앵커는 `/#/#works` 형태이며 Router의 location hash로 처리됩니다.

원격 저장소: [improvv/portfolio](https://github.com/improvv/portfolio)

## 접근성 및 인터랙션

- 키보드로 사용할 수 있는 링크, 모바일 메뉴, 본문 건너뛰기, 포커스 표시.
- Motion `useScroll` / `useTransform`으로 스크롤 위치에 연동된 반복 애니메이션. 위아래 어느 방향으로 재진입해도 위치·투명도가 되돌아가며, 화면 중앙에서는 정지합니다.
- 스크롤 방향 인식: 제목 글자는 스크롤해 온 쪽에서 들어오고 진행 방향으로 빠져나가며, 우하단 섹션 표시기 화살표가 방향에 따라 뒤집힙니다.
- 히어로 패럴랙스(이름 좌우 분리, ✳ 회전, 목차 지연 이동), 상단 스크롤 진행 바.
- 스크롤 속도에 따라 빨라지고 방향이 바뀌는 마퀴 띠, 프로젝트 이미지 패럴랙스와 마우스 3D 틸트, 경력 타임라인 라인 드로잉, 커스텀 커서(마우스 환경).
- 크림색 지면을 전체에 유지하고 검정·빨강은 콘텐츠 내부에 적용해 섹션 경계를 자연스럽게 연결합니다.
- 페이지 전환, 이미지 호버, CSS 부드러운 앵커 스크롤.
- `prefers-reduced-motion`이면 움직임과 스무스 스크롤 최소화.
- 이미지 크기 지정, 홈 대표 이미지 lazy loading, 상세 대표 이미지 우선 로드.
- 700px / 1000px 반응형 분기, 작은 화면에서 한 열로 재구성.
- 기본 SEO 메타 및 상세 페이지별 문서 제목. HashRouter의 페이지별 검색 인덱싱에는 한계가 있습니다. 공개 도메인 확정 후 canonical과 절대 경로 OG 이미지를 추가할 수 있습니다.

## 검증 기록

- TypeScript 검사 및 프로덕션 빌드.
- Safari에서 홈, 모바일 메뉴 열기/닫기, 프로젝트 상세 진입, 목록 복귀, 상세 앵커 이동, 상세 URL 직접 접근 확인.
- 브라우저 iframe 기반 320 / 390 / 768 / 1280px 홈 레이아웃 검사: 가로 넘침 없음. 390px 상세 화면도 가로 넘침 없음.
- 데스크톱 표지·프로젝트 그리드·상세, 모바일 표지·상세 화면 시각 검토.
- 실제 모바일 기기 터치 검증과 원격 GitHub Actions 실행은 수행하지 않았습니다.

참고 문서: [Vite GitHub Pages 배포](https://vite.dev/guide/static-deploy.html#github-pages), [Motion 접근성](https://motion.dev/docs/react-accessibility), [Tailwind Vite 설치](https://tailwindcss.com/docs/installation/using-vite).
