import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  achievements,
  assetUrl,
  education,
  experiences,
  navigation,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio";
import { ProjectCard, Reveal, SectionLabel } from "./Editorial";

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-edition">
        <span>INDEPENDENT THINKING. PRACTICAL BUILDING.</span>
        <span>VOL. 01 — {profile.year}</span>
      </div>
      <div className="hero-grid">
        <div className="hero-cover">
          <div className="cover-meta">
            <span>COMPUTER ENGINEERING</span>
            <span>대학생 개발자의 기록</span>
          </div>
          <h1 id="hero-heading" tabIndex={-1}>
            <span>JINJEONG</span>
            <span className="surname">
              SEO
              <span className="hero-star" aria-hidden="true">
                ✳
              </span>
              <span className="hero-year">
                20
                <br />
                26
              </span>
            </span>
            <span className="portfolio-line">PORTFOLIO.</span>
          </h1>
          <div className="cover-bottom">
            <p>
              SOFTWARE DEVELOPMENT
              <br />& COMPUTER VISION
            </p>
            <div className="barcode" aria-hidden="true" />
            <span>NO. 001</span>
          </div>
        </div>
        <aside className="hero-index" aria-label="목차">
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
            {navigation.map((item) => (
              <Link key={item.id} to={`/#${item.id}`}>
                <span>{item.number}.</span>
                <span>{item.title}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
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
        </aside>
      </div>
      <div className="hero-foot">
        <p>생각을 코드로, 코드를 경험으로.</p>
        <Link to="/#works">
          EXPLORE THE WORK{" "}
          <ArrowDown className="scroll-arrow" size={16} aria-hidden="true" />
        </Link>
        <span>SCROLL TO DISCOVER</span>
      </div>
    </section>
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
          .ABOUT <span className="red-text">ME</span>
        </h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="portrait-wrap">
          <div className="portrait">
            {profile.portrait ? (
              <img
                src={assetUrl(profile.portrait)}
                alt={`${profile.koreanName} 프로필 사진`}
                loading="lazy"
                width="600"
                height="700"
              />
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
        <Reveal className="about-copy">
          <span className="eyebrow">HELLO, I’M JINJEONG.</span>
          <h3>{profile.introduction}</h3>
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-keywords">
            {profile.keywords.map((keyword, i) => (
              <div key={keyword}>
                <span>0{i + 1}</span>
                {keyword}
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            ))}
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
          .EXPERIENCE
        </h2>
      </Reveal>
      <div className="experience-grid">
        <Reveal className="experience-statement">
          <span>
            BETWEEN
            <br />
            <span className="red-text">PEOPLE</span>
            <br />& CODE.
          </span>
          <p>
            기술을 이해하고, 사람과 연결하며,
            <br />
            함께 결과를 만들어 갑니다.
          </p>
          <ArrowDownRight size={74} strokeWidth={1} aria-hidden="true" />
        </Reveal>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal key={experience.organization}>
              <article className="experience-item">
                <div className="experience-date">
                  <span>EXP. 0{index + 1}</span>
                  <span>{experience.period}</span>
                </div>
                <h3>{experience.organization}</h3>
                <h4>{experience.role}</h4>
                <p>{experience.description}</p>
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
        number="04"
        title="SELECTED WORKS"
        note="FOUR PROJECTS. DIFFERENT PERSPECTIVES."
      />
      <Reveal className="works-heading-row">
        <h2 id="works-heading" className="section-heading">
          .SELECTED
          <br />
          <span className="red-text">WORKS</span>
          <sup>(04)</sup>
        </h2>
        <div className="works-intro">
          <ArrowDownRight size={58} strokeWidth={1.25} aria-hidden="true" />
          <p>
            아이디어가 실제 경험이 되기까지.
            <br />
            직접 만들고, 부딪히고, 배운 프로젝트들.
          </p>
          <span>2026 PORTFOLIO / PROJECT ARCHIVE</span>
        </div>
      </Reveal>
      <div className="works-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
        number="05"
        title="EDUCATION"
        note="FOUNDATIONS FOR WHAT’S NEXT"
      />
      <div className="education-grid">
        <Reveal className="education-heading-block">
          <h2 id="education-heading" className="section-heading">
            .EDUCATION
          </h2>
          <div className="education-symbol" aria-hidden="true">
            ↗
          </div>
        </Reveal>
        <Reveal className="education-details">
          <span className="eyebrow">ACADEMIC BACKGROUND</span>
          <h3>{education.institution}</h3>
          <p className="education-major">{education.major}</p>
          <p>{education.description}</p>
          {education.period && <p>{education.period}</p>}
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
            <span>
              {education.certificates.length
                ? education.certificates.join(" · ")
                : "자격증 정보 추가 예정"}
            </span>
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
        number="06"
        title="TECHNICAL SKILLS"
        note="TOOLS TO TURN IDEAS INTO REALITY"
      />
      <Reveal>
        <h2 id="skills-heading" className="section-heading">
          .TECHNICAL <span className="red-text">SKILLS</span>
        </h2>
        <p className="skills-note">
          숫자보다, 무엇을 만들었는지로 이야기합니다.
        </p>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category}>
            <article className="skill-group">
              <div className="skill-group-heading">
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <h4>{skill.name}</h4>
                  <div>
                    {skill.projects.length ? (
                      skill.projects.map((id) => {
                        const project = projects.find((item) => item.id === id);
                        return project ? (
                          <Link key={id} to={`/projects/${id}`}>
                            WK—{project.number} / {project.title}
                            <ArrowUpRight size={13} aria-hidden="true" />
                          </Link>
                        ) : null;
                      })
                    ) : (
                      <span className="skill-pending">활용 기록 추가 예정</span>
                    )}
                  </div>
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
        number="07"
        title="ACHIEVEMENTS & ACTIVITIES"
        note="BEYOND THE CODE"
      />
      <Reveal>
        <h2 id="activities-heading" className="section-heading">
          .MORE TO
          <br />
          <span className="red-text">THE STORY.</span>
        </h2>
      </Reveal>
      {achievements.length ? (
        <div className="activity-list">
          {achievements.map((item) => (
            <article key={`${item.date}-${item.title}`}>
              <span>
                {item.date} / {item.organization}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      ) : (
        <Reveal className="activities-empty">
          <span className="empty-mark" aria-hidden="true">
            [ + ]
          </span>
          <div>
            <h3>THE ARCHIVE IS GROWING.</h3>
            <p>
              수상, 공모전, 대외활동의 기록을 정리하고 있습니다.
              <br />
              확인된 활동부터 차근차근 채워 나갈 공간입니다.
            </p>
          </div>
          <span className="eyebrow">
            NEXT CHAPTER
            <br />
            COMING SOON
          </span>
        </Reveal>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Works />
      <Education />
      <Skills />
      <Activities />
    </>
  );
}
