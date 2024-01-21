import React, {useEffect, useState} from 'react';
import {loginPic} from "../../assets/images";
import Footer from "./Footer";
import Header from "./Header";
import {Link, useLocation, useNavigate} from "react-router-dom";
import * as typeService from "../../services/FruitTypeService"
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/actions/CartActions";
import {Form} from "react-bootstrap"


function Products() {
    const location = useLocation();

    // Thiết lập scrollTop khi location thay đổi (chuyển trang)
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navigate = useNavigate();
    const [typeList, setTypeList] = useState([])
    const [originList, setOriginList] = useState([])
    const [productList, setProductList] = useState([])

    const [typeId, setTypeId] = useState("")
    const [originId, setOriginId] = useState("")
    const [sortId, setSortId] = useState()
    const [maxPrice, setMaxPrice] = useState(2000000)

    const [sortPrice, setSortPrice] = useState("")
    const [value, setValue] = useState([10000, 1250000])

    const dispatch = useDispatch();
    // const existingUser = JSON.parse(localStorage.getItem("user"));
    const cart = useSelector(state => state.cart.productArr);
    // const userId = existingUser.id;

    const [page, setPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState(0);

    const [searchName, setSearchName] = useState("");
    const pattern = /^[a-zA-Z0-9\sàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+$/;

    const [existingUser, setExistingUser] = useState({})
    const [userId, setUserId] = useState(0)
    const handleAddProductToCart = async (productId) => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            setExistingUser(user)
            setUserId(user.id)
            dispatch(addToCart(userId, productId, 1));
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {
            // navigate("/login")
            toast.warn("Bạn phải đăng nhập để có thể mua hàng")
        }
    }

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

    function valuetext(value) {
        return `${value.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}`;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeStop = (event, newValue) => {
        setValue(newValue)
        getProductListList();
    };

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
                    <h1 className="mb-4">Fresh fruits shop</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input type="search" className="form-control"
                                               placeholder="Tìm kiếm" aria-label="Username"
                                               aria-describedby="addon-wrapping"
                                               onChange={(name) => {
                                                   (handleNameSearch(name.target.value))
                                               }}
                                               onKeyDown={(e) => {
                                                   handleKeyDown(e)
                                               }}/>
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
                                            <option value="">Không sắp xếp</option>
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
                                                                    <li value={type.id} role="button"
                                                                        onClick={event => setTypeId(event.target.value)}>
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
                                                <h4 className="mb-2">Giá</h4>
                                                <div>
                                                    <Form.Select aria-label="Default select example"
                                                                 style={{width: "80%"}}
                                                                 onChange={evt => setMaxPrice(evt.target.value)}>
                                                        <option value={2000000}>---Chọn mức giá---</option>
                                                        <option value={1000000}>dưới 1.000.000</option>
                                                        <option value={500000}>dưới 500.000</option>
                                                        <option value={200000}>dưới 200.000</option>
                                                    </Form.Select>
                                                </div>
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
                                                                    <li value={origin.id} role="button"
                                                                        onClick={event => setOriginId(event.target.value)}>
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
                                                <div className="col-md-6 col-lg-6 col-xl-4  border border-secondary"
                                                     key={product.idFruits}>
                                                    <div className="rounded position-relative fruite-item">
                                                        <div className="fruite-img">
                                                            <img
                                                                src={product.fruitImage}
                                                                className="img-fluid w-100 rounded-top"
                                                                alt=""
                                                                style={{
                                                                    width: "252.984px",
                                                                    height: "250.734px",
                                                                    objectFit: "cover"
                                                                }}
                                                            />
                                                        </div>
                                                        {product.quantity <= 0 &&
                                                            <div
                                                                className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                                Hết hàng
                                                            </div>
                                                        }
                                                        <div
                                                            className="p-4 rounded-bottom">
                                                            <h4>
                                                                <Link to={`/detail/${product.idFruits}`} id="card-title"
                                                                      title={product.name}>
                                                                    {truncateText(product.fruitsName, 15)}
                                                                </Link>
                                                            </h4>
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
                                                                    role="button"
                                                                    onClick={() => handleAddProductToCart(product.idFruits)}

                                                                    className="btn border border-secondary rounded-pill px-3 text-primary"
                                                                >
                                                                    <i className="fa fa-shopping-bag me-2 text-primary"/>
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