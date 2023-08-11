import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [donorData, setDonorData] = useState({
        userName: "",
        password: "",
        location: "",
        bloodGroup: "",
        contactNo: "",
        share: true,
        avavialibity: true
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonorData({ ...donorData, [name]: value });
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
            <p className="text-3xl font-bold items-center"> Register as a Donor</p>
            <form className=" flex flex-col my-3 gap-2 items-start justify-center" onSubmit={(e) => handleSubmit(e, donorData)}>
                <label className="font-medium text-lg ">Name</label>
                <input
                    type="string"
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    placeholder="Enter your Name"
                    name="userName"
                    onChange={handleChange}>
                </input>
                <label className="font-medium text-lg">Set Password</label>
                <input
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    name="password"
                    type="password"
                    onChange={handleChange}>
                </input>
                <label className="font-medium text-lg text -left" >Location</label>
                <select
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    id="location"
                    name='location'
                    onChange={handleChange}
                >
                    <option>Your City</option>
                    <option value="kathmandu" selected >Kathmandu</option>
                    <option value="pokhara">Pokhara</option>
                </select>
                <label className="font-medium text-lg text -left" >Blood Group</label>
                <select
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    id="bloodGroup"
                    name='bloodGroup'
                    onChange={handleChange}
                >
                    <option>Blood Group</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                </select>
                <label className="font-medium text-lg">Contact No:</label>
                <input
                    type="number"
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    placeholder="PhoneNO"
                    name="contactNo"
                    onChange={handleChange}>
                </input>
                <div className="felx justify-start gap-2">
                <input
                    type="checkbox"
                    name="share"
                    onChange={handleChange} />
                <label className="ml-2">Share your contact Number in your Profie?</label>
                </div>
                <div className="felx flex-col justify-start gap-4">
                <input type="checkbox"
                    name="avaiability"
                    onChange={handleChange} />
                <label className="ml-2">Set Your Avaiability.</label>
                </div>
                <button className="w-1/2 h-12 flex items-center justify-center p-2 bg-[#006EB9] text-white rounded" type="submit">Register Now</button>
            </form>
            <p className="text-left"> Already have an account? <Link to="/login"><span className="text-[#006EB9]">Login Now</span></Link></p>
        </div>
        </div>
    )
}

export default Register;