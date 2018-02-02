import React from 'react'

const Select_Field = () => (
  <div className={"container " + (id in this.state.errors ? "has-error" : "")}>
    <label htmlFor={id}>{label}</label>
    <select id={id} name={id} ref={id}>
      {options}
    </select>

    {/* <div className={id in this.state.errors ? "has-error" : ""}>
      {this.state.errors[id]}
    </div> */}
  </div>
)