import { Container, Nav, Navbar, NavLink } from "react-bootstrap"
import { connect, RootStateOrAny } from "react-redux"
import { Link, Route, Router } from "react-router-dom"
import "./navbar.css"
import React from "react"
import { foodItemType } from "../foodItemType"

type PropsType = {
    basket?: foodItemType[]
}

const Header = (props: PropsType) => {



    return (
        <>
            <Navbar bg="dark" style={{ height: "70px" }}>
                <Container>

                    <Navbar.Brand >
                        <Link to="/foodSection" style={{ textDecoration: "none", color: "black" }}>
                            <div style={{ backgroundColor: "green", position: "absolute", height: "70px", top: "0", display: "flex", alignItems: "center" }} >

                                <div>
                                    DeliveryFood
                                </div>

                                <img style={{ height: "70px", float: "left" }}
                                    src="https://e1.pngegg.com/pngimages/929/425/png-clipart-minecon-1-minecraft-minecraft-raw-meat-thumbnail.png" />
                            </div>
                        </Link>
                    </Navbar.Brand>



                    <Link to="/checkout" className="navbar-checkout">
                        {props.basket?.length == 0 ? "CHECKOUT" : <div> ORDER: {props.basket?.reduce((sum, item) => +item.price + sum, 0)} $</div>}
                    </Link>

                    <Link to="/foodSection" className="navbar-main">MAIN</Link>





                </Container>
            </Navbar>
        </>
    )
}



let mapStateToProps = (state: RootStateOrAny) => ({
    basket: state.foodState.basket,
})

export default connect(mapStateToProps, null)(Header)










