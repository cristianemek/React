import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import type { GridProps, GifImageProps } from "../interfaces/gridInterfaces";

export const useFetchGifs = ({ category }: GridProps) => {
  const [images, setImages] = useState<GifImageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const getImages = async () => {
    setIsLoading(true);
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  getImages();
}, [category]);

  return {
    images,
    isLoading,
  };
};
