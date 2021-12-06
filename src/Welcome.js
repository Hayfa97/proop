import React from 'react'
import PropTypes from "prop-types";

const Welcome = (props) => {
    return (
        <div>
           <h1> {props.children}</h1> 
<button style={{display:'flex' , justifyContent:'center'}} onClick={()=>props.handleName(props.fullName)}>name</button>
        </div>
    )
}
Welcome.defaultProps = {
    fullName:'Flen',
    bio:'---',
    profession:'estudiant'
   };
   Welcome.propTypes={
       fullName:PropTypes.string,
       bio:PropTypes.string,
       profession:PropTypes.string

   };

export default Welcome

