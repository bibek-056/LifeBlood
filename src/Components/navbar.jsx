import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex w-full h-16 justify-around items-center bg-[#8B0000] text-white">
            <Link to="/"><div>lifeBlood</div></Link>
            <div className="flex justify-between gap-6">
                <Link to="/login" className="flex items-center justify-center w-40 bg-[#006EB9] h-2/3  text-white  rounded">
                    <button className="">Login</button>
                </Link>
                <Link to="/register" className="flex items-center justify-center w-40 bg-[#006EB9] h-2/3  text-white  rounded">
                    <button className="">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;