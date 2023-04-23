import React from 'react'
import Product from './product'
import Cart from './Cart'

export default function ProductList(props) {
    // console.log(props.productList);
    return (
    
        props.productList.map((product,i)=>{
          
              return <Product product={product}   key={i} iq={props.iq} index={i} dq={props.dq} checkthe={props.checkthe} deleteProduct={props.deleteProduct}/>
                 
      
            })

            
      
  )
}
