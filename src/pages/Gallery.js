import React from 'react';

function Gallery() {
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-4xl font-bold my-4">Galería</h2>
        <p className="text-lg mb-4">
          Aquí puedes ver algunas imágenes de nuestras instalaciones y trabajos realizados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="image-container">
            <img src="/path/to/your/image1.png" alt="Descripción de la imagen 1" />
          </div>
          <div className="image-container">
            <img src="/path/to/your/image2.png" alt="Descripción de la imagen 2" />
          </div>
          <div className="image-container">
            <img src="/path/to/your/image3.png" alt="Descripción de la imagen 3" />
          </div>
          <div className="image-container">
            <img src="/path/to/your/image4.png" alt="Descripción de la imagen 4" />
          </div>
          <div className="image-container">
            <img src="/path/to/your/image5.png" alt="Descripción de la imagen 5" />
          </div>
          <div className="image-container">
            <img src="/path/to/your/image6.png" alt="Descripción de la imagen 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
