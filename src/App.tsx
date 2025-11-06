import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CollectionCard } from "./components/CollectionCard";
import { Footer } from "./components/Footer";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function App() {
  const collections = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1615025393362-e5ad8a3e9220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwbWFuJTIwd2ludGVyJTIwY29hdHxlbnwxfHx8fDE3NjIzNDQ3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Coats & Jackets",
      description:
        "Premium outerwear designed for warmth and sophistication",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1672306922100-d8f81ccdbd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYW4lMjBzd2VhdGVyfGVufDF8fHx8MTc2MjM0NDcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sweaters",
      description:
        "Luxurious knits in timeless styles and earthy tones",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1761296796745-f709cd1c1738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwbWFuJTIwc2NhcmZ8ZW58MXx8fHwxNzYyMzQ0NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Accessories",
      description:
        "Refined details that complete your winter wardrobe",
    },
  ];

  const products = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1617331647819-2495792e53e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aW50ZXIlMjBmYXNoaW9uJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjIzNDQ3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Winter Essentials",
      description: "Versatile pieces for every occasion",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1669266586569-5489c4f5c7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFuJTIwamFja2V0fGVufDF8fHx8MTc2MjM0NDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Premium Outerwear",
      description: "Crafted with attention to detail",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <Header />

      {/* Hero Section */}
      <Hero imageUrl="https://images.unsplash.com/photo-1614016366896-f8c2f3740e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYW4lMjBvdXRkb29yJTIwd2ludGVyfGVufDF8fHx8MTc2MjM0NDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />

      {/* Collections Section */}
      <section id="collections" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#3E3E3E]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Featured Collections
            </h2>
            <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto">
              Curated selections of our finest winter pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collections.map((collection, index) => (
              <CollectionCard
                key={index}
                imageUrl={collection.imageUrl}
                title={collection.title}
                description={collection.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-24 bg-[#D4C5B9]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl mb-6 text-[#3E3E3E]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Crafted for the Modern Gentleman
              </h2>
              <p className="text-lg md:text-xl text-[#6B6B6B] mb-6">
                At Wintro, we believe that style transcends
                seasons. Our winter collection embodies timeless
                elegance, combining traditional craftsmanship
                with contemporary design.
              </p>
              <p className="text-lg md:text-xl text-[#6B6B6B] mb-8">
                Each piece is carefully selected to ensure the
                perfect balance of comfort, functionality, and
                refined aesthetics—because the discerning
                gentleman deserves nothing less.
              </p>
              <Button
                size="lg"
                className="bg-[#8B7355] hover:bg-[#A0826D] text-white border-none"
              >
                Our Story
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615025393362-e5ad8a3e9220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwbWFuJTIwd2ludGVyJTIwY29hdHxlbnwxfHx8fDE3NjIzNDQ3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="About Wintro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#3E3E3E]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              New Arrivals
            </h2>
            <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto">
              Discover the latest additions to our winter
              collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3
                    className="text-2xl md:text-3xl mb-2 text-[#3E3E3E]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-lg text-[#6B6B6B]">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-[#8B7355] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Stay Connected
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Subscribe to receive exclusive offers, style tips,
              and early access to new collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-[#3E3E3E] border-none h-12 md:h-14 px-6"
              />
              <Button
                size="lg"
                className="bg-[#3E3E3E] hover:bg-[#6B6B6B] text-white border-none h-12 md:h-14 px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}