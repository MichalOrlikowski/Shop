import s from "./Koszyk.module.css"


function Koszyk({ cart, setCart }) {

    const Add = (product) => {
        setCart((prevValue) => [...prevValue, product])

    }

    const Remove = (index) => {
        setCart((product) => {
            const update = [...product];
            update.splice(index, 1)
            return update;
        })

    }

    const clearCart = () => {
        setCart([])
    }

    const Alert = () => {
        alert("To nie jest prawdziwa strona. Nie daj się oszukać!!!")
    }

    const renderKoszyk = () => cart.map((product, index) => {

        return (
            <div className={s.productContainer} key={index}>
                <div className={s.title} >{product.title}</div>
                <img className={s.img} src={product.image}></img>
                <p className={s.price}> {product.price}$</p>
                <div className={s.buttonList}>
                    <button onClick={() => Add(product)}>Add</button>
                    <button onClick={() => Remove(index)}>Remove</button>
                </div>


            </div>
        )
    })

   
    // function groupBy(objectArray, property) {
    //     return objectArray.reduce(function (acc, obj) {
    //       let key = obj[property];
    //       if (!acc[key]) {
    //         acc[key] = [];
    //       }
    //       acc[key].push(obj);
    //       return acc;
    //     }, {});
    //   }
    
    //   const groupedItems = groupBy(cart, "title");
    //   const result = Object.entries(groupedItems).map(([key, items]) => (
    //     <ul key={key}>
    //       {<img className="img" src={items[0].image}></img>}
    //       {items[0].title} === 
    //       {items.length}
    //     </ul>
    //   ));


      




    return (
        <>
            
            <div className={s.container}>{renderKoszyk()}</div>
            <div className={s.buyContainer}>
                <p>Total price{cart.map((product) =>
                    product.price).reduce((a, b) => a + b, 0)}  {"$"}
                 </p>
                <button onClick={() => Alert()}>Buy</button>
                <button onClick={() => clearCart()}>Clear</button>
            </div>
            {/* <div>{result}</div> */}
            
        </>
    );
}

export default Koszyk;
