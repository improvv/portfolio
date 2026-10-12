import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import {
  assetUrl,
  contacts,
  cv,
  navigation,
  projects,
} from "../data/portfolio";
import { slowScrollTo } from "./Motion";

const blogUrl = contacts.find((contact) => contact.label === "Blog")?.url;

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        to="/"
        onClick={() => {
          setOpen(false);
          if (location.pathname === "/") slowScrollTo(0);
        }}
        aria-label="Jinjeong Seo 홈"
      >
        JS<span>®</span>
      </Link>
      <span className="header-caption">
        JINJEONG SEO
        <br />
        DEVELOPER PORTFOLIO
      </span>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        <Link to="/#about">ABOUT</Link>
        {blogUrl && (
          <a href={blogUrl} target="_blank" rel="noopener noreferrer">
            TECH BLOG <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        )}
        <Link to="/#works">
          WORKS <span>({String(projects.length).padStart(2, "0")})</span>
        </Link>
        <a href={assetUrl(cv.file)} download={cv.downloadName}>
          CV <Download size={13} aria-hidden="true" />
        </a>
        <Link to="/#contact">
          LET’S TALK <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </nav>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="전체 메뉴"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              onClick={() => setOpen(false)}
            >
              <span>{item.number}</span>
              {item.title}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          <a
            href={assetUrl(cv.file)}
            download={cv.downloadName}
            onClick={() => setOpen(false)}
          >
            <span>↓</span>
            CV DOWNLOAD
            <Download size={18} aria-hidden="true" />
          </a>
          {blogUrl && (
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <span>↗</span>
              TECH BLOG
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
