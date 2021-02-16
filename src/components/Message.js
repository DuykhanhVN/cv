import React from 'react';

export default function Message(){

	return(
		<section id="message">
			<div className="container">
				<div className="row">
                    <div className="col-3 off"></div>
					<div className="col-6">
                        <span style={{ color:"#fff" }}>
							<i class="far fa-comment fa-3x"></i><br/><br/>
							"En dejlig fyraften er, når IT-udstyrer fungerer, som de skal i løbet af weekenden."
						</span>
                    </div>
                    <div className="col-3 off"></div>
				</div>
			</div>
		</section>
	)

}