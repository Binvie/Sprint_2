import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div
                className="container-fluid fixed-top px-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex bg-white">
                    <div className="col-lg-6 px-5 text-start">
                        <small>
                            <i className="fa fa-map-marker-alt me-2"/>
                            580 Trần Hưng Đạo, Đà Nẵng
                        </small>
                        <small className="ms-4">
                            <i className="fa fa-envelope me-2"/>
                            thien97.night1@gmail.com
                        </small>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <a className="text-body ms-3" href="https://www.facebook.com/givemeaname97">
                            <i className="fab fa-facebook-f"/>
                        </a>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-twitter"/>
                        </a>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a className="text-body ms-3" href="">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                </div>
                <nav
                    className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn bg-white"
                    data-wow-delay="0.1s"
                >
                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">
                            F<span className="text-secondary">oo</span>vie
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler me-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link className="nav-item nav-link active" to="/">
                                Home
                            </Link>
                            <Link className="nav-item nav-link" to="/about-us">
                                About Us
                            </Link>
                            <Link className="nav-item nav-link" to="/products">
                                Products
                            </Link>
                            {/*<div className="nav-item dropdown">*/}
                            {/*    <a*/}
                            {/*        href="#"*/}
                            {/*        className="nav-link dropdown-toggle"*/}
                            {/*        data-bs-toggle="dropdown"*/}
                            {/*    >*/}
                            {/*        Pages*/}
                            {/*    </a>*/}
                            {/*    <div className="dropdown-menu m-0">*/}
                            {/*        <a href="blog.html" className="dropdown-item">*/}
                            {/*            Blog Grid*/}
                            {/*        </a>*/}
                            {/*        <a href="feature.html" className="dropdown-item">*/}
                            {/*            Our Features*/}
                            {/*        </a>*/}
                            {/*        <a href="testimonial.html" className="dropdown-item">*/}
                            {/*            Testimonial*/}
                            {/*        </a>*/}
                            {/*        <a href="404.html" className="dropdown-item">*/}
                            {/*            404 Page*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <Link className="nav-item nav-link" to="/contact">
                                Contact Us
                            </Link>
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            {/*<a className="btn-sm-square bg-white rounded-circle ms-3" href="">*/}
                            {/*    <small className="fa fa-search text-body"/>*/}
                            {/*</a>*/}
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="/cart">
                                <small className="fa fa-shopping-bag text-body"/>
                            </a>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="/login">
                                <small className="fa fa-user text-body"/>
                            </a>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;