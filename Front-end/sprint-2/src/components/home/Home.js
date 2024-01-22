import React, {useEffect, useRef, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import "../css/bootstrap.min.css"
import "../backUpCss/style.css"
import {
    pic1, pic2, pic3, icon1, icon2, icon3, blog1, blog2, blog3
} from "../../assets/images";
import Header from "./Header";
import Footer from "./Footer";
import * as typeService from "../../services/FruitTypeService"
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/actions/CartActions";

function Home() {
    const [typeList, setTypeList] = useState([]);
    const [list8, setList8] = useState([])
    const [typeId, setTypeId] = useState("")
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.productArr);
    const [existingUser, setExistingUser] = useState({})
    const [userId, setUserId] = useState(0)

    const handleAddProductToCart = async (productId) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setExistingUser(user)
            setUserId(user.id)
            dispatch(addToCart(userId, productId, 1));
            toast.success("Thêm vào giỏ hàng thành công!");
        }else {
            // navigate("/login")
            toast.warn("Bạn phải đăng nhập để có thể mua hàng")
        }
    }
    const location = useLocation();

    // Thiết lập scrollTop khi location thay đổi (chuyển trang)
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const getTypeList = async () => {
        try {
            const res = await typeService.getTypeListService();
            setTypeList(res)
        } catch (e) {
            alert("Error type list" + e)
        }
    }

    const getListHomePage = async () => {
        try {
            const res = await typeService.getListHomePageService(typeId);
            setList8(res)
        } catch (e) {
            alert("Error home list" + e)
        }
    }

    useEffect(() => {
        getTypeList()
        getListHomePage()
    }, [typeId]);

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        // Nếu độ dài vượt quá giới hạn, rút gọn và thêm dấu '...'
        return text.slice(0, maxLength) + '...';
    }

    return (
        <>
            <Header/>
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
                                            <h1 className="display-2 mb-5 animated slideInDown text-warning">
                                                Organic Food Is Good For Health
                                            </h1>
                                            <Link
                                                className="btn btn-primary rounded-pill py-sm-3 px-sm-5 justify-content-center align-items-center"
                                                to="/products">
                                                Sản phẩm
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
                                Sản phẩm organic – Sự lựa chọn thông minh cho sức khỏe và cuộc sống.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3"/>
                                Sử dụng thực phẩm kém chất lượng sẽ ảnh hưởng lâu dài đến sức khỏe toàn dân, đến giống
                                nòi.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3"/>
                                Vì sức khỏe người tiêu dùng, tuyệt đối không sử dụng hóa chất,
                                kháng sinh ngoài danh mục, chất cấm trong chăn nuôi, nuôi trồng thủy sản.
                            </p>
                            <p>
                                <i className="fa fa-check text-primary me-3"/>
                                Lựa chọn thực phẩm, rau, thịt, thủy sản tươi sống sạch, rõ nguồn gốc xuất xứ cho bữa ăn
                                ngon,
                                an toàn sức khoẻ.
                            </p>
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
                            Sản phẩm organic – Bảo vệ sức khỏe của bạn, bảo vệ hành tinh của chúng ta.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={icon1} alt=""/>
                                <h4 className="mb-3">Quy trình thân thiện</h4>
                                <p className="mb-4">
                                    Quy trình đạt chuẩn quốc tế. Có các máy móc, thiệt bị hiện đại để giúp cho quá trình
                                    sinh trưởng của trái cây
                                    thân thiện với môi trường và đem lại thực phẩm sạch cho khách hàng
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={icon2} alt=""/>
                                <h4 className="mb-3">Sản phẩm sạch</h4>
                                <p className="mb-4">
                                    Sản phẩm được làm từ nguyên liệu tự nhiên, không sử dụng hóa chất tổng hợp,
                                    thuốc trừ sâu, hay sinh vật biến đổi gen. Sản phẩm organic tốt cho sức khỏe, môi
                                    trường, và những người sản xuất chúng
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white text-center h-100 p-4 p-xl-5">
                                <img className="img-fluid mb-4" src={icon3} alt=""/>
                                <h4 className="mb-3">không chất hoá học</h4>
                                <p className="mb-4">
                                    Vì sức khỏe người tiêu dùng, tuyệt đối không sử dụng hóa chất, kháng sinh ngoài danh
                                    mục,
                                    chất cấm trong chăn nuôi, nuôi trồng thủy sản.
                                </p>
                                {/*<a*/}
                                {/*    className="btn btn-outline-primary border-2 py-2 px-4 rounded-pill"*/}
                                {/*    href=""*/}
                                {/*>*/}
                                {/*    Read More*/}
                                {/*</a>*/}
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
                                    Vì sức khỏe người tiêu dùng, hãy sản xuất ra những sản phẩm thực phẩm chất lượng, an
                                    toàn.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 text-start text-lg-end wow slideInRight"
                            data-wow-delay="0.1s"
                        >
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                {typeList.length !== 0 ? (typeList.map(typeProduct => {
                                    return (
                                        <>
                                            <li className="nav-item me-2" key={typeProduct.id}>
                                                <button
                                                    className="btn btn-outline-primary border-2"
                                                    data-bs-toggle="pill"
                                                    value={typeProduct.id}
                                                    onClick={evt => setTypeId(evt.target.value)}
                                                >
                                                    {typeProduct.name}
                                                </button>
                                            </li>
                                        </>
                                    )
                                })) : (<div className="text-warning text-center"></div>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {list8.length !== 0 ? (list8.map(products => {
                                        return (
                                            <>
                                                <div key={products.id}
                                                     className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                                     data-wow-delay="0.1s"
                                                >
                                                    <div className="product-item">
                                                        <div className="position-relative bg-light overflow-hidden">
                                                            <img style={{width: "255px", height: "255px"}}
                                                                 className="img-fluid w-100"
                                                                 src={products.fruitImage}
                                                                 alt=""
                                                            />
                                                            {products.quantity > 0 &&
                                                                <div
                                                                    className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                                    Hết hàng
                                                                </div>
                                                            }
                                                        </div>
                                                        <div className="text-center p-4">
                                                            <h3 className="d-block h5 mb-2" href="" style={{
                                                                objectFit: "cover",
                                                                width: "100%",
                                                                height: "100%",
                                                            }}>
                                                                <Link to={`/detail/${products.idFruits}`} id="card-title"
                                                                      title={products.name}>
                                                                    {truncateText(products.fruitsName, 15)}
                                                                </Link>
                                                            </h3>
                                                            <span
                                                                className="text-primary me-1">{new Intl.NumberFormat('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND'
                                                            }).format(products.fruitsPrice)}</span>
                                                        </div>
                                                        <div className="d-flex border-top">
                                                            <small className="w-50 text-center border-end py-2">
                                                                <Link to={`/detail/${products.idFruits}`}
                                                                      className="t-icon-link">
                                                                    <i className="fa fa-eye text-primary me-2"/> Chi tiết
                                                                </Link>
                                                            </small>

                                                            <small className="w-50 text-center py-2">
                                                                <a className="text-body" role="button"
                                                                   onClick={() => handleAddProductToCart(products.idFruits)}
                                                                >
                                                                    <i className="fa fa-shopping-bag text-primary me-2"/>
                                                                    Thêm vào giỏ
                                                                </a>
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }))
                                    : (<div className="text-warning text-center">Không tìm thấy sản phẩm</div>)
                                }
                                <div
                                    className="col-12 text-center wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <Link className="btn btn-primary rounded-pill py-3 px-5" to="/products">
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-12 text-center">
                                    <Link className="btn btn-primary rounded-pill py-3 px-5" to="/products">
                                        Browse More Products
                                    </Link>
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
            {/*<div className="container-fluid bg-primary bg-icon mt-5 py-6">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row g-5 align-items-center">*/}
            {/*            <div className="col-md-7 wow fadeIn" data-wow-delay="0.1s">*/}
            {/*                <h1 className="display-5 text-white mb-3">Visit Our Firm</h1>*/}
            {/*                <p className="text-white mb-0">*/}
            {/*                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu*/}
            {/*                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet*/}
            {/*                    lorem sit clita duo justo magna dolore erat amet. Diam dolor diam*/}
            {/*                    ipsum sit. Aliqu diam amet diam et eos.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">*/}
            {/*                <a*/}
            {/*                    className="btn btn-lg btn-secondary rounded-pill py-3 px-5"*/}
            {/*                    href=""*/}
            {/*                >*/}
            {/*                    Visit Now*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
                        <h1 className="display-5 mb-3">Tin tức mới</h1>
                        <p>
                            Chia sẻ những lợi ích mà thực phẩm sạch mang lại cho môi trường nói chung và sức khoẻ của bạn nói riêng.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src={blog1} alt=""/>
                            <div className="bg-light p-4">
                                <a className="d-block h5 lh-base mb-4 text-decoration-none" href="">
                                    Những lợi ích mà trái cây organic mang lại
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
                                <a className="d-block h5 lh-base mb-4 text-decoration-none" href="">
                                    Đóng góp của nền nông nghiệp sạch trong việc bảo vệ môi trường
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
                                <a className="d-block h5 lh-base mb-4 text-decoration-none" href="">
                                    Thay lối sống của bạn bằng cách sử dụng thực phẩm sạch
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
            <Footer/>
        </>
    );
}

export default Home;