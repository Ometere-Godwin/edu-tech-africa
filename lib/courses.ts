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
}

export const courses: Course[] = [
  {
    id: "full-stack",
    title: "Full-Stack",
    description:
      "Master modern web development with React, Node.js, and MongoDB",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    duration: "24 weeks",
    students: 2500,
    rating: 4.8,
    price: "₦480,000",
    category: "Web Development",
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    description: "Understanding security principles and best practices",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    duration: "8 weeks",
    students: 800,
    rating: 4.7,
    price: "₦320,000",
    category: "Engineering",
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Build iOS and Android apps with React Native",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    duration: "24 weeks",
    students: 1200,
    rating: 4.9,
    price: "₦320,000",
    category: "Web Development",
  },
  {
    id: "data-analytics-engineering",
    title: "Data Analytics Engineering",
    description: "Learn Python, statistics, and machine learning basics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    duration: "24 weeks",
    students: 1800,
    rating: 4.7,
    price: "₦480,000",
    category: "Data Science",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Learn design principles and tools like Figma",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    duration: "6 weeks",
    students: 1500,
    rating: 4.8,
    price: "₦320,000",
    category: "Design",
  },
  {
    id: "motion-graphics-design-and-production",
    title: "Motion Graphics Design and Production",
    description: "Understanding security principles and best practices",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    duration: "8 weeks",
    students: 800,
    rating: 4.7,
    price: "₦365,000",
    category: "Security",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Master AWS, Azure, and cloud architecture",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    duration: "10 weeks",
    students: 0,
    rating: 0,
    price: "Coming Soon",
    category: "Cloud Computing",
    disabled: true,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Build iOS and Android apps with React Native",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    duration: "8 weeks",
    students: 0,
    rating: 0,
    price: "Coming Soon",
    category: "Web Development",
    disabled: true,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity (Coming Soon)",
    description:
      "Advanced cybersecurity training and certification preparation",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    duration: "Coming Soon",
    students: 0,
    rating: 0,
    price: "Coming Soon",
    category: "Cybersecurity",
    disabled: true,
  },
];

export type { Course };
