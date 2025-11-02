

//register user

export const register=async(req,res,next)=>{
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            phone
        }=req.body
        const user await USER.create({
            first_name,
            last_name,
            email,
            password,
            phone,gender
            ,role:USER_ROLE.USER,
        });
    } catch (error) {
        next(error)
    }
};

//login
export const login=(req,res,next)=>{
    try{
        const {email,password}=req.body
        if(!email){
            const error=new Error("email is required")
            next(error)
        }
        //check out user by eamil
        const user=await USER.findONE({email})
        if(!user)
        {
            const error=new Error('Credentials does not match')
            throw error
        }
        //compare password
        const isMatch=password===user.password;
        if(!isMatch){
            const error=new Error("Credentials does not match")
            throw error;
        }
        //login sucess
        res.status(200).json({
            message:"login sucessfully",
            data:user

        })
    }catch(error){
        next(error)
    }
}