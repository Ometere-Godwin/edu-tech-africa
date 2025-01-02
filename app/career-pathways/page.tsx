import { CareerPathCard } from "@/components/career-pathways/CareerPathCard"
import { careerPaths } from "@/components/career-pathways/careerPathsData"

export default function CareerPathwaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Pathways in Tech
          </h1>
          <p className="text-xl text-gray-600">
            Discover structured learning paths that will guide you towards your dream tech career in Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path) => (
            <CareerPathCard key={path.id} {...path} />
          ))}
        </div>
      </div>
    </div>
  )
}