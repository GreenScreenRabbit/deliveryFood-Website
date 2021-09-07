import React from "react";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap"
import { connect, RootStateOrAny } from "react-redux"
import { useHistory, Route, Link } from 'react-router-dom';
import { actions } from "../actions and const/actions";
import { foodItemType } from "../foodItemType";
import FoodSectionItem from "./foodSectionItem"




type PropsType = {
    addToCheckout: (foodItem: any) => void,
    foodArray: foodItemType[],
    setScrollButtonCount: (arg: number) => void,
    indexSelectedFoodsection: (index: number) => void
}




const FoodSection = (props: PropsType) => {



    const foodSectionContentRef = useRef<HTMLDivElement>(null);




    const itemsContainerRef: any = []


    const [foodSectionTranslatePosition, setFoodSectionTranslatePosition] = useState(0);









    const changeTransformItemsContainer = (index: number, isNextSlider: boolean) => {




      

        const itemsContaineroffsetWidth = itemsContainerRef[index].offsetWidth
        const selectedSection = itemsContainerRef[index].style;
        const foodSectionShowWidth = foodSectionContentRef.current?.offsetWidth;

        const twoThirdsForChangeTranslate = ((foodSectionShowWidth! / 3) * 2)



        console.log(foodSectionTranslatePosition + twoThirdsForChangeTranslate);
        




        if (isNextSlider == true) {


            if (foodSectionTranslatePosition + twoThirdsForChangeTranslate !< itemsContaineroffsetWidth) {

                setFoodSectionTranslatePosition(foodSectionTranslatePosition + twoThirdsForChangeTranslate)
                selectedSection.transform = `translate(-${foodSectionTranslatePosition + twoThirdsForChangeTranslate}px)`;
            }

        } else {

      
            if (foodSectionTranslatePosition - twoThirdsForChangeTranslate  > 0) {

                setFoodSectionTranslatePosition(foodSectionTranslatePosition - twoThirdsForChangeTranslate)
                selectedSection.transform = `translate(-${foodSectionTranslatePosition - twoThirdsForChangeTranslate}px)`;
                console.log(foodSectionTranslatePosition - twoThirdsForChangeTranslate);
                

            }else{
                setFoodSectionTranslatePosition(0)
                selectedSection.transform = `translate(-${0}px)`;
                
            }
        
        
        }




    }









    return (
        <>
            {props.foodArray ? <>{
                props.foodArray.map((foodSection: any, index: number) => {



                    return (
                        <Row>
                            <Col>
                                <div className="FoodSection-container">





                                    <Link to="/morePage"
                                        className="FoodSection-moreButton-a" >


                                        <div className="FoodSection-moreButton"
                                            onClick={() => props.indexSelectedFoodsection(index)}
                                        >More</div>
                                    </Link>












                                    <div className="FoodSection-body">

                                        <Row className="Row-items-container">



                                            <Col className="FoodSection-buttonLeft" lg={{ span: 1, offset: 0 }}
                                                onClick={() => changeTransformItemsContainer(index, false)}
                                            >
                                               
                                            </Col>
                                            <Col className="FoodSection-content" lg={{ span: 10, offset: 0 }} ref={foodSectionContentRef}     >



                                                <div className="FoodSection-itemsContainer"
                                                    key={index}


                                                    ref={ref => (itemsContainerRef[index] = ref)}

                                                    style={{
                                                        transition: 'transform 2s',

                                                    }}
                                                >   

                                                    {foodSection.map((food: foodItemType) => {


                                                        return (
                                                            <FoodSectionItem imgSrc={food.img} name={food.name}
                                                                food={food} price={food.price} description={food.description}

                                                            />)

                                                    }

                                                    )}
                                                </div>

                                            </Col>
                                            <Col className="FoodSection-buttonRight" lg={{ span: 1, offset: 0 }}
                                                onClick={() => changeTransformItemsContainer(index, true)}>
                                                
                                            </Col>
                                        </Row>





                                       </div>
                                </div>
                            </Col>
                        </Row>)

                })
            }</>
                : <div>net</div>}
        </>
    )
}



let mapStateToProps = (state: RootStateOrAny) => ({
    basket: state.foodState.basket,
    foodArray: state.foodState.foodArray,
    FoodSectionItemWidth: state.foodSectionStyleState.widthOfFoodSectionItem,


})


export default connect(mapStateToProps, { addToCheckout: actions.addToCheckout, setScrollButtonCount: actions.setScrollButtonCount, indexSelectedFoodsection: actions.indexSelectedFoodsection })(FoodSection)
