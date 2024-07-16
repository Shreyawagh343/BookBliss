import React from 'react'

const Card = ({item}) => {
    return (
        <>
            <div className='mt-4  my-8 flex justify-evenly'>
                <div className="card bg-base-100 md:w-96  w-80 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img className='w-10/12 h-80'
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.tile}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-4 hover:bg-pink-400 hover:text-white duration-200">${item.price}</div>
                            <div className="badge badge-outline p-4 hover:bg-pink-400 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card