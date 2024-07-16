import React from 'react'
import Navbar from './Navbar'

const Contactpage = () => {
    return (
        <>
        <Navbar/>
            <div className="dark:bg-slate-900 dark:text-white ">
                <div className="">.</div>
                <div className=' md:mt-28 mt-10 md:pt-5 pt-10 md:ml-[32rem] ml-[1rem] h-[45rem] md:w-[30rem] w-11/12 flex flex-col p-5'>
                    <h1 className='text-3xl pl-7 relative'>Contact Us</h1>
                    <form className='flex flex-col pl-7 mt-10'>
                        <label htmlFor="" className='text-gray-500'>Name</label>
                        <input type="text" name='name' className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md' />

                        <label htmlFor="label" className='text-gray-500 mt-5'>Email address</label>
                        <input type="email" name='email' className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md' />
                        <label htmlFor="label" className='text-gray-500 mt-5'>Message</label>
                        <textarea name="message" id="" className='border border-gray-300 h-10 mt-3 w-11/12 pl-5 rounded-md p-5'></textarea>
                        <button className='border border-gray-300 h-10 mt-5 w-11/12 pl-5 rounded-md bg-blue-500 text-white'>Submit</button>


                    </form>

                </div>
            </div>
        </>
    )
}

export default Contactpage