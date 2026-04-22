import express from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';
const userRoute = express.Router();

userRoute.get('/', getUsers)

userRoute.get('/:id', authorize, getUser)

userRoute.post('/', (req, res)=> {
    res.send({title: "Create new users"})
})

userRoute.put('/:id', (req, res)=> {
    res.send({title: "Update a users"})
})

userRoute.delete('/:id', (req, res)=> {
    res.send({title: "delete all users"})
})

export default userRoute