import React from "react";
import { connect } from "react-redux";
import { saveToken } from "../../store/home/action";
let AddToken = ({ token, dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(saveToken("yeqianmg"))}>
        save token
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  token: state.appData
});
AddToken = connect(
    mapStateToProps
)(AddToken);
export default AddToken;
