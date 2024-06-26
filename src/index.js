import 'dotenv/config';
import connectDB from "./db/db.index.js";
import { app } from './app.js';

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`);
        })

        app.get('/', (req, res) => {
            res.send('Hello Developer')
        })

        app.post('/', (req, res) => {
            res.send('POST request to homepage')
        })
    })
    .catch((err) => {
        console.error("DB Connection Failed", err);
    })
