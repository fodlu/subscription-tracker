import jwt from "jsonwebtoken";
import User from "../models/user.model";

const authorize = async (req, res, next) => {
    
    try {
        let token;

        const authHeaders = req.headers.authorization || req.headers.Authorization || req.headers.authorization.startWith('Bearer');
        if(authHeaders) {
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token) return res.status(401).json({message: 'Unauthorized'})

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);

        if(!user)  return res.status(401).json({message: 'Unauthorized'});

        req.user = user

        next()

    } catch (error) {
        res.status(404).json({ message: 'Unauthorized', error: error.message})
    }
}

export default authorize;