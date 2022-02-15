import s from "./Header.module.css"
import Nav from "./Nav";

function Header() {


  return (
    <>
      <div className={s.Container}>
        <h1 className={s.title}>Shop</h1>
        <button className={s.button}>Koszyk</button>
      </div>
      
      <Nav />
      <hr />
    </>
  );
}

export default Header;
