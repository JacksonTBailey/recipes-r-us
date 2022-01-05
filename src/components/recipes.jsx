import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from 'react-router-dom';
import RecipeCard from './recipeCard';
import RecipeInstructionsTemplate from './recipeInstructionsTemplate';
import Header from './header';

export default function Recipes() {
    const recipeApi = `https://recipes-api-data.herokuapp.com/recipes`;
    const specialRecipeApi = `https://recipes-api-data.herokuapp.com/specials`;
    const savedRecipes = JSON.parse(localStorage.getItem('recipes'));
    const savedSpecialRecipe = JSON.parse(localStorage.getItem('specialRecipes'));


    const [recipes, setRecipes] = useState(savedRecipes || []);
    const [specialRecipes, setSpecialRecipes] = useState(savedSpecialRecipe || []);

    const location = useLocation();
    const recipeID = location.pathname.split('/:').pop();

    //Getting data from regular recipe API
    useEffect(() => {
        fetch(recipeApi)        
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setRecipes(response)
            localStorage.setItem('recipes', JSON.stringify(recipes));
        })
    }, [recipeApi])

    //Getting data from special recipe API
    useEffect(() => {
        fetch(specialRecipeApi)        
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setSpecialRecipes(response)
            localStorage.setItem('specialRecipes', JSON.stringify(specialRecipes));
        })
    }, [specialRecipeApi])

      
    useEffect(()=>{
        document.getElementById("root").scrollTo(0, 0)
    }, [location])
    
    
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path='/' element= {<Navigate replace to= '/recipes/' />} />
                <Route path='/recipes' element={<RecipeCard recipes={recipes}/>} />
                <Route path={`/recipes/:${recipeID}`} element={<RecipeInstructionsTemplate recipes={recipes} uuid={recipeID} specialRecipes={specialRecipes}/>} />
                <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
            </Routes>
        </React.Fragment>
    )

}
