import React from 'react';

function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-bold text-primary mb-4">
                                F<span className="text-secondary">oo</span>vie
                            </h1>
                            <p>
                                Tự nhiên Tinh Khiết, Mua Sắm An Toàn: Nơi bạn tìm thấy những sản phẩm hữu cơ chất lượng cao
                                , mang lại hương vị tươi ngon và đảm bảo sức khỏe cho gia đình bạn!
                            </p>
                            <div className="d-flex pt-2">
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-youtube"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p>
                                <i className="fa fa-map-marker-alt me-3"/>
                                280 Trần Hưng Đạo, Đà Nẵng
                            </p>
                            <p>
                                <i className="fa fa-phone-alt me-3"/>
                                0935131657
                            </p>
                            <p>
                                <i className="fa fa-envelope me-3"/>
                                thien97.night1@gmail.com
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Newsletter</h4>
                            <p>Tận hưởng ưu đãi độc quyền và cập nhật thông tin về thế giới hữu cơ qua bản tin hàng tháng của chúng tôi.
                                Khám phá những xu hướng mới, nhận mã giảm giá đặc biệt và học cách làm cho cuộc sống của bạn thêm phần tự nhiên
                                và khỏe mạnh!</p>
                            {/*<div className="position-relative mx-auto" style={{maxWidth: 400}}>*/}
                            {/*    <input*/}
                            {/*        className="form-control bg-transparent w-100 py-3 ps-4 pe-5"*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Your email"*/}
                            {/*    />*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"*/}
                            {/*    >*/}
                            {/*        SignUp*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="container-fluid copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a href="#">Foovie</a>, All for customer's health.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By <span>LÊ CÔNG HOÀN THIỆN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a
                href="#"
                className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
            >
                <i className="far fa-arrow-alt-circle-down fa-2x fa-rotate-180" style={{margin: "-35% -100%"}}>
                    {/*// style={{color: "#000000", position: "relative", top: "5px", right: "13px"}}>*/}

                </i>
            </a>
            {/* JavaScript Libraries */}
        </>
    );
}

export default Footer;