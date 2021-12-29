import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, NavLink} from 'react-router-dom';
import RecipeCard from './recipeCard';
import RecipeInstructionsTemplate from './recipeInstructionsTemplate';
import Header from './header';

export default function Recipes() {
    const recipeApi = `http://localhost:3001/recipes`;
    const specialRecipeApi = `http://localhost:3001/specials`;
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
        })
    }, [specialRecipeApi])

    //Saving recipes and specialRecipes to local storage
    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
        localStorage.setItem('specialRecipes', JSON.stringify(specialRecipes));
      }, [recipes, specialRecipes]);

      
    useEffect(()=>{
        document.getElementById("root").scrollTo(0, 0)
    }, [location])
    
    
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path='/'>
                    <Route index element = {<RecipeCard recipes={recipes}/> }></Route>
                    <Route path='/recipes' element={<RecipeCard recipes={recipes}/>}></Route>
                    <Route path={`/recipes/:${recipeID}`} element={<RecipeInstructionsTemplate recipes={recipes} uuid={recipeID} specialRecipes={specialRecipes}/>}></Route>
                    <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
                </Route>
            </Routes>
        </React.Fragment>
    )

}
