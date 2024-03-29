import React, {useEffect, useState} from 'react';
import Header from "./home/Header";
import {Link, useNavigate} from "react-router-dom";
import {loginPic} from "../assets/images";
import Footer from "./home/Footer";
import {Table} from "react-bootstrap";
import * as orderService from "../services/OrderService"
import {useDispatch, useSelector} from "react-redux";

function History() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.productArr);
    const [existingUser, setExistingUser] = useState({})
    const [userId, setUserId] = useState(0)
    const [orderList, setOrderList] = useState([])
    const getOrderList = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        if (user) {
            setExistingUser(user)
            setUserId(user.id)
            try {
                const res = await orderService.getOrder(user.id)
                console.log(res)
                if (res) {
                    setOrderList(res.data)
                }
            } catch (e) {
                alert("Error " + e)
            }
        }
    }

    useEffect(() => {
        getOrderList()
    }, []);
    return (
        <>
            <Header/>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Shop</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/products">Sản phẩm</Link>
                    </li>
                    <li className="breadcrumb-item active text-white">Lịch sử mua hàng</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Fruits Shop Start*/}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4 text-center text-warning">Lịch sử mua hàng</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="container">
                                <Table responsive="sm">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên</th>
                                        <th>Ngày mua</th>
                                        <th>Tổng tiền</th>
                                        <th>Chi tiết đơn hàng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orderList ? (
                                        orderList.map((order, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{order.account.name}</td>
                                                            <td>{order.orderDate}</td>
                                                            <td>{new Intl.NumberFormat('vi-VN', {style: 'currency',currency: 'VND'}).format(order.totalAmount)}</td>
                                                            <td><Link class="btn btn-outline-primary" to={`/cart/detail/${order.id}`}>Chi tiết</Link></td>
                                                        </tr>
                                                    </>
                                                )
                                            }
                                        )) : (
                                        <td colSpan={6}><h2 className="text-warning text-center">Chưa có lịch sử mua
                                            hàng</h2></td>)}
                                    </tbody>
                                </Table>
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

export default History;