"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock, Briefcase, BookOpen } from "lucide-react";

interface CareerPathCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  careers: readonly string[];
  courses: readonly string[];
}

export function CareerPathCard({
  id,
  title,
  description,
  duration,
  careers,
  courses,
}: CareerPathCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Briefcase className="h-4 w-4 mr-2 text-purple-600" />
            <span className="font-medium text-gray-900">
              Career Opportunities:
            </span>
          </div>
          <ul className="list-disc list-inside text-gray-600 ml-6 space-y-1">
            {careers.map((career) => (
              <li key={career}>{career}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
            <span className="font-medium text-gray-900">Included Courses:</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 ml-6 space-y-1">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>

        <Button
          className="w-full"
          onClick={() => router.push(`/courses?path=${id}`)}
        >
          View Courses
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
