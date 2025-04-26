import { configureStore } from "@reduxjs/toolkit"
import { amount, burger, Card, momos, newproduct, PizzaData, sandwhich, starters } from "./Slices"
const Store = configureStore({
  reducer: {
    StartersItems: starters,
    NewProduct: newproduct,
    PizzaItems: PizzaData,
    Burger: burger,
    Sandwhich: sandwhich,
    Momos: momos,
    Card: Card,
    Amount: amount
  }
})
export default Store