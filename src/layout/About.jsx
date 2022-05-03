import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { ABOUT_HEADER, ABOUT_TEXT, ABOUT_US } from '../img/app/constants';

const About = () => {
    return (
        <div>
            <section id="home" className="hero-section-wrapper-5">

                <StyledDiv className="hero-section hero-style-5 img-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="hero-content-wrapper">
                                    <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">{ABOUT_HEADER}</h2>
                                    <p className="mb-30 wow fadeInUp" data-wow-delay=".4s">{ABOUT_TEXT}</p>
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
            </section>

            <section id="feature" className="feature-section feature-style-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-8">
                            <div className="section-title text-center mb-60">
                                <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">About Us</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <p>{ABOUT_US}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section id="contact" className="contact-section contact-style-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
                            <div className="section-title text-center mb-50">
                                <h3 className="mb-15">Our Values</h3>
                                <p>{}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const StyledDiv = styled.div`
  background-image: url('assets/img/hero/hero-5/hero-bg.svg');
  color: green;
`

export default About