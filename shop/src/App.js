import './App.css';
import { useEffect, useState } from "react";
import RenderProducts from "./Components/RenderProducts"
import Header from "./Components/Header/Header"

function App() {
  const [productList, setProductList] = useState([]);
  
  return (
   <>
   <Header />
   <RenderProducts productList={productList} setProductList={setProductList}/>
   
   </>
  );
}

export default App;
