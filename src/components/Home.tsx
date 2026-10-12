import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
  Guitar,
  HandHeart,
  Lightbulb,
  Mountain,
  Newspaper,
  Plane,
  TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
  type Variants,
} from "motion/react";
import {
  achievements,
  archive,
  assetUrl,
  beyondCode,
  research,
  education,
  experiences,
  navigation,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio";
import { Phrases, ProjectCard, Reveal, SectionLabel } from "./Editorial";
import { ScrollLine, SplitText, VelocityMarquee } from "./Motion";

const rise: Variants = {
  hidden: { y: 120, opacity: 0, rotate: 3 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15 + i * 0.12,
    },
  }),
};

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });
  const firstX = useTransform(p, [0, 1], ["0%", "-22%"]);
  const surnameX = useTransform(p, [0, 1], ["0%", "18%"]);
  const lineScale = useTransform(p, [0, 1], [1, 0.86]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [0, 540]);
  const indexY = useTransform(p, [0, 1], [0, 160]);
  const coverOpacity = useTransform(p, [0, 0.9], [1, 0.2]);
  const animate = reduced ? undefined : "show";
  return (
    <section id="top" ref={ref} className="hero" aria-labelledby="hero-heading">
      <div className="hero-edition">
        <span>INDEPENDENT THINKING. PRACTICAL BUILDING.</span>
        <span>VOL. 01 — {profile.year}</span>
      </div>
      <div className="hero-grid">
        <motion.div className="hero-cover" style={{ opacity: coverOpacity }}>
          <div className="cover-meta">
            <span>COMPUTER ENGINEERING</span>
            <span>한밭대학교 컴퓨터공학과</span>
          </div>
          <h1 id="hero-heading" tabIndex={-1}>
            <motion.span
              style={{ x: firstX }}
              variants={rise}
              custom={0}
              initial={reduced ? false : "hidden"}
              animate={animate}
            >
              JINJEONG
            </motion.span>
            <motion.span
              className="surname"
              style={{ x: surnameX }}
              variants={rise}
              custom={1}
              initial={reduced ? false : "hidden"}
              animate={animate}
            >
              SEO
              <motion.span
                className="hero-star"
                aria-hidden="true"
                style={{ rotate: starRotate }}
                whileHover={{ scale: 1.3, rotate: 90 }}
              >
                ✳
              </motion.span>
              <span className="hero-year">
                20
                <br />
                26
              </span>
            </motion.span>
            <motion.span
              className="portfolio-line"
              style={{ scaleX: lineScale, originX: 0 }}
              initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5,
              }}
            >
              PORTFOLIO.
            </motion.span>
          </h1>
          <div className="cover-bottom">
            <p>
              COMPUTER VISION
              <br />& SOFTWARE DEVELOPMENT
            </p>
            <div className="barcode" aria-hidden="true" />
            <span>NO. 001</span>
          </div>
        </motion.div>
        <motion.aside
          className="hero-index"
          aria-label="목차"
          style={{ y: indexY }}
          initial={reduced ? false : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          <div className="index-top">
            <span>
              AN INDEX OF
              <br />
              IDEAS & EXPERIENCE
            </span>
            <ArrowDownRight size={40} strokeWidth={1.3} aria-hidden="true" />
          </div>
          <h2>
            TABLE OF
            <br />
            CON<span className="cream-text">TENTS.</span>
          </h2>
          <nav aria-label="섹션 목차">
            {navigation.map((item, i) => (
              <motion.div
                key={item.id}
                initial={reduced ? false : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.5 }}
                whileHover={{ x: 8 }}
              >
                <Link to={`/#${item.id}`}>
                  <span>{item.number}.</span>
                  <span>{item.title}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="index-footer">
            <span>
              FROM CURIOSITY
              <br />
              TO CREATION.
            </span>
            <span className="index-mark" aria-hidden="true">
              ↗
            </span>
          </div>
        </motion.aside>
      </div>
      <div className="hero-foot">
        {/* Empty cell keeps the link and caption in place. */}
        <span aria-hidden="true" />
        <Link to="/#works">
          EXPLORE THE WORK{" "}
          <ArrowDown className="scroll-arrow" size={16} aria-hidden="true" />
        </Link>
        <span>SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
}

function Portrait({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const wordY = useTransform(p, [0, 1], ["35%", "-35%"]);
  const sunY = useTransform(p, [0, 1], [60, -60]);
  const sunScale = useTransform(p, [0, 0.5, 1], [0.7, 1, 0.85]);
  const personY = useTransform(p, [0, 1], [30, -10]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [-90, 270]);
  return (
    <div ref={ref} className="portrait-art">
      <div className="portrait-halftone" aria-hidden="true" />
      <motion.span
        className="portrait-word"
        aria-hidden="true"
        style={{ y: wordY }}
      >
        SEO
      </motion.span>
      <motion.span
        className="portrait-sun"
        aria-hidden="true"
        style={{ y: sunY, scale: sunScale }}
      />
      <motion.span
        className="portrait-star"
        aria-hidden="true"
        style={{ rotate: starRotate }}
      >
        ✳
      </motion.span>
      <motion.img
        src={src}
        alt={`${profile.koreanName} 프로필 사진`}
        loading="lazy"
        decoding="async"
        width="800"
        height="1067"
        style={{ y: personY }}
      />
      <span className="portrait-cross top" aria-hidden="true">
        +
      </span>
      <span className="portrait-stamp" aria-hidden="true">
        COVER
        <br />
        STORY
      </span>
    </div>
  );
}

const beyondIcons = {
  press: Newspaper,
  band: Guitar,
  mentor: HandHeart,
  study: GraduationCap,
  travel: Plane,
};

// Decorative icons for the three values in profile.keywords.
const keywordIcons = [TrendingUp, Lightbulb, Mountain];

function StudentCard() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 18,
  });
  const shineX = useTransform(tiltX, [-0.5, 0.5], ["0%", "100%"]);
  return (
    <motion.div
      className="student-card"
      aria-label={`${profile.koreanName} 학생증 — ${profile.university} ${profile.major}`}
      role="img"
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        tiltX.set((event.clientX - rect.left) / rect.width - 0.5);
        tiltY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        tiltX.set(0);
        tiltY.set(0);
      }}
    >
      <div className="card-top">
        <span>STUDENT ID</span>
        <span>HANBAT NAT’L UNIV.</span>
      </div>
      <div className="card-body">
        <div className="card-photo">
          {profile.portrait && (
            <img src={assetUrl(profile.portrait)} alt="" loading="lazy" />
          )}
        </div>
        <dl>
          <div>
            <dt>NAME</dt>
            <dd>
              {profile.koreanName}
              <small>{profile.name}</small>
            </dd>
          </div>
          <div>
            <dt>MAJOR</dt>
            <dd>{profile.major}</dd>
          </div>
          <div>
            <dt>CLASS OF</dt>
            <dd className="card-year">2027</dd>
          </div>
        </dl>
      </div>
      <div className="card-bottom">
        <div className="barcode" aria-hidden="true" />
        <span>COMPUTER ENGINEERING</span>
      </div>
      <motion.span
        className="card-shine"
        aria-hidden="true"
        style={{ left: shineX }}
      />
    </motion.div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="about section-pad"
      aria-labelledby="about-heading"
    >
      <SectionLabel
        number="02"
        title="THE PERSON BEHIND THE CODE"
        note="A LITTLE ABOUT ME"
      />
      <Reveal>
        <h2 id="about-heading" className="section-heading">
          <SplitText text=".ABOUT" />{" "}
          <SplitText text="ME" className="red-text" delay={0.2} />
        </h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="portrait-wrap" variant="left">
          <div className="portrait">
            {profile.portrait ? (
              <Portrait src={assetUrl(profile.portrait)} />
            ) : (
              <>
                <div className="portrait-grid" aria-hidden="true">
                  <span className="portrait-initial">JS.</span>
                  <span className="portrait-cross top">+</span>
                  <span className="portrait-cross bottom">+</span>
                </div>
                <span className="portrait-note">
                  PORTRAIT
                  <br />
                  COMING SOON
                </span>
              </>
            )}
          </div>
          <div className="portrait-caption">
            <span>FIG. 01 — {profile.koreanName}</span>
            <span>{profile.university}</span>
          </div>
        </Reveal>
        <Reveal className="about-copy" variant="right">
          <span className="eyebrow">HELLO, I’M JINJEONG.</span>
          <h3>
            <Phrases text={profile.introduction} />
          </h3>
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <Phrases text={paragraph} />
            </p>
          ))}
          <div className="about-keywords">
            {profile.keywords.map((keyword, i) => {
              const Icon = keywordIcons[i] ?? Mountain;
              return (
                <div key={keyword}>
                  <span>0{i + 1}</span>
                  {keyword}
                  <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </Reveal>
        <span className="vertical-note" aria-hidden="true">
          CURIOUS MIND. BUILDER’S HANDS.
        </span>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="experience section-pad"
      aria-labelledby="experience-heading"
    >
      <SectionLabel
        number="03"
        title="EXPERIENCE"
        note="LEARNING IN THE REAL WORLD"
      />
      <Reveal>
        <h2 id="experience-heading" className="section-heading">
          <SplitText text=".EXPERIENCE" />
        </h2>
      </Reveal>
      <div className="experience-grid">
        <Reveal className="experience-statement" variant="zoom">
          <span>
            BETWEEN
            <br />
            <span className="red-text">PEOPLE</span>
            <br />& CODE.
          </span>
          <p>
            인턴십과 동아리 운영,
            <br />
            대외활동 경험입니다.
          </p>
          <ArrowDownRight size={74} strokeWidth={1} aria-hidden="true" />
        </Reveal>
        <div className="timeline">
          <ScrollLine className="timeline-line" />
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.organization}
              variant={index % 2 === 0 ? "right" : "up"}
            >
              <article className="experience-item">
                <div className="experience-date">
                  <span>EXP. 0{index + 1}</span>
                  <span>{experience.period}</span>
                </div>
                <h3>{experience.organization}</h3>
                <h4>{experience.role}</h4>
                <p>
                  <Phrases text={experience.description} />
                </p>
                <div className="tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="beyond-code">
        <Reveal className="beyond-heading" variant="left">
          <span className="eyebrow">BEYOND CODE / 개발 외 활동</span>
          <h3>
            OFF THE
            <br />
            <span className="red-text">KEYBOARD.</span>
          </h3>
          <div className="stamp-sheet" aria-hidden="true">
            {beyondCode.map((item, i) => (
              <motion.span
                key={item.title}
                className={`passport-stamp stamp-${i + 1}`}
                initial={{ scale: 1.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 14,
                  delay: 0.15 + i * 0.12,
                }}
                whileHover={{ scale: 1.08, rotate: 0 }}
              >
                <strong>{item.stamp}</strong>
                <small>{item.period}</small>
              </motion.span>
            ))}
          </div>
        </Reveal>
        <div className="beyond-list">
          {beyondCode.map((item, index) => {
            const Icon = beyondIcons[item.icon];
            return (
              <Reveal key={item.title} variant={index % 2 ? "right" : "up"}>
                <motion.article
                  className="beyond-item"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="beyond-top">
                    <span className="beyond-icon">
                      <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="beyond-period">{item.period}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p className="beyond-role">{item.role}</p>
                  {item.points.length > 0 && (
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>
                          <Phrases text={point} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.articles && (
                    <div className="beyond-articles">
                      <span className="eyebrow">BYLINE ARTICLES</span>
                      {item.articles.map((article) => (
                        <div className="article-clip" key={article.title}>
                          <span className="article-meta">
                            {article.section} · {article.year}
                          </span>
                          <strong>{article.title}</strong>
                          <small>
                            <Phrases text={article.summary} />
                          </small>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section
      id="research"
      className="research section-pad"
      aria-labelledby="research-heading"
    >
      <SectionLabel
        number="04"
        title="RESEARCH"
        note="QUESTIONS WORTH ASKING"
      />
      <Reveal>
        <h2 id="research-heading" className="section-heading">
          <SplitText text=".RESEARCH" />{" "}
          <SplitText text="NOTES" className="red-text" delay={0.25} />
        </h2>
        <p className="research-note">
          전공 수업 팀프로젝트로 진행 중인 연구입니다.
        </p>
      </Reveal>
      <div className="research-list">
        {research.map((item, index) => (
          <Reveal key={item.title} variant="zoom">
            <article className="research-paper">
              <div className="paper-head">
                <span>PAPER NO. 0{index + 1}</span>
                <span>{item.period}</span>
                {item.inProgress && (
                  <span className="status-badge">IN PROGRESS</span>
                )}
              </div>
              <h3>
                <Phrases text={item.title} />
              </h3>
              <dl className="paper-meta">
                <div>
                  <dt>ABSTRACT</dt>
                  <dd>
                    <Phrases text={item.summary} />
                  </dd>
                </div>
                <div>
                  <dt>COURSE</dt>
                  <dd>{item.course}</dd>
                </div>
                <div>
                  <dt>ADVISOR</dt>
                  <dd>{item.advisor}</dd>
                </div>
              </dl>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Works() {
  return (
    <section
      id="works"
      className="works section-pad"
      aria-labelledby="works-heading"
    >
      <SectionLabel
        number="05"
        title="SELECTED WORKS"
        note={`${projects.length} PROJECTS. DIFFERENT PERSPECTIVES.`}
      />
      <Reveal className="works-heading-row">
        <h2 id="works-heading" className="section-heading">
          <SplitText text=".SELECTED" />
          <br />
          <SplitText text="WORKS" className="red-text" delay={0.25} />
          <sup>({String(projects.length).padStart(2, "0")})</sup>
        </h2>
        <div className="works-intro">
          <ArrowDownRight size={58} strokeWidth={1.25} aria-hidden="true" />
          <p>
            캡스톤, 수업, 개인 프로젝트로
            <br />
            만든 작업물입니다.
          </p>
          <span>2026 PORTFOLIO / PROJECT ARCHIVE</span>
        </div>
      </Reveal>
      <div className="works-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="works-end">
        <span>FROM PROJECTS TO PRACTICE</span>
        <span>THE LEARNING CONTINUES ↓</span>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="education section-pad"
      aria-labelledby="education-heading"
    >
      <SectionLabel
        number="06"
        title="EDUCATION"
        note="FOUNDATIONS FOR WHAT’S NEXT"
      />
      <div className="education-grid">
        <div className="education-aside">
          <Reveal className="education-heading-block" variant="left">
            <h2 id="education-heading" className="section-heading">
              <SplitText text=".EDUCATION" />
            </h2>
            <div className="education-symbol" aria-hidden="true">
              ↗
            </div>
          </Reveal>
          <Reveal variant="left">
            <StudentCard />
          </Reveal>
        </div>
        <Reveal className="education-details" variant="right">
          <span className="eyebrow">ACADEMIC BACKGROUND</span>
          <h3>{education.institution}</h3>
          <p className="education-major">{education.major}</p>
          <p>
            <Phrases text={education.description} />
          </p>
          {education.period && <p>{education.period}</p>}
          {(education.graduation || education.gpa) && (
            <dl className="education-facts">
              {education.graduation && (
                <div>
                  <dt>GRADUATION</dt>
                  <dd>{education.graduation} 졸업 예정</dd>
                </div>
              )}
              {education.gpa && (
                <div>
                  <dt>GPA</dt>
                  <dd>{education.gpa}</dd>
                </div>
              )}
            </dl>
          )}
          <div className="study-areas">
            <span className="eyebrow">AREAS OF INTEREST</span>
            {education.subjects.map((subject, i) => (
              <div key={subject}>
                <span>0{i + 1}</span>
                {subject}
              </div>
            ))}
          </div>
          <div className="certificate-line">
            <span>CERTIFICATIONS</span>
            {education.certificates.length ? (
              <ul className="certificate-list">
                {education.certificates.map((certificate) => (
                  <li key={certificate}>{certificate}</li>
                ))}
              </ul>
            ) : (
              <span>자격증 정보 추가 예정</span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="skills section-pad"
      aria-labelledby="skills-heading"
    >
      <SectionLabel
        number="07"
        title="TECHNICAL SKILLS"
        note="TOOLS TO TURN IDEAS INTO REALITY"
      />
      <Reveal>
        <h2 id="skills-heading" className="section-heading">
          <SplitText text=".TECHNICAL" />{" "}
          <SplitText text="SKILLS" className="red-text" delay={0.3} />
        </h2>
        <p className="skills-note">기술마다 사용한 프로젝트를 연결했습니다.</p>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} variant={index === 1 ? "up" : "zoom"}>
            <article className="skill-group">
              <div className="skill-group-heading">
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <h4>
                    {skill.url ? (
                      <a
                        className="skill-link"
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {skill.name}
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      skill.name
                    )}
                  </h4>
                  {skill.projects.length > 0 && (
                    <div>
                      {skill.projects.map((id) => {
                        const project = projects.find((item) => item.id === id);
                        return project ? (
                          <Link key={id} to={`/projects/${id}`}>
                            WK—{project.number} / {project.title}
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </Link>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              ))}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section
      id="activities"
      className="activities section-pad"
      aria-labelledby="activities-heading"
    >
      <SectionLabel
        number="08"
        title="AWARDS & ARCHIVE"
        note="BEYOND THE CLASSROOM"
      />
      <Reveal>
        <h2 id="activities-heading" className="section-heading">
          <SplitText text=".MORE TO" />
          <br />
          <SplitText text="THE STORY." className="red-text" delay={0.25} />
        </h2>
      </Reveal>
      <div className="awards">
        <span className="eyebrow">AWARDS & RESULTS</span>
        {achievements.map((item) => {
          const project = item.project
            ? projects.find((p) => p.id === item.project)
            : undefined;
          return (
            <Reveal key={`${item.date}-${item.title}`} variant="up">
              <article className="award-row">
                <span className="award-date">{item.date}</span>
                <div className="award-main">
                  <span className="award-event">{item.event}</span>
                  <h3>
                    {project ? (
                      <Link to={`/projects/${project.id}`}>
                        {item.title}
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.description && (
                    <p>
                      <Phrases text={item.description} />
                    </p>
                  )}
                </div>
                <span className="award-result">{item.result}</span>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Archive />
    </section>
  );
}

// Only show filters that have at least one item.
const archiveTags = [
  "ALL",
  ...["HACKATHON", "CONTEST", "LIVING LAB", "PROJECT"].filter((tag) =>
    archive.some((item) => item.tag === tag),
  ),
];

function Archive() {
  const [open, setOpen] = useState(false);
  const [tag, setTag] = useState("ALL");
  const items = archive.filter((item) => tag === "ALL" || item.tag === tag);
  const years = [...new Set(items.map((item) => item.year))];
  return (
    <div className="archive">
      <button
        type="button"
        className="archive-toggle"
        aria-expanded={open}
        aria-controls="archive-panel"
        onClick={() => setOpen(!open)}
      >
        <span>
          전체 활동 기록 {open ? "접기" : "보기"}{" "}
          <span className="archive-count">({archive.length})</span>
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="archive-panel"
            className="archive-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="archive-filters" role="group" aria-label="분류">
              {archiveTags.map((name) => (
                <button
                  type="button"
                  key={name}
                  aria-pressed={tag === name}
                  onClick={() => setTag(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            {years.map((year) => (
              <div className="archive-year" key={year}>
                <span className="archive-year-label">{year}</span>
                <ul>
                  {items
                    .filter((item) => item.year === year)
                    .map((item) => (
                      <motion.li
                        layout
                        key={item.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span className="archive-date">{item.date}</span>
                        <span className="archive-title">
                          {item.title}
                          {item.note && <small>{item.note}</small>}
                        </span>
                        <span className="archive-tag">
                          {item.inProgress ? "IN PROGRESS · " : ""}
                          {item.tag}
                        </span>
                      </motion.li>
                    ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <VelocityMarquee
        items={["COMPUTER VISION", "SOFTWARE DEVELOPMENT", "PORTFOLIO 2026"]}
      />
      <About />
      <Experience />
      <ResearchSection />
      <VelocityMarquee
        tone="red"
        baseVelocity={-3}
        items={[
          "SELECTED WORKS",
          "IDEAS INTO PRODUCTS",
          "BUILD · BREAK · LEARN",
        ]}
      />
      <Works />
      <Education />
      <Skills />
      <Activities />
      <VelocityMarquee
        items={["LET’S MAKE CONTACT", "THE NEXT CHAPTER", "JINJEONG SEO"]}
      />
    </>
  );
}
