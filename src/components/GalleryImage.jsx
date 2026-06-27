import { useState } from 'react';

const GalleryImage = ({ src, index }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageError = () => {
    // Premium floral fallback
    setImgSrc('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop');
  };

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.15)] bg-cream transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgb(54,92,73,0.2)]">
      <img 
        src={imgSrc} 
        alt={`Floral Memory ${index}`}
        onError={handleImageError}
        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 bg-dark/5"
      />
      <div className="absolute inset-0 bg-dark/10 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default GalleryImage;
