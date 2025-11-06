import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3E3E3E] text-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
              WINTRO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="hover:text-[#D4C5B9] transition-colors">
              Collections
            </a>
            <a href="#about" className="hover:text-[#D4C5B9] transition-colors">
              About
            </a>
            <a href="#products" className="hover:text-[#D4C5B9] transition-colors">
              Products
            </a>
            <a href="#contact" className="hover:text-[#D4C5B9] transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600">
            <div className="flex flex-col space-y-4">
              <a
                href="#collections"
                className="hover:text-[#D4C5B9] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </a>
              <a
                href="#about"
                className="hover:text-[#D4C5B9] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#products"
                className="hover:text-[#D4C5B9] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#contact"
                className="hover:text-[#D4C5B9] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
