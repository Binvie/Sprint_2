import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Table} from "react-bootstrap";
import * as orderService from "../services/OrderService"
import {useDispatch, useSelector} from "react-redux";
import Header from "./home/Header";
import Footer from "./home/Footer";

function HistoryDetail() {
    const navigate = useNavigate()
    const [orderDetail, setOrderDetail] = useState([])
    const {id} = useParams();
    console.log(id)

    const getOrderDetailList = async () => {
        try {
            const res = await orderService.getOrderDetail(id)
            if (res) {
                setOrderDetail(res.data)
                console.log(res.data)
            }
        } catch (e) {
            alert("Error " + e)
        }
    }
    useEffect(() => {
        getOrderDetailList()
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
                    <h1 className="mb-4 text-center text-warning">Chi tiết đơn hàng</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="container">
                                <Table responsive="sm">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>giá tiền</th>
                                        <th>Tổng tiền</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orderDetail ? (
                                        orderDetail.map((order, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{order.fruits.name}</td>
                                                            <td>{order.quantity}</td>
                                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND'
                                                            }).format(order.fruits.price)}</td>
                                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND'
                                                            }).format(order.price)}</td>
                                                            <td>Đã thanh toán</td>
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
                            <div>
                                <Link to={"/cart/detail"} type="button">Quay lại</Link>
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
export default HistoryDetail;