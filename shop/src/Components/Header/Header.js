import s from "./Header.module.css"
import Nav from "./Nav";
import { NavLink } from "react-router-dom";


function Header({cart}) {


  return (
    <>
      <div className={s.Container}>
        <NavLink to="/" className={s.title}> <h1>Shop</h1></NavLink>
        <NavLink to="/buy"><button className={s.button}>Koszyk</button></NavLink>
        <p>{cart.length}</p>
      </div>

      <Nav />
      <hr />
    </>
  );
}

export default Header;
