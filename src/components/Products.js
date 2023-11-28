import React,{Component} from "react";
import formatCurrency from "./Utilities";

class Products extends Component{
constructor(props){
    super(props)
    this.state = {}
}

    render(){
        return(
            <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
           {
            this.props.products.map(product => (
              <div >
                 <a href={"#" + product._id}  className="group overflow-hidden" >
                 <div className="relative w-full h-full border-2 rounded-md">
                           <img src={product.image} alt={product.name} fill sizes="100%" style={{objectFit: 'contain'}}></img>
                           <div className="p-6 bg-white">
                  <p className="font-semibold text-lg">{product.name}</p>
                  <div className="mt-4 flex items-center justify-between space-x-2">
                   <div>
                    <p className="text-gray-500">Price</p>
                    <p className="text-lg font-semibold">{formatCurrency(product.price)}</p>
                   </div>
                   <button className="border rounded-lg py-1 px-4 font-semibold text-red-500" onClick={()=> this.props.addToCart(product)}>
                Add to Cart
               </button>
                </div>
               
                </div>
                           </div>
                       </a>
                      
            </div>
            ))
           }
      </div>

    </div>
                 
                /*{ <ul className="products">
                {this.props.products.map(product => (

                    <li key={product._id}>
                        <div className="product">
                       <a href={"#" + product._id}>
                           <img src={product.image} alt={product.title} className="product img"></img>
                           <p>{product.title}</p>
                       </a>
                      
                       <div className="product_price">
                           <div className="product-price">{formatCurrency(product.price)}</div>
                           <button 
                           onClick={()=> this.props.addToCart(product)}
                           className="button primary">add to cart</button>
                       </div>
                        </div>
                    </li>
                ))}
                </ul> }*/
         
        )
    }
}

export default Products;