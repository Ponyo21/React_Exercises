import React from "react";
import Nav from "./Nav";

function Footer (attributi) {
    return (
        <div className="footer-component">
			<footer className="mastfoot mt-auto">
				<div className="inner">
				    <Nav state={attributi.state} clickCallback={attributi.clickCallback}/>
					<span>Corso Front End, by</span> <strong>Tutti i corsisti!</strong>
				</div>
			</footer>
		</div>
        )
}

export default Footer;