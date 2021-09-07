import { useEffect, useRef, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import slider1 from "./slidersImg/slider1.jpg"
import slider2 from "./slidersImg/slider2.jpg"
import slider3 from "./slidersImg/slider3.jpg"
import slider4 from "./slidersImg/slider4.jpg"


const MainSlider = () => {

    const sliderImgContainerRef = useRef<HTMLDivElement>(null)
    const [sliderOffsetWidth, setSliderOffsetWidth] = useState<number>(0)





    const slidersImg = []
    slidersImg.push(slider1, slider2, slider3, slider4)






    const changeSliderLinePosition = (isNextSlider: boolean) => {





        let sliderContainerOffsetWidth = sliderImgContainerRef.current?.offsetWidth




        const totalWidth = sliderContainerOffsetWidth! * slidersImg.length





        if (isNextSlider == true) {
            if (totalWidth == sliderOffsetWidth + sliderContainerOffsetWidth!) {
                setSliderOffsetWidth(0)
            } else {
                setSliderOffsetWidth(sliderOffsetWidth + sliderImgContainerRef.current?.offsetWidth!);
            }
        } else {
            if (sliderOffsetWidth == 0) {
                setSliderOffsetWidth(totalWidth - sliderContainerOffsetWidth!)
            } else {
                setSliderOffsetWidth(sliderOffsetWidth - sliderImgContainerRef.current?.offsetWidth!);
            }
        }
    }



    return (
        <>
            <Row>
                <Col>
                    <div className="slider-container">
                        <div className="slider-body">
                            <div className="slider-buttonLeft" onClick={() => changeSliderLinePosition(false)}></div>
                            <div className="slider-buttonRight" onClick={() => changeSliderLinePosition(true)}></div>


                            <div className="slider-imgContainer" ref={sliderImgContainerRef}
                                style={{
                                    transform: `translate(-${sliderOffsetWidth}px)`,
                                    transition: 'transform 2s',


                                }}>

                                <div className="slider-imgInLine" style={{

                                }}>





                                    <img className="slider-img" src={slider1} />
                                    <img className="slider-img" src={slider2} />
                                    <img className="slider-img" src={slider3} />
                                    <img className="slider-img" src={slider4} />




                                </div>
                            </div>







                        </div>
                    </div>
                </Col>
            </Row>


        </>
    )
}



export default connect(null, null)(MainSlider)