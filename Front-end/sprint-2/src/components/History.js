import React from 'react';
import Header from "./home/Header";
import {Link} from "react-router-dom";
import {loginPic} from "../assets/images";
import Footer from "./home/Footer";
import {Table} from "react-bootstrap";

function History() {

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
                    <li className="breadcrumb-item active text-white">Shop</li>
                </ol>
            </div>
            {/* Single Page Header End */}
            {/* Fruits Shop Start*/}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4 text-center text-warning">Fresh fruits shop</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-9">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <Table responsive="sm">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên</th>
                                                <th>Giá tiền</th>
                                                <th>Số lượng</th>
                                                <th>Tổng tiền</th>
                                                <th>Ngày mua</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="product-thumbnail">
                                                    <Link to={"/"}>
                                                        <img
                                                            src={loginPic}
                                                            alt="Image"
                                                            className="img-fluid"
                                                            style={{
                                                                width: "120px",
                                                                height: "120px",
                                                                objectFit: "cover"
                                                            }}
                                                        />
                                                    </Link>
                                                </td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                                <td>Table cell</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Sắp xếp:</label>
                                        {/*<select*/}
                                        {/*    id="fruits"*/}
                                        {/*    name="fruitlist"*/}
                                        {/*    className="border-0 form-select-sm bg-light me-3"*/}
                                        {/*    form="fruitform"*/}
                                        {/*    onChange={event => setSortPrice(event.target.value)}>*/}
                                        {/*    >*/}
                                        {/*    <option value="">Không sắp xếp</option>*/}
                                        {/*    <option value="1">Giá tăng dần</option>*/}
                                        {/*    <option value="2">Giá giảm dần</option>*/}
                                        {/*</select>*/}
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

export default History;