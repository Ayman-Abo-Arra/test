import React from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { registerSchema } from '../validatin/Validatin';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
    const initialValues={
        userName:'',
        email:'',
        password:'',
        image:'',
    };

    const handelFieldChange =(event)=>{
        formik.setFieldValue('image',event.target.files[0])
    }

    const onSubmit=async users=>{
        const formData = new FormData();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);

        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`,formData);
        if(data.message=='success'){
            formik.resetForm();
            toast.success("User added successfully");
        }


    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:registerSchema,
    });
   
    

    const inputs =[
        {
            id:'username',
            type:'text',
            name:'userName',
            title:'user name',
            value:formik.values.userName,
        },
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:' password',
            value:formik.values.password,
        },
        {
            id:'image',
            type:'file',
            name:'image',
            title:' user image',
            onChange:handelFieldChange,

        },
    ];
    const renderInputs =inputs.map((input,index)=>
    <Input 
    type={input.type} 
    id={input.id} 
    name={input.name} 
    title ={input.title}
    value={input.value} 
    key={index}
    errors={formik.errors}
    onChange={input.onChange || formik.handleChange}
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    
    )

  return (
    <>
    <div className='container w-50 m-auto pt-2 bg-primary-subtle mt-3 '>
        <h2 className='pt-4'> Create Acount : </h2> 
        <form className='pt-3 ' onSubmit={formik.handleSubmit} encType='multipart/form-data'>
            {renderInputs}
            <button disabled={!formik.isValid} type='submit' className='text-white bg-info pt-2 pb-2 pe-4 ps-4  rounded-pill  border-0 mb-3'> Register </button>
        </form>

    </div>
    
    </>
  )
  }
