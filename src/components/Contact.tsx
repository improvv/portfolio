import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contacts, profile } from "../data/portfolio";
import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./Editorial";
import { SplitText } from "./Motion";

export default function Contact() {
  return (
    <footer id="contact" className="contact section-pad">
      <SectionLabel number="08" title="CONTACT" note="THE NEXT CHAPTER" />
      <Reveal variant="zoom">
        <div className="contact-intro">
          <p>
            새로운 문제, 새로운 가능성.
            <br />
            함께 만들어 갈 이야기를 기다립니다.
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
          contact.url ? (
            <a
              href={contact.url}
              key={contact.label}
              target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
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
