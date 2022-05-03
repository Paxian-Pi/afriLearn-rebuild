import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-style-4">
                <div className="container">
                    <div className="widget-wrapper">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">

                                    <p className="desc">Terms of Service</p>
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

                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer-widget wow fadeInUp" data-wow-delay=".5s">
                                    <h6>Download Our Mobile Apps</h6>
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
                        <p>Copyright &copy; {new Date().getFullYear()} AfriLearn</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer