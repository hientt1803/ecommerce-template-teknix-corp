import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

interface IImage {
  original: string;
  thumbnail: string;
}

export const CaroucelImage = ({ images }: { images: IImage[] }) => {
  return <ImageGallery items={images} lazyLoad />;
};
