// React and Next.js
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// UI Components
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Icons
import { Clock, Users, Star } from "lucide-react";

// Data
import { Course, courses } from "@/lib/courses";

// Generate static params for all course pages
export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

// Generate metadata for each course page
export function generateMetadata({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);
  
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }

  return {
    title: `${course.title} | TechEdu Africa`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: course.image ? [{ url: course.image }] : undefined,
    },
  };
}

function ImageSkeleton() {
  return (
    <div className="relative h-[400px]">
      <Skeleton className="h-full w-full" />
    </div>
  );
}

function ContentSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[240px] w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Main Content Skeleton */}
        <div className="grid content-start auto-rows-min gap-8">
          {/* Header Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="space-y-2 mb-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-[90%]" />
              <Skeleton className="h-5 w-[85%]" />
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-28" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-24" />
              </div>
            </div>
          </div>

          {/* Curriculum Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <div className="space-y-6">
              {[1, 2, 3].map((section) => (
                <div key={section}>
                  <Skeleton className="h-6 w-1/2 mb-2" />
                  <div className="space-y-2">
                    {[1, 2, 3].map((topic) => (
                      <Skeleton key={topic} className="h-4 w-3/4" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes Skeleton */}
          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((outcome) => (
                <Skeleton key={outcome} className="h-4 w-full" />
              ))}
            </div>
          </div> */}
        </div>

        {/* Sidebar Skeleton */}
        <div className="grid content-start auto-rows-min gap-8">
          {/* Instructors Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="space-y-6">
              {[1, 2].map((instructor) => (
                <div key={instructor} className="flex items-start gap-4">
                  <Skeleton className="h-16 w-16 rounded-full flex-shrink-0" />
                  <div className="flex-grow">
                    <Skeleton className="h-5 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="space-y-2">
              {[1, 2, 3].map((prerequisite) => (
                <div key={prerequisite} className="flex items-start gap-2">
                  <Skeleton className="h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                  <Skeleton className="h-5 flex-grow" />
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-8 w-1/3 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((outcome) => (
                <Skeleton key={outcome} className="h-4 w-full" />
              ))}
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseImage({ course }: { course: Course }) {
  const defaultImage = '/assests/student.jpg';
  const imageUrl: string = course.image ?? defaultImage;
  
  return (
   < div className="relative h-[400px]"> {/* Adjust width as needed */}
  <Image
    src={imageUrl}
    alt={course.title || 'Course Image'}
    fill
    className="object-cover r"
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    quality={90}
  />
</div>
  );
}

function CourseContent({ course }: { course: Course }) {
  const defaultImage = '/assests/student.jpg';
  const imageUrl: string = course.image ?? defaultImage;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[240px] w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <Image
          src={imageUrl}
          alt={course.title || 'Course Image'}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={90}
        />
      </div>
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Main Content */}
        <div className="grid content-start auto-rows-min gap-8">
          {/* Course Header */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-600" />
                <span>{course.rating} rating</span>
              </div>
            </div>
          </div>

          {/* Course Curriculum */}
          {course.curriculum && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-6">
                {course.curriculum.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-medium text-gray-800 mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-600">{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="grid content-start auto-rows-min gap-8">
          {/* What You'll Learn Section */}
          {course.learningOutcomes && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You&apos;ll Learn</h2>
              <ul className="space-y-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="flex-1">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prerequisites Section */}
          {course.prerequisites && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 marker:text-purple-600">
                {course.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructors Section */}
          {course.instructors && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Instructors</h2>
              <div className="space-y-6">
                {course.instructors.map((instructor, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={instructor.image || '/assets/default-avatar.jpg'}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{instructor.name}</h3>
                      <p className="text-gray-600">{instructor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enrollment Button */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Link 
              href={`/get-started?courseId=${encodeURIComponent(course.id)}`}
              className="block w-full bg-purple-600 text-white text-center py-3 px-4 rounded-md hover:bg-emerald-700 transform hover:scale-[1.02] transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
            >
              Enroll Now for {course.price ? `$${course.price.toLocaleString()}` : 'Free'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<ContentSkeleton />}>
        <CourseContent course={course} />
      </Suspense>
    </div>
  );
}
