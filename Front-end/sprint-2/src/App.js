import './App.css';
import Login from "./components/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./components/home/Home";
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={""} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
}

export default App;
