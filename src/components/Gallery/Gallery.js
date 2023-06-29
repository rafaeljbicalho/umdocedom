import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import image1 from '../../img/bolo1.jpg';
import natal from '../../img/natal.jpg';
import React, { Component }  from 'react';

const images = [
  {
    original: `${image1}`
  },
  {
    original: `${natal}`
  },
];

function Gallery() {
    return (
        <div>
            <ImageGallery items={images} />
        </div>
    )
  }

  export default Gallery;