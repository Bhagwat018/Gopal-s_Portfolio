export interface ProjectLink {
  label: string;
  url: string;
  type: "app-store" | "play-store" | "web" | "npm" | "github" | "external";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "all" | "apps" | "sdk";
  badge: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  preview: {
    accentColor: string;
    label: string;
    sublabel: string;
    stat: string;
    metricLabel: string;
  };
}

export interface NpmPackage {
  id: string;
  title: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  installCommand: string;
  version: string;
  downloads: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface MilestoneHighlight {
  title: string;
  description: string;
  icon: "smartphone" | "zap" | "shield-check" | "award";
  bgColor: "bg-clay-sky" | "bg-clay-pink" | "bg-clay-mint" | "bg-clay-peach";
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: "smartphone" | "cloud" | "credit-card" | "wrench";
  bgColor: "bg-clay-sky" | "bg-clay-mint" | "bg-clay-peach" | "bg-clay-pink";
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_DATA = {
  profile: {
    name: "Gopal Bhagwat",
    initials: "GB",
    title: "Mobile Engineer specializing in React Native",
    location: "Indore, India",
    email: "gopalbhagwat21@gmail.com",
    phone: "+91 6267957589",
    phoneDisplay: "+91 62679 57589",
    telUrl: "tel:+916267957589",
    whatsappUrl: "https://wa.me/916267957589",
    github: "https://github.com/Bhagwat018",
    linkedin: "https://www.linkedin.com/in/gopal-bhagwat-a22b02247/",
    tagline: "import { Dev } from 'react-native'",
    resumeUrl: "/resume.pdf",
    shortSummary:
      "Results-driven Mobile Engineer with 2.5+ years of React Native experience delivering 6+ production apps for iOS, Android, and Amazon.",
    longSummary:
      "I specialize in cross-platform mobile app development, native bridging (Kotlin/Swift), and real-time streaming integrations. Recipient of the Code Commander Award 2025 for outstanding technical contributions and project delivery.",
    stats: [
      { value: "2.5+", label: "Years experience", bgColor: "bg-accent" },
      { value: "6+", label: "Production apps published", bgColor: "bg-clay-sky" },
      { value: "2025", label: "Code Commander Award", bgColor: "bg-clay-pink" },
    ],
    pills: [
      "2.5+ yrs experience",
      "6+ apps published",
      "Indore, MP, India",
    ],
    phoneStats: {
      time: "09:41",
      network: "5G ●●●",
      todayBuilds: "6+ production apps shipped",
      fpsTarget: "60.0",
      crashFree: "99.9%",
      buildStatus: "✓ Build passed (iOS/Android)",
    },
  },

  marqueeSkills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Kotlin",
    "Java",
    "React Native",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Firebase",
    "SQLite",
    "Native Modules",
    "In-App Purchases",
    "shadcn-rn",
    "AWS IVS",
  ],

  milestoneHighlights: [
    {
      title: "6+ Production Apps Published",
      description:
        "Shipped & maintained high-performing live apps on Apple App Store, Google Play Store, and Amazon Appstore.",
      icon: "smartphone",
      bgColor: "bg-clay-sky",
    },
    {
      title: "Native Bridging (Kotlin/Swift)",
      description:
        "Engineered Turbo Module bridges & robust React Native native wrappers connecting Android and iOS SDKs to enterprise apps.",
      icon: "zap",
      bgColor: "bg-clay-pink",
    },
    {
      title: "Offline-First & Hermes Engine",
      description:
        "Engineered encrypted SQLite persistence and Hermes runtime optimizations, cutting initial app load times by 35%.",
      icon: "shield-check",
      bgColor: "bg-clay-mint",
    },
    {
      title: "Code Commander Award 2025",
      description:
        "Honored with Code Commander Award 2025 for outstanding technical contributions, code quality, and on-time project delivery.",
      icon: "award",
      bgColor: "bg-clay-peach",
    },
  ] as MilestoneHighlight[],

  experiences: [
    {
      company: "5Exceptions Software Solutions Pvt Ltd",
      role: "React Native SDK Developer",
      period: "May 2026 — Present",
      location: "Indore, MP, India",
      current: true,
      description:
        "Engineered robust React Native bridges for complex native Android/iOS SDKs, enforcing strict PR workflows and managing end-to-end NPM deployments.",
      responsibilities: [
        "Architect and engineer robust React Native bridges and Turbo Modules for complex native Android (Kotlin) and iOS (Swift) SDKs",
        "Enforce strict PR workflows, automated code analysis, and high testing standards across cross-platform repositories",
        "Manage end-to-end NPM deployments, semantic versioning, and distribution for enterprise-facing SDK packages",
        "Interface directly with core native engineering teams to resolve low-level concurrency and memory bottlenecks",
        "Design clear TypeScript type definitions and ergonomic API interfaces for consumer developers",
        "Ensure full compatibility across React Native architectures including Old Architecture and New Architecture (TurboModules)",
      ],
      technologies: [
        "React Native",
        "Turbo Modules",
        "Kotlin",
        "Swift",
        "Android Studio",
        "Xcode",
        "TypeScript",
        "NPM Registry",
        "CI/CD Workflows",
      ],
    },
    {
      company: "Ideal IT Techno Pvt Ltd",
      role: "React Native Developer",
      period: "Apr 2024 — May 2026",
      location: "Indore, MP, India",
      current: false,
      description:
        "Architected 3+ major React Native apps. Engineered offline-first architectures with SQLite and optimized runtime performance through Hermes, cutting load times by 35%.",
      responsibilities: [
        "Architected 3+ major production apps from initial system design to App Store and Google Play publication",
        "Engineered offline-first architectures with SQLite, handling background synchronization and local-first data caching",
        "Optimized runtime performance and bundle execution via Hermes engine, slashing launch times by 35%",
        "Integrated In-App Purchases (StoreKit & Google Play Billing) with backend verification and receipt validation",
        "Collaborated with UI/UX designers to implement pixel-perfect micro-animations and responsive component libraries",
        "Recipient of the prestigious Code Commander Award 2025 for technical excellence and impact",
      ],
      technologies: [
        "React Native CLI",
        "SQLite (Offline-First)",
        "Hermes Engine",
        "In-App Purchases (StoreKit & Billing)",
        "Firebase",
        "Redux Toolkit",
        "Google Play Console",
      ],
    },
  ] as Experience[],

  education: {
    degree: "MCA (Master of Computer Applications)",
    institution: "DAVV, Indore",
    period: "2021 — 2023",
    grade: "6.9 CGPA",
  } as Education,

  award: {
    title: "Code Commander Award 2025",
    issuer: "Ideal IT Techno Pvt Ltd",
    year: "2025",
    description: "Awarded for outstanding technical contributions, high-impact delivery, and excellence in mobile architecture.",
  } as Award,

  featuredProjects: [
    {
      id: "truvideo",
      title: "TruVideo",
      subtitle: "Enterprise Automotive SDK & Turbo Modules",
      category: "Mobile SDK • Android & iOS",
      type: "sdk",
      badge: "Turbo Module Bridges",
      description:
        "React Native and Turbo Module bridges for an enterprise automotive SDK. Seamlessly connects native Android (Kotlin) and iOS (Swift) subsystems to enterprise applications with high-throughput native messaging.",
      tags: ["React Native", "Turbo Modules", "Kotlin", "Swift", "Android SDK", "iOS SDK", "JNI"],
      preview: {
        accentColor: "bg-clay-sky",
        label: "TurboModule Bridge Diagnostics",
        sublabel: "Active Kotlin/Swift IPC Link",
        stat: "1.2ms",
        metricLabel: "IPC Roundtrip Latency",
      },
      links: [
        {
          label: "Website",
          url: "https://truvideo.com/",
          type: "web",
        },
      ],
    },
    {
      id: "kickscore",
      title: "KickScore",
      subtitle: "Real-Time Sports Platform (100K+ Users)",
      category: "Mobile App & Web Platform",
      type: "apps",
      badge: "100K+ Active Users",
      description:
        "Cross-platform mobile application and web platform delivering real-time sports scores to 100K+ users with sub-second WebSocket updates, comprehensive live match stats, dynamic feeds, and push notifications.",
      tags: ["React Native", "Next.js", "WebSockets", "Firebase", "Redux Toolkit", "Tailwind CSS"],
      preview: {
        accentColor: "bg-accent",
        label: "Live Scoreboard Feed",
        sublabel: "Sub-Second WebSocket Sync",
        stat: "100K+",
        metricLabel: "Active Mobile Users",
      },
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.app.kickscore",
          type: "play-store",
        },
        {
          label: "Web Platform",
          url: "https://www.kickscore.ng/",
          type: "web",
        },
      ],
    },
    {
      id: "visualible",
      title: "Visualible",
      subtitle: "AI-Powered Contextual eBook Reader Platform",
      category: "Mobile App & Web Platform",
      type: "apps",
      badge: "Custom EPUB Engine",
      description:
        "A comprehensive digital reading platform with a custom EPUB reader engine, inline AI context lookup, encrypted SQLite offline storage, authentication, and StoreKit/Google Play billing.",
      tags: ["React Native CLI", "TypeScript", "EPUB.js", "Firebase", "SQLite", "Next.js"],
      preview: {
        accentColor: "bg-clay-sky",
        label: "AI Contextual eBook Reader",
        sublabel: "Inline Knowledge Graph Lookup",
        stat: "60 FPS",
        metricLabel: "Page Rendering Speed",
      },
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.visualible&pcampaignid=web_share",
          type: "play-store",
        },
        {
          label: "Website",
          url: "https://visualible.com/",
          type: "web",
        },
      ],
    },
    {
      id: "veels",
      title: "Veels",
      subtitle: "Mobile Video Streaming & Media Discovery",
      category: "Mobile App • Streaming & OTT",
      type: "apps",
      badge: "HLS Video Streaming",
      description:
        "High-performance mobile video streaming and media discovery application. Engineered smooth vertical video feed scrolling, custom HLS streaming player with adaptive bitrate, user authentication, and offline caching.",
      tags: ["React Native", "HLS Player", "Video Streaming", "TypeScript", "Redux Toolkit", "REST APIs"],
      preview: {
        accentColor: "bg-clay-pink",
        label: "Adaptive HLS Video Engine",
        sublabel: "Dynamic Buffer & Feed Preload",
        stat: "0.4s",
        metricLabel: "Playback Startup Latency",
      },
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.veelsappstreaming&pcampaignid=web_share",
          type: "play-store",
        },
      ],
    },
  ] as Project[],

  independentProjects: [
    {
      id: "savekit",
      title: "SaveKit",
      subtitle: "Offline-First Mobile Utility & Status Tool",
      category: "Independent App • Solo Developed",
      type: "apps",
      badge: "Offline-First SQLite",
      description:
        "Independently created and published offline-first mobile utility utilizing robust local SQLite persistence and Google AdMob monetization. Built for frictionless media management, instant local file scanning, and bulletproof offline reliability.",
      tags: ["React Native CLI", "SQLite", "Google AdMob", "TypeScript", "Android & iOS"],
      preview: {
        accentColor: "bg-clay-mint",
        label: "Encrypted SQLite Engine",
        sublabel: "Local Offline-First Persistence",
        stat: "0ms",
        metricLabel: "Offline Query Delay",
      },
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.saverpro.status",
          type: "play-store",
        },
      ],
    },
    {
      id: "invoicely",
      title: "Invoicely",
      subtitle: "Offline Proforma & Tax Invoice Suite",
      category: "Independent App • Solo Developed",
      type: "apps",
      badge: "Local Data Handling",
      description:
        "Independently created offline proforma and tax invoice React Native app tailored for robust local data handling, offline client ledgers, itemized invoice calculation, and on-device PDF export without server roundtrips.",
      tags: ["React Native", "SQLite", "PDF Generator", "TypeScript", "Redux Toolkit"],
      preview: {
        accentColor: "bg-clay-peach",
        label: "Local Ledger & PDF Generator",
        sublabel: "On-Device Invoice Compilation",
        stat: "100%",
        metricLabel: "Offline Availability",
      },
      links: [
        {
          label: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.invoicely",
          type: "play-store",
        },
      ],
    },
  ] as Project[],

  npmPackages: [
    {
      id: "layout-kit",
      title: "react-native-responsive-layout-kit",
      name: "react-native-responsive-layout-kit",
      description:
        "Pure TypeScript utility package for cross-platform UI development. Provides dynamic scaling, percentage dimensions, aspect ratio controls, and screen-size responsive hooks.",
      tags: ["TypeScript", "React Native", "Zero-Dependency", "Responsive UI"],
      url: "https://www.npmjs.com/package/react-native-responsive-layout-kit",
      installCommand: "npm i react-native-responsive-layout-kit",
      version: "v1.2.0",
      downloads: "Active on NPM",
    },
    {
      id: "shimmer-craft",
      title: "react-native-shimmer-craft",
      name: "react-native-shimmer-craft",
      description:
        "Advanced UI loading skeletons and shimmer effects for React Native. Delivers smooth, 60 FPS placeholder animations with customizable gradients and layout shapes.",
      tags: ["React Native", "Reanimated", "TypeScript", "Shimmer UI"],
      url: "https://www.npmjs.com/package/react-native-shimmer-craft",
      installCommand: "npm i react-native-shimmer-craft",
      version: "v1.0.4",
      downloads: "Active on NPM",
    },
  ] as NpmPackage[],

  skillCategories: [
    {
      title: "Core & Mobile Development",
      icon: "smartphone",
      bgColor: "bg-clay-sky",
      skills: [
        { name: "React Native", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "Kotlin", highlight: true },
        { name: "Java", highlight: true },
        { name: "React.js", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Redux Toolkit", highlight: false },
        { name: "Offline-First Architecture", highlight: true },
        { name: "SQLite", highlight: false },
        { name: "Hermes Optimization", highlight: true },
        { name: "Tailwind CSS", highlight: false },
      ],
    },
    {
      title: "Native Bridging & Modules",
      icon: "wrench",
      bgColor: "bg-clay-pink",
      skills: [
        { name: "Turbo Modules (New Arch)", highlight: true },
        { name: "Native Android Bridges", highlight: true },
        { name: "Native iOS Bridges (Swift)", highlight: true },
        { name: "JNI / C++ Bindings", highlight: false },
        { name: "NPM Package Publishing", highlight: true },
        { name: "SDK Architecture", highlight: true },
        { name: "CI/CD & Semantic Release", highlight: false },
      ],
    },
    {
      title: "Cloud & Real-time Services",
      icon: "cloud",
      bgColor: "bg-clay-mint",
      skills: [
        { name: "Firebase (Auth, Firestore)", highlight: true },
        { name: "AWS IVS Streaming", highlight: true },
        { name: "WebSockets", highlight: true },
        { name: "REST APIs", highlight: false },
        { name: "Push Notifications (FCM)", highlight: false },
        { name: "Google AdMob", highlight: false },
      ],
    },
    {
      title: "Billing, Tooling & Design",
      icon: "credit-card",
      bgColor: "bg-clay-peach",
      skills: [
        { name: "In-App Purchases (StoreKit)", highlight: true },
        { name: "Google Play Billing", highlight: true },
        { name: "Amazon Kindle IAP", highlight: true },
        { name: "shadcn-rn", highlight: true },
        { name: "Android Studio & Xcode", highlight: false },
        { name: "Google Play Console", highlight: false },
        { name: "Git & Strict PR Workflows", highlight: false },
      ],
    },
  ] as SkillCategory[],

  whatIDo: [
    {
      emoji: "📱",
      title: "Mobile App Engineering",
      description:
        "Build and ship scalable Android and iOS apps with React Native CLI, from the first screen to App Store & Google Play approval.",
      bgColor: "bg-clay-sky",
    },
    {
      emoji: "🌉",
      title: "Native SDK Bridging",
      description:
        "Engineer high-performance Turbo Modules and native bridges connecting Kotlin and Swift SDKs directly into React Native applications.",
      bgColor: "bg-clay-pink",
    },
    {
      emoji: "⚡",
      title: "Performance & Offline-First",
      description:
        "Optimize startup latency, leverage Hermes bytecode compilation, eliminate re-render storms, and build robust offline-first SQLite architectures.",
      bgColor: "bg-clay-mint",
    },
    {
      emoji: "📦",
      title: "Open Source & NPM Tooling",
      description:
        "Design, maintain, and publish battle-tested open-source libraries and responsive layout tools for the global React Native developer ecosystem.",
      bgColor: "bg-clay-peach",
    },
  ],
};
