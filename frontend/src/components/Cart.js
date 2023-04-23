import React from 'react'
import Item from './Item'


export default function Cart(props) {
  return (

     

    
    
    props.productList.map((product,i)=>{
      
      if(props.productList[i].Added=="Added"){
        return <Item  product={product} key={i} index={i} remove={props.remove}/>

      }
      else{
        
      }
      
      
      

    })


    
  )
}
