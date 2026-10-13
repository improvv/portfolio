import { Fragment, type PointerEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { assetUrl, type Project } from "../data/portfolio";
import { ScrollReveal, useParallax, type RevealVariant } from "./Motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

export function Reveal({ children, className = "", variant }: RevealProps) {
  const reduced = useReducedMotion();
  // Reduced-motion readers get normal, fully visible document content.
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <ScrollReveal className={className} variant={variant}>
      {children}
    </ScrollReveal>
  );
}

/**
 * Keeps each sentence or comma-separated clause together so lines break
 * only at "." or "," boundaries when they fit, instead of mid-phrase.
 */
export function Phrases({ text }: { text: string }) {
  const parts = text.split(/(?<=[.,!?·])\s+/);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {/* Word joiners keep "A·B" from breaking around the middle dot. */}
          <span className="phrase">{part.replace(/·/g, "\u2060·\u2060")}</span>
          {i < parts.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
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

export function ProjectCard({
  project,
  index,
  status,
}: {
  project: Project;
  index: number;
  status?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, y } = useParallax(40);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 200,
    damping: 20,
  });
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    tiltX.set((event.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((event.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };
  return (
    <Reveal
      className={`project project-${project.number}`}
      variant={index % 2 === 0 ? "left" : "right"}
    >
      <Link
        className="project-link group"
        to={`/projects/${project.id}`}
        aria-label={`${project.title} — 프로젝트 상세 보기`}
      >
        <motion.div
          ref={ref}
          className="project-image"
          style={
            reduced
              ? undefined
              : { rotateX, rotateY, transformPerspective: 900 }
          }
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <motion.img
            style={reduced ? undefined : { y, scale: 1.18 }}
            src={assetUrl(project.image)}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            width="1200"
            height="900"
          />
          <span className="project-index">{project.number}</span>
          <span className="project-arrow">
            <ArrowUpRight aria-hidden="true" />
          </span>
        </motion.div>
        <div className="project-meta">
          <span>{status ?? `WK—${project.number}`}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">
          <Phrases text={project.subtitle} />
        </p>
        <div className="project-bottom">
          <span>{project.technologies.slice(0, 3).join(" / ")}</span>
          <span className="view-link">
            VIEW PROJECT <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
