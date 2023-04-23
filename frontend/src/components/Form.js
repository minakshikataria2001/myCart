import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state={
        productName:"",
        productPrice:0
    }
  }

  render() {
    return (
        <div className='row border border-dark mt-3 w-50 mx-3 '>
        <form className='px-3 py-3' >
    <div className="row">
      <div className="col">
        <input type="text" id='inputName' name='productName' className="form-control" placeholder="Product name" 
        onChange={(e)=>{
            this.setState({productName: e.currentTarget.value})
        }}
        value={this.state.productName}
        />
      </div>
      <div className="col">
        <input type="namber" id='inputPrice' name='productPrice' className="form-control" placeholder="Price"
        onChange={(e)=>{
            this.setState({productPrice: e.currentTarget.value})
        }}
        value={this.state.productPrice}
        />
      </div>
      <div className="col">
      <button type="submit" class="btn btn-dark" onClick={()=>{
        this.props.addItem(this.state.productName,this.state.productPrice)
      }} >Add to the List</button>
      
      </div>
  
    </div>
    
  </form>
      </div>
    )
  }
}

