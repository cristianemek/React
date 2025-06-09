
interface GridProps{
    category:string
}

export const GifGrid = ({category}:GridProps) => {


  return (
    <>
        <h3>{category}</h3>
        <p>Hola mundo</p>
    </>
  )
}
