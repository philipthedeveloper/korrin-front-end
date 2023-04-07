import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";


const DashBoardstars = ({stars}) => {
     const tempStars = Array.from({ length: 5 }, (_, index) => {
       const number = index + 0.5;
       return (
         <span key={index}>
           {stars >= index ? (
             <BsStarFill className=" text-yellow-400 mt-1" />
           ) : stars >= number ? (
             <BsStarHalf />
           ) : (
             <BsStar className=" text-yellow-400 mt-1" />
           )}
         </span>
       );
     });
  return (
    <div className='flex'>
      {tempStars}
    </div>
  )
}

export default DashBoardstars
