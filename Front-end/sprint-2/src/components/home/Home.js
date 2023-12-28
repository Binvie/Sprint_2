import React from 'react';
import {Link} from "react-router-dom";
import "../css/bootstrap.min.css"
import "../css/style.css"
import {
    pic1, pic2, pic3, icon1, icon2, icon3, blog1, blog2, blog3,
    prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8
} from "../../assets/images";


function Home() {
    return (
        <>
            {/*<div*/}
            {/*    id="spinner"*/}
            {/*    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"*/}
            {/*>*/}
            {/*    <div className="spinner-border text-primary" role="status"/>*/}
            {/*</div>*/}
            {/* Spinner End */}
            {/* Navbar Start */}
            <div
                className="container-fluid fixed-top px-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
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
                    className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
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
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-shopping-bag text-body"/>
                            </a>
                            <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small className="fa fa-user text-body"/>
                            </a>

                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div
                    id="header-carousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={pic1} alt="Image"/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 mb-5 animated slideInDown">
                                                Organic Food Is Good For Health
                                            </h1>
                                            <Link
                                                className="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                                                to="/products">
                                                Products
                                            </Link>
                                            <Link
                                                href=""
                                                className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                                                to="/products">
                                                Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={pic2} alt="Image"/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 mb-5 animated slideInDown">
                                                Natural Food Is Always Healthy
                                            </h1>
                                            <Link
                                                className="btn btn-primary rounded-pill py-sm-3 px-sm-5"
                                                to="/products">
                                                Products
                                            </Link>
                                            <Link
                                                href=""
                                                className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3"
                                                to="/products">
                                                Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src={pic3}/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3"/>
                                Tempor erat elitr rebum at clita
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3"/>
                                Aliqu diam amet diam et eos
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3"/>
                                Clita duo justo magna dolore erat amet
                            </p>
                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Feature Start */}
            <div className="container-fluid bg-light bg-icon my-5 py-6">
                <div className="container">
                    <div
                        className="section-header text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{maxWidth: 500}}
                    >
                        <h1 className="display-5 mb-3">Our Features</h1>
                        <p>
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                            justo sed rebum vero dolor duo.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={icon1} alt=""/>
                                <h4 className="mb-3">Natural Process</h4>
                                <p className="mb-4">
                                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                                    justo sed vero dolor duo.
                                </p>
                                <a
                                    className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                                    href=""
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={icon2} alt=""/>
                                <h4 className="mb-3">Organic Products</h4>
                                <p className="mb-4">
                                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                                    justo sed vero dolor duo.
                                </p>
                                <a
                                    className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                                    href=""
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={icon3} alt=""/>
                                <h4 className="mb-3">Biologically Safe</h4>
                                <p className="mb-4">
                                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                                    justo sed vero dolor duo.
                                </p>
                                <a
                                    className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"
                                    href=""
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End */}
            {/* Product Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">
                            <div
                                className="section-header text-start mb-5 wow fadeInUp"
                                data-wow-delay="0.1s"
                                style={{maxWidth: 500}}
                            >
                                <h1 className="display-5 mb-3">Our Products</h1>
                                <p>
                                    Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                                    justo sed rebum vero dolor duo.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 text-start text-lg-end wow slideInRight"
                            data-wow-delay="0.1s"
                        >
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <a
                                        className="btn btn-outline-primary border-2 active"
                                        data-bs-toggle="pill"
                                        href="#tab-1"
                                    >
                                        Vegetable
                                    </a>
                                </li>
                                <li className="nav-item me-2">
                                    <a
                                        className="btn btn-outline-primary border-2"
                                        data-bs-toggle="pill"
                                        href="#tab-2"
                                    >
                                        Fruits{" "}
                                    </a>
                                </li>
                                <li className="nav-item me-0">
                                    <a
                                        className="btn btn-outline-primary border-2"
                                        data-bs-toggle="pill"
                                        href="#tab-3"
                                    >
                                        Fresh
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod1}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod2}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod3}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod4}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod5}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod6}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.5s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod7}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.7s"
                                >
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src={prod8}
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 text-center wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                        Browse More Products
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-1.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-2.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-3.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-4.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-5.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-6.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-7.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-8.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                        Browse More Products
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-1.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-2.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-3.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-4.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-5.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-6.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-7.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img
                                                className="img-fluid w-100"
                                                src="img/product-8.jpg"
                                                alt=""
                                            />
                                            <div
                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                New
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href="">
                                                Fresh Tomato
                                            </a>
                                            <span className="text-primary me-1">$19.00</span>
                                            <span className="text-body text-decoration-line-through">
                    $29.00
                  </span>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="w-50 text-center border-end py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-eye text-primary me-2"/>
                                                    View detail
                                                </a>
                                            </small>
                                            <small className="w-50 text-center py-2">
                                                <a className="text-body" href="">
                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                    Add to cart
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                        Browse More Products
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product End */}
            {/* Firm Visit Start */}
            <div className="container-fluid bg-primary bg-icon mt-5 py-6">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>
                            <p className="text-white mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo magna dolore erat amet. Diam dolor diam
                                ipsum sit. Aliqu diam amet diam et eos.
                            </p>
                        </div>
                        <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <a
                                className="btn btn-lg btn-secondary rounded-pill py-3 px-5"
                                href=""
                            >
                                Visit Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Firm Visit End */}
            {/* Testimonial Start */}
            {/*<div className="container-fluid bg-light bg-icon py-6 mb-5">*/}
            {/*    <div className="container">*/}
            {/*        <div*/}
            {/*            className="section-header text-center mx-auto mb-5 wow fadeInUp"*/}
            {/*            data-wow-delay="0.1s"*/}
            {/*            style={{maxWidth: 500}}*/}
            {/*        >*/}
            {/*            <h1 className="display-5 mb-3">Customer Review</h1>*/}
            {/*            <p>*/}
            {/*                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam*/}
            {/*                justo sed rebum vero dolor duo.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            className="owl-carousel testimonial-carousel wow fadeInUp"*/}
            {/*            data-wow-delay="0.1s"*/}
            {/*        >*/}
            {/*            <div className="testimonial-item position-relative bg-white p-5 mt-4">*/}
            {/*                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"/>*/}
            {/*                <p className="mb-4">*/}
            {/*                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam*/}
            {/*                    amet diam et eos. Clita erat ipsum et lorem et sit.*/}
            {/*                </p>*/}
            {/*                <div className="d-flex align-items-center">*/}
            {/*                    <img*/}
            {/*                        className="flex-shrink-0 rounded-circle"*/}
            {/*                        src="img/testimonial-1.jpg"*/}
            {/*                        alt=""*/}
            {/*                    />*/}
            {/*                    <div className="ms-3">*/}
            {/*                        <h5 className="mb-1">Client Name</h5>*/}
            {/*                        <span>Profession</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="testimonial-item position-relative bg-white p-5 mt-4">*/}
            {/*                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"/>*/}
            {/*                <p className="mb-4">*/}
            {/*                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam*/}
            {/*                    amet diam et eos. Clita erat ipsum et lorem et sit.*/}
            {/*                </p>*/}
            {/*                <div className="d-flex align-items-center">*/}
            {/*                    <img*/}
            {/*                        className="flex-shrink-0 rounded-circle"*/}
            {/*                        src="img/testimonial-2.jpg"*/}
            {/*                        alt=""*/}
            {/*                    />*/}
            {/*                    <div className="ms-3">*/}
            {/*                        <h5 className="mb-1">Client Name</h5>*/}
            {/*                        <span>Profession</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="testimonial-item position-relative bg-white p-5 mt-4">*/}
            {/*                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"/>*/}
            {/*                <p className="mb-4">*/}
            {/*                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam*/}
            {/*                    amet diam et eos. Clita erat ipsum et lorem et sit.*/}
            {/*                </p>*/}
            {/*                <div className="d-flex align-items-center">*/}
            {/*                    <img*/}
            {/*                        className="flex-shrink-0 rounded-circle"*/}
            {/*                        src="img/testimonial-3.jpg"*/}
            {/*                        alt=""*/}
            {/*                    />*/}
            {/*                    <div className="ms-3">*/}
            {/*                        <h5 className="mb-1">Client Name</h5>*/}
            {/*                        <span>Profession</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="testimonial-item position-relative bg-white p-5 mt-4">*/}
            {/*                <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"/>*/}
            {/*                <p className="mb-4">*/}
            {/*                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam*/}
            {/*                    amet diam et eos. Clita erat ipsum et lorem et sit.*/}
            {/*                </p>*/}
            {/*                <div className="d-flex align-items-center">*/}
            {/*                    <img*/}
            {/*                        className="flex-shrink-0 rounded-circle"*/}
            {/*                        src="img/testimonial-4.jpg"*/}
            {/*                        alt=""*/}
            {/*                    />*/}
            {/*                    <div className="ms-3">*/}
            {/*                        <h5 className="mb-1">Client Name</h5>*/}
            {/*                        <span>Profession</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* Testimonial End */}
            {/* Blog Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="section-header text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{maxWidth: 500}}
                    >
                        <h1 className="display-5 mb-3">Latest Blog</h1>
                        <p>
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                            justo sed rebum vero dolor duo.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src={blog1} alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4" href="">
                                    How to cultivate organic fruits and vegetables in own firm
                                </a>
                                <div className="text-muted border-top pt-4">
                                    <small className="me-3">
                                        <i className="fa fa-user text-primary me-2"/>
                                        Admin
                                    </small>
                                    <small className="me-3">
                                        <i className="fa fa-calendar text-primary me-2"/>
                                        01 Jan, 2045
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img className="img-fluid" src={blog2} alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4" href="">
                                    How to cultivate organic fruits and vegetables in own firm
                                </a>
                                <div className="text-muted border-top pt-4">
                                    <small className="me-3">
                                        <i className="fa fa-user text-primary me-2"/>
                                        Admin
                                    </small>
                                    <small className="me-3">
                                        <i className="fa fa-calendar text-primary me-2"/>
                                        01 Jan, 2045
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="img-fluid" src={blog3} alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4" href="">
                                    How to cultivate organic fruits and vegetables in own firm
                                </a>
                                <div className="text-muted border-top pt-4">
                                    <small className="me-3">
                                        <i className="fa fa-user text-primary me-2"/>
                                        Admin
                                    </small>
                                    <small className="me-3">
                                        <i className="fa fa-calendar text-primary me-2"/>
                                        01 Jan, 2045
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-bold text-primary mb-4">
                                F<span className="text-secondary">oo</span>vie
                            </h1>
                            <p>
                                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                                ipsum et lorem et sit, sed stet lorem sit clita
                            </p>
                            <div className="d-flex pt-2">
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-youtube"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p>
                                <i className="fa fa-map-marker-alt me-3"/>
                                280 Trần Hưng Đạo, Đà Nẵng
                            </p>
                            <p>
                                <i className="fa fa-phone-alt me-3"/>
                                0935131657
                            </p>
                            <p>
                                <i className="fa fa-envelope me-3"/>
                                thien97.night1@gmail.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            {/*<div className="position-relative mx-auto" style={{maxWidth: 400}}>*/}
                            {/*    <input*/}
                            {/*        className="form-control bg-transparent w-100 py-3 ps-4 pe-5"*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Your email"*/}
                            {/*    />*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"*/}
                            {/*    >*/}
                            {/*        SignUp*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a href="#">Foovie</a>, All for customer's health.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By <span>LÊ CÔNG HOÀN THIỆN</span>
                                {/*<br/>*/}
                                {/*Distributed By:{" "}*/}
                                {/*<a href="https://themewagon.com" target="_blank">*/}
                                {/*    ThemeWagon*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a
                href="#"
                // className="btn btn-lg btn-lg-square"
                className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
            >
                <i className="far fa-arrow-alt-circle-down fa-2x fa-rotate-180" style={{margin: "-35% -100%"}}>
                   {/*// style={{color: "#000000", position: "relative", top: "5px", right: "13px"}}>*/}

                </i>
            </a>
            {/* JavaScript Libraries */}
        </>
    );
}

export default Home;