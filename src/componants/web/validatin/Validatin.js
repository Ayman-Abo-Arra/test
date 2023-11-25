import * as yup from 'yup';
export const registerSchema  = yup.object({
    userName:yup.string().required("User Name Is Required").min(3,"Must be at least 3 char").max(25,"Max is 25 char"),
    email:yup.string().required("Email Is Required").email(),
    password:yup.string().required("Password Is Required").min(8,"Must be at least 8 char").max(30,"Max is 30 char")
})

export const loginSchema  = yup.object({
    email:yup.string().required("Email Is Required").email(),
    password:yup.string().required("Password Is Required").min(8,"Must be at least 8 char").max(30,"Max is 30 char")
})