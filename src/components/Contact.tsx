import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { contacts, profile } from "../data/portfolio";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel } from "./Editorial";
import { SplitText } from "./Motion";

function CopyEmail({ label, email }: { label: string; email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    // Copy synchronously inside the click so it never waits on a permission
    // prompt; fall back to the async clipboard API if that is unavailable.
    const field = document.createElement("textarea");
    field.value = email;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    field.remove();
    if (!ok) {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        return;
      }
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      type="button"
      className="contact-copy"
      onClick={copy}
      aria-label={`이메일 주소 ${email} 복사`}
    >
      <span className="contact-copy-text">
        {label}
        <small>{email}</small>
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            className="copy-state copied"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
          >
            COPIED <Check size={16} aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            className="copy-state"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
          >
            COPY <Copy size={16} aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
      <span className="sr-only" aria-live="polite">
        {copied ? "이메일 주소가 클립보드에 복사되었습니다." : ""}
      </span>
    </button>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="contact section-pad">
      <SectionLabel number="09" title="CONTACT" note="THE NEXT CHAPTER" />
      <Reveal variant="zoom">
        <div className="contact-intro">
          <p>
            채용이나 프로젝트 관련 연락은
            <br />
            이메일로 부탁드립니다.
          </p>
          <motion.span
            className="asterisk"
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            ✳
          </motion.span>
        </div>
        <h2 className="contact-title">
          <SplitText text="LET’S MAKE" />
          <br />
          <span>
            <SplitText text="CONTACT." delay={0.3} />
          </span>
          <ArrowUpRight aria-hidden="true" />
        </h2>
      </Reveal>
      <div className="contact-links">
        {contacts.map((contact) =>
          contact.url?.startsWith("mailto:") ? (
            <CopyEmail
              key={contact.label}
              label={contact.label}
              email={contact.url.slice("mailto:".length)}
            />
          ) : contact.url ? (
            <a
              href={contact.url}
              key={contact.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <div className="contact-pending" key={contact.label}>
              <span>{contact.label}</span>
              <span>추가 예정</span>
            </div>
          ),
        )}
      </div>
      <div className="footer-bottom">
        <span>
          © {profile.year} {profile.name}
        </span>
        <span>BUILT WITH INTENTION.</span>
        <Link to="/#top">
          BACK TO TOP <ArrowUp size={14} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
