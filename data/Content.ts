export const projectsData = [
  {
    id: "nexus-os",
    title: "Nexus OS",
    problem: "Fragmented productivity tools causing cognitive overload.",
    solution: "A unified system architecture for personal knowledge management.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    complexity: "High",
    lesson: "State management in complex systems requires strict immutability.",
    image: "https://picsum.photos/seed/nexus/1200/800",
    fullDesc: "Nexus OS is a comprehensive operating system for your digital life. It integrates task management, note-taking, and calendar events into a single, cohesive interface. The architecture is built on a micro-frontend approach, allowing for modular expansion and high performance."
  },
  {
    id: "ecostream",
    title: "EcoStream",
    problem: "Real-time environmental data was inaccessible to urban planners.",
    solution: "Distributed sensor network with a real-time visualization dashboard.",
    stack: ["Next.js", "Python", "MQTT", "D3.js"],
    complexity: "Medium",
    lesson: "Data visualization is only as good as the underlying data integrity.",
    image: "https://picsum.photos/seed/eco/1200/800",
    fullDesc: "EcoStream provides a real-time stream of environmental metrics across urban areas. Using a network of IoT sensors, it tracks air quality, noise levels, and traffic density. The data is then processed and visualized on an interactive map, enabling planners to make data-driven decisions."
  },
  {
    id: "vault-protocol",
    title: "Vault Protocol",
    problem: "Centralized storage solutions lack true user sovereignty.",
    solution: "Decentralized encryption layer for cross-chain data storage.",
    stack: ["Solidity", "Ethers.js", "IPFS", "React"],
    complexity: "Extreme",
    lesson: "Security is not a feature; it's a foundational constraint.",
    image: "https://picsum.photos/seed/vault/1200/800",
    fullDesc: "Vault Protocol is a decentralized storage solution that prioritizes user privacy and security. It uses end-to-end encryption and distributes data across multiple decentralized networks. Users maintain full control over their encryption keys, ensuring that only they can access their data."
  }
];

export const blogPostsData = [
  {
    id: "architecture-of-thought",
    title: "The Architecture of Thought",
    excerpt: "How mapping mental models can lead to better system design in software engineering.",
    category: "Philosophy",
    readTime: "6 min",
    date: "Mar 1, 2026",
    image: "https://picsum.photos/seed/thought/1200/800",
    content: `
      System design is often thought of as a purely technical endeavor. We talk about load balancers, database schemas, and API endpoints. But at its core, every system we build is a reflection of how we think about the problem it's meant to solve.

      When we map our mental models before writing a single line of code, we create a blueprint that is more resilient to change. This is the "Architecture of Thought." It involves identifying the core entities, their relationships, and the flows of information that define the system's behavior.

      By aligning the technical architecture with a clear mental model, we reduce cognitive load for developers and create a more intuitive experience for users.
    `
  },
  {
    id: "scaling-with-empathy",
    title: "Scaling with Empathy",
    excerpt: "Why human-centric design is the most important metric for any scalable system.",
    category: "UX Design",
    readTime: "4 min",
    date: "Feb 24, 2026",
    image: "https://picsum.photos/seed/empathy/1200/800",
    content: `
      As systems grow, it's easy to get lost in the metrics. We track uptime, latency, and throughput. But there's one metric that often gets overlooked: empathy.

      Scaling with empathy means considering the human impact of every technical decision. It's about ensuring that as the system becomes more complex, it doesn't become more difficult to use or understand.

      This requires a deep understanding of the user's needs and a commitment to simplicity. It means building systems that empower people rather than overwhelming them.
    `
  },
  {
    id: "future-of-web3",
    title: "The Future of Web3 Systems",
    excerpt: "Exploring the intersection of decentralized protocols and real-world utility.",
    category: "Tech",
    readTime: "8 min",
    date: "Feb 15, 2026",
    image: "https://picsum.photos/seed/web3/1200/800",
    content: `
      Web3 is more than just a buzzword. It's a fundamental shift in how we think about ownership and trust on the internet. But for Web3 to achieve widespread adoption, it needs to move beyond speculation and focus on real-world utility.

      The future of Web3 systems lies in the intersection of decentralized protocols and practical applications. This means building tools that solve real problems, such as decentralized identity, secure data storage, and transparent supply chains.

      As we build these systems, we must prioritize security and scalability, while also ensuring that they are accessible to everyone.
    `
  }
];

export const organizationsData = [
  {
    id: "global-tech",
    name: "Global Tech Community",
    role: "Regional Lead",
    period: "2023 - Present",
    desc: "Managing developer relations and organizing monthly meetups for over 1000 members. Focused on fostering a culture of knowledge sharing and technical excellence.",
    fullDesc: "As the Regional Lead for the Global Tech Community, I am responsible for overseeing all activities within the region. This includes coordinating with local chapters, securing sponsorships for events, and ensuring that our members have access to the resources they need to grow as developers. I have successfully organized several large-scale hackathons and conferences, bringing together hundreds of developers from diverse backgrounds.",
    impact: "Grew the local community by 150% and established partnerships with 10+ major tech firms.",
    gallery: [
      "https://picsum.photos/seed/org1-1/1200/800",
      "https://picsum.photos/seed/org1-2/1200/800",
      "https://picsum.photos/seed/org1-3/1200/800",
      "https://picsum.photos/seed/org1-4/1200/800"
    ]
  },
  {
    id: "open-source",
    name: "Open Source Collective",
    role: "Core Contributor",
    period: "2022 - 2023",
    desc: "Contributing to various open-source projects focused on system performance and developer tools. Advocating for open-source sustainability and best practices.",
    fullDesc: "My role at the Open Source Collective involved deep technical contributions to several high-profile projects. I focused on optimizing core libraries for better performance and creating comprehensive documentation to lower the barrier to entry for new contributors. I also represented the collective at various international conferences, sharing our mission and encouraging more developers to get involved in open source.",
    impact: "Contributed 500+ commits across 5 major projects, reducing average build times by 20%.",
    gallery: [
      "https://picsum.photos/seed/org2-1/1200/800",
      "https://picsum.photos/seed/org2-2/1200/800",
      "https://picsum.photos/seed/org2-3/1200/800"
    ]
  }
];
