import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, NavLink} from 'react-router-dom';
import RecipeCard from './recipeCard';
import RecipeInstructionsTemplate from './recipeInstructionsTemplate';
import Header from './header';

export default function Recipes() {
    const recipeApi = `http://localhost:3001/recipes`;
    const specialRecipeApi = `http://localhost:3001/specials`;

    const [recipes, setRecipes] = useState([]);
    const [specialRecipes, setSpecialRecipes] = useState([]);

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


    return (
        <React.Fragment>
            
            <Header/>

            <Routes>
                <Route path='/'>
                    <Route index element = {<RecipeCard recipes={recipes}/> }></Route>
                    <Route path='/recipes' element={<RecipeCard recipes={recipes}/>}></Route>
                    <Route path={`/recipes/:${recipeID}`} element={<RecipeInstructionsTemplate recipes={recipes} uuid={recipeID} specialRecipes={specialRecipes}/>}></Route>
                </Route>
            </Routes>
        </React.Fragment>
    )

}
