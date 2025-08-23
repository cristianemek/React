import { memo } from "react";

interface Props {
    subtitle:string;
    callMyApi : () => void;
}


export const MySubtitle = memo(({subtitle,callMyApi}:Props) => {

    console.log('My subtitle rerender')

  return (
    <>
    <h6 className="text-2xl font-bold">{subtitle}</h6>
    <button className="bg-indigo-500 text-white px-2 py-1 cursor-pointer rounded-md"
    onClick={callMyApi}>Llamar a función</button>
    </>
  )
})