import classes from "./Input.module.css"

const Input = prop => {

    return (
        <div className={classes.input}>
            <label htmlFor={prop.input.id}>{prop.label} </label>
            <input {...prop.input}/>
        </div>
    )
}
export default Input