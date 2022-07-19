import React from "react";

function Nav (attributi) {
    const handlerClick = (event) => {
        attributi.clickCallback(event.target.innerText);
        event.preventDefault();
    }

    return (
        <ul className="navbar navbar-expand navbar-dark bg-dark">
            <li className="nav-item">
            <a className = {`nav-link text-white ${attributi.state.page.hash === 'home' ? 'active' : ''}`} href="#/Home" onClick = {handlerClick}>Home</a>
            </li>
            <li className="nav-item">
            <a className={`nav-link text-white ${attributi.state.page.hash === 'about' ? 'active' : ''}`} href="#/About" onClick = {handlerClick}>About</a>
            </li>
        </ul>
    )
}

export default Nav