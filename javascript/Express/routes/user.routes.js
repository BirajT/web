import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        data:[
            {id:1,name:"abc",email:"abc@gmail.com"},
            {id:2,name:"xyz",email:"xyz@gamil.com"},
        ],
        message:'users fetched'
    });
});

//dynamic route {req,params}
router.get ('/:id',(req,res)=>{
    console.log(req.params);
    const params=req.params
    
    res.json({
        data:{id:params.id,name:params.name,email:"abc@gmail.com"}
    })
    })

router.post ('/',(req,res)=>{
  res.status(201).json({
    message:'Account created'
  })
})
     

router.put('/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`Profile updated for user id ${id}`
    })
  })

router.delete('/:id',(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`profile deleted for user id ${id}`
    })
  })
  export default router