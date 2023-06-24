import Header from "./Components/Layout/Header/Header";
import Index from "./Components/Meals";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Index/>
            </main>
        </Fragment>
    );
}

export default App;
