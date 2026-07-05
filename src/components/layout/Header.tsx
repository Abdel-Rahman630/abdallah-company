import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Logo
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#who-we-are" className="text-gray-600 hover:text-gray-900 font-medium transition">Who We Are</Link>
          <Link href="#products" className="text-gray-600 hover:text-gray-900 font-medium transition">Our Products</Link>
          <Link href="#branches" className="text-gray-600 hover:text-gray-900 font-medium transition">Branches</Link>
          <Link href="#news" className="text-gray-600 hover:text-gray-900 font-medium transition">News</Link>
        </nav>
      </div>
    </header>
  );
}
