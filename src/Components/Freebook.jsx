import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
 
const filterbooks = list.filter((data)=>
    data.category==="Free")


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  flex-col md:flex-row my-16 '>
    <h1 className='font-semibold text-xl pb-2'>Free Books Offer</h1>
    <p>Discover the joy of reading with our special offer of free books! For a limited time, we're giving away a selection of popular titles across various genres. Whether you're looking to explore new authors or revisit beloved classics, this is the perfect opportunity to expand your library at no cost.</p>
    </div>
    <div className="cards">
    <Slider {...settings}>
        
        {filterbooks.map((item)=>{
        return  <Card item={item} key={item.category}/>
})}
      </Slider>
    </div>
    </>
  )
}

export default Freebook