import CartIcon from "../../Cart/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css"
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../store/cart-context";

const HeaderCartButton = prop => {
    const {items} = useContext(CartContext)
    const [buttonIsHighlight, setButtonIsHighlight] = useState(false)

    useEffect(
        () => {
            if(items.length === 0){
                return
            }
            setButtonIsHighlight(true)
            const timer  = setTimeout(() => {
                setButtonIsHighlight(false)
                }, 300)
            return () => {
                clearTimeout(timer)
            }
        }, [items]
    )

    const numberOfCartItem = items.length

    return (
        <button className={`${classes.button} ${buttonIsHighlight ? classes.bump : ''} `} onClick={prop.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>
                {numberOfCartItem}
            </span>
        </button>
    )
}


export default HeaderCartButton