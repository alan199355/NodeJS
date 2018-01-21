import React from "react";
import { connect } from "react-redux";
let TokenVal = ({ token }) => {
  return (
    <div>
        <button onClick={()=>console.log(token)}>test2</button>     
        <i>{token.val}</i> 
    </div>
  );
};
const mapStateToProps = state => ({
  token: state.appData
});
TokenVal = connect(mapStateToProps)(TokenVal);
export default TokenVal;
