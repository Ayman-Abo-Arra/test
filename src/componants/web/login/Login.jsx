import React, { useContext } from 'react'
import Input from '../../pages/Input';
import { useFormik } from 'formik';
import { loginSchema } from '../validatin/Validatin';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User';
import './Login.css';


export default function Login() {
    const navigate =useNavigate();

    let {userToken,setUserToken}=useContext(UserContext);
    if(userToken){
        navigate(-1)
    }
    const initialValues={
        email:'',
        password:'', 
    };

    const onSubmit = async users=>{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,users);
        console.log(data);
        if(data.message=='success'){
          localStorage.setItem("userToken",data.token);
          setUserToken(data.token);
          toast.success("User Login successfully");
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
            <Link to='/sendCode' className='forgot'> Forgot Password? </Link>
        </form>

    </div>
    
    </>
  )
  }
