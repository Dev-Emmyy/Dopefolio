"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import styles from "./work.module.css";

const projects = [
  { number: "01", title: "Nigeria Crisis Sentinel", category: "Civic Tech / Crisis Intelligence", description: "A source-led crisis desk combining verified reporting with live incident mapping across Nigeria.", tech: ["Next.js", "OpenStreetMap", "Live incidents"], image: "/nigeria-crisis-sentinel.png", cta: "Visit live platform", link: "https://nigeria-crisis-map-7zyk.vercel.app/", featured: true },
  { number: "02", title: "Quantnoon Trading Platform", category: "Fintech / Trading Automation", description: "An algorithmic trading platform delivering automated signals, market tools, and multi-channel alerts.", tech: ["Next.js", "Trading signals", "Automation"], image: "/quantnoon-platform.png", cta: "Visit live platform", link: "https://www.quantnoon.com/" },
  { number: "03", title: "BetYield Transaction Platform", category: "Betting / Operations", description: "A betting-company platform for monitoring transactions, managing operators, reporting, tax payments, and audits.", tech: ["Transactions", "Reporting", "Audit trails"], image: "/betyield-backend-system.png", cta: "Visit live platform", link: "https://www.betyield.ng/" },
  { number: "04", title: "SchEase School Platform", category: "EdTech / School Operations", description: "A cloud school platform automating admissions, fees, records, results, reporting, and parent communication.", tech: ["Cloud SaaS", "Automation", "Analytics"], image: "/schease-platform.png", cta: "Visit live platform", link: "https://schease.com/" },
  { number: "05", title: "GoHunt Crypto Exchange", category: "Fintech / Digital Assets", description: "A crypto exchange for buying and selling digital assets with live rates, bank transfers, and wallet settlement.", tech: ["Crypto trading", "Wallets", "Payments"], image: "/gohunt-platform.png", cta: "Visit live platform", link: "https://gohunt.vercel.app/", featured: true },
  { number: "06", title: "Rangers F.C. Digital Platform", category: "Sports / Media & Commerce", description: "The official Rangers digital hub for club news, media, foundation stories, merchandise, and supporters.", tech: ["Next.js", "MUI", "Commerce"], image: "/rangers-international-hero.jpeg", cta: "Visit live platform", link: "https://rangersintl.com/" },
];

const stackPanels = [
  ["INTERFACE LAYER", "Frontend systems", ["Next.js", "React", "TypeScript"]],
  ["CORE LAYER", "Backend & APIs", ["Node.js", "Postgres", "REST APIs"], true],
  ["OPERATIONS LAYER", "Automation workflows", ["CRM", "Webhooks", "n8n"]],
  ["DEPLOYMENT LAYER", "Infrastructure", ["Docker", "Render", "CI/CD"]],
  ["TRUST LAYER", "Security-aware systems", ["SOC", "Reporting", "Access control"], true],
];

const metrics = [["06", "SaaS systems"], ["12+", "CRM workflows", true], ["24/7", "Automation logic"], ["04", "Admin dashboards"], ["SOC", "Security reports", true], ["API", "Backend systems"]];

const timeline = [
  ["01 / FOUNDATION", "Frontend engineering", "Interfaces shaped by product intent, hierarchy, accessibility, and responsive behavior."],
  ["02 / SYSTEMS", "Backend API systems", "Reliable services, data models, permissions, and operational logic behind the interface.", true],
  ["03 / OPERATIONS", "Automation workflows", "Workflows that reduce manual movement and make ownership, follow-up, and status visible."],
  ["04 / DELIVERY", "Infrastructure & deployment", "Deployment paths designed for maintainability, observability, and sensible operating cost."],
  ["05 / TRUST", "Security & SOC reporting", "Security-aware engineering translated into readable evidence, escalation context, and action.", true],
  ["06 / PRODUCT", "Product and business systems thinking", "Product sense connects interface, logic, operations, and business reality into one coherent build."],
];

function CTAButton({ children, href, ghost = false }) {
  return <a className={`${styles.button} ${ghost ? styles.buttonGhost : ""}`} href={href} data-animate="cta-button" data-magnetic>{children}</a>;
}

