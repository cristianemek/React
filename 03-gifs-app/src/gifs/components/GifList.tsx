import type { Gif } from "../../mock/gifs.mock";

interface GifsProps{
    gifs: Gif[],
}


export const GifList = ({gifs}:GifsProps) => {
  return (
    <div className="gifs-container">
        {gifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.width} (1.5mb)
            </p>
          </div>
        ))}
      </div>
  )
}