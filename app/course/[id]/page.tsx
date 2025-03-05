import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { Course, courses } from "@/lib/courses";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((course) => course.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{course.description}</p>

            <div className="flex items-center space-x-6 mb-6">
              <span className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-2" />
                {course.duration}
              </span>
              {course.students && (
                <span className="flex items-center text-gray-500">
                  <Users className="h-5 w-5 mr-2" />
                  {course.students} students
                </span>
              )}
              {course.rating !== undefined && course.rating > 0 && (
                <span className="flex items-center text-gray-500">
                  <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </span>
              )}
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full md:w-auto" variant="purple">
                Enroll Now for {course.price}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
