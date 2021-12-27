import React from 'react'
import {NavLink} from 'react-router-dom'


export default function RecipeInstructionsTemplate({recipes, uuid, specialRecipes}) {
    const recipeMatch = recipes.find(recipe=> recipe.uuid === uuid)

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
                                    <NavLink to={`/recipes/:${uuid}#recipe-directions`} className='recipe-directions-link'><button>Read Directions</button></NavLink>
                                    <NavLink to={`/recipes/:${uuid}#recipe-directions`} className='recipe-edit-link'><button>Edit Recipe</button></NavLink>
                                </div>
                            </div>

                    </section>
                    
                    <section className='quick-glance-notes'>
                        <p className='recipe-prep-time'>Prep in {recipeMatch.prepTime} Min</p>
                        <p className='recipe-cook-time'>Ready in {recipeMatch.cookTime} Min</p>
                        <p className='recipe-servings'>{recipeMatch.servings} servings</p>
                    </section>

                    <section className='recipe-incredients'>
                        {recipeMatch.ingredients.map(({name, amount, measurement, uuid})=>(
                            <div className={`recipe-ingredient ${name}`} key={uuid} id={uuid}>
                                <p className='ingredient-name'>{name}</p>

                                {(uuid===specialRecipes[0].ingredientId) ? <p key={specialRecipes[0].ingredientId} className='special-recipe-ingredient'>{specialRecipes[0].title}, {specialRecipes[0].type}, {specialRecipes[0].text}</p> :
                                (uuid===specialRecipes[1].ingredientId) ? <p key={specialRecipes[1].ingredientId} className='special-recipe-ingredient'>{specialRecipes[1].title}, {specialRecipes[1].type}, {specialRecipes[1].text}</p> :
                                (uuid===specialRecipes[2].ingredientId) ? <p key={specialRecipes[2].ingredientId} className='special-recipe-ingredient'>{specialRecipes[2].title}, {specialRecipes[2].type}, {specialRecipes[2].text}</p> :
                                (uuid===specialRecipes[3].ingredientId) ? <p key={specialRecipes[3].ingredientId} className='special-recipe-ingredient'>{specialRecipes[3].title}, {specialRecipes[3].type}, {specialRecipes[3].text}</p> : null}
                                
                                
                                <p className='ingredient-amount-measurement'>{amount} {measurement}</p>
                            </div>
                        ))}
                    </section>

                    <section className='recipe-instructions' id='recipe-directions'>
                        {recipeMatch.directions.map(({instructions, optional}, i)=>(
                            <div className='recipe-instruction' key={i}>
                                <p className='instruction' key={i}>{(optional===true) ?  <span>optional </span> : null }{instructions}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>        
        </React.Fragment>
    )
}
