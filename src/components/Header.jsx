import PropTypes from "prop-types"

const Header = ({bg,tColor,text}) => {

    const headerStyles={
        backgroundColor:bg,
        color:tColor
    }



  return (
    <header style={headerStyles}>
        <h3 >{text}</h3>
    </header>
  )
}

Header.defaultProps = {
    bg:'rgb(0,0,0)',
    tColor:'rgb(0, 247, 255)'
}

Header.propTypes={
    bg : PropTypes.string,
    tColor:PropTypes.string,
    text:PropTypes.string
}

export default Header