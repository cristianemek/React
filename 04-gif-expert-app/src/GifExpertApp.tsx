import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = (newCat :string) =>{

        if (categories.includes(newCat)) return;
        setCategories(cat =>[newCat,...cat]);
        
    }



  return (
      <>
        <div>GifExpertApp</div>

        <AddCategory 
        onNewValue={onAddCategory}
        />
            {

            categories.map(cat => ( 
                <GifGrid 
                    key={cat} 
                    category={cat} 
                /> 
        ))

            }



      </>
  )
}