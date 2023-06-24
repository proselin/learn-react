import classes from "./Card.module.css";

const Card = (prop) => {
    return (
        <div className={`${classes['card']} ${prop.class}`}>
            {prop.children}
        </div>
    )
}
export default Card