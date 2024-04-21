import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app.routes.jsx";
import AuthRoutes from "./auth.routes.jsx";
import { useAuth } from "../hooks/auth.jsx"

function Routes() {
    const { user } = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}

export default Routes;