import axios from "axios";

const URL_TYPE = "http://localhost:8080/api/type"
const URL_FRUITS = "http://localhost:8080/api/fruits"
const URL_ORIGIN = "http://localhost:8080/api/type/origin"
const URL_IMAGE = "http://localhost:8080/api/type/image"

export const getListHomePageService = async (id) => {
    const res = await axios.get(URL_FRUITS + `/homeList?type=${id}`)
    return res.data;
}

export const getListProductsPageService = async (typeId, originId, maxPrice, page, name, sortPrice) => {
    return await axios.get(`http://localhost:8080/api/fruits/productsList?type=${typeId}&origin=${originId}&maxPrice=${maxPrice}&page=${page}&name=${name}&sortPrice=${sortPrice}`);
}

export const getTypeListService = async () => {
    const res = await axios.get(URL_TYPE)
    return res.data;
}

export const getOriginListService = async () => {
    const res = await axios.get(URL_ORIGIN)
    return res.data
}

export const getImageList = async (id) => {
    const res = await axios.get(URL_IMAGE + `/${id}`);
    return res.data
}

export const getDetailFruits = async (id) => {
    return await axios.get(URL_FRUITS + `/detail/${id}`)
}
