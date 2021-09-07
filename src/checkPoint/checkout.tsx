import React, { Ref, RefObject, useEffect, useRef, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { connect, RootStateOrAny } from "react-redux"
import foodSection from "../foodSection/foodSection"
import OrderItem from "./orderItem"
import ModalOrderStatus from "./modalOrderStatus"
import { foodItemType } from "../foodItemType"
import { actions } from "../actions and const/actions"


type PropsType = {
    basket: foodItemType[],
    setOrderObjectForPost: (arg1: objectForPostOnServerWithType) => void
}


type TypeBasketArrayInObject = {
    basketArray: foodItemType[]
}


interface addOnForSendingToTheServer<T> {
    [key: string]: T;

}




type addOnForSendingToTheServerWithCoupon<T> = addOnForSendingToTheServer<T> & {
    coupon?: boolean;
}


export type objectForPostOnServerWithType = addOnForSendingToTheServerWithCoupon<string> & TypeBasketArrayInObject


let useClickOutside = (handler: any) => {
    let domNode = useRef<HTMLInputElement>(null);




    useEffect(() => {
        let maybeHandler = (e: MouseEvent) => {
            if (!domNode!.current!.contains(e.target as Node)) {
                handler()
            }

        };

        document.addEventListener("mousedown", maybeHandler);


        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    }
    )
    return domNode

}



const Checkout = (props: PropsType) => {





    let domNodeDateDay = useClickOutside(() => {
        setIsShowDropmenuDateDay(false)

    })

    let domNodeDateTime = useClickOutside(() => {

        setIsShowDropmenuTime(false)

    })



    let domNode = useClickOutside(() => {
        setShowPaymentDropmenu(false)
    })










    const dateDayRef = useRef<HTMLInputElement>(null)
    const timeRef = useRef<HTMLInputElement>(null)
    const commentRef = useRef<HTMLTextAreaElement>(null)
    const couponRef = useRef<HTMLInputElement>(null)
    const paymentTypeRef = useRef<HTMLInputElement>(null)

    const inputsRefsArray: HTMLInputElement[] = []











    const remainingInputsRefsArray: RefObject<HTMLInputElement>[] = []
    const regExpForRemainingInputs: RegExp[] = []




    remainingInputsRefsArray.push(
        dateDayRef,
        timeRef,
        paymentTypeRef
    )


    const firstNameRegExp = new RegExp("\\w{3}")
    const lastNameRegExp = new RegExp("\\w{4}")
    const telephonNumberRegExp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    const eMailRegExp = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    const haveOneSymbol = new RegExp(/^\S.*$/gm)



    const allRegExpForInputs: RegExp[] = [];

    regExpForRemainingInputs.push(haveOneSymbol, haveOneSymbol, haveOneSymbol)
    allRegExpForInputs.push(firstNameRegExp, lastNameRegExp, telephonNumberRegExp, eMailRegExp, haveOneSymbol, haveOneSymbol,


    )




    const [firstName, setFirstName] = useState("firstName")
    const [lastName, setLastName] = useState("lastName")
    const [telephone, setTelephone] = useState("telephone")
    const [eMail, setEMail] = useState("eMail")
    const [street, setStreet] = useState("street")
    const [house, setHouse] = useState("house")
    const [comment, setComment] = useState("")
    const [dateDay, setDateDay] = useState("")
    const [time, setTime] = useState<string>("")
    const [coupon, setCoupon] = useState("")
    const [paymentType, setPaymentType] = useState("Card")
    const [isShowPaymentDropmenu, setShowPaymentDropmenu] = useState(false)
    const [couponIsCorrect, setCouponIsCorrect] = useState<boolean>(false)
    const [checkoutIsCorrect, setCheckoutIsCorrect] = useState(true)


    const [inputsArrayName, setInputsArrayName] = useState<string[] | string>("")


    const [isShowDropmenuDateDay, setIsShowDropmenuDateDay] = useState<boolean>(false)
    const [isShowDropmenuTime, setIsShowDropmenuTime] = useState<boolean>(false)
    const [showStartValue, setShowStartValue] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)







    const hoursArray: string[] = []





    let forInputsArrayName: string[] = [
        firstName,
        lastName,
        telephone,
        eMail,
        street,
        house
    ]






    useEffect(() => {
        setInputsArrayName(
            forInputsArrayName
        )

    }, [])







    const inputsArray = [
        firstName,
        lastName,
        telephone,
        eMail,
        street,
        house,

    ];

    const setInputsArray = [
        setFirstName,
        setLastName,
        setTelephone,
        setEMail,
        setStreet,
        setHouse,




    ]


    const clientInformation: JSX.Element[] = []
    const clientLocation: JSX.Element[] = []
    const clienPayment: JSX.Element[] = []




    const showPaymentDropMenu = () => {

        setShowPaymentDropmenu(!isShowPaymentDropmenu)
    }



    const getDateTime = () => {
        let date = new Date();


        let hours = date.getHours();

        let y = 0;
        for (let i = 0; i < 24; i++) {



            if (hours + i < 24) {
                hoursArray.push(`${hours + i} : 00`)
            } else {
                hoursArray.push(`${y} : 00`)
                y++
            }
        }



    }
    getDateTime()









    const showInputValue = (item: any) => {
        if (showStartValue == true) {
            return item
        } else {
            return null
        }
    }



    const showModal = (isCheckoutСorrectly: boolean) => {
        return (
            isShowModal ? (isCheckoutСorrectly ? <ModalOrderStatus isCheckoutСorrectly={true} isShowModal={true} setIsShowModal={setIsShowModal} />
                : <ModalOrderStatus isCheckoutСorrectly={false} isShowModal={true} setIsShowModal={setIsShowModal} />) : null
        )
    }




    const calcTotalCount = () => {

        const totalCount = props.basket.reduce((sum: number, item: foodItemType) => item.price + sum, 0)

        let countForReturn: number;

        if (couponIsCorrect == true) {
            countForReturn = totalCount / 100 * 80
        } else {
            countForReturn = totalCount
        }



        return countForReturn.toFixed(1)
    }







    const checkAllInputs = (inputsRefsArray: HTMLInputElement[], remainingInputsRefsArray: RefObject<HTMLInputElement>[]) => {

        const allInputsIsCorrect: boolean[] = []



        allRegExpForInputs.forEach((item: RegExp, index: number) => {
            if (inputsRefsArray[index].value.match(item) == null) {
                inputsRefsArray[index].style.backgroundColor = "red"

                allInputsIsCorrect.push(false)
            }

            else {
                console.log(inputsRefsArray[index].value.match(item));

                inputsRefsArray[index].style.backgroundColor = "#FFFFFF"
                allInputsIsCorrect.push(true)

            }
        })



        remainingInputsRefsArray.forEach((item, index) => {
            if (item.current!.value.match(regExpForRemainingInputs[index]) == null) {
                item.current!.style.backgroundColor = "red"
                allInputsIsCorrect.push(false)
            } else {

                item.current!.style.backgroundColor = "#FFFFFF"
                allInputsIsCorrect.push(true)
            }
        })


        if (props.basket.length == 0) {
            allInputsIsCorrect.push(false)
        }



        if (allInputsIsCorrect.includes(false)) {
            setCheckoutIsCorrect(false)
            setIsShowModal(true)
        } else {
            setCheckoutIsCorrect(true)
            setIsShowModal(true)
        }







        let objectForPostOnServer: addOnForSendingToTheServerWithCoupon<string> = {}

        remainingInputsRefsArray.forEach((item) => {
            objectForPostOnServer[item.current!.name] = item.current!.value
        })


        inputsRefsArray.forEach((item) => {
            objectForPostOnServer[item.name] = item.value
        })



        if (couponIsCorrect == true) {
            objectForPostOnServer.coupon = true
        } else {
            objectForPostOnServer.coupon = false
        }


        objectForPostOnServer.comment = comment


        let basketArray: foodItemType[] = props.basket

   


        let basketArrayInObject: TypeBasketArrayInObject = {
            basketArray: basketArray
        }







        let objectForPostOnServerWithType: objectForPostOnServerWithType = Object.assign(objectForPostOnServer, basketArrayInObject)







        props.setOrderObjectForPost(objectForPostOnServerWithType)




    }


    const onChangeCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {

        setCoupon(e.target.value);
        const checkCoupon = () => {
            if (couponRef.current!.value == "coupon228") {


                setCouponIsCorrect(true);
                couponRef.current!.style.backgroundColor = "green"

            }
            else {


                setCouponIsCorrect(false);
                couponRef.current!.style.backgroundColor = "#FFFFFF"

            }
        }

        checkCoupon()

    }






    const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        console.log(e.target.id);
        console.log(index);


        setInputsArray[index](e.target.value)

    }





    return (
        <>

            {showModal(checkoutIsCorrect)}

            <Row style={{ backgroundColor: "#ebe5e5", paddingBottom: "40px" }}>

                <Col lg={{ span: 6, offset: 1 }} style={{ padding: "0px" }}>
                    <div className="orderInformation-body" >


                        {inputsArray.map((item: string, index: number) => {






                            if (index < 4) {
                                clientInformation.push(
                                    <>
                                        <div className="orderInformation-inputContainer">
                                            <input className="orderInformation-input" type="text"
                                                autoComplete="off"
                                                placeholder={inputsArrayName![index]}
                                                id={index.toString()}
                                                key={index}
                                                value={showInputValue(item)}
                                                name={inputsArrayName![index]}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputs(e, index)}
                                                ref={(ref: HTMLInputElement) => (inputsRefsArray[index] = ref)}
                                            />
                                        </div>
                                    </>
                                )

                            } else if (index < 7) {
                                clientLocation.push(
                                    <>
                                        <div className="orderInformation-inputContainer">
                                            <input className="orderInformation-input" type="text"
                                                autoComplete="off"
                                                placeholder={inputsArrayName![index]}
                                                id={index.toString()}
                                                key={index}
                                                value={showInputValue(item)}
                                                name={inputsArrayName![index]}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputs(e, index)}
                                                ref={(ref: HTMLInputElement) => (inputsRefsArray[index] = ref)}
                                            />
                                        </div>
                                    </>)

                            }







                        })}




                        <div className="orderInformation-headlines-contacts">Contacts</div>
                        {clientInformation}






                        <div className="orderInformation-headlines-contacts">Location</div>





                        {clientLocation}

                        <div className="orderInformation-inputContainer">
                            <div className="orderInformation-dropZone-container" ref={domNodeDateDay} >
                                <input className="orderInformation-inputsForDropMenu" value={dateDay} placeholder="selectDay"
                                    onFocus={() => setIsShowDropmenuDateDay(true)} ref={dateDayRef}
                                    name={"dateDay"} autoComplete="off"
                                />


                                {isShowDropmenuDateDay ?
                                    <div className="orderInformation-input-dropMenu">

                                        <div className="orderInformation-input-dropMenu-item" onClick={() => { setDateDay("Today"); setIsShowDropmenuDateDay(false) }}>Today</div>
                                        <div className="orderInformation-input-dropMenu-item" onClick={() => { setDateDay("Tomorrow"); setIsShowDropmenuDateDay(false) }}>Tomorrow</div>


                                    </div> : null
                                }




                            </div>
                        </div>

                        <div className="orderInformation-inputContainer"  >
                            <div className="orderInformation-dropZone-container" ref={domNodeDateTime} >

                                <input className="orderInformation-inputsForDropMenu" placeholder="selectTime" value={time}
                                    onFocus={() => setIsShowDropmenuTime(true)} ref={timeRef}
                                    name={"dateTime"} autoComplete="off"
                                />
                                {isShowDropmenuTime ?
                                    <div className="orderInformation-input-dropMenu">

                                        {
                                            hoursArray.map((item: string) => {
                                                return (


                                                    <div className="orderInformation-input-dropMenu-item"
                                                        onClick={() => { setTime(item); setIsShowDropmenuTime(false) }}>{item}</div>
                                                )
                                            }
                                            )
                                        }


                                    </div> : null
                                }
                            </div>

                        </div>

                        <div className="orderInformation-payment-commentContainer">

                            <textarea className="orderInformation-payment-comment" placeholder="Comment To Order" value={comment} onChange={(e) => setComment(e.target.value)}
                                ref={commentRef}> name={"comment"}
                            </textarea>
                        </div>





                        <div className="orderInformation-headlines-contacts">Payment</div>



                        {clienPayment}




                        <div className="orderInformation-inputContainer">




                            <input className="orderInformation-coupon" type="text" placeholder={"coupon"} value={coupon} onChange={onChangeCoupon}
                                name={"coupon"}
                                ref={couponRef} />


                        </div>





                        <div className="orderInformation-inputContainer" >



                            <div className="orderInformation-dropZone-container" ref={domNode}>






                                <input onClick={showPaymentDropMenu} className="orderInformation-inputsForDropMenu" value={paymentType} placeholder="paymentType"
                                    ref={paymentTypeRef} name={"paymentType"} autoComplete="off" />
                                {isShowPaymentDropmenu ?
                                    <div className="orderInformation-input-dropMenu" >
                                        <div className="orderInformation-input-dropMenu-item" onClick={() => { setPaymentType("Credit card"); setShowPaymentDropmenu(false) }}>Credit card</div>
                                        <div className="orderInformation-input-dropMenu-item" onClick={() => { setPaymentType("Cash"); setShowPaymentDropmenu(false) }}>Cash</div>
                                    </div> : null}

                            </div>


                        </div>









                        <div className="orderInformation-checkout-container">
                            <div className="orderInformation-checkout-totalCount">TotalCount: ${calcTotalCount()} $</div>
                        </div>


                        <div className="orderInformation-checkout-container">
                            <button onClick={() => checkAllInputs(inputsRefsArray, remainingInputsRefsArray)} className="orderInformation-checkout-button">checkout</button>
                        </div>




                    </div>


                </Col>
                <Col className="priceList-container" lg={{ span: 4, offset: 0 }}>
                    <div className="priceList-body">




                        <div className="priceList-itemsContainer">



                            <OrderItem />



                        </div>


                    </div>
                </Col>
            </Row>
        </>

    )

}


let mapStateToProps = (state: RootStateOrAny) => ({
    basket: state.foodState.basket
})




export default connect(mapStateToProps, { setOrderObjectForPost: actions.setOrderObjectForPost })(Checkout)


