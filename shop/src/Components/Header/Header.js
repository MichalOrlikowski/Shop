import s from "./Header.module.css"
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import koszyk from "../../img/Koszyk.png"

function Header({ cart }) {


  return (
    <>
      <div className={s.Container}>
        
          <NavLink to="/" className={s.title}> <h1>Shop</h1></NavLink>
       
        <div>
          <NavLink to="/buy"><img src={koszyk} className={s.img}></img></NavLink>
          <p className={s.cartLength}>{cart.length}</p>
        </div>
      </div>
      <Nav />
      <hr />
    </>
  );
}

export default Header;
