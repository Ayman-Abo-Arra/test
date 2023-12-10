import { useFormik } from 'formik';
import Input from '../../pages/Input';
import {  sendCodeSchema } from '../validatin/Validatin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function SendCode() {
    const navigate =useNavigate();

    const initialValues={
        email:'',
    };

    const onSubmit = async users=>{
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,users);
        if(data.message=='success'){
          toast.success("Code Send successfully");
        }
        navigate('/forgotpassword');
    

    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:sendCodeSchema ,
    });

    const inputs =[
        
        {
            id:'email',
            type:'email',
            name:'email',
            value:formik.values.email,
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
        <h2 className='pt-4'> Please Enter your email </h2> 
        <form onSubmit={formik.handleSubmit} >
            {renderInputs}
            <button disabled={!formik.isValid} type='submit' className='text-white bg-info pt-2 pb-2 pe-4 ps-4 border-0  rounded-pill mb-3  '> Send Code </button>
            
        </form>

    </div>
    
    </>
  )
  }

