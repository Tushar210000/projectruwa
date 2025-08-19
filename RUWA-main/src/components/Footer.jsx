import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="footer pt-5 pb-5">
        <div className="container">
          {/* <div className="row mb-5 pb-4">
              <div className="col-md-7">
                <h2 className="fs-5">Join our newsletter</h2>
                <p>Stay updated with our latest templates and offers—join our newsletter today!</p>
              </div>
              <div className="col-md-5">
                <form className="d-flex gap-2">
                  <input className="form-control" type="email" placeholder="Email your email" required=""/>
                  <button className="btn btn-primary fs-6" type="submit">Subscribe</button>
                </form>
              </div>
            </div> */}
          <div className="row justify-content-between mb-5 g-xl-5">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h3 className="mb-3">About</h3>
              <p className="mb-4">
Our vision is to create a healthier India where everyone has access to essential healthcare services and the peace of mind that comes with adequate health insurance coverage. We combine our medical expertise with exceptional customer service to provide a seamless experience for our patients.</p>
            </div>
            <div className="col-md-7">
              <div className="row g-2">
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <h3 className="mb-3">Company</h3>
                  <ul className="list-unstyled">
                    <li><Link to="/leader">Leadership</Link></li>
                    <li><a href="/career">Careers <span className="badge text-danger ms-1">we're hiring</span></a></li>
                    <li><Link to="case">Case Studies</Link></li>
                    <li><Link to="terms">Terms &amp; Conditions</Link></li>
                    <li><Link to="/allpolicy">Our Policy</Link></li>
                    <li><a href="/feedback">Reviews</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <h3 className="mb-3">Accounts</h3>
                  <ul className="list-unstyled">
                    <li> <Link
              // type="Link"
              // className="btn btn-link p-0"
              data-bs-dismiss="modal"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              Register
            </Link></li>
                    <li> <Link
                                  // type="Link"
                                  // className="btn btn-link p-0"
                                  data-bs-dismiss="modal"
                                  data-bs-toggle="modal"
                                  data-bs-target="#loginModal"
                                >
                                  Login
                                </Link></li>
                    <li> <Link
                                  // type="Link"
                                  // className="btn btn-link p-0"
                                  data-bs-dismiss="modal"
                                  data-bs-toggle="modal"
                                  data-bs-target="#forgotModal"
                                >
                                  Forgot Password?
                                </Link></li>
                    <li><Link to="/comingsoon">Coming soon</Link></li>
                   
                  </ul>
                </div>
                {/* <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
                  <h3 className="mb-3">Contact</h3>
                  <p className="d-flex mb-3"><i className=" text-success bi bi-geo-alt-fill me-3"></i><span>Nashik, Maharashtra, 422001</span></p><a className="d-flex mb-3" href="mailto:info@ruwaindia.com"><i className=" text-danger bi bi-envelope-fill me-3"></i><span>{process.env.REACT_APP_EMAIL} </span></a><a className="d-flex mb-3" href="tel://+001147501379"><i className="text-success bi bi-telephone-fill me-3"></i><span>+0 (011) 0000 0000</span></a><a className="d-flex mb-3" href="https://ruwaindia.com"><i className=" text-light bi bi-globe me-3"></i><span>ruwaindia.com</span></a>
                  <div className="row mb-4">
  <div className="col text-center">
    <h5 className="mb-3">Follow Us</h5>
    <div className="d-flex justify-content-center gap-4">
      <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook fs-4 text-primary"></i>
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram fs-4 text-danger"></i>
      </a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter-x fs-4 text-dark"></i>
      </a>
      <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin fs-4 text-info"></i>
      </a>
    </div>
  </div>
</div>

                </div> */}
   {/* <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
  <h3 className="mb-3">Contact</h3>
  
  <p className="d-flex mb-3">
    <i className="text-success bi bi-geo-alt-fill me-3"></i>
    <span>Nashik, Maharashtra, 422001</span>
  </p>
  
  <a className="d-flex mb-3" href="mailto:info@ruwaindia.com">
    <i className="text-danger bi bi-envelope-fill me-3"></i>
    <span>{process.env.REACT_APP_EMAIL}</span>
  </a>
  
  <a className="d-flex mb-3" href="tel:+001147501379">
    <i className="text-success bi bi-telephone-fill me-3"></i>
    <span>+0 (011) 0000 0000</span>
  </a>
  
  <a className="d-flex mb-4" href="https://ruwaindia.com" target="_blank" rel="noopener noreferrer">
    <i className="text-light bi bi-globe me-3"></i>
    <span>ruwaindia.com</span>
  </a>

  <div className="social-icons d-flex gap-3 mt-3">
    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-facebook fs-4" style={{ color: '#1877F2' }}></i>
    </a>
    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-instagram fs-4" style={{ color: '#E4405F' }}></i>
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-twitter-x fs-4" style={{ color: '#000000' }}></i>
    </a>
    <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-linkedin fs-4" style={{ color: '#0077B5' }}></i>
    </a>
  </div>
</div> */}
{/* <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
  <h3 className="mb-3">Contact</h3>

  <p className="d-flex mb-3">
    <i className="text-success bi bi-geo-alt-fill me-3"></i>
    <span>Nashik, Maharashtra, 422001</span>
  </p>

  <a className="d-flex mb-3" href="mailto:info@ruwaindia.com">
    <i className="text-danger bi bi-envelope-fill me-3"></i>
    <span>{process.env.REACT_APP_EMAIL}</span>
  </a>

  <a className="d-flex mb-3" href="tel:+001147501379">
    <i className="text-success bi bi-telephone-fill me-3"></i>
    <span>+0 (011) 0000 0000</span>
  </a>

  <a className="d-flex mb-4" href="https://ruwaindia.com" target="_blank" rel="noopener noreferrer">
    <i className="text-light bi bi-globe me-3"></i>
    <span>ruwaindia.com</span>
  </a>
<div className="d-flex align-items-center mb-3">
  <i className="text-primary bi bi-facebook me-3 fs-5"></i>
  <a
    href="https://www.facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon-inline facebook"
  >
    Facebook
  </a>
</div>

<div className="d-flex align-items-center mb-3">
  <i className="text-danger bi bi-instagram me-3 fs-5"></i>
  <a
    href="https://www.instagram.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon-inline instagram"
  >
    Instagram
  </a>
</div>

<div className="d-flex align-items-center mb-3">
  <i className="text-dark bi bi-twitter-x me-3 fs-5"></i>
  <a
    href="https://twitter.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon-inline twitter"
  >
    Twitter
  </a>
</div>

<div className="d-flex align-items-center mb-3">
  <i className="text-info bi bi-linkedin me-3 fs-5"></i>
  <a
    href="https://www.linkedin.com/company/yourcompany"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon-inline linkedin"
  >
    LinkedIn
  </a>
</div>


</div> */}
<div className="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
  <h3 className="mb-3">Contact</h3>

  <p className="d-flex align-items-center mb-3">
    <span className="icon-3d me-3">
      <i className="bi bi-geo-alt-fill text-success"></i>
    </span>
    <span>Nashik, Maharashtra, 422001</span>
  </p>

  <a className="d-flex align-items-center mb-3" href="mailto:info@ruwaindia.com">
    <span className="icon-3d me-3">
      <i className="bi bi-envelope-fill text-danger"></i>
    </span>
    <span>{process.env.REACT_APP_EMAIL}</span>
  </a>

  <a className="d-flex align-items-center mb-3" href="tel://+001147501379">
    <span className="icon-3d me-3">
      <i className="bi bi-telephone-fill text-success"></i>
    </span>
    <span>+0 (011) 0000 0000</span>
  </a>

  {/* <a className="d-flex align-items-center mb-3" href="https://ruwaindia.com">
    <span className="icon-3d me-3">
      <i className="bi bi-globe text-primary"></i>
    </span>
    <span>ruwaindia.com</span>
  </a> */}

  <div className="row mb-4">
    <div className="col text-start">
      {/* <h5 className="mb-3">Follow Us</h5> */}
      <div className="d-flex flex-column align-items-start gap-3">
         <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-3d social-link">
          <i className="bi bi-instagram me-3 text-danger"></i> Instagram
        </a>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="icon-3d social-link">
          <i className="bi bi-facebook me-3 text-white"></i> Facebook
        </a>
       
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-3d social-link">
          <i className="bi bi-twitter-x me-3 text-white"></i> Twitter
        </a>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="icon-3d social-link">
          <i className="bi bi-linkedin me-3 text-info"></i> LinkedIn
        </a>
      </div>
    </div>
  </div>
</div>



              </div>
            </div>
          </div>
          {/* <div className="row credits pt-3">
            <div className="col-xl-8 text-center text-xl-start mb-3 mb-xl-0 text-light">

              &copy;
              <script>document.write(new Date().getFullYear());</script> RUWIA.
              All rights reserved. Designed with <i className="bi bi-heart-fill text-danger"></i> by <a href="#">Hrishabh Gupta</a>
            </div>
            <div className="col-xl-4 justify-content-start justify-content-xl-end quick-links d-flex flex-column flex-xl-row text-center text-xl-start gap-1">Distributed by<a href="#" target="_blank">NHA INDIA</a></div>
          </div> */}
        </div>
      </footer>
    </>
  )
}
