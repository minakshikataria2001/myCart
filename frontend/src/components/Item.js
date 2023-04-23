import React from 'react'

export default function Item(props) {
  return (
    
   < div className='row border border-dark w-75 '>
      <div className='mt-2'>
       
      <h3>{props.product.name} <span className="badge bg-secondary">  ₹{props.product.price}</span> <span>  Quantity: {props.product.quantity}</span>  <button type="button" className="btn  btn-warning mx-3  " onClick={()=>{props.remove(props.index,props.product._id)}}>remove</button> </h3>
      
     
      </div>
     
      </div>
  
    // </div>
  )
}
