import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, CheckCircle, Award } from "lucide-react";
import { Course, courses } from "@/lib/courses";
import Image from "next/image";
import Link from "next/link";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="relative h-96 w-full">
            <Image
              src={course.image || ""}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">{course.description}</p>
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
              </div>
              <div className="w-full md:w-auto">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-4">{course.price}</div>
                  <Link href="/payment">
                    <Button size="lg" className="w-full" variant="purple">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            {course.learningOutcomes && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  What You&apo;ll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Course Curriculum */}
            {course.curriculum && (
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Course Curriculum
                </h2>
                <div className="space-y-6">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Prerequisites */}
            {course.prerequisites && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
                <ul className="space-y-3">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                      <span className="text-gray-600">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Instructors */}
            {course.instructors && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Your Instructors</h2>
                <div className="space-y-4">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="relative h-12 w-12">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{instructor.name}</h3>
                        <p className="text-sm text-gray-600">{instructor.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {course.features && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Course Features</h2>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
