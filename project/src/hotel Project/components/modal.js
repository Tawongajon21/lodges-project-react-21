import React from 'react'

const Modal = ({content,outcome}) => {
    return (
        <div>
          <p className={outcome} id='p-content'>
          {content}
              </p>  
        </div>
    )
}

export default Modal
