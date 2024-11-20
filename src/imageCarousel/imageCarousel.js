import React from 'react';



const ImageCarousel = ({styleAnimation,tabs}) => {
  return (
  <div className="overflow-hidden relative w-fit my-2">
      <div className={`flex ${styleAnimation} hover:animate-none w-fit`}>
        {tabs.map(({ imageUrl, alt }, index) => (
          <img
            key={index}  // C'est important pour la performance et pour éviter les erreurs de clé
            src={imageUrl}
            alt={alt}
            className={`w-20 h-20 rounded-xl object-cover mx-2`}
            style={{
              animation: `continuousScroll 7s linear infinite`,
              animationDelay: `${(index * 1.75)}s`,  // Calcul du délai dynamique
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
