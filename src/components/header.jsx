import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    let hamburgerToggle =() =>{
        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');
        const visibility = primaryNav.getAttribute('data-visible');
            if (visibility==="true"){
                primaryNav.setAttribute("data-visible", false);
                navToggle.setAttribute('aria-expanded', false);
            } else {
                primaryNav.setAttribute("data-visible", true); 
                navToggle.setAttribute('aria-expanded', true);
            }
        }



    return (
        <React.Fragment>
            <header className='primary-header'>
                <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={hamburgerToggle}></button>

                <nav>
                    <ul id= "primary-navigation" className="primary-navigation flex" data-visible="false">
                        <li>
                            <Link to='/recipes' className='navbar-link' onClick={hamburgerToggle}>Recipes</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </React.Fragment>
    )
}
