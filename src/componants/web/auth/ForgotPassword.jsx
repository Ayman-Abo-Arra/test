import React from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { forgotpasswordSchema } from '../validatin/Validatin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const navigate =useNavigate();

    const initialValues={
        email:'',
        password:'',
        code:'',
    };

    const onSubmit=async users=>{
        

        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,users);
        if(data.message=='success'){
            toast.success("Password Update");
            navigate('/login');
        }


    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:forgotpasswordSchema,
    });
   
    

    const inputs =[
       
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
            title:'New password',
            value:formik.values.password,
        },
        {
            id:'code',
            type:'text',
            name:'code',
            title:' code',
            value:formik.values.code,
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
        <h2 className='pt-4'> Change Password : </h2> 
        <form className='pt-3 ' onSubmit={formik.handleSubmit} encType='multipart/form-data'>
            {renderInputs}
            <button disabled={!formik.isValid} type='submit' className='text-white bg-info pt-2 pb-2 pe-4 ps-4  rounded-pill  border-0 mb-3'> Conform </button>
        </form>

    </div>
    
    </>
  )
  }
