import React from 'react'
import RecipeCardTemplate from './recipeCardTemplate'

export default function RecipeCard({recipes}) {
    return (
        <React.Fragment>
            <section className='recipe-card-product'>
                {recipes.map(({images, uuid, title, description, servings, cookTime, prepTime}) => (
                    <RecipeCardTemplate images={images} uuid={uuid} key={uuid} title={title} description={description} servings={servings} cookTime={cookTime} prepTime={prepTime}/>
                ))}
            </section>
        </React.Fragment>
    )
}
