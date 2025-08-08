import jwt from "jsonwebtoken"


export const LoginToken = (user) => {
    return jwt.sign({
        id: user._id, role: user.role, email: user.email
    },
    process.env.JWT_SECRET_KEY,
    {expiresIn: "15d"}
)
}