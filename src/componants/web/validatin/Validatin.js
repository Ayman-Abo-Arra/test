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

export const sendCodeSchema  = yup.object({
    email:yup.string().required("Email Is Required").email(),
})

export const forgotpasswordSchema  = yup.object({
    code:yup.string().required("Code Is Required").length(4,"Must 4 char"),
    email:yup.string().required("Email Is Required").email(),
    password:yup.string().required("Password Is Required").min(8,"Must be at least 8 char").max(30,"Max is 30 char")
})

export const orderSchema  = yup.object({
    phone:yup.string().required("Phone Is Required").min(10,"Must be at least 10 char").max(20,"Max is 20 char"),
    address:yup.string().required("Address Is Required").min(5,"Must be at least 10 char").max(30,"Max is 30 char")

})
export const commentSchema  = yup.object({
    comment:yup.string().required("Phone Is Required").min(10,"Must be at least 3 char").max(20,"Max is 20 char"),
    rating:yup.string().required("Address Is Required").min(5,"Must be at least 1 char").max(30,"Max is 5 char")

})