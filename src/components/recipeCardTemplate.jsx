import React from 'react';
import {NavLink} from 'react-router-dom'

export default function RecipeCardTemplate({images, title, uuid, description, servings, cookTime, prepTime}) {
    return (
        <React.Fragment>
            <NavLink to={`/recipes/:${uuid}`} className='recipe-link' key={uuid}>
                <article className='recipe-card' id={uuid}>
                    <figure className='recipe-img'>
                        <img src={`http://localhost:3001${images.small}`} alt={`${title}`}/>
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
            </NavLink>    
        </React.Fragment>
    )
}
