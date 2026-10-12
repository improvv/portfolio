import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { navigation } from "../data/portfolio";
import { slowScrollTo, slowScrollToElement } from "./Motion";

const sections = [{ id: "top", title: "COVER", number: "01" }, ...navigation];

/** Tracks which section sits under the upper part of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.4;
      let current = "top";
      for (const item of navigation) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= marker) current = item.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return active;
}

/**
 * An edge tab that slides out a table of contents. Picking an entry closes
 * the drawer and scrolls to that section.
 */
export default function SectionDrawer() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const closeRef = useRef<HTMLButtonElement>(null);
  const tabRef = useRef<HTMLButtonElement>(null);
  const activeIndex = Math.max(
    sections.findIndex((item) => item.id === active),
    0,
  );

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      tabRef.current?.focus();
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    if (id === "top") {
      slowScrollTo(0);
      return;
    }
    const el = document.getElementById(id);
    if (el) slowScrollToElement(el);
  };

  return (
    <>
      <motion.button
        ref={tabRef}
        type="button"
        className="drawer-tab"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="section-drawer"
        aria-label="섹션 목록 열기"
        whileHover={{ x: -4 }}
      >
        <span className="drawer-tab-count">
          {String(activeIndex + 1).padStart(2, "0")}
          <small>/{String(sections.length).padStart(2, "0")}</small>
        </span>
        <span className="drawer-tab-label">INDEX</span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-backdrop"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.nav
              id="section-drawer"
              className="drawer-panel"
              aria-label="섹션 목록"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="drawer-head">
                <span className="eyebrow">TABLE OF CONTENTS</span>
                <button
                  ref={closeRef}
                  type="button"
                  className="drawer-close"
                  onClick={() => setOpen(false)}
                  aria-label="섹션 목록 닫기"
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <ol>
                {sections.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04 }}
                  >
                    <button
                      type="button"
                      className={item.id === active ? "is-active" : undefined}
                      aria-current={item.id === active ? "location" : undefined}
                      onClick={() => go(item.id)}
                    >
                      <span className="drawer-no">{item.number}</span>
                      <span className="drawer-title">{item.title}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </button>
                  </motion.li>
                ))}
              </ol>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
