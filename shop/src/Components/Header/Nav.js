import s from "./Header.module.css"
function Nav() {


    return (
        <>
            <div className={s.nav}>
                <button>men's clothing"</button>
                <button>women's clothing</button>
                <button>jewelery</button>
                <button>electronics</button>
            </div>
        </>
    );
}

export default Nav;
