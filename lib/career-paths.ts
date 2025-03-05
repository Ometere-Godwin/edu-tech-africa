interface CareerPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  careers: readonly string[];
  courses: readonly string[];
}

export const careerPaths: readonly CareerPath[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build modern web applications and become a full-stack developer",
    duration: "12-16 weeks",
    careers: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Web Application Architect",
    ],
    courses: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Database Design",
    ],
  },
  // Add more career paths here
] as const;

export type { CareerPath };
