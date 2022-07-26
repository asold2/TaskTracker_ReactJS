import React from 'react';
import PropTypes from "prop-types";

const Button =({color, text}) => {

    // const onClick= (e) =>{
    //     console.log(e);
    // }

    return (
        <button  style={{backgroundColor: color}} className='btn'>{text}</button>

    );
}

Button.propsType = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button;