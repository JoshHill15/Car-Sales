import React from 'react';
import { connect } from "react-redux"
import { buyItem } from "../actions/carActions"



const AdditionalFeature = props => {
  console.log("additional features props", props)

  // function addItem (item){
    
  //   let items = {
  //     id: item.id,
  //     name: item.name,
  //     price: item.price
  //   }

  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => buyItem(props.feature.name)}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


function mapStateToProps(state){
  // console.log("additional features - map state",state)
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}


export default connect(mapStateToProps, { buyItem })(AdditionalFeature)
// export default AdditionalFeature
