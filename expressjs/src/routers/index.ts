import { Express } from "express";
import productsController from "../controllers/productsController";

export const routeSetup = (app: Express) => {
    app.use("/products", productsController)
}