import React from 'react'

const Button = ({type,isDisabled,children}) => {
  return (
    <button type = {type} disabled={isDisabled}>
        {children}
    </button>
  )
}

export default Button