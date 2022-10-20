import './button.styles.scss';
// import { children } from "react";

// default button
//inverted button
//google sign in button
const BUTTON_TYPE_CLASSES={
    goofle:'google-sign-in',
    inverted: 'inverted'
}



const Button=({children, buttonType, ...otherProps})=>{
    return(
        <button 
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
        >
        {children}
        </button>

    );
}
export default Button;