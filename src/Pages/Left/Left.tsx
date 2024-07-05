import { Link, NavLink } from "react-router-dom";
import Navbar from "../Nav/Navbar";

const Left = () => {
    return (
        <div className="flex flex-col w-40 pl-1 border border-black">
            <div className="flex items-center p-1 border-b">
                <Link className="flex items-center" to={"/"}>
                    <img className="w-10 mr-2 rounded-full border" src="/logo.png"/>
                    <span className="text-7">이미지</span>
                </Link>
            </div>
            <div className="text-right p-2 border-b">
                <Link to={"/login"}>로그인</Link>
            </div>
            <Navbar />
        </div>
    )
}

export default Left;