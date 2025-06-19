
import type { GifImageProps } from '../interfaces/gridInterfaces';

export const GifItem = ({url,title}:GifImageProps) => {
    return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
