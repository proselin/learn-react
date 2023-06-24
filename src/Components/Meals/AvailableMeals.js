import DUMMY_JSON from "../../assets/resources/meals.json"
import classes from  "./AvailableMeals.module.css"

const DUMB = DUMMY_JSON.DUMMY_MEALS

const AvailableMeals  = () => {
    const meals = Array(DUMB).map(
        ({id,name}) => <li key={id}>{name}</li>
    )
    return (
        <section className={classes['meals']}>
            <ul>{meals}</ul>
        </section>
    )
}

export default AvailableMeals