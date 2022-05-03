import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className="header header-6">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <Link to={'/'}>
                                            <img src="assets/img/logo/greenlogo.png" alt="Logo" />
                                        </Link>
                                    </a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent6" aria-controls="navbarSupportedContent6" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent6">
                                        <ul id="nav6" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#about">About</a>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/login'}>Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/register'}>Register</Link>
                                            </li>
                                        </ul>
                                    </div>

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
        </div>
    )
}

export default Navbar