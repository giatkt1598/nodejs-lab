# Demo rest api with express

## Some essentials features of rest api app

1. logger

1. error handling exception

1. api docs 

1. authorize 

1. [routing](#routing)

1. database (mongodb - use mongoose to connect)

1. interceptor (middleware) for handle request, response before next.

1. paging data (follow by database driver)

1. caching data 

1. dynamic query 

1. handle data before return client 

1. validation data create, update 

1. format json before response 

1. cors config

1. design pattern 

1. organize source code, folder 

## routing
Use `Router()` of express.

```ts
// routers/index.ts
export const routeSetup = (app: Express) => {
    app.use("/products", productsController)
}
```
```ts
// app.ts
import express from "express"
import { routeSetup } from "./routers";

const app = express();
routeSetup(app);
```