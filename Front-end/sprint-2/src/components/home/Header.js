import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import * as accountService from "../../services/AccountService"
import ModalLogout from "../modal/ModalLogout";
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";

function Header() {
    const location = useLocation();
    const [user, setUser] = useState(localStorage.getItem("JWT"))
    const [username, setUsername] = useState("")
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [active, setActive] = useState(false)


    const getInfo = async () => {
        const res = await accountService.infoToken()
        if (res != null) {
            setUsername(res.sub)
        }
    }

    const logOutUser = async () => {
        await localStorage.removeItem('JWT');
        navigate("/");
        toast.success("Đăng xuất thành công!")
        window.location.href = '/';
    };

    useEffect(() => {
        getInfo()
    }, []);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div
                className="container-fluid fixed-top px-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <nav
                    className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn bg-white"
                    data-wow-delay="0.1s"
                >
                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                        <h1 className="fw-bold text-primary m-0">
                            F<span className="text-secondary">oo</span>vie
                        </h1>
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler me-4"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto p-4 p-lg-0">
                            <Link
                                className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                className={`nav-item nav-link ${location.pathname === '/products' ? 'active' : ''}`}
                                to="/products"
                            >
                                Sản phẩm
                            </Link>
                            {/*<div className="nav-item dropdown">*/}
                            {/*    <a*/}
                            {/*        href="#"*/}
                            {/*        className="nav-link dropdown-toggle"*/}
                            {/*        data-bs-toggle="dropdown"*/}
                            {/*    >*/}
                            {/*        Pages*/}
                            {/*    </a>*/}
                            {/*    <div className="dropdown-menu m-0">*/}
                            {/*        <a href="blog.html" className="dropdown-item">*/}
                            {/*            Blog Grid*/}
                            {/*        </a>*/}
                            {/*        <a href="feature.html" className="dropdown-item">*/}
                            {/*            Our Features*/}
                            {/*        </a>*/}
                            {/*        <a href="testimonial.html" className="dropdown-item">*/}
                            {/*            Testimonial*/}
                            {/*        </a>*/}
                            {/*        <a href="404.html" className="dropdown-item">*/}
                            {/*            404 Page*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<Link className="nav-item nav-link" to="/contact">*/}
                            {/*    Contact Us*/}
                            {/*</Link>*/}
                        </div>
                        <div className="d-none d-lg-flex ms-2">
                            {/*<a className="btn-sm-square bg-white rounded-circle ms-3" href="">*/}
                            {/*    <small className="fa fa-search text-body"/>*/}
                            {/*</a>*/}
                            <Link className="btn-sm-square bg-white rounded-circle ms-3" to="/cart"
                                  style={{
                                      display: "flex",
                                      position: "relative",
                                      // marginTop: "10px",
                                      fontSize: "200%"
                                  }}>
                                <small className="fa fa-shopping-bag text-body"/>
                            </Link>
                            {!user ? (
                                <Link className="btn-sm-square bg-white rounded-circle ms-3" to="/login"
                                      style={{
                                          display: "flex",
                                          position: "relative",
                                          // marginTop: "10px",
                                          fontSize: "200%"
                                      }}
                                >
                                    <small className="fa fa-user text-body"/>
                                </Link>
                            ) : (
                                <div className="nav-link text-light align-text-bottom d-flex ">
                                    <p style={{
                                        margin: "0 10px",
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        color: "black",
                                        marginTop: "5px"
                                    }}>{username}
                                    </p>
                                    <Button variant="primary sm-3" onClick={handleShow}>
                                        Log Out
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Đăng xuất</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn đăng xuất hay không ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={logOutUser}>Xác nhận</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;