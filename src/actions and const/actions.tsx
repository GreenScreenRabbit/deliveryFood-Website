import { objectForPostOnServerWithType } from '../checkPoint/checkout';
import { foodItemType } from '../foodItemType';
import { ADD_FOODSECTION_ITEM_CORD, ADD_TO_BASKET, ADD_TO_CHECKOUT, DELETE_FROM_BASKET, FOODARRAY_FROM_SERVER, INDEX_SELECTED_FOODSECTION, SET_ORDER_OBJECT_FOR_POST, SET_SCROLL_BUTTON_COUNT } from './const';

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

type GetActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

export const actions = {
    addToCheckout: (foodItem: foodItemType) => ({ type: ADD_TO_BASKET, foodItem } as const),
    addToFoodArray: (foodArray: foodItemType[]) => ({ type: FOODARRAY_FROM_SERVER, foodArray } as const),
    addFoodSectionItemCord: (cord: number) => ({ type: ADD_FOODSECTION_ITEM_CORD, cord } as const),
    setScrollButtonCount: (buttonCount: number) => ({ type: SET_SCROLL_BUTTON_COUNT, buttonCount } as const),
    deleteFromBasket: (foodIndex: number) => ({ type: DELETE_FROM_BASKET, foodIndex } as const),
    indexSelectedFoodsection: (payload: number) => ({ type: INDEX_SELECTED_FOODSECTION, payload } as const),
    setOrderObjectForPost: (order: objectForPostOnServerWithType) => ({ type: SET_ORDER_OBJECT_FOR_POST, order } as const),

};

export type ActionsTypes = GetActionsTypes<typeof actions>;