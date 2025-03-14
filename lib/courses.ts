interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  students?: number;
  rating?: number;
  image?: string;
  category?: string;
  disabled?: boolean;
  curriculum?: {
    title: string;
    topics: string[];
  }[];
  learningOutcomes?: string[];
  prerequisites?: string[];
  instructors?: {
    name: string;
    role: string;
    image: string;
  }[];
  features?: string[];
}

export const courses: Course[] = [
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build complete web applications from front to back.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    duration: "24 weeks",
    students: 2500,
    rating: 4.8,
    price: "₦480,000",
    category: "Web Development",
    curriculum: [
      {
        title: "Frontend Development",
        topics: [
          "HTML5, CSS3, and Modern JavaScript",
          "React.js and State Management",
          "Responsive Design and CSS Frameworks",
          "Web Performance Optimization"
        ]
      },
      {
        title: "Backend Development",
        topics: [
          "Node.js and Express.js",
          "RESTful API Design",
          "Database Design with MongoDB",
          "Authentication and Authorization"
        ]
      },
      {
        title: "DevOps and Deployment",
        topics: [
          "Git Version Control",
          "CI/CD Pipelines",
          "Cloud Deployment (AWS/Vercel)",
          "Docker Containerization"
        ]
      }
    ],
    learningOutcomes: [
      "Build full-stack web applications from scratch",
      "Implement secure user authentication",
      "Design and optimize databases",
      "Deploy applications to cloud platforms",
      "Work with modern development tools"
    ],
    prerequisites: [
      "Basic understanding of HTML, CSS and JavaScript",
      "Familiarity with programming concepts",
      "Computer with internet connection",
      "Dedication to learn and practice"
    ],
    instructors: [
      {
        name: "Dr. Sarah Johnson",
        role: "Lead Full-Stack Instructor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      },
      {
        name: "Michael Chen",
        role: "Backend Development Expert",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
      }
    ],
    features: [
      "Live coding sessions",
      "Real-world projects",
      "24/7 Support community",
      "Career guidance",
      "Industry mentorship"
    ]
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    description: "Master backend development with focus on scalability, security, and best practices. Learn to build robust server-side applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    duration: "8 weeks",
    students: 800,
    rating: 4.7,
    price: "₦320,000",
    category: "Engineering",
    curriculum: [
      {
        title: "Server-Side Programming",
        topics: [
          "Advanced Node.js Concepts",
          "Express.js Framework Deep Dive",
          "Database Design Patterns",
          "API Security Best Practices"
        ]
      },
      {
        title: "Database Management",
        topics: [
          "SQL and NoSQL Databases",
          "Data Modeling",
          "Query Optimization",
          "Database Security"
        ]
      },
      {
        title: "System Architecture",
        topics: [
          "Microservices Architecture",
          "Message Queues",
          "Caching Strategies",
          "Load Balancing"
        ]
      }
    ],
    learningOutcomes: [
      "Design scalable backend systems",
      "Implement secure APIs",
      "Manage databases efficiently",
      "Handle high-traffic applications",
      "Deploy backend services"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of web protocols",
      "Command line familiarity",
      "Problem-solving skills"
    ],
    instructors: [
      {
        name: "Alex Turner",
        role: "Senior Backend Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      }
    ],
    features: [
      "Hands-on projects",
      "Industry case studies",
      "Code reviews",
      "Performance optimization workshops",
      "Security best practices"
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Master modern frontend development with React and related technologies. Create beautiful, responsive, and interactive user interfaces.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    duration: "24 weeks",
    students: 1200,
    rating: 4.9,
    price: "₦320,000",
    category: "Web Development",
    curriculum: [
      {
        title: "Modern JavaScript",
        topics: [
          "ES6+ Features",
          "Async Programming",
          "JavaScript Modules",
          "DOM Manipulation"
        ]
      },
      {
        title: "React Development",
        topics: [
          "React Fundamentals",
          "Hooks and State Management",
          "Component Patterns",
          "Performance Optimization"
        ]
      },
      {
        title: "Modern UI Development",
        topics: [
          "Responsive Design",
          "CSS-in-JS",
          "Animation and Transitions",
          "Accessibility"
        ]
      }
    ],
    learningOutcomes: [
      "Build modern React applications",
      "Create responsive layouts",
      "Implement state management",
      "Optimize frontend performance",
      "Write clean, maintainable code"
    ],
    prerequisites: [
      "HTML and CSS basics",
      "JavaScript fundamentals",
      "Basic command line usage",
      "Enthusiasm for UI/UX"
    ],
    instructors: [
      {
        name: "Emily Zhang",
        role: "Frontend Architecture Expert",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      }
    ],
    features: [
      "Interactive workshops",
      "Portfolio projects",
      "Modern tooling setup",
      "UI/UX principles",
      "Code reviews"
    ]
  },
  {
    id: "data-analytics-engineering",
    title: "Data Analytics Engineering",
    description: "Learn Python, statistics, and machine learning basics. Transform raw data into actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    duration: "24 weeks",
    students: 1800,
    rating: 4.7,
    price: "₦480,000",
    category: "Data Science",
    curriculum: [
      {
        title: "Python for Data Science",
        topics: [
          "Python Programming Fundamentals",
          "Data Manipulation with Pandas",
          "Data Visualization with Matplotlib",
          "Statistical Analysis"
        ]
      },
      {
        title: "Machine Learning Basics",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering"
        ]
      },
      {
        title: "Data Engineering",
        topics: [
          "Data Pipelines",
          "ETL Processes",
          "Big Data Technologies",
          "Data Warehousing"
        ]
      }
    ],
    learningOutcomes: [
      "Analyze complex datasets",
      "Build predictive models",
      "Create data visualizations",
      "Design data pipelines",
      "Make data-driven decisions"
    ],
    prerequisites: [
      "Basic mathematics knowledge",
      "Problem-solving ability",
      "Computer literacy",
      "Analytical mindset"
    ],
    instructors: [
      {
        name: "Dr. Maria Garcia",
        role: "Lead Data Scientist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
      }
    ],
    features: [
      "Real-world datasets",
      "Kaggle competitions",
      "Industry projects",
      "Data science tools",
      "Career mentorship"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Learn design principles and tools like Figma. Create beautiful and user-friendly digital experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    duration: "6 weeks",
    students: 1500,
    rating: 4.8,
    price: "₦320,000",
    category: "Design",
    curriculum: [
      {
        title: "Design Fundamentals",
        topics: [
          "Color Theory",
          "Typography",
          "Layout Principles",
          "Visual Hierarchy"
        ]
      },
      {
        title: "UX Research & Strategy",
        topics: [
          "User Research Methods",
          "Personas & Journey Maps",
          "Information Architecture",
          "Usability Testing"
        ]
      },
      {
        title: "UI Design with Figma",
        topics: [
          "Figma Fundamentals",
          "Component Design",
          "Prototyping",
          "Design Systems"
        ]
      }
    ],
    learningOutcomes: [
      "Create user-centered designs",
      "Build interactive prototypes",
      "Conduct user research",
      "Design responsive interfaces",
      "Develop design systems"
    ],
    prerequisites: [
      "Basic computer skills",
      "Eye for design",
      "Interest in user psychology",
      "Creative mindset"
    ],
    instructors: [
      {
        name: "Jessica Lee",
        role: "Senior UI/UX Designer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
      }
    ],
    features: [
      "Design portfolio",
      "Industry projects",
      "Design critiques",
      "Tool mastery",
      "Design community"
    ]
  },
  {
    id: "motion-graphics-design-and-production",
    title: "Motion Graphics Design and Production",
    description: "Learn to create stunning motion graphics and visual effects for digital media.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    duration: "8 weeks",
    students: 800,
    rating: 4.7,
    price: "₦365,000",
    category: "Design",
    curriculum: [
      {
        title: "Motion Design Basics",
        topics: [
          "Animation Principles",
          "After Effects Fundamentals",
          "Keyframe Animation",
          "Motion Typography"
        ]
      },
      {
        title: "Advanced Techniques",
        topics: [
          "Character Animation",
          "Visual Effects",
          "3D Integration",
          "Color Grading"
        ]
      },
      {
        title: "Production Workflow",
        topics: [
          "Project Planning",
          "Asset Management",
          "Rendering Optimization",
          "Delivery Formats"
        ]
      }
    ],
    learningOutcomes: [
      "Create professional motion graphics",
      "Master After Effects",
      "Design animated logos",
      "Produce video effects",
      "Build motion design portfolio"
    ],
    prerequisites: [
      "Basic design knowledge",
      "Familiarity with Adobe Creative Suite",
      "Understanding of visual principles",
      "Creative mindset"
    ],
    instructors: [
      {
        name: "David Wilson",
        role: "Motion Graphics Artist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      }
    ],
    features: [
      "Industry projects",
      "Portfolio development",
      "Software training",
      "Creative workshops",
      "Client simulation"
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Master AWS, Azure, and cloud architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    duration: "10 weeks",
    students: 0,
    rating: 0,
    price: "Coming Soon",
    category: "Cloud Computing",
    disabled: true
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Build iOS and Android apps with React Native",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    duration: "8 weeks",
    students: 0,
    rating: 0,
    price: "Coming Soon",
    category: "Web Development",
    disabled: true
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity (Coming Soon)",
    description: "Advanced cybersecurity training and certification preparation",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    duration: "Coming Soon",
    students: 0,
    rating: 0,
    price: "Coming Soon",
    category: "Cybersecurity",
    disabled: true
  }
];

export type { Course };
