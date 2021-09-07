import { connect } from "react-redux"
import { actions } from "../actions and const/actions"
import { foodItemType } from "../foodItemType"

type PropsType = {
    food: foodItemType;
    addToCheckout: (arg: foodItemType) => void;
}





const MorePageItem = (props: PropsType) => {
    return (
        <>
            <div className="morePage-item-container">
                <div className="morePage-item-imgContainer">
                    <img className="morePage-item-img" src={props.food.img} />
                </div>
                <div className="morePage-item-name">{props.food.name}</div>
                <div className="morePage-item-description">{props.food.description}</div>
                <div className="morePage-item-price">price: {props.food.price} $</div>

                <div className="morePage-item-addButton" onClick={() => props.addToCheckout(props.food)} >add</div>

            </div>
        </>
    )
}




export default connect(null, { addToCheckout: actions.addToCheckout })(MorePageItem)