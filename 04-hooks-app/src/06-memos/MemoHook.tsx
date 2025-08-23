import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle"

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola')
    const [subTitle, setSubTitle] = useState('Mundo')

    const handleMyApiCall = useCallback(()=>{
        console.log('Llamar a mi API');
    },[])

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">MemoApp</h1>

    <MyTitle title={title}/>
    <MySubtitle subtitle={subTitle} callMyApi={handleMyApiCall}/>




    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
    onClick={()=>{setTitle('hello')}}>
        Cambiar titulo
    </button>

    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
    onClick={()=>{setSubTitle('world')}}>
        Cambiar subtitulo
    </button>

    </div>
  )
}