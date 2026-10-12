import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { assetUrl, type Project } from "../data/portfolio";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: RevealProps) {
  const reduced = useReducedMotion();
  // Reduced-motion readers get normal, fully visible document content.
  if (reduced) return <div className={className}>{children}</div>;
  return <ScrollReveal className={className}>{children}</ScrollReveal>;
}

function ScrollReveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Reversible in either direction; the reading area stays still and opaque.
  // Motion measures layout offsets, so this transform cannot feed back into itself.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.86, 1],
    [0.25, 1, 1, 0.25],
  );
  const y = useTransform(scrollYProgress, [0, 0.14, 0.86, 1], [24, 0, 0, -24]);
  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({
  number,
  title,
  note,
}: {
  number: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-label">
      <span>
        <span className="section-dot" /> {number} / {title}
      </span>
      {note && <span>{note}</span>}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className={`project project-${project.number}`}>
      <Link
        className="project-link group"
        to={`/projects/${project.id}`}
        aria-label={`${project.title} — 프로젝트 상세 보기`}
      >
        <div className="project-image">
          <img
            src={assetUrl(project.image)}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            width="1200"
            height="900"
          />
          <span className="project-index">{project.number}</span>
          <span className="image-caption">
            {project.imageIsPlaceholder
              ? "CONCEPT ART / 콘셉트 이미지"
              : "PROJECT SCREENSHOT"}
          </span>
          <span className="project-arrow">
            <ArrowUpRight aria-hidden="true" />
          </span>
        </div>
        <div className="project-meta">
          <span>WK—{project.number}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.subtitle}</p>
        <div className="project-bottom">
          <span>{project.technologies.join(" / ")}</span>
          <span className="view-link">
            VIEW PROJECT <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
