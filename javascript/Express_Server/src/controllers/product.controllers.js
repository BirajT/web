export const getAll=async(req,res)=>{
    try{
        const products=await Product.find({})
        res.status(200).json({
            data:"products",
            message:"product fetched"
        })
        if(!products)
        {
            res.status(404).json({
                message:"Product not found"
            });
        }

    }catch(error){
        res.status(500).json({
            message:"Something wen wrong"
        });
        
    }
}