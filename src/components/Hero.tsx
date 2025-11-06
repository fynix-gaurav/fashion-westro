import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imageUrl}
          alt="Winter fashion hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Winter Elegance
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Discover timeless winter wear crafted for the distinguished gentleman
        </p>
        <Button
          size="lg"
          className="bg-[#8B7355] hover:bg-[#A0826D] text-white border-none px-8 py-6 text-lg"
        >
          Explore Collection
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
}
