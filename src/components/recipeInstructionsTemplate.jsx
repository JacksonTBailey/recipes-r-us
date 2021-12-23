import React from 'react'

export default function RecipeInstructionsTemplate({recipes, uuid, specialRecipes}) {
    const recipeMatch = recipes.find(recipe=> recipe.uuid === uuid)

    return (
        <React.Fragment>
            <div className='recipe-page' key={uuid} id={uuid}>
                <section className='page-header'>
                        <figure><img src={`http://localhost:3001${recipeMatch.images.full}`} alt={recipeMatch.description} /></figure>
                        <h1 className='recipe-title'>{recipeMatch.title}</h1>
                        <p className='recipe-description'>{recipeMatch.description}</p>
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

                    <section className='recipe-instructions'>
                        {recipeMatch.directions.map(({instructions, optional}, i)=>(
                            <div className='recipe-instruction' key={i}>
                                <p className='instruction' key={i}>{(optional===true) ?  <span>optional </span> : null }{instructions}</p>
                            </div>
                        ))}
                    </section>
            </div>        
        </React.Fragment>
    )
}
