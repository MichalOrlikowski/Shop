import s from "./Koszyk.module.css"
function Koszyk({ cart, setCart}) {

    const Add = (product) =>{
        setCart((prevValue)=>[...prevValue, product])
        
    }

    const Remove= (index) =>{
        setCart((product)=>{
            const update = [...product];
            update.splice(index, 1)
            return update;
        })
        
    }

    const renderKoszyk = () => cart.map((product, index) => (
        <div className={s.productContainer} key={index}>
            <div className={s.title} >{product.title}</div>
            <img className={s.img} src={product.image}></img>
            <p className={s.price}> {product.price}</p>
            <div>
                <button onClick={()=> Add(product)}>Add</button>
                <button onClick={()=> Remove(index)}>Remove</button>
            </div>


        </div>
    ))

    return (
        <>
            <div className={s.container}>{renderKoszyk()}</div>
            <div>
                <p>Total price </p>
                <button>Buy</button>
                <button>Clear</button>
            </div>
        </>
    );
}

export default Koszyk;
