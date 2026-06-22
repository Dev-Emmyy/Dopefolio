"use client";

import { useEffect, useState } from "react";
import styles from "../work/work.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [["Work", "#selected-systems"], ["Stack", "#stack"], ["About", "#about"]];

  useEffect(() => {
    const updateNavbar = () => setScrolled(window.scrollY > 40);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTop}`} data-animate="nav">
      <a className={styles.logo} href="#" data-magnetic>DevEmmy</a>
      <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button>
      <div className={`${styles.navLinks} ${open ? styles.navOpen : ""}`}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} data-magnetic>{label}</a>)}</div>
      <a className={styles.navCta} href="#contact" data-magnetic>Have a serious build?</a>
    </nav>
  );
}
