import React from 'react';
// import { connect } from "react-redux"
// import { remove } from "../actions/carActions"


const AddedFeature = props => {
  // console.log("added feature props", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => {props.remove(props.feature)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// function mapStateToProps(state){
//   console.log("addedfeatures - map to props", state)
//   return {
//     car: state.car,
//     additionalPrice: state.additionalPrice,
//     additionalFeatures: state.additionalFeatures
//   }
// }
export default AddedFeature
// export default connect(mapStateToProps, { remove })(AddedFeature);
