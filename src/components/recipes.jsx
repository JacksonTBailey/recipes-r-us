import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, NavLink, Navigate} from 'react-router-dom';
import RecipeCards from './recipeCards';
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

    //Getting data from regular recipe API and saving to local storage
    useEffect(() => {
        fetch(recipeApi)        
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setRecipes(response);
            localStorage.setItem('recipes', JSON.stringify(response));
        })
    }, [recipeApi])

    //Getting data from special recipe API and saving to local storage
    useEffect(() => {
        fetch(specialRecipeApi)        
        .then((response) => {
            let res = response.json()
            return res
        })
        .then(response => {
            setSpecialRecipes(response);
            localStorage.setItem('specialRecipes', JSON.stringify(response));
        })
    }, [specialRecipeApi])

    
    //Scrolls to top of page whenever a link takes you to a new page (Necessary since React Router v6 doesn't automatically do it)
    useEffect(()=>{
        document.getElementById("root").scrollTo(0, 0)
    }, [location])
    
    
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path = '/' element= {<Navigate replace to='/recipes'/> } />
                <Route path='/recipes' element={<RecipeCards recipes={recipes}/>} />
                <Route path={`/recipes/:${recipeID}`} element={<RecipeInstructionsTemplate recipes={recipes} uuid={recipeID} specialRecipes={specialRecipes}/>} />
                <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
            </Routes>
        </React.Fragment>
    )

}
