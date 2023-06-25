import classes from "./MealItem.module.css"
import MealItemForm from "../MealItemForm/MealItemForm";
import {useContext} from "react";
import {CartContext} from "../../../store/cart-context";



const MealItem = ({meal: {id,name, price, description}}) => {
    const priceStr = `$${price}`;

    const cartContext = useContext(CartContext)


    const addToCartHandler = amount => {

        cartContext.addItem(
            {
                id,
                name,
                price,
                description,
                amount,
            }
        )
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceStr}</div>
            </div>
            <div><MealItemForm onAddToCard={addToCartHandler} key={id} id={id}/> </div>
        </li>
    );
};

export default MealItem;
