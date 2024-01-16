import React from 'react'

function Popup({open, children, onClose}) {
  return (
    <div className='popup'>
        {children}
    </div>
  )
}

export default Popup