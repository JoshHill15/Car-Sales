import React from 'react';
// import { connect } from "react-redux"
// import { buy } from "../actions/carActions"



const AdditionalFeature = props => {
  // console.log("additional features props", props)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.buy(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


// function mapStateToProps(state){
//   // console.log("additional features - map state",state)
//   return {
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additonalPrice: state.additonalPrice
//   }
// }


// export default connect(mapStateToProps, { buy })(AdditionalFeature)
export default AdditionalFeature
