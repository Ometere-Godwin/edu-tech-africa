import Team from "@/components/about/Team"
import Stats from "@/components/about/Stats"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Africa's Next Generation of Tech Leaders
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to make technology education accessible, engaging, and effective for everyone across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At TechEdu Africa, we believe that quality education should be accessible to everyone. Our platform combines expert instruction, hands-on practice, and a supportive community to help you master the latest technologies.
              </p>
              <p className="text-gray-600">
                Whether you're starting your journey in tech or advancing your career, we're here to guide you every step of the way with industry-relevant curriculum and personalized learning paths tailored for the African context.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Team />
    </div>
  )
}