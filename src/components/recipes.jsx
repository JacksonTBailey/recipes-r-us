import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import RecipeCard from './recipeCard';

export default function Recipes() {
    const recipeApi = `http://localhost:3001/recipes`;
    const specialRecipeApi = `http://localhost:3001/specials`;

    const [recipes, setRecipes] = useState([])
    const [specialRecipes, setSpecialRecipes] = useState([])

    //Getting data from regular recipe API
    useEffect(async () => {
        await fetch(recipeApi)        
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setRecipes(response)
        }) 
    }, [recipeApi])

    //Getting data from special recipe API
    useEffect(async () => {
        await fetch(specialRecipeApi)        
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setSpecialRecipes(response)
        })
    }, [specialRecipeApi])


    return (
        <React.Fragment>
            <h1>Regular Recipes</h1>
            <div>
                {recipes.map(({images, uuid, title, description, servings, cookTime, prepTime}) => (
                    <RecipeCard images={images} uuid={uuid} key={uuid} title={title} description={description} servings={servings} cookTime={cookTime} prepTime={prepTime}/>
                ))}
            </div>
        </React.Fragment>
    )

}
