
import { Route, Routes } from "react-router-dom";
import CreateMovie from "../Pages/CreateMovie/index.jsx";
import Home from "../Pages/Home/index.jsx";
import MoviePreview from "../Pages/MoviePreview/index.jsx";
import Profile from "../Pages/Profile/index.jsx";
import SinIn from "../Pages/SinIn/index.jsx";



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SinIn />} />
            <Route path="/new" element={<CreateMovie />} />
            <Route path="/home" element={<Home />} />
            <Route path="/preview" element={<MoviePreview />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes;