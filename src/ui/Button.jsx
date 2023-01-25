import React from 'react'

function Button({children,classes,type,disable,click}) {
  return (
    <button type={type} disabled={disable} className={`btn ${classes}`} onClick={click}>{children}</button>
  )
}

export default Button