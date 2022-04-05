const jwt = require('jsonwebtoken');

/**
 * 
 * @param req The user request
 * @param res Response to user
 * @param next The next function to execute is given to a callback for it to kick-off when it's done
 * @returns Returns unauthorized if user has not the correct token, or else continue gracefully
 */
module.exports = (req, res, next) => {
    try {
        console.log(req.headers.authorization);

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
        
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
};