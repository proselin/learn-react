import classes from "./Input.module.css"
import {forwardRef} from "react";

const Input = forwardRef((prop, ref) => {

        return (
            <div className={classes.input}>
                <label htmlFor={prop.input.id}>{prop.label} </label>
                <input ref={ref} {...prop.input}/>
            </div>
        )
    }
)
export default Input