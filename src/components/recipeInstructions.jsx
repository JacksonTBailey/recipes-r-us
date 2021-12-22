import React from 'react'

export default function RecipeInstructions({title, images, description, ingredients, directions, prepTime, cookTime, servings }) {
    return (
        <React.Fragment>
           <header>
                <figure><img src={`http://localhost:3001${images.full}`} alt={description} /></figure>
                <h1 className='recipe-title'>{title}</h1>
                <p className='recipe-description'>{description}</p>
            </header>
            <body>

                <section className='quick-glance-notes'>
                    <p className='recipe-prep-time'>Prep in {prepTime} Min</p>
                    <p className='recipe-cook-time'>Ready in {cookTime} Min</p>
                    <p className='recipe-servings'>{servings} servings</p>
                </section>

                <section className='recipe-incredients'>
                    {ingredients.map(({name, amount, measurement, uuid})=>(
                        <div className={`recipe-ingredient ${name}`} key={uuid} id={uuid}>
                            <p className='ingredient-name'>{name}</p>
                            <p className='ingredient-amount-measurement'>{amount} {measurement}</p>
                        </div>
                    ))}
                </section>

                <section className='recipe-instructions'>
                    {directions.map(({instructions, optional})=>(
                        <div className='recipe-instruction'>
                            <p className='instruction'>{(optional===true) ?  <span>optional</span> : null }{instructions}</p>
                        </div>
                    ))}
                </section>
                
            </body>
            <footer>
            
            </footer> 
        </React.Fragment>
    )
}
