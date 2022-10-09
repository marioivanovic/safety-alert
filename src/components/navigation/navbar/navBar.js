import React from 'react'

import './_navBar.scss'

function NavBar() {
    return (
        <div className="container-navbar">
            <nav className="navbar">
                <li><a href="/">Accueil</a></li>
                <li><a href="/alerts">Alertes</a></li>
                <li><a href="/stations">Stations</a></li>
                <li><a href="/people">Habitants</a></li>
            </nav>
        </div>
    )
}

export default NavBar;
