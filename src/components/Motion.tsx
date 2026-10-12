import {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { navigation } from "../data/portfolio";

/* ---------- Scroll direction ---------- */

type Direction = 1 | -1;
const DirectionContext = createContext<Direction>(1);

export function ScrollDirectionProvider({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState<Direction>(1);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - (scrollY.getPrevious() ?? latest);
    // Ignore sub-pixel jitter so the direction does not flicker.
    if (Math.abs(delta) < 2) return;
    const next: Direction = delta > 0 ? 1 : -1;
    setDirection((prev) => (prev === next ? prev : next));
  });
  return (
    <DirectionContext.Provider value={direction}>
      {children}
    </DirectionContext.Provider>
  );
}

export const useScrollDirection = () => useContext(DirectionContext);

/* ---------- Slow anchor scrolling ---------- */

let activeScroll: { stop: () => void } | null = null;

/**
 * Scrolls to a position with a gentle ease. The duration grows with the
 * distance (0.9s–2.2s) so long jumps do not flash past. Any wheel, touch or
 * key input from the reader cancels it.
 */
export function slowScrollTo(top: number) {
  activeScroll?.stop();
  const from = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const to = Math.max(0, Math.min(top, max));
  const distance = Math.abs(to - from);
  if (distance < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: to, behavior: "instant" });
    return;
  }
  const duration = Math.min(2.2, 0.9 + distance / 4000);
  const startedAt = performance.now();
  const cancel = (event: Event) => {
    // Trackpad momentum keeps firing small wheel events after the reader
    // stops scrolling; only a deliberate new scroll should cancel.
    if (
      event instanceof WheelEvent &&
      (performance.now() - startedAt < 500 || Math.abs(event.deltaY) < 4)
    )
      return;
    activeScroll?.stop();
  };
  const events = ["wheel", "touchstart", "keydown"] as const;
  events.forEach((e) => window.addEventListener(e, cancel, { passive: true }));
  const controls = animate(from, to, {
    duration,
    ease: [0.65, 0, 0.35, 1],
    onUpdate: (v) => window.scrollTo({ top: v, behavior: "instant" }),
  });
  const stop = () => {
    controls.stop();
    events.forEach((e) => window.removeEventListener(e, cancel));
    if (activeScroll === handle) activeScroll = null;
  };
  const handle = { stop };
  activeScroll = handle;
  void controls.then(stop);
}

export function slowScrollToElement(el: HTMLElement) {
  const offset = parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop || "0",
  );
  slowScrollTo(el.getBoundingClientRect().top + window.scrollY - (offset || 0));
}

