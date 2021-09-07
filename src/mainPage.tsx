import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FoodSection from './foodSection/foodSection'
import Checkout from './checkPoint/checkout'
import MorePage from './morePage/morePage'
import { actions } from "./actions and const/actions"
import axios from 'axios';
import Header from './navbar/navbar'
import MainSlider from './mainSlider'
import { Footer } from "./footer/footer"
import { foodItemType } from "./foodItemType"



type PropsType = {
    addToFoodArray: (foodArray: foodItemType[]) => void
}


class MainPage extends React.Component<PropsType> {


    componentDidMount() {


        axios.all([
            axios.get('https://my-json-server.typicode.com/GreenScreenRabbit/deliveryFood-server/soup'),
            axios.get('https://my-json-server.typicode.com/GreenScreenRabbit/deliveryFood-server/dessert'),
            axios.get('https://my-json-server.typicode.com/GreenScreenRabbit/deliveryFood-server/vegetables')

        ])

            .then(axios.spread((obj1, obj2, obj3) => {

                this.props.addToFoodArray(obj1.data);
                this.props.addToFoodArray(obj2.data);
                this.props.addToFoodArray(obj3.data);
            }));



    }







    render() {
        return (
            <Router>



                <Header />
                <MainSlider />


                <Switch>



                    <Route path='/foodSection' component={FoodSection} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/morePage' component={MorePage} />

                </Switch>


                <Footer />


            </Router>
        )
    }
}


export default connect(null, { addToFoodArray: actions.addToFoodArray })(MainPage)


