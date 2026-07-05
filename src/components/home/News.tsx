import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "May 20, 2026",
      title: "Exciting Company Update",
      excerpt: "We are thrilled to announce our latest expansion and upcoming features that will revolutionize the industry.",
    },
    {
      id: 2,
      date: "April 15, 2026",
      title: "New Product Launch Announcement",
      excerpt: "Join us next month as we unveil our highly anticipated new product lineup designed to boost productivity.",
    }
  ];

  return (
    <section id="news" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay up to date with our recent updates and announcements.</p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {newsItems.map((item, idx) => (
            <ScrollAnimation key={item.id} delay={idx * 0.1} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-100 rounded-xl shrink-0 flex items-center justify-center text-gray-400">
                Image
              </div>
              <div className="flex flex-col justify-center py-2">
                <span className="text-sm text-blue-600 font-semibold mb-2">{item.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                <button className="mt-4 text-left font-medium text-blue-600 hover:text-blue-700 transition">
                  Read more &rarr;
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
