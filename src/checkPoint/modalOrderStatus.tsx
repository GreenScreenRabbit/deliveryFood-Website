import { connect, RootStateOrAny } from "react-redux"
import "./modalOrderStatus.css"


type PropsType = {
    isCheckoutСorrectly: boolean,
    isShowModal: boolean,
    setIsShowModal: (arg0: boolean) => void,
    orderObjectForPost?: any
}


const ModalOrderStatus = (props: PropsType) => {



    const renderIfCheckoutIsCorrectly = () => {
        return (
            <>
                <img src="https://w7.pngwing.com/pngs/1013/469/png-transparent-computer-icons-check-mark-symbol-ok-miscellaneous-angle-logo.png"
                    className="modalOrderStatus-body-blockContent-logo" />

                <div className="modalOrderStatus-body-blockContent-heading-container">
                    <div className="modalOrderStatus-body-blockContent-heading-content">
                        YOUR ORDER HAS BEEN TAKEN
                    </div>
                    <div className="modalOrderStatus-body-blockContent-containerForObject">
                        <div className="modalOrderStatus-body-blockContent-headingForObject">
                            THIS OBJECT IS YOUR ORDER AND HE WILL POST ON SERVER
                        </div>

                        <div className="modalOrderStatus-body-blockContent-objectForServer">
                            <pre>

                                {JSON.stringify(props.orderObjectForPost, undefined, 2)}
                            </pre>
                        </div>
                    </div>


                </div>
                <button onClick={() => props.setIsShowModal(false)} className="modalOrderStatus-body-blockContent-okayButton"> OK </button>


            </>
        )
    }

    const renderIfCheckoutIsntCorrectly = () => {
        return (
            <>
                <img src="https://e7.pngegg.com/pngimages/28/52/png-clipart-button-computer-icons-cancel-button-logo-sign.png"
                    className="modalOrderStatus-body-blockContent-logo" />

                <div className="modalOrderStatus-body-blockContent-heading-container">
                    <div className="modalOrderStatus-body-blockContent-heading-content">
                        FIELDS ARE ENTERED INCORRECTLY
                    </div>
                </div>
                <div className="modalOrderStatus-body-blockContent-heading-containerForText">
                    <div className="modalOrderStatus-body-blockContent-heading-text">
                        FIELDS ARE ENTERED INCORRECTLY
                        <div>
                            enter information in the fields highlighted in red
                        </div>

                    </div>



                </div>
                <button onClick={() => props.setIsShowModal(false)} className="modalOrderStatus-body-blockContent-okayButton"> OK </button>
            </>
        )
    }

    return (
        <div className="modalOrderStatus-body">

            <div className="modalOrderStatus-body-blockContent">
                <img src="https://iconape.com/wp-content/png_logo_vector/cancel-circle.png" className="modalOrderStatus-body-blockContent-cancelButton "
                    onClick={() => props.setIsShowModal(false)} />
                {props.isCheckoutСorrectly ? renderIfCheckoutIsCorrectly() : renderIfCheckoutIsntCorrectly()}

            </div>


            <div onClick={() => props.setIsShowModal(false)}>CLICK</div>
        </div>
    )
}


let mapStateToProps = (state: RootStateOrAny) => ({
    orderObjectForPost: state.foodState.orderObjectForPost
})



export default connect(mapStateToProps, null)(ModalOrderStatus);