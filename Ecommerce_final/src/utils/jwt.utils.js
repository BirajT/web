
import jwt from 'jsonwebtoken'
import { jwt_config } from '../config/config.js'


export const generateJWTToken = (payload) => {
    return jwt.sign(payload, jwt_config.secret, {
        expiresIn:jwt_config.expires_in
    })
}
