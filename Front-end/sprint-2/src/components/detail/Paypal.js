import {useEffect, useRef, useState} from "react";
// import {addToOrders} from "../../service/cart/Orders";
import {infoToken} from "../../services/AccountService";
import {toast} from "react-toastify";
import {addToCart, getCartFromAPI, minusFromCart, payCarts, removeProducts} from "../redux/actions/CartActions";

import {confirmOrder} from "../../services/OrderService";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import {PayPalButtons} from "@paypal/react-paypal-js";
export function Paypal(prop) {
    const paypal = useRef();
    const [cartDetail, setCartDetail] = useState({});
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isRender, setIsRender] = useState(false);
    const existingUser = JSON.parse(localStorage.getItem("user"));
    const userId = existingUser.id;
    const cart = useSelector(state => state.cart.productArr);

    const handleApprove = async () => {
        try {
            const res = await confirmOrder(userId);
            if (res.status === 200){
                toast("Thanh toán thành công");
                dispatch(payCarts());
                setIsRender(!isRender)
                await Swal.fire({
                    icon: 'success',
                    title: 'Thanh toán thành công!',
                    text: 'Cảm ơn bạn đã mua sắm!',
                    confirmButtonText: 'OK',
                    showCancelButton: false,
                    showCloseButton: false,
                });
            }else {
                setPaidFor(true);
            }
        }catch (e){
            console.log("lỗi paypal")
        }
    };

    if (paidFor) {
        // Display success message, modal or redirect user to success page
        alert("Thank you for your purchase!");
    }

    if (error) {
        // Display error message, modal or redirect user to error page
        alert(error);
    }
    return(
        <>
            <PayPalButtons
                style={{
                    color: "silver",
                    layout: "horizontal",
                    height: 48,
                    tagline: false,
                    shape: "pill"
                }}
                onClick={(data, actions) => {
                    // Validate on button click, client or server side
                    const hasAlreadyBoughtCourse = false;

                    if (hasAlreadyBoughtCourse) {
                        setError(
                            "You already bought this course. Go to your account to view your list of courses."
                        );

                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: (cart.reduce((total, item) => total + item.quantity * item.price, 0) / 23000).toFixed(2),
                                },
                            }
                        ]
                    });
                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log("order", order);
                    await handleApprove();
                }}
                onError={(err) => {
                    setError(err);
                    console.error("PayPal Checkout onError", err);
                }}
                onCancel={() => {
                    // Display cancel message, modal or redirect user to cancel page or back to cart
                }}
            />
        </>
    )
}