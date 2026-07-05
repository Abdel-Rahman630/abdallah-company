export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Logo</h3>
          <p className="text-gray-400 leading-relaxed">Leading the industry with innovative and cutting-edge solutions.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#who-we-are" className="hover:text-white transition">Who We Are</a></li>
            <li><a href="#products" className="hover:text-white transition">Our Products</a></li>
            <li><a href="#news" className="hover:text-white transition">Latest News</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">info@example.com</p>
          <p className="text-gray-400">+1 234 567 890</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
