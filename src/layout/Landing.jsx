import React from 'react'
import styled from 'styled-components';
import { AFRILEARN_WORKS, ENGAGING_CLASSROOM, EXAMINATION_SUCCESS, GENIUS_CONTENT_TEXT, GET_IN_TOUCH, HEADER_MAIN, HEADER_TEXT, PERSONALISED_EDUCTION, VALUE } from '../img/app/constants';
import { Button, InputGroup, SplitButton } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';
import ShowModalSingleAction from '../common/ShowModalSingleAction';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Landing = () => {

    const [studentInfo, setStudentInfo] = useState('')
    const [studentInfoTitle, setStudentInfoTitle] = useState('')
    const [spin, setSpin] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)

    const navigate = useNavigate()

    const title = (title) => {

    }

    let showModal;

    if (true) {
        showModal = (
            <ShowModalSingleAction
                show={show}
                title={studentInfoTitle}
                body={studentInfo}
                handler={handleClose}
            />
        )
    }

    const infoForStudentAccount = (
        <div>
            <p>Learn through your syllabus at your unique pace</p>
            <p>Achieve best grades and pass WAEC, JAMB, BECE</p>
            <p>Interact with top tutors and become high-flying student</p>
        </div>
    )
    const infoTitleForStudentAccount = (
        <p>Title For Student Tips</p>
    )

    useEffect(() => {
        setSpin(true)
        setTimeout(() => {
            setSpin(false)
        }, 3000)
    }, [])


    const studentAccountInfoHandler = () => {
        setShow(true)
        setStudentInfo(infoForStudentAccount)
        setStudentInfoTitle(infoTitleForStudentAccount)
    }

    let spinnar = (
        <div className="preloader">
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
        </div>
    )

    return (
        <div>
            {showModal}
            {spin && spinnar}

            <section id="home" className="hero-section-wrapper-5">

                <StyledDiv className="hero-section hero-style-5 img-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="hero-content-wrapper">
                                    <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">{HEADER_MAIN}</h2>
                                    <p className="mb-30 wow fadeInUp" data-wow-delay=".4s">{HEADER_TEXT}</p>
                                    <Button variant="success">Get Started <i className="lni lni-chevron-right"></i></Button>
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
                                <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">{AFRILEARN_WORKS}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i className="lni lni-search"></i>
                                    <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <h5>Genius Content</h5>
                                    <p>{GENIUS_CONTENT_TEXT}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                                <div className="icon">
                                    <i className="lni lni-checkmark-circle"></i>
                                    <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <h5>Examination Success</h5>
                                    <p>{EXAMINATION_SUCCESS}</p>
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
                                    <h5>Personalised Education</h5>
                                    <p>{PERSONALISED_EDUCTION}</p>
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
                                    <h5>Engaging Classroon</h5>
                                    <p>{ENGAGING_CLASSROOM}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="about" className="about-section about-style-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content-wrapper">
                                <div className="section-title mb-30">
                                    <h3 className="mb-25 wow fadeInUp" data-wow-delay=".2s">Create your account</h3>
                                </div>
                                <ul>
                                    <li className="wow fadeInUp" data-wow-delay=".35s">
                                        <i className="lni lni-checkmark-circle"></i>
                                        <Button onClick={() => navigate('/register')} variant="outline-success">Create Free Student Account</Button>
                                        <Button onClick={studentAccountInfoHandler} variant="outline-success"><i className="lni lni-chevron-right" /></Button>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".35s">
                                        <i className="lni lni-checkmark-circle"></i>
                                        <Button onClick={() => navigate('/register')} variant="outline-success">Create Free Teacher Account</Button>
                                        <Button onClick={() => alert('Info for Teacher account will appear like for student')} variant="outline-success"><i className="lni lni-chevron-right" /></Button>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".35s">
                                        <i className="lni lni-checkmark-circle"></i>
                                        <Button onClick={() => navigate('/register')} variant="outline-success">Create Free Parent Account</Button>
                                        <Button onClick={() => alert('Info for Parent account will appear like for student')} variant="outline-success"><i className="lni lni-chevron-right" /></Button>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".35s">
                                        <i className="lni lni-checkmark-circle"></i>
                                        <Button onClick={() => navigate('/register')} variant="outline-success">Create Free School Account</Button>
                                        <Button onClick={() => alert('Info for School account will appear like for student')} variant="outline-success"><i className="lni lni-chevron-right" /></Button>
                                    </li>


                                </ul>
                                <Button variant="success">Start Learning</Button>
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

            <section id="pricing" className="pricing-section pricing-style-4 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title mb-60">
                                <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">{VALUE}</h3>
                                <p className="wow fadeInUp" data-wow-delay=".4s">New content added every week!</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="pricing-active-wrapper wow fadeInUp" data-wow-delay=".4s">
                                <div className="pricing-active">
                                    <div className="single-pricing-wrapper">
                                        <div className="single-pricing">
                                            <img src="assets/img/logo/videoLessons.d0ed402e.svg" alt="Logo" />
                                            <h3>1,500+</h3>
                                            <Button variant="success">See Videos</Button>
                                        </div>
                                    </div>
                                    <div className="single-pricing">
                                        <img src="assets/img/logo/practice questions.2852ff88.svg" alt="Logo" />
                                        <h3>23,813+</h3>
                                        <Button variant="success">Practice Questions</Button>
                                    </div>
                                    <div className="single-pricing">
                                        <img src="assets/img/logo/classnote.6ccaef05.svg" alt="Logo" />
                                        <h3>1,500+</h3>
                                        <Button variant="success">Rich 'n Ready Class Notes</Button>
                                    </div>
                                    <div className="single-pricing">
                                        <img src="assets/img/logo/engagements.d0788f27.svg" alt="Logo" />
                                        <h3>1,500+</h3>
                                        <Button variant="success">Learning Minutes</Button>
                                    </div>

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
                                <h3 className="mb-15">Get in touch</h3>
                                <p>{GET_IN_TOUCH}</p>
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
                                                <Button className="button" variant="success"><i className="lni lni-telegram-original"></i> Submit</Button>
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
                                            <div className="icon data">
                                                <i className="lni lni-phone"></i>
                                            </div>
                                            <div className="text">
                                                <p>+2348027855263</p>
                                                <p>+2348051544949</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="single-item">
                                            <div className="icon">
                                                <i className="lni lni-envelope"></i>
                                            </div>
                                            <div className="text">
                                                <p>hello@myafrilearn.com</p>
                                                <p>afrilearn.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="single-item">
                                            <div className="icon">
                                                <i className="lni lni-map-marker"></i>
                                            </div>
                                            <div className="text">
                                                <p>6, Gbemisola Street, Allen Avenue, Ikeja, Lagos, Nigeria.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <a href="#" className="scroll-top"> <i className="lni lni-chevron-up"></i> </a>

        </div>
    )
}

const StyledDiv = styled.div`
  background-image: url('assets/img/hero/hero-5/hero-bg.svg');
  color: green;
`

export default Landing