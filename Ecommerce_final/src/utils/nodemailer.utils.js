import nodemailer from "nodemailer"

const transport =nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    service:"gmail",
    auth:{
        user:'yetitamrakar803@gmail.com',
        pass:'hrhi cukv bisi vggh'
    }
})

export const sendEmail=async()=>{
    try{
        await transport.sendMail({
            to:'yetitamrakar803@gmail.com',
            from:"yetitamrakar803@gmail.com",
            subject:"testing mail service",
            html:<h1>Helllow from email service</h1>
        })
    }
    catch(error){
        console.log('email sending error');
    }
}