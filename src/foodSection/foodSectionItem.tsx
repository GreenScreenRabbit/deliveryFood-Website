import { useEffect, useRef } from "react"
import { connect, RootStateOrAny } from "react-redux"
import { actions } from "../actions and const/actions"
import { foodItemType } from "../foodItemType"


type PropsType = {
    imgSrc : string;
    name: string;
    food:foodItemType;
    price: number;
    description: string;
    addToCheckout:(foodItem: foodItemType) => void;
    addFoodSectionItemCord:(cord:number) => void;

}





const FoodSectionItem = (props: PropsType) => {

    const refFoodSectionItem = useRef<HTMLDivElement>(null)

    useEffect(() => {
        props.addFoodSectionItemCord(refFoodSectionItem.current?.offsetWidth!)
    }, []
    )


    return (
        <>

            <div className="FoodSection-item" ref={refFoodSectionItem}>
                <div className="FoodSection-item-imgIcon">
                    <img className="FoodSection-item-src" src={props.imgSrc} />
                </div>

                <div className="FoodSection-item-name"> {props.name} </div>
                <div className="FoodSection-item-price"> price: {props.price} $ </div>
                <button className="FoodSection-item-addToCheckout" onClick={() => props.addToCheckout(props.food)} >buy</button>

                <div className="FoodSection-item-description">{props.description}</div>
            </div>
        </>
    )
}





let mapStateToProps = (state: RootStateOrAny) => ({
    basket: state.foodState.basket
})


export default connect(mapStateToProps, { addToCheckout: actions.addToCheckout, addFoodSectionItemCord: actions.addFoodSectionItemCord })(FoodSectionItem)


