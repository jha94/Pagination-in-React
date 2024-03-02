import React from 'react';
import './Pagination.css'

const Pagination = ({pages, onPageChange}) => {
  return (
    <div className='pageWrapper'>
        {pages.map((value)=><div key={value} className='pageWrapper page' onClick={()=>onPageChange(value)}>{value+1}</div>)}
    </div>
  )
}

export default Pagination