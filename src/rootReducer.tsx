import { combineReducers } from "redux"
import { actions, ActionsTypes } from "./actions and const/actions"
import { ADD_FOODSECTION_ITEM_CORD, ADD_TO_BASKET, ADD_TO_CHECKOUT, DELETE_FROM_BASKET, FOODARRAY_FROM_SERVER, INDEX_SELECTED_FOODSECTION, SET_ORDER_OBJECT_FOR_POST, SET_SCROLL_BUTTON_COUNT } from "./actions and const/const"




const initialFoodState = {
    foodArray: [],
    basket: [],
    orderObjectForPost: null,
}


const foodStateReducer = (state = initialFoodState, action: ActionsTypes) => {
    switch (action.type) {
        case FOODARRAY_FROM_SERVER: {
            return { ...state, foodArray: [...state.foodArray, action.foodArray] }
        }
        case ADD_TO_BASKET: {
            return { ...state, basket: [...state.basket, action.foodItem] }
        }
        case DELETE_FROM_BASKET: {
            return {
                ...state, basket: [...state.basket.slice(0, action.foodIndex),
                ...state.basket.slice(action.foodIndex + 1)]
            }
        }

        case SET_ORDER_OBJECT_FOR_POST: {
            return { 
                ...state, orderObjectForPost: action.order
            }
        }


        default:
            return state

    }
}


const initialFoodSectionState = {
    widthOfFoodSectionItem: 220,
    scrollButtonCount: []
}



const foodSectionStateStyleReducer = (state = initialFoodSectionState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_FOODSECTION_ITEM_CORD: {
            return { ...state, widthOfFoodSectionItem: action.cord }
        }


        case SET_SCROLL_BUTTON_COUNT: {
            return { ...state, scrollButtonCount: [...state.scrollButtonCount, action.buttonCount] }
        }

        default:
            return state
    }
}

let initialMorePageReducer = {
    indexSelectedFoodsection: 0
}

const morePageReducer = (state = initialMorePageReducer, action: ActionsTypes) => {
    switch (action.type) {
        case INDEX_SELECTED_FOODSECTION: {
            return { ...state, indexSelectedFoodsection: action.payload }
        }
        default:
            return state
    }
}






export const rootReducer = combineReducers({
    morePage: morePageReducer,
    foodState: foodStateReducer,
    foodSectionStyleState: foodSectionStateStyleReducer,
})