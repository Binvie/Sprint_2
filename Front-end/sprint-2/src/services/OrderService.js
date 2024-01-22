import axios from "axios";

export const confirmOrder = async (userId) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/order/payment/${userId}`)
        return res;
    }catch (e){
        console.log("Lỗi tạo order")
    }
};

export const getOrder = async (userId) => {
    console.log(userId)
    try {
        const res = await axios.get(`http://localhost:8080/api/order/${userId}`)
        return res;
    }catch (e){
        console.log("Lỗi tạo order")
    }
};

export const getOrderDetail = async (orderId) => {
        const res = await axios.get(`http://localhost:8080/api/order/detail/${orderId}`)
        return res;
};
//
// const getOrderByUsername = async (page, size, orderCode) => {
//     try {
//         const username = getUsernameByJwt();
//         const res = await axios.get(BASE_API + `/${username}?page=${page}&size=${size}`
//             + `&orderCode=${orderCode}`)
//         return res.data;
//     } catch (err) {
//
//     }
// }
//
// const getOrderDetails = async (orderId) => {
//     try {
//         const username = getUsernameByJwt();
//         const res = await axios.get(BASE_API + `/details/${orderId}/${username}`)
//         return res.data;
//     } catch (err) {
//
//     }
// }
//
// const getFirstOrderDay = async () => {
//     try {
//         const username = getUsernameByJwt();
//         const res = await axios.get(BASE_API + `/firstOrder/${username}`)
//         return res.data;
//     } catch (err) {
//
//     }
// }
//
// const getLastOrderDay = async () => {
//     try {
//         const username = getUsernameByJwt();
//         const res = await axios.get(BASE_API + `/lastOrder/${username}`)
//         return res.data;
//     } catch (err) {
//
//     }
// }