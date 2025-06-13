import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

interface GridProps{
    category:string
}

interface GifImage {
  id: string;
  title: string;
  // add other properties if needed
}

export const GifGrid = ({category}:GridProps) => {

  const [images, setImages] = useState<GifImage[]>([])
  
  const getImages = async() =>{
    const newImages = await getGifs(category);
    setImages(newImages);

  }

  useEffect(() => {
    getImages();
  }, [category])
  

  return (
    <>
        <h3>{category}</h3>
        <ol>
          {
            images.map( img => (
              <li key={img.id}>{img.title}</li>
            ))
          }
        </ol>
    </>
  )
}
