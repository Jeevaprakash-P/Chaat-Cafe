import { createSlice } from "@reduxjs/toolkit"
import { CiLocationOff } from "react-icons/ci"
import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"

const StartersData = createSlice({
    name: "Srartersdata",
    initialState: [],
    reducers: {
        Uploaddata(state, action) {
            return (action.payload)
        }
    }
})
let starters = StartersData.reducer
export { starters }
export let { Uploaddata } = StartersData.actions


const NewProduct = createSlice({
    name: "newproduct",
    initialState: {
        name: "",
        price: 0,
        Quntity: 0,
        rating: 0,
        description: "",
        img: "../Images/Straters_Image/French Frice.webp"
    },
    reducers: {
        UplodeData(state, action) {
            let { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        }
    }
})
let newproduct = NewProduct.reducer
export { newproduct }
export let { UplodeData } = NewProduct.actions


let Pizzaproduct = createSlice({
    name: "PizzaProduct",
    initialState: [],
    reducers: {
        PizzaDataUplode(state, action) {
            return action.payload
        }
    }
})

let PizzaData = Pizzaproduct.reducer
export { PizzaData }
export let { PizzaDataUplode } = Pizzaproduct.actions

let Cardlist = createSlice({
    name: "card",
    initialState: JSON.parse(localStorage.getItem("card")),
    reducers: {
        Additems(state, action) {
            state.push(action.payload)
            localStorage.setItem("card", JSON.stringify(state))
        },
        Deleteitems(state, action) {
            let Deletearr = state.filter((element) => {
                return element.id !== action.payload
            })
            localStorage.setItem("card", JSON.stringify(Deletearr))
            return (Deletearr)
        },
        QtyChange(state, action) {
            let { value, id } = action.payload
            let change = state.map((element) => {
                if (id == element.id) {
                    return { ...element, Quntity: value, amount: element.price * value }
                }
                else {
                    return (element)
                }
            })
            localStorage.setItem("card", JSON.stringify(change))
            return (change)
        },
        Clear(state, action) {
            localStorage.setItem("card", JSON.stringify([]))
            return []
        },
        QuntityChack(state, action) {
            let Check = state.filter((element) => {
                return element.Quntity > 0
            })
            localStorage.setItem("card", JSON.stringify(Check))
            return Check
        }
    }
})
let Card = Cardlist.reducer
export { Card }
export let { Additems, Deleteitems, QtyChange, Clear, Eemptyqutity, QuntityChack } = Cardlist.actions

let Amount = createSlice({
    name: "total Amount",
    initialState: JSON.parse(localStorage.getItem("amount")),
    reducers: {
        Addamount(state, action) {
            return state += action.payload
        },
        LessAmount(state, action) {
            return state -= action.payload
        },
        Pricevaluechnage(state, action) {
            let { value, Card, id } = (action.payload)
            let amount = Card.map((element) => {
                return element.id === id ? element.price * value : element.price * element.Quntity
            })
            let Total = amount.reduce((sum1, sum2) => sum1 + sum2)
            return (Total)
        }

    }

})
let amount = Amount.reducer
export { amount }
export let { Addamount, LessAmount, Pricevaluechnage } = Amount.actions



let Burger = createSlice({
    name :'burger',
    initialState : [],
    reducers:{
        BurgerUplode(state, action){
           return(action.payload)
        }
    }
})
let burger = Burger.reducer
export {burger}
export let {BurgerUplode} =Burger.actions


let Sandwhich = createSlice({
    name :'Sandwhich',
    initialState : [],
    reducers:{
        SandwhichUplode(state, action){
           return(action.payload)
        }
    }
})
let sandwhich = Sandwhich.reducer
export {sandwhich}
export let {SandwhichUplode} =Sandwhich.actions

let Momos = createSlice({
    name :'Momos',
    initialState : [],
    reducers:{
        MomosUplode(state, action){
           return(action.payload)
        }
    }
})
let momos = Momos.reducer
export {momos}
export let {MomosUplode} =Momos.actions