import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import { projects } from "./data/portfolio";
import {
  CustomCursor,
  ScrollDirectionProvider,
  ScrollProgress,
  SectionIndicator,
  slowScrollToElement,
} from "./components/Motion";

export default function App() {
  const location = useLocation();
  const reduced = useReducedMotion();
  useEffect(() => {
    const project = projects.find(
      (item) => location.pathname === `/projects/${item.id}`,
    );
    document.title = project
      ? `${project.title} — JINJEONG SEO`
      : "JINJEONG SEO — Portfolio 2026";
    let cancelled = false;
    const scrollToDestination = () => {
      if (cancelled) return;
      if (location.hash) {
        let id = location.hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {
          /* Keep malformed fragments inert. */
        }
        const target = document.getElementById(id);
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          if (reduced) target.scrollIntoView({ block: "start" });
          else slowScrollToElement(target);
        }
      } else {
        if (location.pathname !== "/")
          document
            .querySelector<HTMLElement>("main h1")
            ?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    void document.fonts.ready.then(scrollToDestination);
    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash, location.key, reduced]);

  return (
    <ScrollDirectionProvider>
      <ScrollProgress />
      {location.pathname === "/" && <SectionIndicator />}
      <CustomCursor />
      <div className="site-shell">
        <a
          href="#main-content"
          className="skip-link"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("main-content")?.focus();
          }}
        >
          본문으로 바로가기
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<ProjectDetail />} />
            </Routes>
          </motion.div>
        </main>
        <Contact />
      </div>
    </ScrollDirectionProvider>
  );
}
