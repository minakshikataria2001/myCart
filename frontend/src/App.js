
import './App.css';
import Axios from "axios";
// import React from 'react';
import Navbar from './components/Navbar';

import Cart from './components/Cart';
import ProductList from './components/ProductList';

import React,{useState} from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
function App() {


  const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:5000", true);
xhr.withCredentials = true; // enable CORS
xhr.send();

const [data,setData] = useState([]);
const getData = async()=>{
  const response = await Axios.get("http://localhost:5000/products"); 
  setData(response.data);
  // console.log(response.data);
  
}
function postData(name,price){
  
  Axios.post("http://localhost:5000/products/params",{
    name:name,
    price:price

  }).then((response)=>{
            console.log(response);
  }).catch((error)=>{
    console.log(error);
  });
}

 
 


  // const productList =[];
     let total=0; 
    

   const products = [
//     {
//    name:"IPhone",
//    price:"119999",
//    quantity:1,
//    Added: "Add to Cart",
//    disable: false
//   },
//   {
//     name:"Redmi",
//     price:"18500",
//     quantity:1,
//     Added: "Add to Cart",
//     disable: false
//    },
//    {
//     name:"One Plus",
//     price:"32000",
//     quantity:1,
//     Added: "Add to Cart",
//     disable: false
//    },
   
];
console.log("data",data);
// products = data;
console.log("product",products);  

 let [ List , setProductList] = useState([]);
 
 function  iq(index){
  // alert(List[index].name);
    let newProductList = [...List];
    newProductList[index].quantity++;
    // alert(List[index].quantity);
    // useEffect(() => {setProductList(List) }, [])
    setProductList(newProductList);
    // console.log(List);
  // console.log(productList);
      
  }
  
  
 function  dq(index){
  // alert(List[index].name);
    let newProductList = [...List];
    newProductList[index].quantity > 1? newProductList[index].quantity-- : newProductList[index].quantity =1;
    // alert(List[index].quantity);
    // useEffect(() => {setProductList(List) }, [])
    setProductList(newProductList);
    // console.log(List);
  // console.log(productList);
    
  }
  List.forEach(element=>{
    if(element.Added=="Added"){
      let sum = element.price*element.quantity;
      total +=sum;
    }
  })
  function checkthe(index,id){
    let newProductList = [...List];
  if(newProductList[index].Added="Add to Cart"){
    newProductList[index].Added="Added";
    newProductList[index].disable = true;

    Axios.patch(`http://localhost:5000/products/${id}`,{
      Added:"Added",
      disable:true,
      quantity: newProductList[index].quantity
      }).then((response)=>{
              console.log(response);
    }).catch((error)=>{
      console.log(error);
    });




  }

  //   newProductList[index].Added= "Add to Cart";
  // }
    // alert(List[index].quantity);
    // useEffect(() => {setProductList(List) }, [])
    setProductList(newProductList);
    console.log(newProductList);
  }
  function remove(index,id){
    let newProductList = [...List];
    newProductList[index].Added="Add to Cart";
    newProductList[index].disable = false;
    // alert(List[index].quantity);
    // useEffect(() => {setProductList(List) }, [])
    setProductList(newProductList);

    Axios.patch(`http://localhost:5000/products/${id}`,{
      Added:"Add to Cart",
      disable:false,
      quantity: newProductList[index].quantity
    }).then((response)=>{
              console.log(response);
    }).catch((error)=>{
      console.log(error);
    });



   
  }
  useEffect(()=>{
    getData()
  },[]);
  useEffect(() => {
    setProductList(data);
  }, [data]);


  function addItem(name,price){
    
      
    postData(name,price);
  
    
  }
  function deleteProduct(id){
    
  Axios.delete(`http://localhost:5000/products/${id}`).then((response)=>{
            console.log(response);
  }).catch((error)=>{
    console.log(error);
  });
    // alert(id);
    window.location.reload();
   }
 

  return (
    <React.Fragment>
    <Navbar/>
    <Form addItem={addItem} />
    {/* <div>{data}</div> */}
    <main className='container mt-5 mx-3'>
    <ProductList productList={List} iq={iq} dq={dq} checkthe={checkthe} deleteProduct={deleteProduct}/>

    </main>
    
    <div className='container mt-5 mx-3'> 

    <Cart productList={List} remove={remove}/>

    </div>
    <div className='container mt-5 mx-3'> 

    <Footer productList={List} total={total}/>
{/* <Cart productList={List} iq={iq} dq={dq} checkthe={checkthe}/> */}

</div>

    </React.Fragment>
    
  );
}

export default App;
