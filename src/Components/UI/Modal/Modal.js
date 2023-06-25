import classes from "./Modal.module.css"
import {Fragment} from "react";
import {createPortal} from "react-dom";

const Backdrop = prop => {
    return <div className={classes.backdrop} onClick={prop.onClose}></div>
}

const ModalOverLay = prop => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{prop.children}</div>
        </div>
    )
}

export const Modal = props => {
    const overlayEl = document.getElementById('overlay')

    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}/>, overlayEl)}
            {createPortal(<ModalOverLay>{props.children}</ModalOverLay>, overlayEl)}
        </Fragment>

    )
}