import { Route, Routes } from "react-router-dom";
import SinIn from "../Pages/SinIn/index.jsx";
import SinUp from "../Pages/SinUp/index.jsx";


function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SinIn />} />
            <Route path="/register" element={<SinUp />} />
        </Routes>
    )
}

export default AuthRoutes;