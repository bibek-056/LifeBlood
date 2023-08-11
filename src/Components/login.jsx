import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e, data) => {
        e.preventDefault();
        console.log(data);
    }
    
    return (
        <div className="flex items-center">
        <div className="w-1/2">
            <p>Banner Here</p>
        </div>
        <div className=" flex flex-col w-1/2 mt-10 p-4">
            <p className="text-3xl font-bold items-center"> Login </p>
            <form className=" flex flex-col my-3 gap-2 items-start justify-center" onSubmit={(e) => handleSubmit(e, userData)}>
                <label className="font-medium text-lg ">Username</label>
                <input
                    type="string"
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    placeholder="Enter your Name"
                    name="userName"
                    onChange={handleChange}>
                </input>
                <label className="font-medium text-lg">Password</label>
                <input
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    name="password"
                    type="password"
                    onChange={handleChange}>
                </input>
                <button className="w-1/2 h-12 flex items-center justify-center p-2 bg-[#006EB9] text-white rounded" type="submit">Login</button>
            </form>
            <p className="text-left"> Don't have an account?<Link to="/register"><span className="text-[#006EB9]">Register Now</span></Link></p>
        </div>
        </div>
    )
}

export default Login;