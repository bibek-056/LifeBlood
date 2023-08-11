import React from "react";

const ActiveRequest = () => {

    const requests = [
        {
            id:1,
            patientName: "Ram Prasad",
            location: "Kathmandu",
            bloodgroup: "B+",
            contact: 12345678,
        },
        {
            id:2,
            patientName: "Sita Kumari",
            location: "Pokhara",
            bloodgroup: "A+",
            contact: 23456745,
        },
        {
            id:3,
            patientName: "Hari Kumar",
            location: "Kathmandu",
            bloodgroup: "AB+",
            contact: 987654321,
        },
        {
            id:4,
            patientName: "Hari Kumar",
            location: "Kathmandu",
            bloodgroup: "AB+",
            contact: 987654321,
        },
        {
            id:5,
            patientName: "Hari Kumar",
            location: "Kathmandu",
            bloodgroup: "AB+",
            contact: 987654321,
        },
        {
            id:6,
            patientName: "Hari Kumar",
            location: "Kathmandu",
            bloodgroup: "AB+",
            contact: 987654321,
        }

    ]
    return (
        <div className=" border flex flex-col gap-4 px-2 items-center  max-h-[90vh] overflow-y-auto">
            <p className="text-2xl font font-semibold text-[#8B0000]">Active Requests</p>
            {requests.map((onerequest) => (
                <div key={onerequest.id} className="flex border-2 w-[70%] justify-between gap-auto p-4">
                    <div className="flex flex-col gap-2">
                    <p className="font-bold font-lg">{onerequest.patientName}</p>
                    <p className="font-medium">{onerequest.location}</p>
                    <p className="font-medium">{onerequest.contact}</p>
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