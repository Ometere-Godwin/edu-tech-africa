import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Developer",
    company: "Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "The courses here transformed my career. The practical projects and expert guidance helped me land my dream job.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "UX Designer",
    company: "Design Studio",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Outstanding learning experience. The UI/UX courses are comprehensive and up-to-date with industry standards.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Data Scientist",
    company: "Analytics Inc",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    content: "The data science curriculum is excellent. Real-world projects and mentorship made all the difference.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied learners who have transformed their careers through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}