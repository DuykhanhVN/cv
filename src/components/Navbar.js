import React from 'react';

export default function Navbar(){
	return(
		<header id="menu">
			<div className="container">
				<div className="row">
					<div className="col-4">
						<a className="logo" href="#">D<span style={{ color:"var(--red)" }}>K</span>N</a>
					</div>
					<div className="col-8">
						<nav>
							<li><a href="#">Forside</a></li>
							<li><a href="#about">Om mig</a></li>
							<li><a href="#skills">Kompetencer</a></li>
							<li><a href="#projects">Projekter</a></li>
							<li><a href="#contact">Kontakt</a></li>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}