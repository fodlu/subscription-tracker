import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js'
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRoute = Router();

subscriptionRoute.get('/', (req, res)=>{
    res.send({title: "Get all subscriptions"})
})

subscriptionRoute.get('/:id', (req, res)=>{
    res.send({title: "Get subscriptions details"})
})

subscriptionRoute.post('/', authorize, createSubscription);

subscriptionRoute.put('/:id', (req, res)=>{
    res.send({title: "Update a subscription"})
})

subscriptionRoute.delete('/:id', (req, res)=>{
    res.send({title: "Delete a subscriptions"})
})

subscriptionRoute.get('/user/:id', authorize, getUserSubscriptions)

subscriptionRoute.put('/:id/cancel', (req, res)=>{
    res.send({title: "Cancel a subscription"})
})

subscriptionRoute.get('/upcoming-renewals', (req, res)=>{
    res.send({title: "Get upcoming renewal"})
})


export default subscriptionRoute