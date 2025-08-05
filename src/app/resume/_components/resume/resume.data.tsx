import {
  Arabic,
  Call,
  English,
  French,
  Github,
  Globe,
  Linkdin,
  Pen,
} from "@components/icons";

export const LANGUAGES = [
  { icon: <Arabic width={16} />, title: "Arabic", level: 4 },
  { icon: <English width={16} />, title: "English", level: 3 },
  { icon: <French width={16} />, title: "French", level: 2 },
];

export const CONTACTS = [
  { icon: <Pen width={16} />, title: "Morocco Marrakech" },
  { icon: <Call width={16} />, title: "+212 630-371-320" },
  { icon: <Linkdin width={16} />, title: "hamza-miloud-amar-463b24167" },
  { icon: <Github width={16} />, title: "https://github.com/HamzaAmar" },
  { icon: <Globe width={16} />, title: "https://miloudamar.com" },
];

export const SKILLS: [string, string[]][] = [
  ["Frontend", [
    "React",
    "TypeScript",
    "CSS",
    "Next.js",
  ]],
  ["Testing", [
    "Jest",
    "Vitest",
    "React Testing Library",
    "Storybook",
    "Playwright",
    "Axe",
    "MSW",
    "Chromatic",
    "Vitest Browser Mode",
  ]],
  ["Tools", [
    "Git",
    "Webpack",
    "Rollup",
    "Tsup",
    "Turborepo",
    "PostCSS",
    "SCSS",
    "Changeset",
    "Jira",
    "Confluence",
    "Trello",
    "Figma",
    "FigJam",
    "Loom",
    "Slack",
    "VisBug",
  ]],
  ["Methodologies", [
    "Agile / Scrum",
    "TDD",
    "Atomic Design",
    "CUBE CSS",
    "BEM",
    "ITCSS",
    "Pillar CSS",
  ]],
  ["Scaling", [
    "Core Web Vitals",
    "Bundle optimization",
    "Caching strategies",
    "Data Fetching Strategies",
    "Lighthouse",
    "Bundle analysis",
    "Monitoring",
    "Observability",
  ]],
  ["Leadership & Collaboration", [
    "Cross-functional Team leadership",
    "Technical mentorship",
    "Code Review",
  ]],
  ["Architecture", [
    "Design systems",
    "Server-side rendering",
    "Server Components",
    "Static Site Generation",
    "Single Page Application",
  ]],
];

export const EXPERIENCES = [
  {
    id: "pillar-1",
    title: "UI library | Pillar UI",
    date: "2023/03 - Present",
    lists: [
      "Built a high-performance 11KB design system, prioritizing bundle size and delivering a noticeable improvement in application speed.",
      "Reduced CSS bundle size by 35% (25KB) through a custom optimization methodology, atomic naming, fluid layout, and relative values for better reusability, significantly boosting runtime performance.",
      "Implemented a scalable theming strategy using CSS variables rather than CSS-in-JS solutions, which led to a smaller bundle size and a flexible structure that is easy to customize.",
      "Ensured exceptional accessibility, reaching 95% WCAG AA compliance through automated testing with Axe, Storybook, and Playwright, which consistently reduced accessibility issues.",
      "Elevated the user experience with seamless dark mode and RTL support, alongside comprehensive compatibility for color contrast, focus management, motion preferences, text resizing, and high contrast modes, accelerating user adoption.",
      "Managed development using GitHub Projects, streamlining sprint planning and issue tracking, and ensuring 95%+ on-time delivery across sprints.",
    ],
    tags: ["Creator", "Open Source"],
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
    id: "acreative-lead-frontend",
    title: "Lead Frontend Developer | Acrative",
    date: "2023/12 - 2025/02",
    tags: ["Part Time", "Freelancer"],
    lists: [
      "Designed comprehensive UI markup and defined acceptance criteria in Figma, establishing a cohesive visual identity that reduced design-dev back-and-forth by 30% and accelerated development timelines.",
      "Collaborated with the team to elevate code quality by replacing the legacy test pyramid with a modern testing trophy strategy. Refactored and rewrote flaky and brittle tests, leading to an 85% reduction in production bugs and transforming our test suite into a reliable, high-confidence safety net.",
      "Worked alongside closely with Product Owners and back-end developers, implementing API integrations, data fetching patterns, and caching strategies within agile development workflows.",
      "Optimized application performance by implementing advanced techniques including code splitting, lazy loading, image optimization, resource hints, and rendering patterns, resulting in improved Core Web Vitals metrics and enhanced user experience.",
      "Led migration from Next.js 10 to Next.js 15, integrating React Server Components and Server Actions to improve Largest Contentful Paint (LCP) metrics and enhance progressive enhancement.",
      "Built and architected a scalable design system for multiple platforms (OpenHandMorocco, HunaBook, and Admin dashboards) using React.js, Angular, and TypeScript, resulting in 20% increase development efficiency and ensuring consistent design implementation across all projects.",
    ],
    skills: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "Figma",
      "Jest",
      "Playwright",
      "Storybook",
      "vitest",
      "Axe",
      "SCSS",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "frontend-developer-freelance",
    title: "Frontend Developer",
    date: "2019/06 - PRESENT",
    tags: ["Freelance"],
    lists: [
      "Refactored and optimized the CSS codebase by implementing (ITCSS, BEM) architecture, modern layout practices, fluid layout, and CSS variables for theming. This initiative significantly improved code quality, resolved cascade issues, and enabled easier maintenance and feature development.",
      "Architected a scalable React + TypeScript frontend using Atomic Design to retire legacy jQuery code, boosting maintainability of Chaabi lil Iskan’s internal apps.",
      "Mentored junior and mid-level engineers moving from Angular and jQuery to React + TypeScript. By conducting hands-on workshops and 1:1 coaching covering React fundamentals, Thinking in React, rendering strategies, and data-fetching patterns, helping them shift to a modern, declarative frontend mindset.",
      "Created a custom React dashboard solution using React, TypeScript, and Next.js, featuring 5 pre-built design systems and comprehensive support for React meta-frameworks, helping streamline development workflow and maintain up-to-date, modern web applications.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Atomic Design",
      "ITCSS",
      "BEM",
      "CSS",
      "SCSS",
      "jQuery",
      "Frontend Architecture",
    ],
  },
  {
    id: "fullstack-developer-freelance",
    title: "Full-Stack Developer",
    date: "2015/06 - 2018/11",
    tags: [
      "Freelance",
    ],
    lists: [
      "Built full-stack apps for local businesses e-commerce, car wash, gaming, and booking platforms, boosting engagement and streamlining operations.",
      "Built and designed comprehensive applications including an Accounting Firm management system and Excel Learning Group platform for Marrakech.",
      "Collaborated with cross-functional teams to design and illustrate game characters for mobile games published on the Google Play Store.",
    ],
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Full-Stack Development",
      "JavaScript",
      "Game Design",
      "UI/UX",
      "Cross-Functional Collaboration",
    ],
  },
];

export const Education = {
  title: "ISTA NTIC SYBA, Marrakech — Diploma in IT Development Techniques",
  date: "2013/09 - 2015/06",
};
export const Interests = [
  "Video Editing",
  "Open Source Contributions",
  "History Enthusiast",
  "Technical Writing",
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
