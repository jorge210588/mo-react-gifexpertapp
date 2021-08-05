import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ["One punch", "Samurai x", "Dragon Ball"];
    const [categories, setCategories] = useState(["Dragon Ball"]);
    // const handleAdd = () => {
    //     setCategories([...categories,"Pokemon"]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory
                setCategories={setCategories}>
            </AddCategory>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}>
                        </GifGrid>
                    )
                }
            </ol>

        </>
    );
}

export default GifExpertApp;