import React from 'react'
import { Link } from 'react-router-dom'
import Loginpage from './Loginpage'
import { useForm } from "react-hook-form";

const Sign = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <div className="dark:bg-slate-900 dark:text-white ">
              <div className=' md:mt-10 mt-0 md:pt-5 pt-10 md:ml-[32rem] ml-[1rem] h-[45rem] md:w-[30rem] w-11/12 flex flex-col md:border border-0 p-5'>
                <h1 className='text-3xl pl-7 relative'>Create account</h1>
                <Link to="/" className="btn btn-sm btn-circle btn-ghost left-[59rem] absolute">✕</Link>
                <p className='pl-7'>Get started with an account.</p>
                <form className='flex flex-col pl-7 mt-10' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="" className='text-gray-500'>Name</label>
                    <input type="text" name='name' className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md'{...register("name", { required:{value:true,message:"This field is required"},minLength:{value:3,message:"name must have letters between 3 and 25"},maxLength:{value:25,message:"name must have letters between 3 and 25"} })} />
                    {errors.name && <span className='text-red-600 text-xs pt-3'>{errors.name.message}</span>}

                    <label htmlFor="label" className='text-gray-500 mt-5'>Email address</label>
                    <input type="email" name='email' className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md'  {...register("email", { required:{value:true,message:"This field is required"}})}/>
                    {errors.email && <span className='text-red-600 text-xs pt-3'>{errors.email.message}</span>}


                    <label htmlFor="label" className='text-gray-500 mt-5'>Create password</label>
                    <input type="password" name='password' className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md'{...register("password", { required:{value:true,message:"This field is required"},minLength:{value:8,message:"Min. 8 characters, 1 lowercase, 1 uppercase and 1 number"},pattern:{value:/^[A-Za-z]+$/i , message:"Min. 8 characters, 1 lowercase, 1 uppercase and 1 number"} })}/>
                    {errors.password && <span className='text-red-600 text-xs pt-3'>{errors.password.message}</span>}



                    <label className='text-gray-500 mt-5'
                        htmlFor="label">Comfirm password</label>
                    <input type="password" name='password'
                    className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md' />

                    <div className=" flex flex-row">
                        <input type="checkbox"  className='border border-gray-300 h-3 mt-5 w-11/12 pl-1 -ml-32 rounded-md'/>
                        <p className='text-xs w-full -ml-28 mt-5'>I agree to the <span><a href="">terms and conditions</a></span></p>
                    </div>
                    <button className='border border-gray-300 h-10 mt-5 w-11/12 pl-5 rounded-md bg-blue-500 text-white'>Create account</button>
                    <p className='mt-3 md:ml-16 ml-2'>Already have a account! 
                    <p className='text-blue-500 ml-52 -mt-6 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>
                        Login
                        </p>
                    <Loginpage/>    
                    </p>

                </form>

            </div>
            </div>
        </>
    )
}

export default Sign