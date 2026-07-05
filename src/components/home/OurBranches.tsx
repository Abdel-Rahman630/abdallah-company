import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function OurBranches() {
  const branches = [
    { city: "New York", address: "123 Broadway St., NY 10001", phone: "+1 234 567 8901" },
    { city: "London", address: "45 Oxford St., London W1D 2DZ", phone: "+44 20 7123 4567" },
    { city: "Dubai", address: "Downtown Dubai, UAE", phone: "+971 4 123 4567" },
  ];

  return (
    <section id="branches" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branches</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Visit us at any of our global locations.</p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1} className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{branch.city}</h3>
              <p className="text-gray-600 mb-2">{branch.address}</p>
              <p className="text-blue-600 font-medium">{branch.phone}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
