import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a dedicated team of professionals committed to delivering excellence. 
              Our journey started with a simple vision: to create outstanding experiences and 
              products that enrich lives and push boundaries in the industry.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
