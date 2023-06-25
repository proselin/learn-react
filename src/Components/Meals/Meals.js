import MealSummary from "./MealSummary/MealSummary";
import AvailableMeal from "./AvailableMeal/AvailableMeals";
import {Fragment} from "react";

export default function Meals() {
    return (
        <Fragment>
            <MealSummary/>
            <AvailableMeal/>
        </Fragment>
    )
}