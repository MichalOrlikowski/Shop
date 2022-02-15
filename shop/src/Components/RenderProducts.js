import { useEffect, useState } from "react";




function RenderProducts() {
    const [productList, setProductList] = useState([]);

    const getProduct = () => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => setProductList(response));
    };
  
    useEffect(()=>{
        getProduct();
        
    }, [ ])
  
    const render = () => productList.map((product)=>(
        <div key={product.id}>
            <div>{product.title}</div>
        </div>
    ))
  
    return (
     <>
     <div>{render()}</div>
     
     </>
    );
  }
  export default RenderProducts;
  