import classes from "./MealItem.module.css"
import MealItemForm from "../MealItemForm";

const MealItem = ({meal: {id,name, price, description}}) => {
    let priceStr = `$${price}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceStr}</div>
            </div>
            <div><MealItemForm key={id} id={id}/> </div>
        </li>
    );
};

export default MealItem;
