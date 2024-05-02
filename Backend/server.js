const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const app = express()

function hash(password) {
    const salt = crypto.randomBytes(16).toString("hex")
    const hashed = crypto.scryptSync(password , salt , 64)
    const hashedPassword = `${salt}:${hashed}`

    return hashedPassword
}

app.use(cors())
app.use(express.json())

secret_key = process.env.SECRET_KEY
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL).then(()=> {
    console.log("Connected to MongoDB...");
}).catch((error)=>{
    console.log("Error connecting to MongoDB : ",error)
})

require("./models/user")
const user = mongoose.model("user")

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const hashedPassword = await hash.update(password).digest("hex");
  
      await user.create({
        username,
        password: hashedPassword,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
  });
  
  