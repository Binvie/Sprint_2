import React, {useEffect, useState} from 'react';
import Header from "./home/Header";
import {Link, useNavigate} from "react-router-dom";
import {loginPic} from "../assets/images";
import Footer from "./home/Footer";
import {Table} from "react-bootstrap";
import * as orderService from "../services/OrderService"
import {useDispatch, useSelector} from "react-redux";


function CartDetail() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.productArr);
    const [existingUser, setExistingUser] = useState({})
    const [userId, setUserId] = useState(0)
    const [orderList, setOrderList] = useState([])
    const [orderDetail, setOrderDetail] = useState([])
    return (
        <>

        </>
    );
}

export default CartDetail;