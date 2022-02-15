import './App.css';
import { useEffect, useState } from "react";
import RenderProducts from "./Components/RenderProducts"

function App() {
  const [productList, setProductList] = useState([]);
  
  return (
   <>
   <RenderProducts productList={productList} setProductList={setProductList}/>
   
   </>
  );
}

export default App;
