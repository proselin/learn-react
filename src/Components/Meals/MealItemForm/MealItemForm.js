import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import {useRef, useState} from "react";

/**
 *
 * @param {{onAddToCard: (input: number) => void}} prop
 * @returns {JSX.Element}
 * @constructor
 */
const MealItemForm = (prop) => {
    const [valid, setValid] = useState(true)
    const inputRef = useRef()

    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = inputRef.current.value
        if (+enteredAmount < 1 || +enteredAmount > 5) {
            setValid(false)
            return
        }
        setValid(true)

        prop.onAddToCard(+enteredAmount)
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                label={"Amount"}
                ref={inputRef}
                input={{
                    id: prop.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button type={"submit"}>+ Add</button>
            {!valid && <p>Please enter a valid amount (1~5)</p>}
        </form>
    )
}

export default MealItemForm