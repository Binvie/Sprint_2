import React from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function ModalLogout() {
        const navigate = useNavigate();
        const logOutUser = async () => {
            await localStorage.removeItem('JWT');
            navigate("/");
            toast.success("Đăng xuất thanh công !")
            window.location.href = '/';
        };
        return (
            <>
                <div className="modal fade" id="logout" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Đăng xuất</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark fw-bold">
                                Bạn có chắc chắn muốn đăng xuất không ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                                <button type="button" className="btn btn-primary" onClick={logOutUser}>Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    export default ModalLogout;