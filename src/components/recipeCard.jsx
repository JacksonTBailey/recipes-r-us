import React from 'react'
import RecipeCardTemplate from './recipeCardTemplate'

export default function RecipeCard({recipes}) {
    return (
        <React.Fragment>
            <div className='recipe-card-body'>
                <section className='recipe-card-product'>
                    {recipes.map(({images, uuid, title, description}) => (
                        <RecipeCardTemplate images={images} uuid={uuid} key={uuid} title={title} description={description}/>
                    ))}
                </section>
            </div>
        </React.Fragment>
    )
}
