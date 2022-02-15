
import { useEffect, useState } from "react";
import RenderProducts from "./Components/RenderProducts"
import Header from "./Components/Header/Header"
import Shop from "./Components/Header/Shop"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([])

  const men = productList.filter((product)=>{
    return product.category === "men's clothing"
  })

  const women = productList.filter((product)=>{
    return product.category === "women's clothing"
  })

  const jewelery = productList.filter((product)=>{
    return product.category === "jewelery"
  })

  const electronics = productList.filter((product)=>{
    return product.category === "electronics"
  })
  
 
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RenderProducts productList={productList} setProductList={setProductList} setCart={setCart} cart={cart}/>}/>
          <Route  path="/shop" element={<shop cart={cart}/>}/>
          <Route  path="/men"  element={<RenderProducts productList={men} setProductList={setProductList} setCart={setCart} cart={cart}/>}/>
          <Route  path="/women" element={<RenderProducts productList={women} setProductList={setProductList} setCart={setCart} cart={cart}/>}/>
          <Route  path="/jewelery" element={<RenderProducts productList={jewelery} setProductList={setProductList} setCart={setCart} cart={cart}/>}/>
          <Route  path="/electronics" element={<RenderProducts productList={electronics} setProductList={setProductList} setCart={setCart} cart={cart}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
