import axios from "axios";

const BASE_API = "http://localhost:8080/api/cart";
const getCartDetailsByUserId = async () => {
    let userIds = JSON.parse(localStorage.getItem("user")).id
    try {
        const response = await axios.get(`http://localhost:8080/api/cart/${userIds}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart details:', error);
    }
}

const addNewProductToCart = async (userId, productId, quantity) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cart/${userId}/${productId}/${quantity}`);
        return res.status;
    } catch (e) {

    }
}

const minusProductFromCart = async (userId, productId, quantity) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cart/remove/${userId}/${productId}/${quantity}`);
        return res.status;
    } catch (e) {
    }
}
const removeProductFromCart = async (userId, productId) => {
    try {
        const res = await axios.delete(BASE_API + `/${userId}/${productId}`);
        return res.status;
    } catch (e) {
        alert(e)
    }
}

export {getCartDetailsByUserId, addNewProductToCart, removeProductFromCart, minusProductFromCart}