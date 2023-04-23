import React from 'react'

export default function Product(props) {

  
  
  return (
    <div className='row border border-dark w-75 '>
      <div className='col-4 my-2'>
        
      <h3>{props.product.name} <span className="badge bg-secondary">  ₹{props.product.price}</span> </h3>
      
      

</div>
<div className='col-4'>
<div className="btn-group  my-2 " role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger"  disabled={props.product.disable} onClick={()=>{props.dq(props.index,props.product._id)}}>-</button>
  <button type="button" className="btn btn-warning">{props.product.quantity}</button>
  <button type="button" className="btn btn-success" disabled={props.product.disable} onClick={()=>{props.iq(props.index,props.product._id)}}>+</button>
 
</div>

</div>
<div className='col-4  '>
<button type="button" className="btn btn-sm mx-2 btn-primary my-2 " onClick={()=>{props.checkthe(props.index,props.product._id)}} >{props.product.Added}</button>
<button type="submit" className="btn btn-sm btn-danger my-2 mx-2 " onClick={()=>{props.deleteProduct(props.product._id)}} >Delete</button>

{/* <button type="button" className="btn btn-sm btn-danger my-2 mx-2 " onclick={()=>{props.deleteProduct(props.product._id)}} >Delete</button> */}

</div>

</div>

    
  )
} 

