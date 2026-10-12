import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { assetUrl, projects } from "../data/portfolio";
import { Phrases, Reveal, SectionLabel } from "./Editorial";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);
  if (!project)
    return (
      <section className="not-found section-pad">
        <span className="eyebrow">404 / PROJECT NOT FOUND</span>
        <h1 tabIndex={-1}>PAGE NOT FOUND.</h1>
        <p>요청한 프로젝트를 찾을 수 없습니다.</p>
        <Link to="/#works" className="text-link">
          프로젝트 목록으로 돌아가기 <ArrowUpRight size={18} />
        </Link>
      </section>
    );
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="project-detail section-pad">
      <Link className="back-link" to="/#works">
        <ArrowLeft size={16} aria-hidden="true" /> BACK TO SELECTED WORKS
      </Link>
      <SectionLabel
        number={project.number}
        title="PROJECT FILE"
        note={project.category}
      />
      <div className="detail-title-row">
        <h1 className="detail-title" tabIndex={-1}>
          {project.title}
          <span className="red-text">.</span>
        </h1>
        {project.logo && (
          <img
            className={`detail-logo${project.logo.appIcon ? " app-icon" : ""}`}
            src={assetUrl(project.logo.src)}
            alt={project.logo.alt}
            width="360"
            height="360"
          />
        )}
      </div>
      <div className="detail-subtitle">
        <p>
          <Phrases text={project.subtitle} />
        </p>
        {project.storeLink ? (
          <a
            className="store-badge"
            href={project.storeLink.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            ON THE APP STORE <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <span>WK—{project.number} / 2026 PORTFOLIO</span>
        )}
      </div>
      <figure className="detail-cover">
        <img
          src={assetUrl(project.image)}
          alt={project.imageAlt}
          width="1200"
          height="900"
          fetchPriority="high"
        />
        {!project.imageIsPlaceholder && (
          <figcaption>{project.imageAlt}</figcaption>
        )}
      </figure>
      <div className="detail-body">
        <aside className="detail-sidebar">
          <span className="eyebrow">IN THIS PROJECT</span>
          <nav aria-label="프로젝트 상세 목차">
            {[
              "Overview",
              "Problem & Motivation",
              "My Role",
              "Tech Stack",
              "Architecture",
              "Key Features",
              "Challenges & Solutions",
              "Results",
              ...(project.gallery.length ? ["Gallery"] : []),
              ...(project.storeLink ? ["Download"] : []),
              ...(project.repository ? ["GitHub Repository"] : []),
            ].map((title, i) => (
              <Link
                to={`#detail-${title.toLowerCase().replaceAll(" ", "-")}`}
                key={title}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {title}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="detail-content">
          <section id="detail-overview">
            <h2>Overview</h2>
            <p>
              <Phrases text={project.overview} />
            </p>
          </section>
          {project.details.slice(0, 2).map((item) => (
            <DetailSection key={item.title} {...item} />
          ))}
          <section id="detail-tech-stack">
            <h2>Tech Stack</h2>
            <div className="detail-tags">
              {project.technologies.length ? (
                project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))
              ) : (
                <p className="pending-copy">기술 스택 추가 예정</p>
              )}
            </div>
          </section>
          {project.details.slice(2).map((item) => (
            <DetailSection key={item.title} {...item} />
          ))}
          {project.gallery.length > 0 && (
            <section id="detail-gallery">
              <h2>Gallery</h2>
              <div className="gallery">
                {project.gallery.map((item) => (
                  <figure key={item.src}>
                    <img
                      src={assetUrl(item.src)}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="800"
                    />
                    <figcaption>
                      <Phrases text={item.caption} />
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
          {project.storeLink && (
            <section id="detail-download">
              <h2>Download</h2>
              <a
                className="repository-link"
                href={project.storeLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.storeLink.label}{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </section>
          )}
          {project.repository && (
            <section id="detail-github-repository">
              <h2>GitHub Repository</h2>
              <a
                className="repository-link"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW SOURCE CODE <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </section>
          )}
        </div>
      </div>
      <Link className="next-project" to={`/projects/${nextProject.id}`}>
        <span className="eyebrow">NEXT PROJECT / WK—{nextProject.number}</span>
        <span>
          {nextProject.title}
          <ArrowUpRight aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}

function DetailSection({
  title,
  text,
}: {
  title: string;
  text: string | string[];
}) {
  return (
    <section id={`detail-${title.toLowerCase().replaceAll(" ", "-")}`}>
      <Reveal>
        <h2>{title}</h2>
        {Array.isArray(text) ? (
          <ul className="detail-list">
            {text.map((item) => (
              <li key={item}>
                <Phrases text={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <Phrases text={text} />
          </p>
        )}
      </Reveal>
    </section>
  );
}
