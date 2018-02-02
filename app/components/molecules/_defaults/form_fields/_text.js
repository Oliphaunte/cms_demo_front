import React from 'react'

const Text_Field = () => (
  <div className={"container " + (id in this.state.errors ? "has-error" : "")}>
    <label htmlFor={id}>{label}</label>
    <input type="text" name={id} id={id} ref={id} maxLength="50"></input>

    {/* <div className={id in this.state.errors ? "has-error" : ""}>
      {this.state.errors[id]}
    </div> */}
  </div>
)