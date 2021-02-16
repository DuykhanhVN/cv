import React from 'react';

export default function About(){
	return(
		<section id="about">
			<div className="container">
				<div className="row">
					<div className="col-4">
						<img className="r-hide" src={ process.env.PUBLIC_URL + '/img/about.jpg' } width="100%" />
					</div>
					<div className="col-2 off"></div>
					<div className="col-6" style={{ padding:"25px 0" }}>
						<h3><i className="far fa-address-card"></i> Om mig</h3>
						<div className="red-line"></div>
						<p>
							Hejsa!<br/>
							Jeg hedder Duy 'Khanh' Nguyen. Kort om mig, jeg er uddannet, IT-Supporter og Webudvikler.
							Som person er jeg hjælpsom, smilende og stille, men det skal du ikke blive narret af!
							Når jeg arbejder, giver jeg et hundrende procent indsats, jeg gør mit arbejdet seriøst og proffessionelt.
							<br/><br/>
							IT har været en del af mig og mit barndom, jeg er beundret over, hvor meget en PC kan gøre, og ITs udvikling hen over tiden.
							Derfor har jeg besluttet mig for at arbejde indenfor IT-området, det er også årsagen for, at jeg brænder for IT.
							<br/><br/>
							Mange af mine venner vil beskrive mig, som perfektionist og tålmodende. Fordi jeg gør altid mit bedste, 
							og går meget op i slutproduktet. Jeg elsker at give en god indsats omkring det, jeg arbejder med, da det tilfredsstiller mig.
						</p>
					</div>
					<div className="col-1 off"></div>
				</div>
			</div>
		</section>
	)
}