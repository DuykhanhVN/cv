import React from 'react';

export default function Skills(){

	//GET ALL CLASSES "SWITCHCONTENT"
	var content = document.getElementsByClassName("switchContent");
	var icon = document.getElementsByClassName("toggleIcon");

	function callContent(id){
		if(content[id].classList.contains("show")){
			content[id].classList.remove("show");
			icon[id].classList.remove("animate");
		}else{
			content[id].classList.add("show");
			icon[id].classList.add("animate");
		}
	}

	return(
		<section id="skills">
			<div className="container">
				<div className="row">
					<div className="col-4">
						<h3><i className="fas fa-graduation-cap"></i> Uddannelse &amp; Kurser</h3>
						<div className="red-line"></div>
						<ul className="timeline">
							<li>
								<b>2018 - 2020</b>
								<p>IT-Supporter</p>
							</li>
							<li>
								<b>2014 - 2016</b>
								<p>VGHF</p>
							</li>
							<li>
								<b>2011 - 2014</b>
								<p>Webudvikler</p>
							</li>
							<li>
								<b>2010 - 2011</b>
								<p>Ungdomsskole 10 CV</p>
							</li>
							<li>
								<b>2001 - 2010</b>
								<p>Folkeskole: Nordre Skole</p>
							</li>
						</ul>
						<div className="timeline-margin"></div>
						<ul className="timeline">
							<li>
								<b>2018</b>
								<p>Windows Deployment Service</p>
							</li>
							<li>
								<b>2018</b>
								<p>WIFI Teknologi</p>
							</li>
							<li>
								<b>2018</b>
								<p>Teamleader (DISC)</p>
							</li>
						</ul>
					</div>
					<div className="col-2 off"></div>
					<div className="col-6">
						<h3><i className="fas fa-star"></i> Kompetencer</h3>
						<div className="red-line"></div>
						
						<div className="switch" onClick={ () => callContent(0) }>
							<h3>Webudvikler</h3><span className="toggleIcon animate">+</span>
							<div className="switchContent show">
								<div className="red-line"></div>
								<div style={{ padding:"25px" }}>
									<h4 className="headline-bar">HTML</h4>
									<div className="bar"><div className="fill" style={{ width:"96%", background:"var(--red)" }}></div></div>

									<h4 className="headline-bar">CSS</h4>
									<div className="bar"><div className="fill" style={{ width:"92%", background:"#2ecc71" }}></div></div>

									<h4 className="headline-bar">JavaScript</h4>
									<div className="bar"><div className="fill" style={{ width:"79%", background:"#F2BC57" }}></div></div>

									<h4 className="headline-bar">PHP</h4>
									<div className="bar"><div className="fill" style={{ width:"84%", background:"#69728C" }}></div></div>

									<h4 className="headline-bar">MySQL</h4>
									<div className="bar"><div className="fill" style={{ width:"73%", background:"#28655E" }}></div></div>

									<h4 className="headline-bar">Wordpress</h4>
									<div className="bar"><div className="fill" style={{ width:"73%", background:"#00adef" }}></div></div>

									<h4 className="headline-bar">Laravel Framework</h4>
									<div className="bar"><div className="fill" style={{ width:"87%", background:"#fb503b" }}></div></div>

									<h4 className="headline-bar">React JS (Læser op på emnet nuværende)</h4>
									<div className="bar"><div className="fill" style={{ width:"50%", background:"#61DBFB" }}></div></div>
								</div>
							</div>
						</div>
						
						<div className="switch" onClick={ () => callContent(1) }>
							<h3>IT-Supporter</h3><span className="toggleIcon">+</span>
							<div className="switchContent">
								<div className="red-line"></div>
								<div style={{ padding:"25px" }}>
									<h4 className="headline-bar">Windows XP, 7 &amp; 10</h4>
									<div className="bar"><div className="fill" style={{ width:"95%", background:"#2867B2" }}></div></div>

									<h4 className="headline-bar">Windpws Server 2012 &amp; 2016</h4>
									<div className="bar"><div className="fill" style={{ width:"86%", background:"#00adef" }}></div></div>

									<h4 className="headline-bar">Apple (OSX, iPhone &amp; iPad)</h4>
									<div className="bar"><div className="fill" style={{ width:"71%", background:"#F2BC57" }}></div></div>

									<h4 className="headline-bar">Linux (Ubuntu)</h4>
									<div className="bar"><div className="fill" style={{ width:"79%", background:"#28655E" }}></div></div>

									<h4 className="headline-bar">Android</h4>
									<div className="bar"><div className="fill" style={{ width:"87%", background:"#2ecc71" }}></div></div>

									<h4 className="headline-bar">Cisco Netværk</h4>
									<div className="bar"><div className="fill" style={{ width:"83%", background:"#61DBFB" }}></div></div>

									<h4 className="headline-bar">Back-Up &amp; Fil-server</h4>
									<div className="bar"><div className="fill" style={{ width:"77%", background:"#fb503b" }}></div></div>

									<h4 className="headline-bar">Database (SQL, MySQL)</h4>
									<div className="bar"><div className="fill" style={{ width:"75%", background:"#4267B2" }}></div></div>
								</div>
							</div>
						</div>

						<div className="switch" onClick={ () => callContent(2) }>
							<h3>Designer</h3><span className="toggleIcon">+</span>
							<div className="switchContent">
								<div className="red-line"></div>
								<div style={{ padding:"25px" }}>
									<h4 className="headline-bar">Adobe Photoshop</h4>
									<div className="bar"><div className="fill" style={{ width:"65%", background:"#2867B2" }}></div></div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}