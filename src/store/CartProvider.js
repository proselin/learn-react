import {CartContext} from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_CART_ITEM"){
        let updatedItems = state.items.concat([])
        const updatedItem = state.items.find(item => item.id === action.item.id)
        if (updatedItem) {

            updatedItem.amount += action.item.amount
        } else {
            updatedItems = updatedItems.concat([action.item])
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "REMOVE_CART_ITEM"){
        let updatedItems = state.items.concat([])
        const updateIndex = state.items.findIndex(item => item.id === action.id)
        if (updateIndex >= 0) {
            const updatedItem = state.items[updateIndex]
            const updatedTotalAmount = state.totalAmount - updatedItem.price * 1
            if(updatedItem.amount <= 1){
                updatedItems.splice(updateIndex, 1)
            }else{
                updatedItem.amount -= 1
            }
            return {
                totalAmount: updatedTotalAmount,
                items: updatedItems,
            }
        }

    }

    return defaultCartState
}

export const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItem = (item) => {
        dispatchCartAction({type: 'ADD_CART_ITEM', item})
    }
    /**
     *
     * @param {string} id
     */
    const removeItem = (id) => {
        dispatchCartAction({type: 'REMOVE_CART_ITEM', id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem,
        removeItem
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}