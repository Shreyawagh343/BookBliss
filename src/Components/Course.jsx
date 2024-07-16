import React from 'react'
import Card from './Card'
import list from "../../public/list.json"
import { Link } from "react-router-dom"; 

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className="dark:bg-slate-900 dark:text-white">.</div>
        <h1 className='mt-32 md:ml-28 ml-7  font-semibold md:text-2xl text-3xl '>We're delighted to have you <span className='text-pink-400'>here!</span>
        </h1>
        <p className='mt-5 w-9/12 md:ml-28 ml-7'>Our course offers a diverse selection of books to cater to a variety of interests and academic needs. Dive into the intrigue of mystery novels, explore the imaginative realms of fantasy literature, and savor the knowledge found in culinary and food science books. Each genre provides unique insights and perspectives, enriching your learning experience and broadening your understanding!</p>
        <button className="btn btn-secondary mt-7 md:ml-28 ml-7">Read More</button>
      </div>
      <div className="mt-12 grid ml-1 md:ml-8 gap-7 md:grid-cols-4">
        {list.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Link to="/"><button className="btn btn-secondary my-10 md:ml-14 ml-10">Back to Home</button></Link>


    </>
  )
}

export default Course