import GalleryImage from './GalleryImage';

const GalleryTrack = ({ images }) => {
  return (
    <div className="gallery-viewport w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
      <div className="gallery-track">
        {images.map((img, index) => {
          // Space out the 16 items evenly in a 360 degree circle
          const angle = (360 / images.length) * index;
          
          return (
            <div 
              key={img.id} 
              className="gallery-item group"
              style={{
                transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`
              }}
            >
              <GalleryImage src={img.src} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryTrack;
