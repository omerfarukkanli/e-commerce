import express from 'express';
import router from './routers/router.js';
import { connectToDb } from './utils/connectToDb.js';
import cors from "cors"
const app = express();
app.use(cors())
connectToDb();
app.use(express.json());
app.use(router);



app.listen(5000, () => {
    console.log("5000")
})