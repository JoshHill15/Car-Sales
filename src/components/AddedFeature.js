import React from 'react';
import { connect } from "react-redux"
import { removeFeature } from "../actions/carActions"


const AddedFeature = props => {
  console.log("added feature props", props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => removeFeature()} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// function mapStateToProps(state){
//   console.log("added features map state", state)
//   return {
//     car: state.car
//   }
// }
export default AddedFeature
// export default connect(mapStateToProps, { removeFeature })(AddedFeature);
