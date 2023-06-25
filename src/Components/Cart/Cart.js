import classes from "./Cart.module.css"
import {Modal} from "../UI/Modal/Modal";
import {useContext} from "react";
import {CartContext} from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

export const Cart = prop => {
    const {items, totalAmount, addItem, removeItem} = useContext(CartContext)
    /**
     * @param {string} id
     */
    const onRemoveCartItem = id => {
        removeItem(id)
    }
    /**
     * @param {object} item
     */
    const onAddCartItem = item => {
        addItem({...item, amount: 1})
    }


    return (
        <Modal onClose={prop.onClose}>
            <ul className={classes['cart-item']}>
                {
                    items.map((item) => (
                            <CartItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                amount={item.amount}
                                onRemove={onRemoveCartItem.bind(null, item.id)}
                                onAdd={onAddCartItem.bind(null, item)}
                            />
                        )
                    )
                }
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{`$${parseFloat(totalAmount.toFixed(2))}`}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={prop.onClose} className={classes['button-alt']}>Close</button>
                {!!items.length && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}