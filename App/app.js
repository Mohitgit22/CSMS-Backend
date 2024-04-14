import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import dbConnect from '../config/dbConnect.js';
import { globalErrhandler, notFound } from '../middlewares/globalErrHandler.js';

import AnnouncementRoutes from '../routes/AnnouncementRoute.js';

//db Connect
dbConnect();


// password - iIYkSph2ioRv5ht1
// username- mohitverma77377

const app = express();

app.use(express.json());

//routes
app.use('/api/v1/announcements/', AnnouncementRoutes);

//err middlewares
app.use(notFound);
app.use(globalErrhandler);

export default app;
