import { Outlet } from "react-router-dom";
import Left from "./Pages/Left/Left";

const Layout = () => {
    return(
        <div className="flex border border-black min-h-screen">
            <Left />
            <div className="flex-grow p-2 ">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;