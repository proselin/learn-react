import DUMMY_JSON from "../../assets/resources/meals.json"
import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";

const DUMB = DUMMY_JSON.DUMMY_MEALS

const AvailableMeals = () => {
    const meals = Array(DUMB).map(({id, name}) => <li key={id}>{name}</li>)
    return (
        <section className={classes['meals']}>
            <Card>
                <ul>{meals}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals