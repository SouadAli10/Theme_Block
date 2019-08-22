import React from 'react';
const Footer = () =>(
    <footer>
    <div className="verybottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aligncenter">
              <ul className="social-network social-circle">
                <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="aligncenter">
              <p>
                &copy;2015 Groovin - All right reserved | Designed by <a href="http://bootstraptaste.com">BootstrapTaste</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

)
export default  Footer;