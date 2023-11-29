import React from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { loginSchema } from '../validatin/Validatin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login({saveCurrentUser}) {
    const navigate =useNavigate();
    const initialValues={
        email:'',
        password:'', 
    };

    const onSubmit = async users=>{
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
        console.log(data);
        if(data.message=='success'){
          localStorage.setItem("userToken",data.token);
          saveCurrentUser();
          toast.success("User added successfully");
        }
        navigate('/home');
    

    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:loginSchema,
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
            title:' password',
            value:formik.values.password,
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
    onChange={ formik.handleChange}
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    
    )

  return (
    <>
    <div className='container w-50 m-auto pt-2 bg-primary-subtle mt-3'>
        <h2 className='pt-4'> Login : </h2> 
        <form className='pt-3 ' onSubmit={formik.handleSubmit} >
            {renderInputs}
            <button disabled={!formik.isValid} type='submit' className='text-white bg-info pt-2 pb-2 pe-4 ps-4 border-0  rounded-pill mb-3  '> Login </button>
        </form>

    </div>
    
    </>
  )
  }
