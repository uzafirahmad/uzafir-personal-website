"use client";

import "@fontsource/stix-two-text/400.css";
import "@fontsource/stix-two-text/700.css";
import awsLogo from "devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
import azureLogo from "devicon/icons/azure/azure-original.svg";
import digitalOceanLogo from "devicon/icons/digitalocean/digitalocean-original.svg";
import djangoLogo from "devicon/icons/django/django-plain.svg";
import dockerLogo from "devicon/icons/docker/docker-original.svg";
import expressLogo from "devicon/icons/express/express-original.svg";
import googleCloudLogo from "devicon/icons/googlecloud/googlecloud-original.svg";
import javascriptLogo from "devicon/icons/javascript/javascript-original.svg";
import mongoLogo from "devicon/icons/mongodb/mongodb-original.svg";
import nestLogo from "devicon/icons/nestjs/nestjs-original.svg";
import nextLogo from "devicon/icons/nextjs/nextjs-original.svg";
import postgresLogo from "devicon/icons/postgresql/postgresql-original.svg";
import pythonLogo from "devicon/icons/python/python-original.svg";
import reactLogo from "devicon/icons/react/react-original.svg";
import redisLogo from "devicon/icons/redis/redis-original.svg";
import typescriptLogo from "devicon/icons/typescript/typescript-original.svg";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import * as THREE from "three";
import {
  FaBriefcase,
  FaCode,
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedinIn,
  FaMicrophone,
  FaTrophy,
  FaWhatsapp,
} from "react-icons/fa";
import { SiNpm, SiWebrtc } from "react-icons/si";
import { WAVE_DARK_PALETTE, WAVE_FRAGMENT_SHADER, WAVE_VERTEX_SHADER } from "./waveShaders";

const categories = [
  "Links",
  "Research Profile",
  "Education",
  "Projects",
  "Skills",
  "Invited Talks",
  "Awards and Honours",
  "Experience",
  "Publications",
] as const;

const idFor = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

type Item = {
  title: string;
  titleLinkLabel?: string;
  detail?: string;
  details?: string[];
  href?: string;
  links?: Array<{ label: string; href: string; variant?: "primary" | "secondary" | "npm"; icon?: "npm" }>;
  meta?: string;
  secondary?: string;
  secondaryMeta?: string;
};

type Section = {
  title: (typeof categories)[number];
  intro?: string;
  items: Item[];
  action?: { label: string; href: string };
};

