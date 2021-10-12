import express from "express";
import { createServer } from "http";
import { setup } from "./setup";

const app = express();

setup(app);

const http = createServer(app);

http.listen(process.env.PORT, () => {
    console.log("listening on *:" + process.env.PORT);
});


app.get("/", (req, res) => {
    res.json([
        {
        yourName: "User", //Đây là dữ liêu mà endpoint này gửi đi
        "__v": 1,
    }
    ])
    // res.json("Hello")
});