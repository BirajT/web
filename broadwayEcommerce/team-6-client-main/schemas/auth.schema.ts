import { GENDER } from "@/types/global.types";
import * as yup from "yup";

// ! login schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  password: yup.string().required("password is required"),
});

//! register

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is required"),
  first_name:yup.string().required('first name is required'),
  last_name:yup.string().required('last name is required'),
  password: yup.string().min(6,'Atleast 6 char required').required("password is required"),
  confirm_password:yup.string().oneOf([yup.ref('password')] , 'Passwords must match').required('confirm password is required'),
  gender: yup.string().oneOf(Object.values(GENDER), 'Select valid gender').optional(),
  phone:yup.string().optional()
})

