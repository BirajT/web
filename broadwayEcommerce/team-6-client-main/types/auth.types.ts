import { GENDER } from "./global.types";

// ?login 
export type ILogin = {
    email: string;
    password:string
}

//? register
export type IRegister = ILogin &{
    first_name: string,
    last_name:string
    confirm_password: string,
    gender?: GENDER,
    phone?:string
}

