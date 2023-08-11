import React from "react"
import Navbar from "./navbar"
import RequestForm from "./requestForm"
import ActiveRequest from "./activeRequests"

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="flex gap-2">
        <div className=" w-[60%]">
            <ActiveRequest/>
        </div>
        <div className=" mt-3 p-4 w-[40%]">
            <RequestForm/>
        </div> 
        </div>
        </>

    )
}

export default Home