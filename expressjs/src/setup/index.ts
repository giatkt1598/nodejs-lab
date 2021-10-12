import express, { Express } from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { initRoutes } from "../routers";
import { toSnakeCase } from "../helpers/toSnakeCase";
import { deepOmit } from "../helpers/deepOmit";
import cors from "cors"
import errorhandler from "errorhandler"

export const setup = (app: Express) => {
    // Use .env
    config();

    // Connect MongoDB
    connect(process.env.MONGODB_CONNECTION_STRING ?? "");

    // Config cors
    app.use(cors({
        origin: "*",
    }))
    
    // Config bodyParser
    app.use(express.json());

    /**
     * Middleware req
     */
    app.use((req, _, next) => {
        console.log("New request on " + req.path);
        next();
    })

    /**
     * Middleware res
     */
    app.use((_, res, next) => {
        const oldFunc = res.json;
        res.json = (data) => {
            data = JSON.parse(JSON.stringify(data));
            data = deepOmit(data, "__v"); // Remove "__v"
            data = toSnakeCase(data);
            return oldFunc.call(res, data);
        }
        next();
    });

    app.use(errorhandler({
        log: (err, str, req) => {

        }
    }))

    // Setup route
    initRoutes(app);
}