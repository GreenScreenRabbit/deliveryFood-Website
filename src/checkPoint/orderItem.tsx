import { useEffect, useRef, useState } from "react";
import { connect, RootStateOrAny } from "react-redux"
import { actions } from "../actions and const/actions";
import { foodItemType } from "../foodItemType";



type PropsType = {
    basket:foodItemType[];
    deleteFromBasket: (arg0 :number) => void

}


const OrderItem = (props: PropsType) => {

    const [isCanShowAll, setIsCanShowAll] = useState(false)


    let renderHiddenButton:boolean = false

    const itemsRefs: any[] = []




    let limitShowItems: number = 4;





    const changeDisplayForItems = () => {

        setIsCanShowAll(true)

        itemsRefs.forEach((item: any) => {

            item.style.display = "block"

        })
    }






    return (
        <>


            {


                props.basket.map((food: any, index: number) => {








                    if (index < limitShowItems) {


                        return (


                            <>

                                <div className="orderItem" key={index}
                                    ref={(ref: any) => (itemsRefs[index] = ref)}>
                                    <div className="orderItem-imgContainer">
                                        <img className="orderItem-img" src={food.img} />
                                    </div>

                                    <div className="orderItem-cancel-button" onClick={() => props.deleteFromBasket(index)} >cancel</div>
                                    <div className="orderItem-price">{food.price}</div>
                                    <div className="orderItem-description">{food.name}</div>

                                </div>
                            </>

                        )



               


                    } else {
                        if (isCanShowAll == true) {
                            return (


                                <>


                                    <div className="orderItem" key={index}
                                        ref={(ref: any) => (itemsRefs[index] = ref)}>
                                        <div className="orderItem-imgContainer">
                                            <img className="orderItem-img" src={food.img} />
                                        </div>

                                        <div className="orderItem-cancel-button" onClick={() => props.deleteFromBasket(index)} >cancel</div>
                                        <div className="orderItem-price">{food.price}</div>
                                        <div className="orderItem-description">{food.name}</div>

                                    </div>
                                </>

                            )

                        } else {
                            renderHiddenButton = true
                        }
                    }





 




                })




            }



            
            {renderHiddenButton ? <div className="orderItem-showAll" onClick={() => { changeDisplayForItems() }}>CLICK HERE FOR SEE ALL ORDERS</div> : null}




        </>
    )
}

let mapStateToProps = (state: RootStateOrAny) => ({
    basket: state.foodState.basket
})

export default connect(mapStateToProps, { deleteFromBasket: actions.deleteFromBasket })(OrderItem)