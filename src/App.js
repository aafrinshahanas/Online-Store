import React from "react";
import Products from "./components/Products";
import data from './data.json';
import Cart from "./components/Cart";
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    products:data.products,
    size: '',
    sort: '',
    cartItems:localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems'))
    :[]
  }
}


addToCart = (product) =>{
const cartItems = this.state.cartItems.slice();
let alreadyIncart = false;
cartItems.forEach((item) => {
  if(item._id === product._id){
    item.count++
    alreadyIncart = true
  }
})
if(!alreadyIncart){
  cartItems.push({...product, count: 1})
}
this.setState({cartItems})
localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

removeFromCart = (product) => {
  console.log('working')
  const cartItems = this.state.cartItems.slice();
  this.setState({
    cartItems: cartItems.filter(x => x._id !== product._id)
  })
  localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((x) => x._id !== product._id)))
}

createOrder = (order) =>{
  alert(`push data to server ${order.name}`)
  
}
render(){
  return (

    <div className="grid-container">
    
      <Header/>
      <main className="flex-grow bg-[#f7f7f7]">
        <div className="content">
       <div className="main ">
        
         <Products 
         products={this.state.products}
         addToCart = {this.addToCart}
         />
       </div>
       <div className="sidebar">
       <Cart
       cartItems = {this.state.cartItems}
       removeFromCart = {this.removeFromCart}
       createOrder = {this.createOrder}
       />
       </div>
        </div>
      </main>
    <Footer/>
    </div>
  );
}

}

export default App;
