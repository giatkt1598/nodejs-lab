import {Router} from "express"
import { Product } from "../models/product.model";

const productsController = Router();
const PAGE_SIZE = 2;

productsController.get(["/","/page/:page"], async (req, res) => {
    const page: number = +req.params.page;
    
    const products = await Product.find({})
                            .skip(PAGE_SIZE * (page -1))
                            .limit(PAGE_SIZE);
    res.json(products);
})

productsController.post("/", (req, res) => {
    Product.create({
        name: req.body.name,
        deleted: false,
        price: req.body.price,
        quantity: req.body.quantity,
    }, (err, doc) => {
        if (err) {
            res.json(err.message);
        } else {
            res.json(doc);
        }
    })
})

productsController.get("/:id", async (req, res) => {
    try {
        res.json(await Product.findById(req.params.id));
    } catch { }
    res.status(404);
    res.end();
})

productsController.patch("/:id", async (req, res) => {
    try {
        const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // return updated model
        });
        res.json(result);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

export default productsController;