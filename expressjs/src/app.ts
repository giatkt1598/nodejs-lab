import express from "express"
import {createServer} from "http"
import { connect } from "mongoose";
import { routeSetup } from "./routers";
import {config} from "dotenv"

const app = express();
config();
connect(process.env.MONGODB_CONNECTION_STRING ?? "");
app.use(express.json())

routeSetup(app);

const http = createServer(app);

http.listen(4000, () => {
    console.log("listening on *:" + 4000);
});


app.get("/", (req, res) => {
    res.send("OK")
});
