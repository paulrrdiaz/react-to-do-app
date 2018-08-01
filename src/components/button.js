import React from 'react'
import classnames from 'classnames'

const Button = ({submit, primary, error, handleClick, children}) => {
  const className = classnames({
    btn: true,
    'btn-primary': primary,
    'btn-error': error,
  })

  return <button
    className={className}
    type={submit ? 'submit' : 'button'}
    onClick={() => handleClick && handleClick()}>{children}</button>
}

export default Button