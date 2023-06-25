import React from "react";

import mealsImage from '../../../assets/image/meals.jpg'
import HeaderCss from "./Header.module.css"
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (prop) => {
    return (
        <React.Fragment>
            <header className={HeaderCss.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={prop.showCart}/>
            </header>
            <div className={HeaderCss['main-image']}>
                <img src={mealsImage} alt="Table full of food"/>
            </div>
        </React.Fragment>
    )
}

export default Header