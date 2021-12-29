import Fraction from 'fraction.js'
import React from 'react'
import {NavLink} from 'react-router-dom'


export default function RecipeInstructionsTemplate({recipes, uuid, specialRecipes}) {
    const recipeMatch = recipes.find(recipe=> recipe.uuid === uuid)


    //Converts decimals into simplified fractions
    let fractionalize = (numToFraction) =>{
        let x = Fraction(numToFraction);
        let y = x.simplify().toFraction(true);
        return y
    }

    let handleClick = (number) =>{
        let promoClass = document.querySelector(`.special-text-${number}`);
        promoClass.classList.toggle('active')
    }

    return (
        <React.Fragment>
            <div className='recipe-page-flex' key={uuid} id={uuid}>
                <div className='recipe-page-grid'>
                    <section className='page-header'>
                            <figure><img src={`http://localhost:3001${recipeMatch.images.full}`} alt={recipeMatch.description} className='header-image'/></figure>
                            <div className='header-content'>
                                <h1 className='recipe-title'>{recipeMatch.title}</h1>
                                <p className='recipe-description'>{recipeMatch.description}</p>
                                <div className='recipe-summary-features'>
                                    <div className='recipe-summary-ingredients'>
                                        <p className='recipe-ingredients-total'>{recipeMatch.ingredients.length}</p>
                                        <p className='recipe-ingredients-content'>Ingredients</p>
                                    </div>
                                    <div className='recipe-summary-time'>
                                        <p className='recipe-prep-time'>{recipeMatch.prepTime + recipeMatch.cookTime}</p>
                                        <p className='recipe-prep-content'>Minutes</p>
                                    </div>
                                </div>
                                <div className='recipe-buttons'>
                                    <a href="#recipe-directions" className='recipe-directions-link'>
                                        <button type="submit" className='recipe-directions-link'>Read Directions</button>
                                    </a>
                                    
                                    <NavLink to={`/recipes/:${uuid}#recipe-directions`} className='recipe-edit-link'><button>Edit Recipe</button></NavLink>
                                </div>
                            </div>

                    </section>                    

                    <section className='recipe-ingredients'>
                        <h2>Ingredients</h2>
                        <p className='recipe-servings'>{recipeMatch.servings} servings</p>
                        {recipeMatch.ingredients.map(({name, amount, measurement, uuid})=>(
                            <div className={`recipe-ingredient ${name}`} key={uuid} id={uuid}>
                                <p className='ingredient-amount-measurement'>{fractionalize(amount)} {measurement}<span className='ingredient-name'> {name}</span></p>

                                {(uuid===specialRecipes[0].ingredientId)? 
                                    <div className='special-recipe'>
                                        <button key={specialRecipes[0].ingredientId} className='special-recipe-ingredient' onClick={()=>handleClick('0')}>{specialRecipes[0].title}</button> 
                                        <p className='special-text special-text-0'><span className='special-highlight'>{specialRecipes[0].type}</span> {specialRecipes[0].text}</p>
                                    </div> :

                                (uuid===specialRecipes[1].ingredientId) ? 
                                    <div className='special-recipe'>
                                        <button key={specialRecipes[1].ingredientId} className='special-recipe-ingredient' onClick={()=>handleClick('1')}>{specialRecipes[1].title}</button> 
                                        <p className='special-text special-text-1'><span className='special-highlight'>{specialRecipes[1].type}</span> {specialRecipes[1].text}</p>
                                    </div> :

                                (uuid===specialRecipes[2].ingredientId) ? 
                                    <div className='special-recipe'>
                                        <button key={specialRecipes[2].ingredientId} className='special-recipe-ingredient' onClick={()=>handleClick('2')}>{specialRecipes[2].title}</button> 
                                        <p className='special-text special-text-2'><span className='special-highlight'>{specialRecipes[2].type}</span> {specialRecipes[2].text}</p>
                                    </div> :

                                (uuid===specialRecipes[3].ingredientId) ? 
                                    <div className='special-recipe'>
                                        <button key={specialRecipes[3].ingredientId} className='special-recipe-ingredient' onClick={()=>handleClick('3')}>{specialRecipes[3].title}</button> 
                                        <p className='special-text special-text-3'><span className='special-highlight'>{specialRecipes[3].type}</span> {specialRecipes[3].text}</p>
                                    </div> : null}                              
                            </div>
                        ))}
                    </section>

                    <section className='recipe-instructions' id='recipe-directions'>
                        <h2>Instructions</h2>
                        {recipeMatch.directions.map(({instructions, optional}, i)=>(
                            <div className='recipe-instruction' key={i}>
                                <p className='instruction' key={i}><span className='instruction-step'>Step {i+1}: </span>{(optional===true) ?  <span className='optional-instruction'>optional </span> : null } {instructions}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>        
        </React.Fragment>
    )
}
