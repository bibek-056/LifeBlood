import React, {useState, useEffect} from "react";
import { API_BASE_URL } from '../config.js';


const ActiveRequest = () => {

    const [requests, setRequests] = useState([]);

    // const requests = [
    //     {
    //         id:1,
    //         patientName: "Ram Prasad",
    //         location: "Kathmandu",
    //         bloodgroup: "B+",
    //         contact: 12345678,
    //     },
    //     {
    //         id:2,
    //         patientName: "Sita Kumari",
    //         location: "Pokhara",
    //         bloodgroup: "A+",
    //         contact: 23456745,
    //     },
    //     {
    //         id:3,
    //         patientName: "Hari Kumar",
    //         location: "Kathmandu",
    //         bloodgroup: "AB+",
    //         contact: 987654321,
    //     },
    //     {
    //         id:4,
    //         patientName: "Hari Kumar",
    //         location: "Kathmandu",
    //         bloodgroup: "AB+",
    //         contact: 987654321,
    //     },
    //     {
    //         id:5,
    //         patientName: "Hari Kumar",
    //         location: "Kathmandu",
    //         bloodgroup: "AB+",
    //         contact: 987654321,
    //     },
    //     {
    //         id:6,
    //         patientName: "Hari Kumar",
    //         location: "Kathmandu",
    //         bloodgroup: "AB+",
    //         contact: 987654321,
    //     }

    // ]

    useEffect(() => {
        // Fetch active requests from the backend API
        fetch(`${API_BASE_URL}/requests`)
            .then(response => response.json())
            .then(data => setRequests(data))
            .catch(error => console.error('Error fetching requests:', error));
    }, []);

    return (
        <div className=" border flex flex-col gap-4 px-2 items-center  max-h-[90vh] overflow-y-auto">
            <p className="text-2xl font font-semibold text-[#8B0000]">Active Requests</p>
            {requests.map((onerequest) => (
                <div key={onerequest.id} className="flex border-2 w-[70%] justify-between gap-auto p-4">
                    <div className="flex flex-col gap-2">
                    <p className="font-bold font-lg">{onerequest.patientname}</p>
                    <p className="font-medium">{onerequest.location}</p>
                    <p className="font-medium">{onerequest.phone}</p>
                    </div>
                    <div className="flex">
                        <p className="text-[#8B0000] font-semibold text-2xl">{onerequest.bloodgroup}</p>
                    </div>
                </div>
            ))}
           
        
        </div>
    )
}

export default ActiveRequest;