import React from 'react'

const InputHelper = {
  renderTextField: (id, label) => {
    return (
      <div className='container'>
        <label htmlFor={id}>{label}</label>
        <input 
          type="text" 
          name={id} 
          id={id} 
          ref={id} 
          maxLength="50" />
      </div>
    )
  },

  renderEmailField: (id, label) => {
    return (
      <div className='container'>
        <label htmlFor={id}>{label}</label>
        <input 
          type="email" 
          name={id} 
          id={id} 
          ref={id} 
          maxLength="50" />
      </div>
    )
  },

  renderPasswordField: (id, label) => {
    return (
      <div className='container'>
        <label htmlFor={id}>{label}</label>
        <input 
          type="email" 
          name={id} 
          id={id} 
          ref={id} 
          maxLength="50" 
          pattern="(?=.*\d)(?=.*[a-z]).{6,}" />
      </div>
    )
  }
}

export default InputHelper