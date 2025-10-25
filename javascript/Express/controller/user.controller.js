const users=[]

export const getall=(req,res)=>{
    res.json({
        data:users,
        message:'users fetched'
    });
}

export const getById=(req,res)=>{
    console.log(req.params);
    const params=req.params
    
    res.status(200).json({
        data:{id:params.id,name:'abc',email:"abc@gmail.com"}
    })
    }

export const create=(req,res)=>{
    console.log(req.body);
    users.push({...req.body,id:users.length+1})
  res.status(201).json({
    message:'Account created'
  })
}
export const update=(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`Profile updated for user id ${id}`
    })
  }

export const remove=(req,res)=>{
    const{id}=req.params
    res.status(200).json({
        message:`profile deleted for user id ${id}`
    })
  }