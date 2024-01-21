import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./components/home/Home";
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/login/Login";
import Products from "./components/home/Products";
import Detail from "./components/detail/Detail";
import Cart from "./components/detail/Cart";
import History from "./components/History";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

function App() {

    return (
        <>
            <PayPalScriptProvider options={{"client-id": "Ae2sXA_UejdE8Y0fzfgZDJrIEmwSuaijftB3dlyuCkUgtAQiI4rEb3ZuUr8iW12aiJsrI9gVe-Ts5JEn"}}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/cart"} element={<Cart/>}/>
                        <Route path={"/products"} element={<Products/>}/>
                        <Route path={"/detail/:id"} element={<Detail/>}/>
                        <Route path={"/cart/detail"} element={<History/>}/>
                    </Routes>
                </BrowserRouter>
                <ToastContainer/>
        </PayPalScriptProvider>
        </>
    );
}

export default App;
