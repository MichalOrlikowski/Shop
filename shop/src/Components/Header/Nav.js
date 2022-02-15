import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
function Nav() {


    return (
        <>
            <div className={s.nav}>
              <NavLink to="/men"> <button>men's clothing"</button></NavLink>
               <NavLink to="/women"> <button>women's clothing</button></NavLink>
               <NavLink to="/jewelery"> <button>jewelery</button></NavLink>
               <NavLink to="/electronics"> <button>electronics</button></NavLink>
            </div>
        </>
    );
}

export default Nav;
