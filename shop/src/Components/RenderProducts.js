import { useEffect, useState } from "react";
import s from "./RenderProducts.module.css"



function RenderProducts({ productList, setProductList }) {


    const getProduct = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(response => setProductList(response));
    };

    useEffect(() => {
        getProduct();
        console.log(productList)
    }, [])

    const render = () => productList.map((product) => (
        <div className={s.productContainer} key={product.id}>
            <div className={s.title} >{product.title}</div>
            <img className={s.img} src={product.image}></img>
            <p className={s.price}>{product.price}</p>
        </div>
    ))

    return (
        <>
            <div className={s.container}>{render()}</div>

        </>
    );
}
export default RenderProducts;
