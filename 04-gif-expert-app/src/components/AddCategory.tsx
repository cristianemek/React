import { useState } from "react"

interface AddCategoryProps{
    onNewValue:(category:string) => void
}


export const AddCategory = ({onNewValue} : AddCategoryProps) => {

    const [inputValue, setInputValue] = useState('');

  return (
    <form onSubmit={(e)=> {
        e.preventDefault();
        if (inputValue.trim().length < 1) return
        onNewValue(inputValue.trim());
        setInputValue("");
        }}>
    <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
    />
    </form>
  )
}

