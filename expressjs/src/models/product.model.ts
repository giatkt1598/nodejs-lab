import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    deleted: Boolean,
}, {
    versionKey: false
})
type ProductType = {
    name: string,
    price: number,
    quantity: number,
    deleted: boolean
}
export const Product = model<ProductType>("products", productSchema)