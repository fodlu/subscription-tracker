import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

import authRouter from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import subscriptionRoute from './routes/subscription.route.js';
import connectToDatabase from './database/Mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import CookieParser from 'cookieparser';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(CookieParser())

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/subscriptions', subscriptionRoute);

app.use(errorMiddleware);

app.get('/', (req, res)=> {
    res.send({body: 'Welcome to the Subcription Tracker app'})
})

app.listen(process.env.PORT || 3000, async ()=> {
    console.log("Subscription Tracker is running on the 3000 port" );
    await connectToDatabase();
})