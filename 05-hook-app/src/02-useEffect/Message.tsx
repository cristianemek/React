import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        window.addEventListener('mousemove', (ev)=>{
          console.log(ev)
        })
      return () => {
      }
    }, [])
    

  return (
    <div>
        <h3>Usuario ya existe</h3>

    </div>
  )
}
