import setJwt from 'jsonwebtoken'


export const setToken=(userId,res)=>{
        const token=setJwt.sign({userId},process.env.JWT_SECRET,{
            expiresIn:"2d"
        })

        res.cookie("authToken",token,{
            httpsOnly:true,
            secure:true,
            sameSite:false,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        return token
}