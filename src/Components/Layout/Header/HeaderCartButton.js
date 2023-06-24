import CartIcon from "../../Cart/CartIcon";
import HeaderCartButtonCss from "./HeaderCartButton.module.css"
const HeaderCartButton = prop => {

    return (
        <button className={HeaderCartButtonCss.button}>
            <span className={HeaderCartButtonCss.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={HeaderCartButtonCss.badge}>
                3
            </span>
        </button>
    )
}


export default HeaderCartButton