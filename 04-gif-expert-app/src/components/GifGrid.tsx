
import { GifItem } from "./GifItem";
import type { GridProps } from '../interfaces/gridInterfaces';
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}:GridProps) => {

  const {images, isLoading} = useFetchGifs({category});

  return (
    <>
        <h3>{category}</h3>
        {isLoading && <p>Cargando...</p>}
        <div className="card-grid">
          {
            images.map( img => (
                <GifItem key={img.id} {...img}/>
            ))
          }
        </div>

    </>
  )
}
