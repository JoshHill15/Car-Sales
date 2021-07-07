import React from 'react';
import { connect } from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { remove, buy } from "./actions/carActions"
import {initialState} from "./reducers/carReducer"
const App = (props) => {
  // const state = initialState
  console.log("app props",props)

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  //   remove(item)
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   buy(item)
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice = {props.additionalPrice}/>
        <AddedFeatures car={props.car} remove = {props.remove}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buy = {props.buy}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


function mapStateToProps(state){
  console.log("app - map to props", state)
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}


 export default connect(mapStateToProps, { remove, buy })(App);
// export default App