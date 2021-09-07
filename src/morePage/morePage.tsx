import { Col, Row } from "react-bootstrap"
import { connect, RootStateOrAny } from "react-redux"
import { foodItemType } from "../foodItemType"
import MorePageItem from "./morePageItem"







type PropsType = {
    foodArray: Array<[]>;
    indexSelectedFoodsection: number;

}






const MorePage = (props: PropsType) => {


    return (
        <>
            <Row>
                <Col className="morePage-contaiten">
                    <div className="morePage-items">

                        {
                            props.foodArray

                                ? <>
                                    {props.foodArray[props.indexSelectedFoodsection].map((food: foodItemType) => {

                                        return (
                                            <>

                                              
                                                <MorePageItem food={food} />
                                            </>
                                        )

                                    })}
                                </>

                                : <div>undefinded</div>
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}


let marStateToProps = (state: RootStateOrAny) => ({
    indexSelectedFoodsection: state.morePage.indexSelectedFoodsection,
    foodArray: state.foodState.foodArray,
})

export default connect(marStateToProps, null)(MorePage)