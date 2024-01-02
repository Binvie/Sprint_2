import React from 'react';
import "../css/products.min.css"
import {
    pic1, pic2, pic3, icon1, icon2, icon3, blog1, blog2, blog3,
    prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, login1 ,loginPic
} from "../../assets/images";
import Footer from "./Footer";
import Header from "./Header";
import "../css/shop.min.css"


function Products() {
    return (
        <>
            <Header/>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Shop</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>
                    <li className="breadcrumb-item active text-white">Shop</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Fruits Shop Start*/}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Fresh fruits shop</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input
                                            type="search"
                                            className="form-control p-3"
                                            placeholder="keywords"
                                            aria-describedby="search-icon-1"
                                        />
                                        <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"/>
                </span>
                                    </div>
                                </div>
                                <div className="col-6"/>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Default Sorting:</label>
                                        <select
                                            id="fruits"
                                            name="fruitlist"
                                            className="border-0 form-select-sm bg-light me-3"
                                            form="fruitform"
                                        >
                                            <option value="volvo">Nothing</option>
                                            <option value="saab">Popularity</option>
                                            <option value="opel">Organic</option>
                                            <option value="audi">Fantastic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2"/>
                                                                Apples
                                                            </a>
                                                            <span>(3)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2"/>
                                                                Oranges
                                                            </a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2"/>
                                                                Strawbery
                                                            </a>
                                                            <span>(2)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2"/>
                                                                Banana
                                                            </a>
                                                            <span>(8)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#">
                                                                <i className="fas fa-apple-alt me-2"/>
                                                                Pumpkin
                                                            </a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="mb-2">Price</h4>
                                                <input
                                                    type="range"
                                                    className="form-range w-100"
                                                    id="rangeInput"
                                                    name="rangeInput"
                                                    min={0}
                                                    max={500}
                                                    defaultValue={0}
                                                    oninput="amount.value=rangeInput.value"
                                                />
                                                <output
                                                    id="amount"
                                                    name="amount"
                                                    min-velue={0}
                                                    max-value={500}
                                                    htmlFor="rangeInput"
                                                >
                                                    0
                                                </output>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Additional</h4>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-1"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-1"> Organic</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-2"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-2"> Fresh</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-3"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-3"> Sales</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-4"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-4"> Discount</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input
                                                        type="radio"
                                                        className="me-2"
                                                        id="Categories-5"
                                                        name="Categories-1"
                                                        defaultValue="Beverages"
                                                    />
                                                    <label htmlFor="Categories-5"> Expired</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <h4 className="mb-3">Featured products</h4>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div
                                                    className="rounded me-4"
                                                    style={{width: 100, height: 100}}
                                                >
                                                    <img
                                                        src={prod2}
                                                        className="img-fluid rounded"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star"/>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div
                                                    className="rounded me-4"
                                                    style={{width: 100, height: 100}}
                                                >
                                                    <img
                                                        src={prod1}
                                                        className="img-fluid rounded"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star"/>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div
                                                    className="rounded me-4"
                                                    style={{width: 100, height: 100}}
                                                >
                                                    <img
                                                        src={prod3}
                                                        className="img-fluid rounded"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star text-secondary"/>
                                                        <i className="fa fa-star"/>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center my-4">
                                                <a
                                                    href="#"
                                                    className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                                                >
                                                    Vew More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative">
                                                <img
                                                    src={loginPic}
                                                    className="img-fluid w-100 rounded"
                                                    alt=""
                                                />
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: "50%",
                                                        right: 10,
                                                        transform: "translateY(-50%)"
                                                    }}
                                                >
                                                    <h3 className="text-secondary fw-bold">
                                                       Organic <br/>Fresh <br/> Fruits
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod1}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod2}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod3}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod4}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apricots</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod5}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Banana</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod6}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod7}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod8}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img
                                                        src={prod7}
                                                        className="img-fluid w-100 rounded-top"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                                                    style={{top: 10, left: 10}}
                                                >
                                                    Fruits
                                                </div>
                                                <div
                                                    className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        sed do eiusmod te incididunt
                                                    </p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">
                                                            $4.99 / kg
                                                        </p>
                                                        <a
                                                            href="#"
                                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                                        >
                                                            <i className="fa fa-shopping-bag me-2 text-primary"/>{" "}
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="pagination d-flex justify-content-center mt-5">
                                                <a href="#" className="rounded">
                                                    «
                                                </a>
                                                <a href="#" className="active rounded">
                                                    1
                                                </a>
                                                <a href="#" className="rounded">
                                                    2
                                                </a>
                                                <a href="#" className="rounded">
                                                    3
                                                </a>
                                                <a href="#" className="rounded">
                                                    4
                                                </a>
                                                <a href="#" className="rounded">
                                                    5
                                                </a>
                                                <a href="#" className="rounded">
                                                    6
                                                </a>
                                                <a href="#" className="rounded">
                                                    »
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fruits Shop End*/}
            <Footer/>
        </>
    );
}

export default Products;