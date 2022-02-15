import s from "./Header.module.css"

function Shop(cart) {

    const renderShop = () => cart.map((product) => (
        <div className={s.productContainer} key={product.id}>
            <div className={s.title} >{product.title}</div>
            <img className={s.img} src={product.image}></img>
            
            
            
        </div>
    ))

    return (
        <>
          <div>{renderShop()}</div> 
        </>
    );
}

export default Shop;
