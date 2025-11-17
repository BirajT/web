import { asyncHandler } from "../utils/asynchandler.utils";

export const create=asyncHandler(async(req,res)=>{
    const {product_id}=req.body;
    const {_id:user}=req.body;
    let wishlist=null
    let new_wishlist=null
    const product =await Product.findById(product_id)

    if(!product){
        throw new CustomError('product not found',404)
    }
    

})