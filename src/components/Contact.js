import react from 'react';

export default function Contact(){
    return (
        <footer id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{ textAlign:"center" }}>
                        <div className="footer-social-media">
                            <a href="https://www.facebook.com/duykhanh.nguyen.9619/" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
                            &nbsp;&nbsp;
                            <a href="https://github.com/DuykhanhVN" target="_blank"><i className="fab fa-github fa-2x"></i></a>
                            &nbsp;&nbsp;
                            <a href="#"><i class="fas fa-file-alt fa-2x" target="_blank"></i></a>
                            &nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/duy-khanh-nguyen-a588201b4/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                        </div>
                        <div className="red-line" style={{ margin:"0 auto" }}></div>
                        <p style={{ fontSize:"13px" }}>
                            Designet af Duy Khanh Nguyen med React JS<br/><br/>
                            <span style={{ color:"#888" }}>Copyright 2020 Duy Khanh Nguyen</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}