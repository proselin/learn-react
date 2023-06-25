import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import {useState} from "react";
import {Cart} from "./Components/Cart/Cart";
import {CartProvider} from "./store/CartProvider";

function App() {
    const [cartVisibleState, setCartVisibleState] = useState(false)

    const showCart = () => {
        setCartVisibleState(true)
    }

    const hideCart = () => {
        setCartVisibleState(false)
    }

    return (
        <CartProvider>
            {cartVisibleState && <Cart onClose={hideCart}/>}
            <Header showCart={showCart}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
