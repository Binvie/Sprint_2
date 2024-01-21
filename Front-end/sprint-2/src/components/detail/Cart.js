import React, {useEffect, useState} from 'react';
import Header from "../home/Header";
import Footer from "../home/Footer";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getCartFromAPI, minusFromCart, removeProducts} from "../redux/actions/CartActions";
import {toast} from "react-toastify";
import {removeProductFromCart} from "../../services/CartService";
import * as accountService from '../../services/AccountService'
import {confirmOrder} from "../../services/OrderService";
import {Paypal} from "./Paypal";
import Swal from "sweetalert2";

function Cart() {

    const location = useLocation();

    // Thiết lập scrollTop khi location thay đổi (chuyển trang)
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.productArr);
    const totalItem = useSelector(state => state.cart.totalItem)
    const [checkout, setCheckout] = useState(false)
    const [user, setUser] = useState({})
    const [isRender, setIsRender] = useState(false)
    const [userId, setUserId] = useState(0)
    const handlePayment = async () => {
        try {
            const res = await confirmOrder(userId);
            if (res.status === 200) {
                toast("Bạn đã thanh toán thành công");
                await Swal.fire({
                    icon: 'success',
                    title: 'Thanh toán thành công!',
                    text: 'Cảm ơn bạn đã mua sắm!',
                    confirmButtonText: 'OK',
                    showCancelButton: false,
                    showCloseButton: false,
                });
                setIsRender(!isRender);
            }
        } catch (e) {
            console.log("lỗi thanh toán")
        }
    };
    const getAccountById = async () => {
        const existingUser = JSON.parse(localStorage.getItem("user"));
        let usernameAccount = "";
        if (existingUser) {
            setUserId(existingUser.id)
            usernameAccount = existingUser.username
        }
        try {
            const res = await accountService.getAccountByUsernameService(usernameAccount)
            setUser(res.data)
        } catch (e) {
            alert("Error")
        }
    }

    const handleRemoveFromCart = async (productName, productId) => {
        try {
            const res = await removeProductFromCart(userId, productId)
            toast("Xóa sản phẩm " + productName + " ra khỏi giỏ hàng!");
            getCartFromAPI()
        } catch (e) {
            alert(e)
        }
    };

    const handleAddition = (productId) => {
        dispatch(addToCart(userId, productId, 1));
    };

    const handleMinus = (productId) => {
        dispatch(minusFromCart(userId, productId, 1));
    };

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += item.price * item.quantity;
        });
        return totalAmount;
    };
    const totalAmount = calculateTotalAmount();

    useEffect(() => {
        getAccountById()
        dispatch(getCartFromAPI());
    }, [totalItem, userId]);
    return <>
        <div>
            <Header/>
        </div>
        <div className="hero" style={{position: "relative", top: "150px"}}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="intro-excerpt mx-auto">
                        <h1 className="text-warning text-center"><strong>Giỏ hàng của bạn</strong></h1>
                    </div>
                    <div className="col-lg-7"></div>
                </div>
            </div>
        </div>
        {/* End Hero Section */}
        <div className="untree_co-section before-footer-section" style={{position: "relative", top: "150px"}}>
            <div className="container">
                <div className="row mb-5">
                    <form className="col-md-12" method="post">
                        <div className="site-blocks-table">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th className="product-thumbnail">Hình ảnh</th>
                                    <th className="product-name">Sản phẩm</th>
                                    <th className="product-price">Giá</th>
                                    <th className="product-quantity">Số lượng</th>
                                    <th className="product-total">Tổng tiền</th>
                                    <th className="product-remove">Xoá</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cart && cart.length > 0 ? (
                                    cart.map((item, index) => (
                                        <tr style={{padding: "0px"}} key={index}>
                                            <td className="product-thumbnail">
                                                <Link to={`/detail/${item.fruitsId}`}>
                                                    <img
                                                        src={item.image}
                                                        alt="Image"
                                                        className="img-fluid"
                                                        style={{
                                                            width: "150px",
                                                            height: "150px",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </Link>
                                            </td>
                                            <td className="product-name">
                                                <h2 className="h5 text-black">{item.name}</h2>
                                            </td>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(item.price)}</td>
                                            <td>
                                                <div
                                                    className="input-group mb-3 d-flex align-items-center quantity-container"
                                                    style={{maxWidth: 120}}
                                                >
                                                    <div className="input-group-prepend">
                                                        <button
                                                            className="btn btn-outline-black decrease"
                                                            type="button"
                                                            onClick={() => handleMinus(item.fruitsId)}
                                                        >
                                                            −
                                                        </button>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control text-center quantity-amount"
                                                        placeholder=""
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1"
                                                        value={item.quantity || 0}
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-black increase"
                                                            type="button"
                                                            onClick={() => handleAddition(item.fruitsId)}
                                                            disabled={item.quantity >= item.inventory}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(item.price * item.quantity)}</td>
                                            <td>
                                                <button className="btn btn-black btn-sm"
                                                        onClick={() =>
                                                            handleRemoveFromCart(item.name, item.fruitsId)}>
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))) : (
                                    <tr>
                                        <td colSpan={6} className="text-warning text-center"><h3> Chưa có sản phẩm nào
                                            trong giỏ hàng</h3></td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <Link className="btn btn-primary btn-sm btn-block" to="/products">
                                    Continue <span> Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 pl-5">
                        <div className="row justify-content-end">
                            <div className="row">
                                <div className="col-md-12 text-right border-bottom mb-5">
                                    <h3 className="text-black h4 text-uppercase text-center">Tổng tiền giỏ hàng</h3>
                                </div>
                            </div>
                            {user ? (
                                <>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <span className="text-black">Tên người nhận</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <i className="text-black">{user.name}</i>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <span className="text-black">Số điện thoại</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <i className="text-black">{user.phoneNumber}</i>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <span className="text-black">Địa chỉ</span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <i className="text-black">{user.address}</i>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row mb-5">
                                        <div className="col-md-6">
                                            <span className="text-black"> <strong>Tổng tiền</strong></span>
                                        </div>
                                        <div className="col-md-6 text-right mx-auto">
                                            <strong
                                                className="text-black">{cart.reduce((total, item) => total + item.quantity * item.price, 0).toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            })}</strong>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div></div>
                            )}

                            <div className="row">
                                <div className="col-md-12">
                                    {cart && cart.length > 0 ? (
                                        <>
                                            {/*<button onClick={handlePayment}*/}
                                            {/*        className="btn btn-primary btn-lg py-3 btn-block "*/}
                                            {/*> Thanh toán*/}
                                            {/*</button>*/}
                                            <div className=" t-mb-0">
                                                <Paypal propData1={totalAmount} proData2={cart}/>
                                            </div>
                                        </>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-100" style={{position: "relative", top: "150px"}}>
            <Footer/>
        </div>

    </>;
}

export default Cart;