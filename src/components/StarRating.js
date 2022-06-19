import React from 'react'
import {FaStar} from 'react-icons/fa';
import {BsStar} from 'react-icons/bs';

function StarRating(props) {
    var num=0;
    if(props.rating==="easy"){
      num=1;
    }else if(props.rating==='hard'){
      num=3;
    }else{
      num=2;
    }
    
  return (
    <div>
        {[...Array(num)].map(()=>{
            return <FaStar />
        })}
        {[...Array(5-num)].map(()=>{
            return <BsStar />
        })}
    </div>

    
  )
}

export default StarRating