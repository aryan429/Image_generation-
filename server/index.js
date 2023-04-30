/* This is a Node.js server code that sets up an Express application to handle HTTP requests. It
imports necessary modules such as `express`, `dotenv`, and `cors`. It also imports routes for
handling requests related to posts and dalle. The `dotenv` module is used to load environment
variables from a `.env` file. The `cors` module is used to enable Cross-Origin Resource Sharing. The
`express.json()` middleware is used to parse incoming JSON data. The `app.use()` method is used to
mount middleware functions at a specified path. The `app.get()` method is used to handle GET
requests to the root path. The `connectDB()` function is used to connect to a MongoDB database.
Finally, the `app.listen()` method is used to start the server on port 8080. */
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
    });
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();