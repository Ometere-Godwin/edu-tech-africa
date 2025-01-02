import PricingCard from "@/components/pricing/PricingCard"

export default function PricingPage() {
  const plans = [
    {
      title: "Basic",
      price: "$29",
      description: "Perfect for getting started with tech learning",
      features: [
        "Access to basic courses",
        "Community forum access",
        "Email support",
        "Course completion certificates",
        "Basic project templates"
      ]
    },
    {
      title: "Pro",
      price: "$79",
      description: "Most popular choice for aspiring developers",
      features: [
        "Access to all courses",
        "Priority support",
        "Live mentoring sessions",
        "Advanced project templates",
        "Career guidance"
      ],
      recommended: true
    },
    {
      title: "Enterprise",
      price: "$199",
      description: "Ideal for teams and organizations",
      features: [
        "Custom learning paths",
        "Dedicated success manager",
        "Team analytics dashboard",
        "API access",
        "Custom integrations"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom plan?</h2>
          <p className="text-gray-600 mb-8">
            Contact us for custom pricing and requirements
          </p>
          <button className="text-purple-600 font-semibold hover:text-purple-700">
            Contact Sales →
          </button>
        </div>
      </div>
    </div>
  )
}