const sections: Section[] = [
  {
    title: "Links",
    items: [],
  },
  {
    title: "Research Profile",
    items: [],
  },
  {
    title: "Education",
    items: [
      {
        title: "MSc Software Engineering",
        details: [
          "Dissertation: Thermodynamic Human-Computer Interaction.",
          "Developed a target prediction model using Hamiltonian, Lagrangian and statistical mechanics; implemented and evaluated the model across desktop and mobile interaction.",
          "Derived the 70 year old empirical Fitts' Law and Schmidt's Law from thermodynamics.",
        ],
        links: [
          { label: "Code", href: "https://github.com/Intent-Link/intent-link-npm", variant: "primary" },
          { label: "Demo", href: "https://intentlink.dev", variant: "secondary" },
        ],
        meta: "2025 to 2026",
        secondary: "Heriot-Watt University",
        secondaryMeta: "Dubai, United Arab Emirates",
      },
      {
        title: "BSc Electrical Engineering",
        details: [
          "Gold Medal for Best Final Year Project.",
          "Final project: sign language glove using machine learning and the Google Translate API to convert hand gestures into speech in multiple languages.",
        ],
        links: [
          { label: "Code", href: "https://github.com/uzafirahmad/sign_language_glove", variant: "primary" },
          { label: "Video", href: "https://www.youtube.com/watch?v=KwxwMZN3S8A&t", variant: "secondary" },
        ],
        meta: "2018 to 2022",
        secondary: "Institute of Space Technology",
        secondaryMeta: "Islamabad, Pakistan",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Intent Link",
        titleLinkLabel: "intentlink.dev",
        details: [
          "A user target prediction library from MSc research turned into an open-source library for React and Next.js.",
          "The world's most accurate and efficient prefetching library with an accuracy of 98% and a fetch-to-click ratio of 1.37.",
        ],
        links: [
          { label: "npm package", href: "https://www.npmjs.com/package/intent-link", variant: "npm", icon: "npm" },
          { label: "Demo", href: "https://intentlink.dev", variant: "primary" },
        ],
        href: "https://intentlink.dev",
        meta: "2026",
      },
      {
        title: "Beep",
        titleLinkLabel: "beep.gov.pk",
        details: [
          "Implemented WebRTC with a MediaSoup signaling server to create audio and video calling for the military.",
          "Enforced strict cybersecurity best practices to align with defense industry compliance standards.",
          "Implemented microservices and microfrontends in Next.js and Express.js.",
        ],
        href: "https://beep.gov.pk",
        meta: "2024",
      },
    ],
  },
  {
    title: "Skills",
    items: [],
  },
  {
    title: "Invited Talks",
    items: [
      {
        title: "Thermodynamic Artificial Intelligence",
        detail: "Invited lecture for the Complexity Theory seminar on the thermodynamic aspects of artificial intelligence.",
        meta: "13 October 2026",
        secondary: "National Autonomous University of Mexico",
        secondaryMeta: "Online",
      },
    ],
  },
  {
    title: "Awards and Honours",
    items: [
      {
        title: "Gold Medal for Best Final Year Project",
        secondary: "Institute of Space Technology",
        secondaryMeta: "Islamabad, Pakistan",
        meta: "2022",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        title: "Ordion.io",
        meta: "Remote, United States",
        secondary: "Software Engineer",
        secondaryMeta: "December 2024 to August 2025",
        details: [
          "Developed caching and prefetching strategies using Next.js and Redis application workloads.",
          "Contributed to the conversion of a monolithic application into independently deployable services.",
          "Built containerized deployment pipelines for Google Cloud and implemented load balancing, content delivery and automated SSL certificate management.",
        ],
      },
      {
        title: "Linter Labs",
        meta: "Islamabad, Pakistan",
        secondary: "Software Engineer",
        secondaryMeta: "October 2023 to December 2024",
        details: [
          "Led API development using Django, NestJS, and ExpressJS.",
          "Implemented real time messaging and group audio and video communication using Redis, Socket.io, WebRTC, and a media server.",
          "Deployed containerized applications through Azure Pipelines to Google Cloud and deployed services on AWS infrastructure.",
        ],
      },
      {
        title: "ML Sense Solutions",
        meta: "Islamabad, Pakistan",
        secondary: "Software Engineer",
        secondaryMeta: "March 2022 to October 2023",
        details: [
          "Developed web interfaces and backend services using React, Next.js, Django, and ExpressJS.",
          "Implemented authentication, real time communication, and cloud data storage using Firestore, Cloud SQL, and BigQuery.",
          "Automated container deployment to Google Cloud and conducted cloud cost analysis.",
        ],
      },
    ],
  },
  {
    title: "Publications",
    items: [],
  },
];

const socialLinks = [
  { label: "GitHub", icon: FaGithub, color: "#181717", href: "https://github.com/uzafirahmad" },
  { label: "LinkedIn", icon: FaLinkedinIn, color: "#0a66c2", href: "https://linkedin.com/in/uzafir-ahmad" },
  { label: "WhatsApp", icon: FaWhatsapp, color: "#25d366", href: "https://wa.me/971507331350" },
  { label: "Instagram", icon: FaInstagram, color: "#e4405f", href: "https://instagram.com/uzafirahmad" },
] as const;

const contactLinks = [
  { label: "ORCID", value: "0009-0002-5206-4535", href: "https://orcid.org/0009-0002-5206-4535" },
  { label: "Email", value: "uzafir525@gmail.com", href: "mailto:uzafir525@gmail.com" },
  { label: "Phone", value: "+971 50 733 1350", href: "tel:+971507331350" },
] as const;

type Skill = {
  label: string;
  logo?: StaticImageData;
  icon?: typeof SiWebrtc;
  color?: string;
};

const languages = [
  { label: "Python", logo: pythonLogo },
  { label: "JavaScript", logo: javascriptLogo },
  { label: "TypeScript", logo: typescriptLogo },
  { label: "SQL", logo: postgresLogo },
] satisfies readonly Skill[];

const frameworks = [
  { label: "React", logo: reactLogo },
  { label: "Next.js", logo: nextLogo },
  { label: "Django", logo: djangoLogo },
  { label: "Express", logo: expressLogo },
  { label: "NestJS", logo: nestLogo },
  { label: "Docker", logo: dockerLogo },
  { label: "WebRTC", icon: SiWebrtc, color: "#333333" },
] satisfies readonly Skill[];

const databases = [
  { label: "PostgreSQL", logo: postgresLogo },
  { label: "MongoDB", logo: mongoLogo },
  { label: "Redis", logo: redisLogo },
] satisfies readonly Skill[];

