import express from 'express';
import router from './routers/router.js';
import { connectToDb } from './utils/connectToDb.js';
const app = express();

connectToDb();
app.use(express.json());
app.use(router);


app.listen(3000, () => {
    console.log("3000")
})