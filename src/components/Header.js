import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from "react-router-dom";


const Header = ({title, onAddBtn, showAdd}) =>{

    const location = useLocation()


    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {
               location.pathname==='/' &&(
            <Button color='green' text={showAdd ? 'Close' : 'Add'} onClick = {onAddBtn}/>
                )}
            </header>
    )
}

Header.defaultProps ={
    title: 'Default Task Tracker'
}

Header.propTypes = {
    title:  PropTypes.string.isRequired
}

const headingStyle = {
    color:'deeppink',
    backgroundColor: 'blueviolet'
}

export default Header

