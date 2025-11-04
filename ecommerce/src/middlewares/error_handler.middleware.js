//error handling middleware 

class CustomError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode
        this.error_status=statusCode>400 || statusCode <500 ?'fail':'error';
        Error.captureStackTrace(this.CustomError)
    }
}

export const errorHandler=(error,req,res,next)=>{
    const message=error?.message || "something went wrong"
    const errorCode=error?.status || 500
    const status =error?.status ||'server error'
    const sucess=error?.sucess ||"false"

    res.status(errorCode).json({
        message,
        status,
        sucess,
        data:null,
        originalError:process.env.NODE_ENV === "development"?error.stack:null,
    })
}



export default CustomError
