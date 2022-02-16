import s from "./Koszyk.module.css"

function Koszyk({cart}) {

    const renderKoszyk = () => cart.map((product) => (
        <div className={s.productContainer} key={product.id}>
            <div className={s.title} >{product.title}</div>
            <img className={s.img} src={product.image}></img>
            <p className={s.price}> {product.price}</p>
            
            
            
        </div>
    ))

    return (
        <>
          <div className={s.container}>{renderKoszyk()}</div> 
        </>
    );
}

export default Koszyk;
