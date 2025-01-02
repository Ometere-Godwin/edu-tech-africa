import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    bio: "Former Google engineer with 15+ years of experience in tech education.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Head of Education",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    bio: "PhD in Computer Science, specialized in creating effective learning paths.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Instructor",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
    bio: "Full-stack developer with a passion for teaching and mentoring.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-purple-600"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
