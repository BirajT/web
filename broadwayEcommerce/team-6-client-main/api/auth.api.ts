/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin, IRegister } from "@/types/auth.types";
import api from '.'

//! mutation function
//?   login user
  export const login = async (data: ILogin) => {
    try {
      const response = await api.post('/auth/login', data);
      console.log(response)
      return response.data

    } catch (error: any) {
      throw error.response.data
    }
  }

//?   register user
export const registerUser = async (data: Partial<IRegister>) => {
  try {
  const response = await api.post('/auth/register', data)
  return response.data
  
    
  } catch (error:any) {
      throw error.response.data
  }
  
}