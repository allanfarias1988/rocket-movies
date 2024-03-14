import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { CreateMovie } from "../Pages/CreateMovie";
import { MoviePreview } from "../Pages/MoviePreview";
import { Profile } from "../Pages/Profile";
import { SinIn } from "../Pages/SinIn";
import { SinUp } from "../Pages/SinUp";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<CreateMovie />} />
            <Route path="/preview" element={<MoviePreview />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<SinIn />} />
            <Route path="/register" element={<SinUp />} />
        </Routes>
    )
}