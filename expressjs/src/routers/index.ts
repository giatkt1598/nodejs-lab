import { Express } from "express";
import productsController from "../controllers/productsController";

export const initRoutes = (app: Express) => {
    app.use("/products", productsController)
}