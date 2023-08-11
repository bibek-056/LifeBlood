import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

//connection to the MySQL server in the loaclhost.
// CREATE YOUR OWN .env FILE AND STORE THE VALUES FOR CONNECTION TO OUR LOCAL HOST

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "Gre@twa##56",
    database: 'life_blood'
}).promise()

//Query to extract all the records from the database table
export async function getRequests() {
    const result = await pool.query("SELECT * FROM requests")
    return result[0];
}

export async function getUsers() {
    const result = await pool.query("SELECT * FROM users")
    return result[0];
}

export async function createUser(username, password, location, bloodgroup, phone, share,avaiability) {
    const result = await pool.query(`
    INSERT INTO users (username, password, location, bloodgroup, phone, share,avaiability)
    VALUES (?,?,?,?,?,?,?)
    `, [username, password, location, bloodgroup, phone, share,avaiability])
    const newRecord = result[0].insertId;
    const newUser = getUsers(newRecord);
    return newUser;
}

export async function createRequest(patientname, location, bloodgroup, phone) {
    const result = await pool.query(`
    INSERT INTO requests (patientname, location, bloodgroup, phone)
    VALUES (?,?,?,?)
    `, [patientname, location, bloodgroup, phone])
    const newRecord = result[0].insertId;
    const newRequest = getRequests(newRecord);
    return newRequest;
}


