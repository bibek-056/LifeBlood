import express from "express";
import cors from "cors";
import { createRequest, getRequests, createUser, getUsers } from "./database.js";

const app = express();

app.use(cors());
app.use(express.json());

//endpoint to get all the records from the database table
app.get('/users', async (req, res) => {
    const users = await getUsers()
    res.status(200).json(users)
})

app.get('/requests', async (req, res) => {
    const users = await getRequests()
    res.status(200).json(users)
})

app.post('/users', async (req, res) => {
    const {user_name, password, location, bloodgroup, phone, share, avaiability} = req.body
    const user = await createUser (user_name, password, location, bloodgroup, phone, share, avaiability)
    res.status(201).json(user)
})

app.post('/requests', async (req, res) => {
    const {patientname, location, bloodgroup, phone} = req.body
    const user = await createRequest (patientname, location, bloodgroup, phone)
    res.status(201).json(user)
})



//server point
app.listen(8080, () => {
    console.log('Server is running on port 8080')
})


export default app;