import express from 'express'
const router = express.Router()

   router.get('/', (req, res) => {
  res.json({
    data: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Headphones" },
    ],
    message: "Products fetched"
  });
});

router.post ('/',(req,res)=>{
  res.status(201).json({
    message:'Product added'
  })
})
     

  router.put('/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`Profile updated for product id ${id}`
    })
  })

  router.delete('/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`product deleted of id ${id}`
    })
  })

  

export default router