import {
  Arabic,
  Call,
  Css,
  English,
  French,
  Gatsby,
  Globe,
  Html,
  Linkdin,
  NextIcon,
  Node,
  Pen,
  ReactIcon,
  TypeScript,
} from "@components/icons";

export const LANGUAGES = [
  { icon: <Arabic width={16} />, title: "Arabic", level: 4 },
  { icon: <English width={16} />, title: "English", level: 3 },
  { icon: <French width={16} />, title: "French", level: 2 },
];

export const CONTACTS = [
  { icon: <Pen width={16} />, title: "Morocco Marrakech" },
  { icon: <Call width={16} />, title: "+212 6 3037 1320" },
  { icon: <Linkdin width={16} />, title: "hamza-miloud-amar-463b24167" },
  { icon: <Globe width={16} />, title: "https://miloudamar.com/" },
];

export const SKILLS = [
  { icon: <Css width={16} />, title: "Css", level: 4 },
  { icon: <ReactIcon width={16} />, title: "React js", level: 4 },
  { icon: <NextIcon width={16} />, title: "Next js", level: 4 },
  { icon: <Html width={16} />, title: "HTML", level: 4 },
  { icon: <TypeScript width={16} />, title: "TypeScript", level: 4 },
  { icon: <Node width={16} />, title: "Javascript", level: 4 },
  { icon: <Html width={16} />, title: "Remix", level: 4 },
  { icon: <Gatsby width={16} />, title: "Gatsby", level: 2 },
  { icon: <Node width={16} />, title: "NodeJS", level: 2 },
];

export const EDUCATIONS = [
  {
    id: "pillar-1",
    title: "Pillar-UI",
    date: "2023/03 - Present",
    lists: [
      "Reduced CSS bundle size by 20% through custom methodology, accelerating feature delivery by 40% via improved reusability.",
      "Engineered 11KB design system (9x smaller than React alternatives) using CSS variables + utility-first architecture, eliminating CSS-in-JS dependency and the need for a global state.",
      "Saved 10KB through atomic naming patterns, enhancing runtime performance and project bundle size.",
      "Achieved 95% WCAG AA compliance, validated with Axe and Playwright, reducing accessibility issues by 80%. Ensured key features like color contrast, focus management, motion preferences, and high contrast mode compatibility.",
      "Managed development using GitHub Projects, streamlining sprint planning and issue tracking, and ensuring 95%+ on-time delivery across sprints.",
    ],
    skills: [
      "React",
      "Turborepo",
      "Rollup",
      "PostCSS",
      "Storybook",
      "Typescript",
      "Chromatic",
      "Axe",
      "Playwright",
      "React testing library",
      "Tsup",
      "Changeset",
    ],
  },
  {
    id: "open-hand-2",
    title: "Open Hand Morocco",
    date: "2024/11 - 2024/12",
    lists: [
      "Designed UI markup and defined acceptance criteria in Figma, establishing a cohesive visual identity that reduced design-dev back-and-forth by 50% and accelerated development.",
      "Built the interface with Pillar UI, delivering a clean, responsive, and intuitive experience with Fast Content Paint (FCP), ensuring a modern feel by default.",
      "Achieved exceptional Core Web Vitals in local audits (LCP: 0.56s, CLS: 0.00), significantly enhancing perceived performance and user satisfaction.",
      "Ensured WCAG compliance from day one by embedding accessibility into the design and development workflow, making the product usable by a broader audience and compliant with industry standards.",
      "Adopted Next.js 15 with React Server Components, optimizing Time to Interactive and enabling faster, more seamless server-side rendering ideal for SEO-focused projects.",
    ],
    skills: [
      "React",
      "Next-15",
      "Node",
      "Express",
      "MongoDB",
      "Typescript",
      "Zod",
      "Pillar-ui",
      "Axe",
      "SCSS",
    ],
  },
  {
    id: "pillar-dashboard-3",
    title: "Pillar-Ui Dashboard",
    date: "2024/07 - PRESENT",
    lists: [
      "Developed framework-agnostic dashboard compatible with Next.js, Remix, and major routers, reducing integration time by 90%",
      "Implemented a modular design system using Pillar UI, enabling effortless theming and design updates by modifying a single directory, thereby reducing design refresh time and simplifying maintenance for multiple clients.",
      "Engineered a high-performance React dashboard, reducing initial load time by ~40% through strategic code splitting and lazy loading, enhancing user experience and responsiveness.",
      "Maintained quality through atomic component testing (vitest, React Testing Library) and automated accessibility audits (Axe + Playwright).",
    ],
    skills: [
      "React",
      "React-router-dom-V7",
      "recharts",
      "Typescript",
      "React testing library",
      "axe",
      "playwright",
      "Vitest",
      "Pillar-ui",
      "SCSS",
    ],
  },
  {
    id: "account-firm-4",
    title: "Accounting Firm",
    date: "2024/03 - 2024/09",
    lists: [
      "Architected and built the core user interface for a medium-sized accounting firm application using React, Next.js (SSR/ISR/SSG), and TypeScript, delivering a fast, intuitive experience tailored to complex financial workflows.",
      "Optimized data fetching with React Server Components and React Server Actions to eliminate waterfall requests and leverage intelligent cache strategies, cutting average page load times from 1.8 s to 1.2 s (a 33% improvement).",
      "Implemented responsive, accessible financial dashboards with Recharts, providing real-time visibility into key KPIs (cash flow, balance sheets, P&L) and reducing user support requests related to reporting by 20%.",
      "Collaborated daily with the backend team using REST APIs, Zod validation, and shared TypeScript interfaces to streamline integration, enforce data integrity, and achieve < 1% error rate in frontend-backend communication.",
      "Introduced performance profiling via Lighthouse and Web Vitals, identified bottlenecks in large-dataset rendering, then applied code-splitting and lazy loading to reduce bundle size by 18%, improving Time To Interactive (TTI) by 25%.",
    ],
    skills: [
      "React 18",
      "Next 14",
      "Recharts",
      "Typescript",
      "React testing library",
      "Axe",
      "playwright",
      "Vitest",
      "Pillar-ui",
      "Confluence",
      "Jira",
    ],
  },
];

export const BOOKS = [
  { key: "1", title: "CSS Secrets (By Lea Varou)" },
  { key: "2", title: "Form Design Pattern" },
  { key: "3", title: "Every Layout" },
  { key: "4", title: "Inclusive Components" },
  { key: "5", title: "Inclusive Design Pattern" },
  { key: "6", title: "Designing with Progressive Enhancement" },
  {
    key: "7",
    title:
      "J. David Eisenberg, Amelia Bellamy-Royds - SVG Essentials",
  },
  { key: "8", title: "Debugging css By Ahmad Shadeed" },
  {
    key: "9",
    title: "Estelle Weyl - Transitions and Animations in CSS",
  },
  {
    key: "10",
    title:
      "Software Engineering at Google Lessons Learned from Programming Over Time",
  },
  { key: "11", title: "Building large scale web apps" },
];
