import React from 'react';
import {Link} from 'react-router-dom'

export default function RecipeCard({images, title, uuid, description, servings, cookTime, prepTime}) {
    return (
        <React.Fragment>
                <article className='recipe-card' id={uuid} key={uuid}>
                    <figure className='recipe-img'>
                        <img src={`http://localhost:3001${images.small}`} alt={`Image of a ${title}`}/>
                    </figure>

                    <header className='recipe-content'>
                        <h2 className='recipe-header'>{title}</h2>
                        <p className='recipe-description'>{description}</p>
                    </header>

                    <footer className='recipe-content'>
                        <p className='serving-size'>serves {servings}</p>
                        <p className='cook-time'>total time to make: {cookTime + prepTime} minutes</p>
                    </footer>
                </article>
        </React.Fragment>
    )
}
