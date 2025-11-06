import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CollectionCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function CollectionCard({ imageUrl, title, description }: CollectionCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden bg-[#E8DDD0]">
      <div className="aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3
          className="text-2xl mb-2 text-[#3E3E3E]"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {title}
        </h3>
        <p className="text-[#6B6B6B]">{description}</p>
      </div>
    </div>
  );
}
