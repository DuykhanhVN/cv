import React from 'react';

export default function Projects(){
	return(
		<section id="projects">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3><i className="fas fa-handshake"></i> Projekt Samarbejdere</h3>
						<div className="red-line"></div>
					</div>
				</div>
				<div className="row">
					<div className="flexbox project-justify">
						<div className="project">
							<a className="project-link" href="https://www.facebook.com/lovelybeautynd/" target="_blank">
								<img src={ process.env.PUBLIC_URL + '/img/lovelybeauty-thumbnail.jpg' } width="100%" />
								<h3>Lovely Beauty <i class="fas fa-link"></i></h3>
							</a>
							<b>2016</b>
							<p>
								En lille lokal skønhedsbutik i Viborg, som ejeret af Nogan Thi Do<br/>
								Vi har sammenarbejdet om at designe hendes visitkort(prisliste) og hendes logo.
							</p>
						</div>

						<div className="project">
							<a>
								<img src={ process.env.PUBLIC_URL + '/img/fodpleje2-thumbnail.jpg' } width="100%" />
								<h3>Dansk Fodpleje</h3>
							</a>
							<b>2016</b>
							<p>
								Firmaet er kørt under Inge Friis, en sød kvinde, som har arbejdet med fødder i mere end 10 år.
								Jeg har designet hendes prislite.
							</p>
						</div>

						<div className="project">
							<a className="project-link" href="https://www.facebook.com/diamondnailsCH/" target="_blank">
								<img src={ process.env.PUBLIC_URL + '/img/diamondnails-thumbnail.jpg' } width="100%" />
								<h3>Diamond Nails <i class="fas fa-link"></i></h3>
							</a>
							<b>2019</b>
							<p>
								En ung par kører en skønhedsbutik sammen i Holstebro, hvor de tilbyder pæne manicure og pedicure.
								Vi har sammenarbejdet om at designe deres visitkort(prisliste) og logo.
							</p>
						</div>

						<div className="project">
							<a className="project-link" href="https://www.facebook.com/AutentiskeVietnamesiskeMad/" target="_blank">
								<img src={ process.env.PUBLIC_URL + '/img/meviet-thumbnail.jpg' } width="100%" />
								<h3>Me Vietnamese Kitchen <i class="fas fa-link"></i></h3>
							</a>
							<b>2020</b>
							<p>
								Me Vietnamese Kitchen, på dansk "Vietnamesiske Mors Køkken".
								Jeg har designet deres menukort og deres butiksskilte.
							</p>
						</div>

					</div>
				</div>
				
				<div className="row hide">
					<div className="col-12">
						<h3><i className="fas fa-suitcase"></i> Private Projekter</h3>
						<div className="red-line"></div>
					</div>
				</div>
				<div className="row hide">
					<div style={{ textAlign:"center" }}>
						<h1>Kommer snart...</h1>
					</div>
				</div>
			</div>
		</section>
	)
}