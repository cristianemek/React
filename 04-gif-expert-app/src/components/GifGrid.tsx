import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";

interface GridProps{
    category:string
}

export interface GifImageProps {
  id?:string,
  title?:string,
  url:string,
  // add other properties if needed
}

export const GifGrid = ({category}:GridProps) => {

  const [images, setImages] = useState<GifImageProps[]>([])
  
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
        <div className="card-grid">
          {
            images.map( img => (
              <>
                <p>{img.url}</p>
                <GifItem key={img.id} url={img.url}/>
              </>
            ))
          }
        </div>

    </>
  )
}
