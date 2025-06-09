import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

interface GridProps{
    category:string
}

export const GifGrid = ({category}:GridProps) => {

  
  useEffect(() => {
    getGifs(category);
  }, [])
  

  return (
    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
    </>
  )
}
