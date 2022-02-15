import s from "./Header.module.css"
function Header() {


  return (
    <>
      <div className={s.Container}>
        <h1 className={s.title}>Shop</h1>
        <button className={s.button}>Koszyk</button>

      </div>
      <hr />
    </>
  );
}

export default Header;
