import MealSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeal";
import {Fragment} from "react";

export default function Index() {
    return (
        <Fragment>
            <MealSummary/>
            <AvailableMeal/>
        </Fragment>

    )
}