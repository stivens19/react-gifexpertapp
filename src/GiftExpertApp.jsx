import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
           <h1>GiftExpertApp</h1> 
           <AddCategory setCategories={setCategories} />
           <hr/>
           

            {
                categories.map(category=>(
                    <GifGrid key={category} category={category} />
                ))
            }

           
        </>
    );
};



export default GiftExpertApp;



