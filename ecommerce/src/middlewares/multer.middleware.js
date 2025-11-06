import multer from "multer"
import fs from "fs"

export const uploadFile=(path ="/")=>{
    const upload_path ="/uploads" + path;
    const file_size=5*1024*1024 //5mb
    const allowed_ext=["png","jpg","pdf","svg"];

    if(!fs.existsSync(upload_path)){
        fs.mkdirSync(upload_path,{recursive:true})
    }

    const storage =multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,upload_path)
        },
        filename:function(req,file,cb){
            const uniqueSuddix=Date.now() + "." + Math.round(Math.ramndom()*le9)
            cb(null,uniqueSufiix + "-" + file.orginalname)
        },
    });

    const upload =multer({
        storage:my_storage,
        limits:{fileSize:file_size},
        fileFilter:file_filter

    })

    return upload
};