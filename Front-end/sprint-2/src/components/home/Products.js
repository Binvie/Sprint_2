import React, {useEffect, useState} from 'react';
import "../css/products.min.css"
import {
    pic1, pic2, pic3, icon1, icon2, icon3, blog1, blog2, blog3,
    prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, login1, loginPic
} from "../../assets/images";
import Footer from "./Footer";
import Header from "./Header";
import "../css/shop.min.css"
import {Link, useNavigate} from "react-router-dom";
import * as typeService from "../../services/FruitTypeService"
import Pagination from "../pagination/Pagination";
import {toast} from "react-toastify";
import {Form} from "formik";
import {Button} from "react-bootstrap";


function Products() {
    const navigate = useNavigate();
    const [typeList, setTypeList] = useState([])
    const [originList, setOriginList] = useState([])
    const [productList, setProductList] = useState([])

    const [typeId, setTypeId] = useState("")
    const [originId, setOriginId] = useState("")
    const [sortId, setSortId] = useState()
    const [maxPrice, setMaxPrice] = useState(2000000)
    const [sortPrice, setSortPrice] = useState("")
    const [valuePrice, setValuePrice] = useState([10000,1250000])

    const [page, setPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState(0);

    const [searchName, setSearchName] = useState("");
    const pattern = /^[a-zA-Z0-9\sàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+$/;

    const getProductListList = async () => {
        try {
            const res = await typeService.getListProductsPageService(typeId, originId, maxPrice, page, searchName, sortPrice)
            if (res.status === 204) {
                setProductList([])
                setTotalPages(0);
            } else if (res.status === 200) {
                setTotalPages(res.data.totalPages);
                setProductList(res.data.content);
            }
            setProductList(res.data.content)
        } catch (e) {
            alert("Error typeList " + e)
        }
    }
    const prePage = () => {
        setPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh);
    }

    const nextPage = () => {
        setPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    }
    const handleSearch = () => {
        if (searchName.trim() === "") {
            setPage(0);
            setRefresh(!refresh);
            getProductListList()
        } else if (!pattern.test(searchName)) {
            toast.warn("Vui lòng không nhập ký tự đặc biệt!");
        } else {
            setPage(0);
            setRefresh(!refresh);
            getProductListList()
        }
    }
    const handleNameSearch = (value) => {
        setSearchName(value);
    }
    console.log(searchName)

    const getTypeList = async () => {
        try {
            const res = await typeService.getTypeListService()
            setTypeList(res)
        } catch (e) {
            alert("Error typeList " + e)
        }
    }

    const getOriginList = async () => {
        try {
            const res = await typeService.getOriginListService()
            setOriginList(res)
        } catch (e) {
            alert("Error typeList " + e)
        }
    }

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        // Nếu độ dài vượt quá giới hạn, rút gọn và thêm dấu '...'
        return text.slice(0, maxLength) + '...';
    }

    useEffect(() => {
        getTypeList()
        getOriginList()
        getProductListList()
    }, [originId, maxPrice, page, typeId, sortPrice]);


    const handleCategorySearch = (value) => {
        setTypeId(value)
        getProductListList()
    }
    console.log(typeId)

    return (
        <>
            <Header/>
            {/* Single Page Header start */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Shop</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
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
                                        {/*<div className='search-btn'>*/}
                                        {/*    <span className="input-group-text">*/}
                                        {/*         <i className="fa fa-search" style={{color: "#e32929"}}*/}
                                        {/*            onClick={handleSearch}></i>*/}
                                        {/*    </span>*/}
                                        {/*</div>*/}
                                        <input type="search" className="form-control"
                                               placeholder="Tìm kiếm" aria-label="Username"
                                               aria-describedby="addon-wrapping"
                                               onChange={(name) => {
                                                   (handleNameSearch(name.target.value))
                                               }}
                                               onKeyDown={(e) => {
                                                   handleKeyDown(e)
                                               }}/>
                                        {/*<Button type="submit">search</Button>*/}
                                        {/*<span id="search-icon-1" className="btn btn-light input-group-text p-3">*/}
                                        {/*    <i className="fa fa-search" onClick={handleSearch}/>*/}
                                        {/*</span>*/}
                                    </div>
                                </div>
                                <div className="col-6"/>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Sắp xếp:</label>
                                        <select
                                            id="fruits"
                                            name="fruitlist"
                                            className="border-0 form-select-sm bg-light me-3"
                                            form="fruitform"
                                            onChange={event => setSortPrice(event.target.value)}>
                                            >
                                            <option value="0">Không sắp xếp</option>
                                            <option value="1">Giá tăng dần</option>
                                            <option value="2">Giá giảm dần</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Danh mục</h4>
                                                {typeList.length !== 0 ? (
                                                    typeList.map(type => {
                                                        return (
                                                            <>
                                                                <ul className="list-unstyled fruite-categorie"
                                                                    key={type.id}>
                                                                    <li value={type.id} role="button" onClick={event => setTypeId(event.target.value)}>
                                                                        <i className={`${type.id === typeId ? 'text-warning' : 'text-primary'} fas fa-apple-alt me-2 `}/>{type.name}
                                                                    </li>
                                                                </ul>
                                                            </>
                                                        )
                                                    })
                                                ) : (<p>Không có dữ liệu.</p>)}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="mb-2">Price</h4>
                                                <div>
                                                    {/*<p>Chọn khoảng giá: Từ <b>{value[0].toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b> đến <b>{value[1].toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b></p>*/}
                                                    {/*<Box sx={{ width: 300 }}>*/}
                                                    {/*    <Slider*/}
                                                    {/*        getAriaLabel={() => 'Temperature range'}*/}
                                                    {/*        value={value}*/}
                                                    {/*        onChange={handleChange}*/}
                                                    {/*        onChangeCommitted={handleChangeStop}*/}
                                                    {/*        valueLabelDisplay="auto"*/}
                                                    {/*        valueLabelFormat={valuetext}*/}
                                                    {/*        min={50000}*/}
                                                    {/*        max={1000000}*/}
                                                    {/*    />*/}
                                                    {/*</Box>*/}
                                                </div>

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
                                                <h4>Quốc gia</h4>
                                                {originList.map(origin => {
                                                    return (
                                                        <>
                                                            <div className="mb-2" key={origin.id}>
                                                                <ul className="list-unstyled fruite-categorie"
                                                                    key={origin.id}>
                                                                    <li value={origin.id} role="button" onClick={event => setOriginId(event.target.value)}>
                                                                        <i className={`${origin.id === originId ? 'text-warning' : 'text-primary'} fas fa-apple-alt me-2 `}/>{origin.name}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </>
                                                    )
                                                })}
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
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">
                                                            4.11 $
                                                        </h5>
                                                    </div>
                                                </div>
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
                                                    <h3 className="text-warning fw-bold">
                                                        Organic <br/>Fresh <br/> Fruits
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        {productList.length !== 0 ? (
                                            productList.map(product => (
                                                <div className="col-md-6 col-lg-6 col-xl-4" key={product.id}>
                                                    <div className="rounded position-relative fruite-item">
                                                        <div className="fruite-img">
                                                            <img
                                                                src={product.fruitImage}
                                                                className="img-fluid w-100 rounded-top"
                                                                alt=""
                                                                style={{
                                                                    width: "254.984px",
                                                                    height: "252.734px",
                                                                    objectFit: "cover"
                                                                }}
                                                            />
                                                        </div>
                                                        {/*<div*/}
                                                        {/*    className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
                                                        {/*    style={{top: 10, left: 10}}*/}
                                                        {/*>*/}
                                                        {/*    Fruits*/}
                                                        {/*</div>*/}
                                                        <div
                                                            className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h4>{truncateText(product.fruitsName, 15)}</h4>
                                                            <p>
                                                                {truncateText(product.description, 60)}
                                                            </p>
                                                            <div
                                                                className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0">
                                                                    {new Intl.NumberFormat('vi-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND'
                                                                    }).format(product.fruitsPrice)}
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
                                            ))
                                        ) : (<h2 className="text-warning text-center"> Không tìm thấy dữ liệu! </h2>)}
                                        <div className="col-12">
                                            <div aria-label="Page navigation example mt-3"
                                                 style={{
                                                     marginTop: "1.5rem",
                                                     display: "flex",
                                                     justifyContent: "center"
                                                 }}>
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <button className="page-link" aria-label="Previous"
                                                                onClick={() => prePage()} tabIndex={-1}
                                                                disabled={page + 1 <= 1}>
                                                            <span aria-hidden="true">&laquo;</span>
                                                        </button>
                                                    </li>
                                                    <li className="page-item">
                                                        <button className="page-link">{page + 1}/{totalPages}</button>
                                                    </li>
                                                    <li className="page-item">
                                                        <button className="page-link" aria-label="Next"
                                                                disabled={page + 1 >= totalPages}
                                                                onClick={() => nextPage()}>
                                                            <span aria-hidden="true">&raquo;</span>
                                                        </button>
                                                    </li>
                                                </ul>
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