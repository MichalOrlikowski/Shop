import s from "./Header.module.css"
import Nav from "./Nav";
import { NavLink } from "react-router-dom";


function Header() {


  return (
    <>
      <div className={s.Container}>
        <NavLink to="/" className={s.title}> <h1>Shop</h1></NavLink>
        <NavLink to="/shop"><button className={s.button}>Koszyk</button></NavLink>

      </div>

      <Nav />
      <hr />
    </>
  );
}

export default Header;
