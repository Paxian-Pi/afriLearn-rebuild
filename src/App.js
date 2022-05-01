import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      {/* <!-- ========================= preloader start ========================= --> */}
      {/* <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- ========================= preloader end ========================= --> */}

      {/* <!-- ========================= hero-section-wrapper-5 start ========================= --> */}
      <section id="home" className="hero-section-wrapper-5">

        {/* <!-- ========================= header-6 start ========================= --> */}
        <header className="header header-6">
          <div className="navbar-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="index.html">
                      <img src="assets/img/logo/logo.svg" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent6" aria-controls="navbarSupportedContent6" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent6">
                      <ul id="nav6" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="page-scroll active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#feature">Feature</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#about">About</a>
                        </li>

                        <li className="nav-item">
                          <a className="page-scroll" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#contact">Contact</a>
                        </li>
                      </ul>
                    </div>

                    <div className="header-action d-flex">
                      <a href="#0"> <i className="lni lni-cart"></i> </a>
                      <a href="#0"> <i className="lni lni-alarm"></i> </a>
                    </div>
                    {/* <!-- navbar collapse --> */}
                  </nav>
                  {/* <!-- navbar --> */}
                </div>
              </div>
              {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
          </div>
          {/* <!-- navbar area --> */}
        </header>
        {/* <!-- ========================= header-6 end ========================= --> */}

        {/* <!-- ========================= hero-5 start ========================= --> */}
        <StyledDiv className="hero-section hero-style-5 img-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-content-wrapper">
                  <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">You're Using Free Lite Version</h2>
                  <p className="mb-30 wow fadeInUp" data-wow-delay=".4s">Please purchase full version of the template to get all sections and permission to use with commercial projects.</p>
                  <a href="#0" className="button button-lg radius-50 wow fadeInUp" data-wow-delay=".6s">Get Started <i className="lni lni-chevron-right"></i> </a>
                </div>
              </div>
              <div className="col-lg-6 align-self-end">
                <div className="hero-image wow fadeInUp" data-wow-delay=".5s">
                  <img src="assets/img/hero/hero-5/hero-img.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </StyledDiv>
        {/* <!-- ========================= hero-5 end ========================= --> */}

      </section>
      {/* <!-- ========================= hero-section-wrapper-6 end ========================= --> */}

      {/* <!-- ========================= feature style-5 start ========================= --> */}
      <section id="feature" className="feature-section feature-style-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-8">
              <div className="section-title text-center mb-60">
                <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Specializing In</h3>
                <p className="wow fadeInUp" data-wow-delay=".4s">Stop wasting time and money designing and managing a website that does not get results. Happiness guaranteed!</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="lni lni-vector"></i>
                  <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                  </svg>
                </div>
                <div className="content">
                  <h5>Graphics Design</h5>
                  <p>Short description for the ones who look for something new.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="lni lni-pallet"></i>
                  <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                  </svg>
                </div>
                <div className="content">
                  <h5>Print Design</h5>
                  <p>Short description for the ones who look for something new.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div className="icon">
                  <i className="lni lni-stats-up"></i>
                  <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                  </svg>
                </div>
                <div className="content">
                  <h5>Business Analysis</h5>
                  <p>Short description for the ones who look for something new.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="lni lni-code-alt"></i>
                  <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                  </svg>
                </div>
                <div className="content">
                  <h5>Web Development</h5>
                  <p>Short description for the ones who look for something new.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="lni lni-lock"></i>
                  <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                  </svg>
                </div>
                <div className="content">
                  <h5>Best Security</h5>
                  <p>Short description for the ones who look for something new.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div className="icon">
                  <i className="lni lni-code"></i>
                  <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                  </svg>
                </div>
                <div className="content">
                  <h5>Web Design</h5>
                  <p>Short description for the ones who look for something new.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- ========================= feature style-5 end ========================= --> */}

      {/* <!-- ========================= about style-4 start ========================= --> */}
      <section id="about" className="about-section about-style-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-content-wrapper">
                <div className="section-title mb-30">
                  <h3 className="mb-25 wow fadeInUp" data-wow-delay=".2s">The future of designing starts here</h3>
                  <p className="wow fadeInUp" data-wow-delay=".3s">Stop wasting time and money designing and managing a website that does not get results. Happiness guaranteed,</p>
                </div>
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".35s">
                    <i className="lni lni-checkmark-circle"></i>
                    Stop wasting time and money designing and managing a website that does not get results.
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <i className="lni lni-checkmark-circle"></i>
                    Stop wasting time and money designing and managing.
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".45s">
                    <i className="lni lni-checkmark-circle"></i>
                    Stop wasting time and money designing and managing a website that doesn not get results.
                  </li>
                </ul>
                <a href="#0" className="button button-lg radius-10 wow fadeInUp" data-wow-delay=".5s">Learn More</a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-image text-lg-right wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/about/about-4/about-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= about style-4 end ========================= --> */}

      {/* <!-- ========================= pricing style-4 start ========================= --> */}
      <section id="pricing" className="pricing-section pricing-style-4 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-60">
                <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">Pricing Plan</h3>
                <p className="wow fadeInUp" data-wow-delay=".4s">Stop wasting time and money designing and managing a website that doesn not get results. Happiness guaranteed!Stop wasting time and money designing and managing a website that doesn not get results. Happiness guaranteed!</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="pricing-active-wrapper wow fadeInUp" data-wow-delay=".4s">
                <div className="pricing-active">
                  <div className="single-pricing-wrapper">
                    <div className="single-pricing">
                      <h6>Basic Design</h6>
                      <h4>Web Design</h4>
                      <h3>$ 29.00</h3>
                      <ul>
                        <li>Carefully crafted components</li>
                        <li>Amazing page examples</li>
                        <li>Super friendly support team</li>
                        <li>Awesome Support</li>
                      </ul>
                      <a href="#0" className="button radius-30">Get Started</a>
                    </div>
                  </div>
                  <div className="single-pricing-wrapper">
                    <div className="single-pricing">
                      <h6>Standard Design</h6>
                      <h4>Web Development</h4>
                      <h3>$ 89.00</h3>
                      <ul>
                        <li>Carefully crafted components</li>
                        <li>Amazing page examples</li>
                        <li>Super friendly support team</li>
                        <li>Awesome Support</li>
                      </ul>
                      <a href="#0" className="button radius-30">Get Started</a>
                    </div>
                  </div>
                  <div className="single-pricing-wrapper">
                    <div className="single-pricing">
                      <h6>Pro Design</h6>
                      <h4>Design & Develop</h4>
                      <h3>$ 199.00</h3>
                      <ul>
                        <li>Carefully crafted components</li>
                        <li>Amazing page examples</li>
                        <li>Super friendly support team</li>
                        <li>Awesome Support</li>
                      </ul>
                      <a href="#0" className="button radius-30">Get Started</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= pricing style-4 end ========================= --> */}

      {/* <!-- ========================= contact-style-3 start ========================= --> */}
      <section id="contact" className="contact-section contact-style-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
              <div className="section-title text-center mb-50">
                <h3 className="mb-15">Get in touch</h3>
                <p>Stop wasting time and money designing and managing a website that doesn  not get results. Happiness guaranteed!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <form action="assets/php/contact.php" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" id="name" name="name" className="form-input" placeholder="Name" />
                        <i className="lni lni-user"></i>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="email" id="email" name="email" className="form-input" placeholder="Email" />
                        <i className="lni lni-envelope"></i>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" id="number" name="number" className="form-input" placeholder="Number" />
                        <i className="lni lni-phone"></i>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" id="subject" name="subject" className="form-input" placeholder="Subject" />
                        <i className="lni lni-text-format"></i>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input">
                        <textarea name="message" id="message" className="form-input" placeholder="Message" rows="6"></textarea>
                        <i className="lni lni-comments-alt"></i>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-button">
                        <button type="submit" className="button"> <i className="lni lni-telegram-original"></i> Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

            </div>

            <div className="col-lg-4">
              <div className="left-wrapper">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-item">
                      <div className="icon">
                        <i className="lni lni-phone"></i>
                      </div>
                      <div className="text">
                        <p>0045939863784</p>
                        <p>+004389478327</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-item">
                      <div className="icon">
                        <i className="lni lni-envelope"></i>
                      </div>
                      <div className="text">
                        <p>yourmail@gmail.com</p>
                        <p>admin@yourwebsite.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="single-item">
                      <div className="icon">
                        <i className="lni lni-map-marker"></i>
                      </div>
                      <div className="text">
                        <p>John's House, 13/5 Road, Sidny United State Of America</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= contact-style-3 end ========================= --> */}

      {/* <!-- ========================= clients-logo start ========================= --> */}
      <section className="clients-logo-section pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="client-logo wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/clients/brands.svg" alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= clients-logo end ========================= --> */}

      {/* <!-- ========================= footer style-4 start ========================= --> */}
      <footer className="footer footer-style-4">
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                  <div className="logo">
                    <a href="#0"> <img src="assets/img/logo/logo.svg" alt="" /> </a>
                  </div>
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis nulla placerat amet amet congue.</p>
                  <ul className="socials">
                    <li> <a href="#0"> <i className="lni lni-facebook-filled"></i> </a> </li>
                    <li> <a href="#0"> <i className="lni lni-twitter-filled"></i> </a> </li>
                    <li> <a href="#0"> <i className="lni lni-instagram-filled"></i> </a> </li>
                    <li> <a href="#0"> <i className="lni lni-linkedin-original"></i> </a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".3s">
                  <h6>Quick Link</h6>
                  <ul className="links">
                    <li> <a href="#0">Home</a> </li>
                    <li> <a href="#0">About</a> </li>
                    <li> <a href="#0">Service</a> </li>
                    <li> <a href="#0">Testimonial</a> </li>
                    <li> <a href="#0">Contact</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                  <h6>Services</h6>
                  <ul className="links">
                    <li> <a href="#0">Web Design</a> </li>
                    <li> <a href="#0">Web Development</a> </li>
                    <li> <a href="#0">Seo Optimization</a> </li>
                    <li> <a href="#0">Blog Writing</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".5s">
                  <h6>Download App</h6>
                  <ul className="download-app">
                    <li>
                      <a href="#0">
                        <span className="icon"><i className="lni lni-apple"></i></span>
                        <span className="text">Download on the <b>App Store</b> </span>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <span className="icon"><i className="lni lni-play-store"></i></span>
                        <span className="text">GET IT ON <b>Play Store</b> </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper wow fadeInUp" data-wow-delay=".2s">
            <p>Design and Developed by <a href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a> Built-with <a href="https://uideck.com" rel="nofollow" target="_blank">Lindy UI Kit</a></p>
          </div>
        </div>
      </footer>
      {/* <!-- ========================= footer style-4 end ========================= --> */}

      {/* <!-- ========================= scroll-top start ========================= --> */}
      <a href="#" className="scroll-top"> <i className="lni lni-chevron-up"></i> </a>
      {/* <!-- ========================= scroll-top end ========================= --> */}
    </div>
  );
}

const StyledDiv = styled.div`
  background-image: url('assets/img/hero/hero-5/hero-bg.svg')
`

export default App;