function ProjectCard({ project }) {
  return (
    <article className={`${styles.projectCard} ${project.featured ? styles.featured : ""}`} data-animate="project-card" data-3d>
      <div className={styles.cardMeta}><span data-count={project.number}>{project.number}</span><span>{project.category}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className={styles.mockup}><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 760px) 100vw, 50vw" data-card-image /></div>
      <div className={styles.chips}>{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      <a
        className={styles.cardLink}
        href={project.link || "#contact"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noreferrer" : undefined}
        data-magnetic
      >
        {project.cta} <span>↗</span>
      </a>
    </article>
  );
}

function StackPanel({ panel }) {
  const [eyebrow, title, items, featured] = panel;
  return <article className={`${styles.stackPanel} ${featured ? styles.featured : ""}`} data-animate="stack-panel" data-3d><small>{eyebrow}</small><h3>{title}</h3><div className={styles.chips}>{items.map((item) => <span key={item}>{item}</span>)}</div></article>;
}

function MetricCard({ metric }) {
  const countable = /^\d/.test(metric[0]);
  return <article className={`${styles.metric} ${metric[2] ? styles.featured : ""}`} data-animate="metric-card" data-3d><strong {...(countable ? { "data-count": metric[0] } : {})}>{metric[0]}</strong><span>{metric[1]}</span></article>;
}

function TimelineItem({ item, index }) {
  return <div className={`${styles.timelineRow} ${index % 2 ? styles.timelineReverse : ""}`}><h3>{item[1]}</h3><article className={`${styles.timelineCard} ${item[3] ? styles.featured : ""}`} data-animate="timeline-item"><small data-count={item[0]}>{item[0]}</small><h4>{item[1]}</h4><p>{item[2]}</p></article></div>;
}

export default function WorkPage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = heroRef.current;
    const interactiveCleanups = [];
    const pointerFine = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      gsap.set("[data-3d]", { transformPerspective: 1200, transformOrigin: "50% 50%" });
      gsap.utils.toArray("[data-count]").forEach((element) => {
        const finalText = element.dataset.count || element.textContent.trim();
        const match = finalText.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
        if (!match) return;

        const [, prefix, numberText, suffix] = match;
        const target = Number(numberText);
        const decimals = numberText.includes(".") ? numberText.split(".")[1].length : 0;
        const leadingZeros = !decimals && numberText.length > 1 && numberText.startsWith("0");
        const counter = { value: 0 };
        const render = () => {
          const rounded = decimals ? counter.value.toFixed(decimals) : Math.round(counter.value).toString();
          const formatted = leadingZeros ? rounded.padStart(numberText.length, "0") : rounded;
          element.textContent = `${prefix}${formatted}${suffix}`;
        };

        render();
        gsap.to(counter, {
          value: target,
          duration: 1.45,
          ease: "power2.out",
          onUpdate: render,
          onComplete: () => { element.textContent = finalText; },
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .from('[data-animate="nav"]', { y: -90, opacity: 0, duration: 1 })
        .from("[data-hero-line]", { yPercent: 115, rotateX: -28, opacity: 0, stagger: .11, duration: 1.15 }, "-=.45")
        .from("[data-hero-copy] > p, [data-hero-actions]", { y: 32, opacity: 0, stagger: .12, duration: .85 }, "-=.68")
        .from("[data-portrait]", { xPercent: 24, scale: 1.16, filter: "blur(18px)", opacity: 0, duration: 1.35 }, "-=1.05")
        .from("[data-float] span", { z: -240, scale: .35, opacity: 0, stagger: .055, duration: .8 }, "-=.8")
        .from("[data-status]", { x: 80, rotateY: -18, opacity: 0, duration: .8 }, "-=.55");

      gsap.to("[data-portrait]", { yPercent: 12, scale: 1.08, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.2 } });
      gsap.to("[data-grid]", { yPercent: 24, rotate: 1.2, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 } });
      gsap.to("[data-hero-copy]", { yPercent: -12, opacity: .15, ease: "none", scrollTrigger: { trigger: hero, start: "35% top", end: "bottom top", scrub: 1 } });
      gsap.to("[data-float] span", { y: (i) => i % 2 ? 40 : -34, x: (i) => (i % 3 - 1) * 32, rotate: (i) => i % 2 ? 7 : -6, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.4 } });

      gsap.utils.toArray("[data-section]").forEach((section, index) => {
        const heading = section.querySelector("h2");
        if (heading) gsap.from(heading, { x: isMobile ? (index % 2 ? 55 : -55) : 0, y: isMobile ? 30 : 90, rotateX: isMobile ? 0 : -16, opacity: 0, duration: 1.05, ease: "power4.out", scrollTrigger: { trigger: section, start: "top 82%" } });
      });
      gsap.utils.toArray('[data-animate="project-card"]').forEach((card, i) => {
        gsap.from(card, { x: isMobile ? (i % 2 ? 44 : -44) : 0, y: isMobile ? 64 : 110, z: isMobile ? 0 : -180, rotateZ: isMobile ? (i % 2 ? 1.8 : -1.8) : 0, rotateX: isMobile ? 0 : 14, rotateY: isMobile ? 0 : (i % 2 ? -7 : 7), scale: isMobile ? .95 : 1, opacity: 0, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 90%" } });
        const rotateXTo = gsap.quickTo(card, "rotationX", { duration: .45, ease: "power3.out" });
        const rotateYTo = gsap.quickTo(card, "rotationY", { duration: .45, ease: "power3.out" });
        const image = card.querySelector("[data-card-image]");
        const imageXTo = image ? gsap.quickTo(image, "xPercent", { duration: .7, ease: "power3.out" }) : null;
        const imageYTo = image ? gsap.quickTo(image, "yPercent", { duration: .7, ease: "power3.out" }) : null;
        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--mx", `${px * 100}%`);
          card.style.setProperty("--my", `${py * 100}%`);
          rotateYTo((px - .5) * 10);
          rotateXTo((.5 - py) * 8);
          imageXTo?.((px - .5) * -3.5);
          imageYTo?.((py - .5) * -3.5);
        };
        const onLeave = () => {
          rotateXTo(0); rotateYTo(0); imageXTo?.(0); imageYTo?.(0);
          card.style.setProperty("--mx", "50%"); card.style.setProperty("--my", "50%");
        };
        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        interactiveCleanups.push(() => { card.removeEventListener("pointermove", onMove); card.removeEventListener("pointerleave", onLeave); });
      });
      gsap.from('[data-animate="stack-panel"]', { x: isMobile ? (i) => i % 2 ? 46 : -46 : 0, y: isMobile ? 38 : 90, z: isMobile ? 0 : -140, rotateY: isMobile ? 0 : 12, opacity: 0, stagger: .12, duration: .95, ease: "power3.out", scrollTrigger: { trigger: "#stack", start: "top 78%" } });
      gsap.from('[data-animate="metric-card"]', { scale: .72, z: -180, opacity: 0, stagger: .09, duration: .85, ease: "back.out(1.4)", scrollTrigger: { trigger: "#about", start: "top 68%" } });
      gsap.utils.toArray('[data-animate="timeline-item"]').forEach((item, i) => gsap.from(item, { x: isMobile ? 36 : (i % 2 ? -95 : 95), y: isMobile ? 32 : 0, rotateY: isMobile ? 0 : (i % 2 ? 13 : -13), opacity: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 86%" } }));
      gsap.to("[data-timeline-line]", { scaleY: 1, transformOrigin: "top", ease: "none", scrollTrigger: { trigger: "[data-timeline]", start: "top 70%", end: "bottom 70%", scrub: 1 } });
      if (isMobile) {
        gsap.to("[data-float] span", { y: (i) => i % 2 ? 8 : -8, x: (i) => i % 3 === 0 ? 5 : -4, duration: 2.2, stagger: .13, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.from("[data-hero-actions] > *", { scale: .82, opacity: 0, stagger: .12, duration: .75, ease: "back.out(1.8)", delay: .9 });
      }
    }, pageRef);

    const xTo = gsap.quickTo("[data-scene]", "rotationY", { duration: .7, ease: "power3" });
    const yTo = gsap.quickTo("[data-scene]", "rotationX", { duration: .7, ease: "power3" });
    const gridXTo = gsap.quickTo("[data-grid]", "x", { duration: 1.1, ease: "power3" });
    const gridYTo = gsap.quickTo("[data-grid]", "y", { duration: 1.1, ease: "power3" });
    const copyXTo = gsap.quickTo("[data-hero-copy]", "x", { duration: .85, ease: "power3" });
    const copyYTo = gsap.quickTo("[data-hero-copy]", "y", { duration: .85, ease: "power3" });
    const portraitXTo = gsap.quickTo("[data-portrait]", "x", { duration: .85, ease: "power3" });
    const portraitYTo = gsap.quickTo("[data-portrait]", "y", { duration: .85, ease: "power3" });
    const portraitRotateXTo = gsap.quickTo("[data-portrait]", "rotationX", { duration: .85, ease: "power3" });
    const portraitRotateYTo = gsap.quickTo("[data-portrait]", "rotationY", { duration: .85, ease: "power3" });
    const floatXTo = gsap.quickTo("[data-float]", "x", { duration: .62, ease: "power3" });
    const floatYTo = gsap.quickTo("[data-float]", "y", { duration: .62, ease: "power3" });
    const statusXTo = gsap.quickTo("[data-status]", "x", { duration: .55, ease: "power3" });
    const statusYTo = gsap.quickTo("[data-status]", "y", { duration: .55, ease: "power3" });
    const lightXTo = gsap.quickTo("[data-light]", "x", { duration: .75, ease: "power3" });
    const lightYTo = gsap.quickTo("[data-light]", "y", { duration: .75, ease: "power3" });
    const move = (event) => {
      const rect = hero.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - .5;
      const ny = (event.clientY - rect.top) / rect.height - .5;
      hero.style.setProperty("--hero-x", `${(nx + .5) * 100}%`);
      hero.style.setProperty("--hero-y", `${(ny + .5) * 100}%`);
      xTo(nx * 5);
      yTo(-ny * 4);
      gridXTo(nx * 7); gridYTo(ny * 5);
      copyXTo(-nx * 11); copyYTo(-ny * 8);
      portraitXTo(nx * 22);
      portraitYTo(ny * 14);
      portraitRotateYTo(nx * 4.5);
      portraitRotateXTo(-ny * 3.5);
      floatXTo(nx * 36); floatYTo(ny * 25);
      statusXTo(nx * 42); statusYTo(ny * 30);
      lightXTo(nx * 54); lightYTo(ny * 38);
    };
    const reset = () => {
      xTo(0); yTo(0); gridXTo(0); gridYTo(0); copyXTo(0); copyYTo(0); portraitXTo(0); portraitYTo(0); portraitRotateXTo(0); portraitRotateYTo(0); floatXTo(0); floatYTo(0); statusXTo(0); statusYTo(0); lightXTo(0); lightYTo(0);
    };
    if (pointerFine) {
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerleave", reset);

      const aura = pageRef.current.querySelector("[data-cursor-aura]");
      const auraXTo = gsap.quickTo(aura, "x", { duration: .32, ease: "power3" });
      const auraYTo = gsap.quickTo(aura, "y", { duration: .32, ease: "power3" });
      const moveAura = (event) => { aura.dataset.visible = "true"; auraXTo(event.clientX); auraYTo(event.clientY); };
      const activateAura = (event) => { if (event.target.closest("a, button, [data-3d]")) aura.dataset.active = "true"; };
      const deactivateAura = (event) => { if (!event.relatedTarget?.closest?.("a, button, [data-3d]")) aura.dataset.active = "false"; };
      window.addEventListener("pointermove", moveAura, { passive: true });
      window.addEventListener("pointerover", activateAura, { passive: true });
      window.addEventListener("pointerout", deactivateAura, { passive: true });
      interactiveCleanups.push(() => { window.removeEventListener("pointermove", moveAura); window.removeEventListener("pointerover", activateAura); window.removeEventListener("pointerout", deactivateAura); });

      pageRef.current.querySelectorAll("[data-magnetic]").forEach((element) => {
        const magneticMove = (event) => {
          const rect = element.getBoundingClientRect();
          gsap.to(element, { x: (event.clientX - rect.left - rect.width / 2) * .14, y: (event.clientY - rect.top - rect.height / 2) * .18, scale: 1.025, duration: .38, ease: "power3.out" });
        };
        const magneticReset = () => gsap.to(element, { x: 0, y: 0, scale: 1, duration: .55, ease: "elastic.out(1,.45)" });
        element.addEventListener("pointermove", magneticMove);
        element.addEventListener("pointerleave", magneticReset);
        interactiveCleanups.push(() => { element.removeEventListener("pointermove", magneticMove); element.removeEventListener("pointerleave", magneticReset); });
      });
    }
    return () => { if (pointerFine) { hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", reset); } interactiveCleanups.forEach((cleanup) => cleanup()); ctx.revert(); };
  }, []);

  return (
    <main className={styles.page} ref={pageRef}>
      <div className={styles.cursorAura} data-cursor-aura aria-hidden="true"><span /></div>
      <Navbar />
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.gridTexture} data-grid />
        <div className={styles.heroScene} data-scene>
          <div className={styles.heroCopy} data-hero-copy>
            <span className={styles.kicker}>SOFTWARE SYSTEMS / PRODUCT LOGIC / OPERATIONS</span>
            <h1><span data-hero-line>I don’t just</span><span data-hero-line>build websites.</span><span data-hero-line>I build <em>systems.</em></span></h1>
            <p>SaaS platforms, dashboards, automations, backend APIs, CRM workflows, and security-aware systems built with product sense.</p>
            <div className={styles.actions} data-hero-actions><CTAButton href="#selected-systems">View selected systems</CTAButton><CTAButton href="#contact" ghost>Contact DevEmmy</CTAButton></div>
          </div>
          <div className={styles.portraitStage}>
            <div className={styles.spotlight} data-light />
            <div className={styles.portrait} data-portrait><Image src="/hero-cinematic-v2.png" alt="DevEmmy — software developer and systems builder" fill priority sizes="100vw" /></div>
            <div className={styles.floatLabels} data-animate="floating-label" data-float>{["SaaS", "Backend APIs", "Automation", "Dashboards", "CRM", "Security", "Infrastructure", "Next.js", "Node.js"].map((label) => <span key={label}>{label}</span>)}</div>
            <aside className={styles.statusCard} data-status><strong>Available for serious builds</strong><span>Remote / Nigeria</span><em>Systems-first developer</em></aside>
          </div>
        </div>
      </section>

      <section className={styles.section} id="selected-systems" data-section>
        <header className={styles.sectionHeader}><h2>Selected systems</h2><p>Not templates. Real systems with logic, workflows, and business intent.</p></header>
        <div className={styles.projectGrid}>{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
      </section>

      <section className={`${styles.section} ${styles.stackSection}`} id="stack" data-section>
        <header className={styles.sectionHeader}><h2>The stack behind the systems</h2><p>A control panel of tools chosen for products that need logic, speed, workflows, and operational clarity.</p></header>
        <div className={styles.stackGrid}>{stackPanels.map((panel) => <StackPanel key={panel[1]} panel={panel} />)}<article className={`${styles.stackPanel} ${styles.signalPanel}`}><small>CONTROL SIGNAL</small><h3>Builds that connect interface, logic, workflow, deployment, and operations into one system.</h3></article></div>
      </section>

      <section className={`${styles.section} ${styles.about}`} id="about" data-section>
        <div><h2>I build with product sense, not just code.</h2><p>DevEmmy turns messy workflows into clear software systems. From frontend interfaces to backend logic, automation, dashboards, and infrastructure-aware deployments, the focus is simple: build tools that solve real operational problems.</p></div>
        <div className={styles.metricGrid}>{metrics.map((metric) => <MetricCard key={metric[1]} metric={metric} />)}</div>
      </section>

      <section className={`${styles.section} ${styles.timelineSection}`} data-section>
        <h2>Learning curve, documented.</h2>
        <div className={styles.timeline} data-timeline><div className={styles.timelineLine} data-timeline-line />{timeline.map((item, index) => <TimelineItem key={item[0]} item={item} index={index} />)}</div>
      </section>

      <section className={styles.contact} id="contact" data-section>
        <h2>Have a serious build?</h2><p>Bring the problem. I’ll bring the system.</p>
        <div className={styles.actions}><CTAButton href="mailto:emmanuelugochukwu2000@gmail.com">Email DevEmmy</CTAButton><CTAButton href="https://github.com/Dev-Emmyy" ghost>GitHub</CTAButton><CTAButton href="https://www.linkedin.com/in/emmanuel-ugochukwu-ba798a25a" ghost>LinkedIn</CTAButton><CTAButton href="#selected-systems" ghost>Selected systems</CTAButton></div>
      </section>
    </main>
  );
}