const cloudTools = [
  { label: "Google Cloud Platform", logo: googleCloudLogo },
  { label: "AWS", logo: awsLogo },
  { label: "Azure", logo: azureLogo },
  { label: "DigitalOcean", logo: digitalOceanLogo },
] satisfies readonly Skill[];

function LinksContent() {
  return (
    <div className="links-content">
      <div className="social-links" aria-label="Social profiles">
        {socialLinks.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} style={{ "--brand-color": social.color } as CSSProperties}>
            <social.icon className="social-icon" aria-hidden="true" />
            <span>{social.label}</span>
          </a>
        ))}
      </div>

      <div className="contact-links">
        {contactLinks.map((contact) => (
          <a key={contact.label} href={contact.href} target={contact.label === "ORCID" ? "_blank" : undefined} rel={contact.label === "ORCID" ? "noreferrer" : undefined}>
            <span className="contact-label">{contact.label}</span>
            <span className="contact-value">{contact.value}</span>
            <span className="contact-action" aria-hidden="true">{contact.label === "ORCID" ? "↗" : "→"}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function SkillGrid({ title, items }: { title: string; items: readonly Skill[] }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <div className="skill-grid">
        {items.map((item) => (
          <div className="skill-tile" key={item.label} style={{ "--brand-color": item.color } as CSSProperties}>
            {item.logo ? (
              <Image className="skill-logo" src={item.logo} width={34} height={34} alt="" aria-hidden="true" />
            ) : item.icon ? (
              <item.icon className="skill-icon" aria-hidden="true" />
            ) : null}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="skills-content">
      <SkillGrid title="Languages" items={languages} />
      <SkillGrid title="Frameworks" items={frameworks} />
      <SkillGrid title="Databases" items={databases} />
      <SkillGrid title="Cloud" items={cloudTools} />
    </div>
  );
}

function PublicationsContent() {
  return (
    <ol className="publications-list">
      <li>
        <a href="https://arxiv.org/abs/2608.07123" target="_blank" rel="noreferrer">
          <span className="publication-number">[1]</span>
          <span>
            Uzafir Ahmad Rafaq, Muaz Hassan, and Ali Muzaffar. 2026. <em>Thermodynamic Human-Computer Interaction.</em>{" "}
            arXiv:2608.07123 [cs.HC]. Under review at ACM CHI.
          </span>
        </a>
      </li>
    </ol>
  );
}

const researchBadges = [
  "Statistical mechanics",
  "Artifical Intelligence",
  "Human-Computer Interaction",
  "High Performance Computing",
] as const;

function ResearchProfileContent() {
  return (
    <div className="research-profile-content">
      <p>
        Electrical and software engineer pursuing research in Physics Informed Machine Learning and Human-Computer
        Interaction. Research deals with statistical mechanics, probabilistic modeling, dynamical systems, and human
        participant experiments. Experienced in turning models into deployed, reproducible software systems.
      </p>
      <div className="research-badges" aria-label="Research areas">
        {researchBadges.map((badge) => <span className="research-badge" key={badge}>{badge}</span>)}
      </div>
    </div>
  );
}

function SectionMarker({ section }: { section: Section["title"] }) {
  const Icon = {
    Education: FaGraduationCap,
    Projects: FaCode,
    "Invited Talks": FaMicrophone,
    "Awards and Honours": FaTrophy,
    Experience: FaBriefcase,
  }[section as "Education" | "Projects" | "Invited Talks" | "Awards and Honours" | "Experience"];

  return <span className="check" aria-hidden="true">{Icon ? <Icon /> : "✓"}</span>;
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function HeroWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: true,
      });
    } catch {
      canvas.dataset.webgl = "unavailable";
      return;
    }

    canvas.dataset.engine = `three.js r${THREE.REVISION}`;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, 1, 10000);
    camera.position.set(100, 0, 5000);
    camera.zoom = 1;
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.PlaneGeometry(400, 400, 128, 256);
    const positions = geometry.attributes.position;
    const uvs = geometry.attributes.uv;
    const point = new THREE.Vector3();
    const xAxis = new THREE.Vector3(1, 0, 0);
    const yAxis = new THREE.Vector3(0, 1, 0);

    for (let index = 0; index < positions.count; index += 1) {
      point.fromBufferAttribute(positions, index);
      const uvY = uvs.getY(index);
      const fold = 4 - 2 * Math.pow(4 * uvY * (1 - uvY), 9.5);

      if (point.x < -16) {
        point.z += fold;
      } else if (point.x < 16) {
        point.z = Math.cos(THREE.MathUtils.mapLinear(point.x, -16, 16, 0, Math.PI)) * fold;
        point.x = Math.cos(THREE.MathUtils.mapLinear(point.x, -16, 16, -Math.PI / 2, Math.PI / 2)) * fold - 16;
      } else {
        point.z -= fold;
        point.x = -point.x;
      }

      point.x += 100;
      point.applyAxisAngle(xAxis, -Math.PI / 2);
      point.applyAxisAngle(yAxis, -Math.PI / 2);
      positions.setXYZ(index, point.x, point.y, point.z);
    }
    positions.needsUpdate = true;

    let disposed = false;
    const clearColor = new THREE.Color("#0f1b3d");
    const shaderClearColor = clearColor.clone().convertLinearToSRGB();
    const paletteTexture = new THREE.TextureLoader().load(WAVE_DARK_PALETTE, () => {
      if (!disposed) renderer.render(scene, camera);
    });
    paletteTexture.wrapS = THREE.RepeatWrapping;
    paletteTexture.wrapT = THREE.RepeatWrapping;

    const material = new THREE.ShaderMaterial({
      transparent: false,
      depthWrite: true,
      depthTest: true,
      side: THREE.DoubleSide,
      uniforms: {
        u_time: { value: 1150 },
        u_speed: { value: 0.00004 },
        u_resolution: { value: new THREE.Vector2(1, 1) },
        u_paletteTexture: { value: paletteTexture },
        u_lutTexture: { value: paletteTexture },
        u_blueNoiseTexture: { value: paletteTexture },
        u_colorContrast: { value: 1 },
        u_colorSaturation: { value: 1.15 },
        u_colorHueShift: { value: -0.0315926535897932 },
        u_displaceFrequencyX: { value: 0.003234 },
        u_displaceFrequencyZ: { value: 0.00799 },
        u_displaceAmount: { value: 6.051 },
        u_twistFrequencyX: { value: -0.0549999999999997 },
        u_twistFrequencyY: { value: 0.077 },
        u_twistFrequencyZ: { value: -0.518 },
        u_twistPowerX: { value: 3.95 },
        u_twistPowerY: { value: 5.85 },
        u_twistPowerZ: { value: 6.33 },
        u_glowRamp: { value: 1 },
        u_glowAmount: { value: 0.6 },
        u_glowPower: { value: 0.589 },
        u_mousePosition: { value: new THREE.Vector2(0, 0) },
        u_lineThickness: { value: 1 },
        u_lineAmount: { value: 425 },
        u_lineDerivativePower: { value: 0.95 },
        u_maxWidth: { value: 1232 },
        u_clearColor: { value: shaderClearColor },
      },
      vertexShader: WAVE_VERTEX_SHADER,
      fragmentShader: WAVE_FRAGMENT_SHADER,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-24.3, -56.4, -11.1);
    mesh.rotation.set(-0.159592653589793, -0.283592653589793, -2.81559265358979);
    mesh.scale.set(10, 10, 7);
    scene.add(mesh);

    renderer.setClearColor(clearColor, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    let frame = 0;
    let isVisible = true;
    let frameCount = 0;
    let startTime: number | null = null;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const width = Math.max(1, bounds.width);
      const height = Math.max(1, bounds.height);
      renderer.setSize(width, height, false);
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
      const pixelRatio = renderer.getPixelRatio();
      material.uniforms.u_resolution.value.set(width * pixelRatio, height * pixelRatio);
    };

    const draw = (time: number) => {
      if (disposed) return;
      startTime ??= time;
      frameCount += 1;
      if (reduceMotion || frameCount % 2 === 0) {
        material.uniforms.u_time.value = 1150 + (reduceMotion ? 0 : time - startTime);
        renderer.render(scene, camera);
      }
      if (!reduceMotion && isVisible && !document.hidden) {
        frame = requestAnimationFrame(draw);
      }
    };

    const restart = () => {
      cancelAnimationFrame(frame);
      if (isVisible && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      renderer.render(scene, camera);
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      restart();
    });
    const onVisibilityChange = () => restart();

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();
    renderer.render(scene, camera);
    if (!reduceMotion) frame = requestAnimationFrame(draw);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      geometry.dispose();
      paletteTexture.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}

export default function Home() {
  const [active, setActive] = useState("links");

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uzafir A. Rafaq",
    alternateName: "Uzafir Ahmad Rafaq",
    url: "https://uzafir.com",
    email: "mailto:uzafir525@gmail.com",
    jobTitle: ["Mathematician", "Computer Scientist", "Software Engineer"],
    sameAs: [
      "https://github.com/uzafirahmad",
      "https://linkedin.com/in/uzafir-ahmad",
      "https://instagram.com/uzafirahmad",
      "https://orcid.org/0009-0002-5206-4535",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Heriot-Watt University" },
      { "@type": "CollegeOrUniversity", name: "Institute of Space Technology" },
    ],
    knowsAbout: [
      "Physics-Informed Machine Learning",
      "Human-Computer Interaction",
      "Statistical Mechanics",
      "Artificial Intelligence",
      "High-Performance Computing",
    ],
  };

  useEffect(() => {
    const sectionElements = categories
      .map((category) => document.getElementById(idFor(category)))
      .filter((element): element is HTMLElement => Boolean(element));
    let scheduled = false;
    let lastTracked = "";

    const updateActive = () => {
      scheduled = false;
      const marker = Math.min(Math.max(window.innerHeight * 0.28, 120), 240);
      const beforeSections = (sectionElements[0]?.getBoundingClientRect().top ?? 0) > marker;
      let current = sectionElements[0]?.id ?? "links";

      sectionElements.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sectionElements.at(-1)?.id ?? current;
      }

      if (current !== lastTracked) {
        lastTracked = current;
        setActive(current);
      }

      if (beforeSections && window.location.hash) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      } else if (!beforeSections && window.location.hash !== `#${current}`) {
        window.history.replaceState(null, "", `#${current}`);
      }
    };

    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(updateActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    requestAnimationFrame(updateActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c") }}
      />
      <div className="page-rails" aria-hidden="true" />
      <header className="hero">
        <div className="hero-copy shell">
          <h1>Uzafir A. Rafaq</h1>
          <p className="subtitle">
            <span>Mathematician</span>
            <span className="subtitle-joiner"> and </span>
            <span className="subtitle-subject">Computer Scientist</span>
          </p>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <HeroWave />
        </div>
      </header>

      <div className="content shell">
        <aside className="sidebar" aria-label="Portfolio categories">
          <nav>
            {categories.map((category) => {
              const id = idFor(category);
              return (
                <a
                  key={category}
                  className={active === id ? "active" : ""}
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                  aria-current={active === id ? "location" : undefined}
                >
                  {category}
                </a>
              );
            })}
          </nav>
        </aside>

        <div className="cards">
          {sections.map((section) => (
            <section className="card" id={idFor(section.title)} key={section.title}>
              <h2>{section.title}</h2>
              {section.intro && <p className="intro">{section.intro}</p>}
              {section.title === "Links" && <LinksContent />}
              {section.title === "Research Profile" && <ResearchProfileContent />}
              {section.title === "Skills" && <SkillsContent />}
              {section.title === "Publications" && <PublicationsContent />}
              {section.items.length > 0 && <ul>
                {section.items.map((item, index) => (
                  <li key={`${section.title}-${item.title}-${item.secondary ?? item.href ?? index}`}>
                    <SectionMarker section={section.title} />
                    <div>
                      <div className="item-heading">
                        {item.titleLinkLabel && item.href ? (
                          <strong>{item.title}</strong>
                        ) : item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                        ) : (
                          <strong>{item.title}</strong>
                        )}
                        {item.meta && <span className="item-meta">{item.meta}</span>}
                      </div>
                      {item.titleLinkLabel && item.href && (
                        <a className="project-subheading" href={item.href} target="_blank" rel="noreferrer">
                          {item.titleLinkLabel}
                        </a>
                      )}
                      {item.secondary && (
                        <div className="item-subheading">
                          <strong>{item.secondary}</strong>
                          {item.secondaryMeta && <span>{item.secondaryMeta}</span>}
                        </div>
                      )}
                      {item.detail && <p>{item.detail}</p>}
                      {item.details && (
                        <ul className="item-details">
                          {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                        </ul>
                      )}
                      {item.links && (
                        <div className="item-links">
                          {item.links?.map((link) => (
                            <a
                              key={link.href}
                              className={link.variant ? `item-link item-link--${link.variant}` : undefined}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.icon === "npm" && <SiNpm className="item-link-icon" aria-hidden="true" />}
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>}
              {section.action && (
                <a className="button" href={section.action.href} target="_blank" rel="noreferrer">
                  {section.action.label} <Arrow />
                </a>
              )}
            </section>
          ))}
        </div>
      </div>
      <footer className="shell">© {new Date().getFullYear()} Uzafir A. Rafaq</footer>
    </main>
  );
}