/* ---------- Page chrome: progress bar, section indicator, cursor ---------- */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function SectionIndicator() {
  const direction = useScrollDirection();
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);
  const [current, setCurrent] = useState<{ number: string; title: string }>({
    number: "01",
    title: "COVER",
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setPercent(Math.round(value * 100));
    const marker = window.innerHeight * 0.4;
    let active = { number: "01", title: "COVER" };
    for (const item of navigation) {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= marker)
        active = { number: item.number, title: item.title };
    }
    setCurrent((prev) => (prev.number === active.number ? prev : active));
  });
  return (
    <motion.button
      type="button"
      className="section-indicator"
      aria-label="맨 위로 이동"
      tabIndex={percent > 2 ? 0 : -1}
      onClick={() => slowScrollTo(0)}
      style={{ pointerEvents: percent > 2 ? "auto" : "none" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: percent > 2 ? 1 : 0, y: percent > 2 ? 0 : 20 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <motion.span
        className="indicator-arrow"
        animate={{ rotate: direction === 1 ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        ↓
      </motion.span>
      <span className="indicator-label">
        <motion.span
          key={current.number}
          initial={{ y: direction * 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {current.number} / {current.title}
        </motion.span>
      </span>
      <span className="indicator-percent">{percent}%</span>
    </motion.button>
  );
}

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as Element | null;
      setHovering(Boolean(target?.closest("a, button")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduced, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      className="cursor-dot"
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 3.2 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  );
}

/* ---------- Reveal blocks ---------- */

export type RevealVariant = "up" | "left" | "right" | "zoom";

const offsets: Record<RevealVariant, { x: number; y: number; scale: number }> =
  {
    up: { x: 0, y: 90, scale: 0.94 },
    left: { x: -120, y: 30, scale: 0.96 },
    right: { x: 120, y: 30, scale: 0.96 },
    zoom: { x: 0, y: 40, scale: 0.8 },
  };

/**
 * Scroll-linked reveal. It is fully reversible: entering from below while
 * scrolling down and from above while scrolling up, with a still, opaque
 * plateau through the middle of the viewport.
 */
export function ScrollReveal({
  children,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.0005,
  });
  const o = offsets[variant];
  const stops = [0, 0.22, 0.8, 1];
  const opacity = useTransform(progress, stops, [0, 1, 1, 0.15]);
  const y = useTransform(progress, stops, [o.y, 0, 0, -o.y * 0.6]);
  const x = useTransform(progress, stops, [o.x, 0, 0, o.x * 0.4]);
  const scale = useTransform(progress, stops, [o.scale, 1, 1, o.scale]);
  const rotate = useTransform(
    progress,
    stops,
    variant === "left"
      ? [-3, 0, 0, 1]
      : variant === "right"
        ? [3, 0, 0, -1]
        : [0, 0, 0, 0],
  );
  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ opacity, x, y, scale, rotate }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Split text ---------- */

/**
 * Splits text into characters that rise in with a stagger every time the
 * parent enters the viewport. They arrive from the side the reader is
 * scrolling from and leave toward the side they are scrolling to.
 */
export function SplitText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const direction = useScrollDirection();
  const [state, setState] = useState<"below" | "shown" | "above">("below");

  useEffect(() => {
    if (inView) setState("shown");
    // Leave toward the side the reader is scrolling to.
    else
      setState((prev) =>
        prev !== "shown" ? prev : direction === 1 ? "above" : "below",
      );
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  if (reduced) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  const total = text.replace(/ /g, "").length;
  let index = 0;
  return (
    <span ref={ref} className={`split-text ${className ?? ""}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, w) => (
        <Fragment key={w}>
          <span className="split-word" aria-hidden="true">
            {Array.from(word).map((char) => {
              const i = index++;
              const order = direction === 1 ? i : total - 1 - i;
              return (
                <motion.span
                  key={i}
                  className="split-char"
                  initial={{ y: "0.9em", rotate: 12, opacity: 0 }}
                  animate={
                    state === "shown"
                      ? { y: "0em", rotate: 0, opacity: 1 }
                      : state === "above"
                        ? { y: "-0.9em", rotate: -12, opacity: 0 }
                        : { y: "0.9em", rotate: 12, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: delay + order * 0.035,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
          {w < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

/* ---------- Velocity marquee ---------- */

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * A ribbon of text that follows the scroll: it reverses when the reader
 * changes direction and speeds up with scroll velocity.
 */
export function VelocityMarquee({
  items,
  baseVelocity = 3,
  tone = "ink",
}: {
  items: string[];
  baseVelocity?: number;
  tone?: "ink" | "red";
}) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const skewX = useTransform(smoothVelocity, [-2000, 0, 2000], [12, 0, -12]);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) directionFactor.current = -1;
    else if (factor > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * factor;
    baseX.set(baseX.get() - moveBy);
  });

  const line = items.join("  ✳  ") + "  ✳  ";
  return (
    <div className={`marquee marquee-${tone}`} aria-hidden="true">
      <motion.div className="marquee-track" style={{ x, skewX }}>
        {[0, 1, 2, 3].map((n) => (
          <span key={n}>{line}</span>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------- Parallax helpers ---------- */

export function useParallax(distance: number) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return { ref, y, scrollYProgress };
}

/** Draws a vertical line as its container scrolls through the viewport. */
export function ScrollLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <span ref={ref} className={`scroll-line ${className}`} aria-hidden="true">
      <motion.span style={{ scaleY }} />
    </span>
  );
}
