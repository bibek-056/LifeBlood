import React, { useState } from "react";

const RequestForm = () => {

    const [requestData, setRequestData] = useState({
        patientName: "",
        location: "",
        bloodGroup: "",
        contactNo: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestData({ ...requestData, [name]: value });
    };

    const handleSubmit = (e, data) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <>
            <p className="text-3xl font-bold items-center"> Post Request </p>
            <form className=" w-full flex flex-col my-3 gap-2 items-start justify-center" onSubmit={(e) => handleSubmit(e, requestData)}>
            <label className="font-medium text-lg ">Username</label>
                <input
                    type="string"
                    className="border-[1px] border-[rgba(177,181,195,1)]  focus:outline h-[52px] px-3 rounded-md w-[80%]"
                    placeholder="Enter your Name"
                    name="userName"
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
                <button className="w-1/2 h-12 flex items-center justify-center p-2 bg-[#006EB9] text-white rounded" type="submit">Post Request</button>
            </form>
        </>
    )
}

export default RequestForm;