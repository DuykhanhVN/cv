import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Message from './components/Message.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
	return (
		<div>
			<Navbar />
			<div className="hero">
				<div className="hero-whitebox r-hide"></div>
				<div className="hero-background r-hide"></div>
				<div className="hero-content">
					<div className="container">
						<div className="row">
							<div className="col-5">
								<div className="hide r-show">
									<img className="hero-image" src={ process.env.PUBLIC_URL + '/img/khanh-circle.jpg' } width="100%" /><br/>
								</div>
								<h3 style={{ letterSpacing:"3px" }}>HEJSA!</h3>
								<h1>
									Mit navn er Duy <span style={{ color:"var(--red)" }}>Khanh</span> Nguyen
								</h1>
								<h2>
									Engageret Webudvikler &amp; IT-Supporter
								</h2>
								<p className="skills-intro">
									<span className="code-darkblue">const</span> <span className="code-lightblue">skills</span> = [<br/>
										<span className="code-green" style={{ paddingLeft:"2em" }}>"PHP"</span>, <span className="code-green">"Laravel Framework"</span>, <span className="code-green">"Javascript"</span>,<br/>
										<span className="code-green" style={{ paddingLeft:"2em" }}>"React JS"</span>, <span className="code-green">"MySQL"</span>, <span className="code-green">"Adobe Photoshop"</span><br/>
									];
								</p>
								<div className="red-line"></div>
								<div className="social-media">
									<a href="https://www.facebook.com/duykhanh.nguyen.9619/" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
									&nbsp;&nbsp;
									<a href="https://github.com/DuykhanhVN" target="_blank"><i className="fab fa-github fa-2x"></i></a>
									&nbsp;&nbsp;
									<a href="#"><i class="fas fa-file-alt fa-2x" target="_blank"></i></a>
									&nbsp;&nbsp;
									<a href="https://www.linkedin.com/in/duy-khanh-nguyen-a588201b4/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
								</div>
							</div>
							<div className="col-2 off"></div>
							<div className="col-5">
								<img className="hero-image r-hide" src={ process.env.PUBLIC_URL + '/img/khanh-circle.jpg' } width="100%" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<About />
			<Skills />
			<Message />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;