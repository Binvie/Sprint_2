import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./components/home/Home";
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/login/Login";
import Products from "./components/home/Products";
import Detail from "./components/detail/Detail";
import Cart from "./components/home/Cart";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={""} element={<Home/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/products"} element={<Products/>}/>
                    <Route path={"/detail"} element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
