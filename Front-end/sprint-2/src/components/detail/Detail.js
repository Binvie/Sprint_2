import React, {useEffect, useState} from 'react';
import {login1, prod1, prod2, prod3, prod5, prod6, prod7} from "../../assets/images";
import Footer from "../home/Footer";
import Header from "../home/Header";
import "../backUpCss/shop.min.css"
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import * as typeService from "../../services/FruitTypeService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {toast} from "react-toastify";
import {addToCart} from "../redux/actions/CartActions";
import {useDispatch} from "react-redux";
import {Carousel} from "react-bootstrap"
import * as accountService from "../../services/AccountService";

function Detail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [fruits, setFruits] = useState({});
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [typeList, setTypeList] = useState([])
    const [typeId, setTypeId] = useState("")
    const dispatch = useDispatch();
    const [existingUser, setExistingUser] = useState({})
    const [quantity, setQuantity] = useState(1);
    const flag = accountService.infoToken() != null

    const [userId, setUserId] = useState()
    const [username, setUsername] = useState("")
    const infoUsername = async () => {
        let res = await accountService.infoToken()
        if (res) {
            setUsername(res.sub)
            let res1 = JSON.parse(localStorage.getItem("user"))
            setUserId(res1.id)
            setExistingUser(res1)
            console.log(res1.id)
        }
    }

    useEffect(() => {
        infoUsername()
    }, []);

    const location = useLocation();
    const handleAddProductToCart = async () => {
        if (flag) {
            console.log(username)
            dispatch(addToCart(username, id, quantity));
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {
            navigate("/login")
            toast.warn("Bạn phải đăng nhập để có thể mua hàng")
        }
    }

    // Thiết lập scrollTop khi location thay đổi (chuyển trang)
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const quantityMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            toast.warn("Số lượng sản phẩm không hợp lệ");
        }
    }

    const quantityAddition = () => {
        if (existingUser) {
            if (quantity <= 9) {
                setQuantity(quantity + 1);
                // if (quantity === 9) {
                //     toast.info("Nếu muốn đặt số lượng lớn, vui lòng liên hệ QTV để được hỗ trợ!");
                // }
            }
        } else {
            toast.success("Vui lòng đăng nhập!");
            navigate("/login");
        }

    }

    const backToLastPage = () => {
        navigate(-1);
    }
    const getDetailFruitPage = async () => {
        try {
            const res = await typeService.getDetailFruits(id);
            if (res.status === 200) {
                setFruits(res.data.fruit)
                setImages(res.data.images)
                setSelectedImage(res.data.images[0].image)
            } else {
                setFruits(null);
                console.log("lỗi lấy data1")
            }

        } catch (e) {
            alert(" Error " + e)
        }
    }

    const getTypeList = async () => {
        try {
            const res = await typeService.getTypeListService()
            setTypeList(res)
        } catch (e) {
            alert("Error typeList " + e)
        }
    }
    const splitTextByDots = (text) => {
        try {
            if (text !== undefined) {
                let lines = text.split(".");
                return lines.map((line, index) => (
                    <p key={index}>{line}</p>
                ));
            }
        } catch (e) {
            alert(e)
        }
    }

    function truncateText(text, maxLength) {
        if (text !== undefined) {
            if (text.length <= maxLength) {
                return text;
            }
            return text.slice(0, maxLength) + '...';
        }
        // Nếu độ dài vượt quá giới hạn, rút gọn và thêm dấu '...'
    }

    useEffect(() => {
        getTypeList()
        getDetailFruitPage()
    }, [id, quantity]);

    if (!fruits) {
        return null;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    if (!fruits) return null;

    return (
        <>
            <Header/>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Chi tiết sản phẩm</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to={"/"}>Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={"/products"}>Sản phẩm</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Chi tiết sản phẩm</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Single Product Start */}
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <a href="#">
                                            <img
                                                src={fruits.fruitImage}
                                                className="img-fluid rounded"
                                                alt="Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <Carousel>*/}
                                {/*        <Carousel.Item>*/}
                                {/*            <Carousel.Caption>*/}
                                {/*                <h3>First slide label</h3>*/}
                                {/*                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                {/*            </Carousel.Caption>*/}
                                {/*        </Carousel.Item>*/}
                                {/*        <Carousel.Item>*/}
                                {/*            <Carousel.Caption>*/}
                                {/*                <h3>Second slide label</h3>*/}
                                {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                {/*            </Carousel.Caption>*/}
                                {/*        </Carousel.Item>*/}
                                {/*        <Carousel.Item>*/}
                                {/*            <Carousel.Caption>*/}
                                {/*                <h3>Third slide label</h3>*/}
                                {/*                <p>*/}
                                {/*                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
                                {/*                </p>*/}
                                {/*            </Carousel.Caption>*/}
                                {/*        </Carousel.Item>*/}
                                {/*    </Carousel>*/}
                                {/*</div>*/}
                                <div className="col-lg-6">
                                    <h3 className="fw-bold mb-3">{fruits.fruitsName}</h3>
                                    {/*<p className="mb-3"> Loại sản phẩm: {typeList[fruits.typeId - 1].name} </p>*/}
                                    {/*<p className="mb-3"> Loại sản phẩm: {fruits.typeId - 1} </p>*/}
                                    <p className="mb-3"> Số lượng còn lại: {fruits.inventory} sản phẩm. </p>
                                    <p className="mb-3"> Mô tả sản phẩm: {truncateText(fruits.description, 100)}</p>
                                    <h5 className="fw-bold mb-3">Giá tiền : {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(fruits.fruitsPrice)} </h5>
                                    <div className="input-group quantity mb-5" style={{width: 100}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border"
                                                    onClick={quantityMinus}>
                                                <i className="fa fa-minus"/>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm text-center border-0"
                                            value={quantity} readOnly={true}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border"
                                                    onClick={quantityAddition}>
                                                <i className="fa fa-plus"/>
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                                        onClick={handleAddProductToCart}
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to
                                        cart
                                    </button>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button
                                                className="nav-link active border-white border-bottom-0"
                                                type="button"
                                                role="tab"
                                                id="nav-about-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-about"
                                                aria-controls="nav-about"
                                                aria-selected="true"
                                            >
                                                Description
                                            </button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div
                                            className="tab-pane active"
                                            id="nav-about"
                                            role="tabpanel"
                                            aria-labelledby="nav-about-tab"
                                        >
                                            {splitTextByDots(fruits.description)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <div className="row g-4 fruite">
                                <div className="col-lg-12">
                                    {/*<div className="mb-4">*/}
                                    {/*    <h4>Danh mục</h4>*/}
                                    {/*    {typeList.length !== 0 ? (*/}
                                    {/*        typeList.map(type => {*/}
                                    {/*            return (*/}
                                    {/*                <>*/}
                                    {/*                    <ul className="list-unstyled fruite-categorie"*/}
                                    {/*                        key={type.id}>*/}
                                    {/*                        <li value={type.id} role="button"*/}
                                    {/*                            onClick={event => setTypeId(event.target.value)}>*/}
                                    {/*                            <i className={`${type.id === typeId ? 'text-warning' : 'text-primary'} fas fa-apple-alt me-2 `}/>{type.name}*/}
                                    {/*                        </li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </>*/}
                                    {/*            )*/}
                                    {/*        })*/}
                                    {/*    ) : (<p>Không có dữ liệu.</p>)}*/}
                                    {/*</div>*/}
                                </div>
                                <div className="col-lg-12">
                                    <div className="position-relative">
                                        <img
                                            src={login1}
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
                                            <h3 className="text-warning fw-bold">
                                                Fresh <br/> Fruits
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<h1 className="fw-bold mb-0">Related products</h1>*/}
                    {/*<div className="vesitable">*/}
                    {/*    <div className="owl-carousel vegetable-carousel justify-content-center">*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-6.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Parsely</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-1.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Parsely</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-3.png"*/}
                    {/*                    className="img-fluid w-100 rounded-top bg-light"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Banana</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-4.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Bell Papper</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-5.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Potatoes</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-6.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Parsely</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-5.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Potatoes</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>*/}
                    {/*                    <a*/}
                    {/*                        href="#"*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}
                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="border border-primary rounded position-relative vesitable-item">*/}
                    {/*            <div className="vesitable-img">*/}
                    {/*                <img*/}
                    {/*                    src="img/vegetable-item-6.jpg"*/}
                    {/*                    className="img-fluid w-100 rounded-top"*/}
                    {/*                    alt=""*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="text-white bg-primary px-3 py-1 rounded position-absolute"*/}
                    {/*                style={{top: 10, right: 10}}*/}
                    {/*            >*/}
                    {/*                Vegetable*/}
                    {/*            </div>*/}
                    {/*            <div className="p-4 pb-0 rounded-bottom">*/}
                    {/*                <h4>Parsely</h4>*/}
                    {/*                <p>*/}
                    {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do*/}
                    {/*                    eiusmod te incididunt*/}
                    {/*                </p>*/}
                    {/*                <div className="d-flex justify-content-between flex-lg-wrap">*/}
                    {/*                    <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>*/}
                    {/*                    <button*/}
                    {/*                        className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"*/}

                    {/*                    >*/}
                    {/*                        <i className="fa fa-shopping-bag me-2 text-primary"/> Add to*/}
                    {/*                        cart*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/* Single Product End */}
            <Footer/>
        </>

    );
}

export default Detail;