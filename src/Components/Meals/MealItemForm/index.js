import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
const MealItemForm = (prop) => {
    return (
        <form className={classes.form}>
            {prop.id}
            <Input
             label={"Amount"}
             input={{
                 id: prop.id,
                 type: 'number',
                 min: '1',
                 max: '5',
                 step: '1',
                 defaultValue: '1'
             }}
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm