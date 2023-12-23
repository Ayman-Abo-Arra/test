import React from 'react'

export default function Input({type='text',id,name,title,onChange,errors,onBlur,touched}) {
  return (
    <>
  
    <div className='input-group d-flex flex-column mb-3'>
      <div>
         <label className='pb-1 ps-2'  htmlFor={id}> {title} </label>
        </div> 
        <div>
             <input className='form-control ms-1 border border-black' type={type} name={name} id={id} onChange={onChange} onBlur={onBlur} />
            </div>
        <div> 
             { touched[name]&&errors[name]&& <p  className='text-danger pt-2 '> {errors[name]} </p> }
            </div>

    </div>
    
    </>

    )
}
