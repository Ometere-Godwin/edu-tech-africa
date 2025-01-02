export default function Stats() {
  const stats = [
    { label: "Students Worldwide", value: "50,000+" },
    { label: "Course Completion Rate", value: "94%" },
    { label: "Expert Instructors", value: "100+" },
    { label: "Enterprise Clients", value: "200+" }
  ]

  return (
    <section className="bg-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-purple-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}