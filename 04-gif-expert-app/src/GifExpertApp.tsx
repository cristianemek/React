import { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = () =>{
        setCategories(cat =>['Valorant',...cat])
            
        
    }



  return (
      <>
        <div>GifExpertApp</div>


        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {categories.map(category => (
                <li key={category}>{category}</li>
            ))}
        </ol>



      </>
  )
}
