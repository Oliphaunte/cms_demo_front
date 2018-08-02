import React            from 'react'
import createReactClass from 'create-react-class'

// Move to Store
import Axios from 'axios'

import {isAscii, isEmail, isPostalCode}  from 'validator'

const STATES = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

const Contact_Form = createReactClass({
  getInitialState() {
    return {
      errors: {},
      submitted: false,

      // Move to Store
      first_name: '',
      last_name: '',
      email: '',
      state: 'AL',
      zipcode: ''
    }
  },

  getDefaultProps() {
    return {
      errors: {
        text_error: "Must be valid text",
        email_error: "Must be a valid email",
        zipcode_error: "Must be a valid zipcode"
      }
    }
  },

  onChange(e) {
    let state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  },

  testField(field, field_value) {
    switch (field.type) {
      case 'email':
        return isEmail(field_value) ? true : false
        break;
      case 'text':
        if(field.id == 'zipcode') return isPostalCode(field_value, "US")
        
        return isAscii(field_value) ? true : false
        break;
      case "select-one":
        if (field.value) return true
        break;
      default:
        console.log('Form error')
        return false;
    }
  },

  isValid(e) {
    e.preventDefault();

    let field_names = Object.keys(this.refs)
    let isValid = true
    let errors = {}

    field_names.map( field_name => {
      let field       = this.refs[field_name],
          field_value = field.value.trim(),
          field_id    = field.id,
          field_type  = field.type;
  
      if (this.testField(field, field_value)) return true
      return errors[field_id] = this.props.errors[`${field_type}_error`]
    })

    this.setState({ errors: errors })

    // Return true if no errors
    for (var error in errors) {
      isValid = false
    }

    if (isValid) {
      // Move to Store
      let { first_name, last_name, email, state, zipcode } = this.state
      Axios
        .post('/contact', { first_name, last_name, email, state, zipcode })
        .then(res => console.log(res))
        .catch(err => console.error(err));
      // 

      this.setState({ submitted: true })

    }
  },

  renderTextField(id, label) {
    return (
      <div className={"container " + (id in this.state.errors ? "has-error" : "")}>
        <label htmlFor={id}>{label}</label>
        <input type="text" name={id} id={id} ref={id} maxLength="50" defaultValue={this.state[id]} onChange={this.onChange} ></input>
      </div>
    )
  },

  renderEmailField(id, label) {
    return (
      <div className={"container " + (id in this.state.errors ? "has-error" : "")}>
        <label htmlFor={id}>{label}</label>
        <input type="email" name={id} id={id} ref={id} maxLength="50" defaultValue={this.state[id]} onChange={this.onChange}></input>
      </div>
    )
  },

  renderSelectField(id, label, values) {
    let options = values.map( value => <option value={value} key={value}> {value} </option> )
    return (
      <div className={"container " + (id in this.state.errors ? "has-error" : "")}>
        <label htmlFor={id}>{label}</label>
        <select id={id} name={id} ref={id} defaultValue={this.state[id]} onChange={this.onChange}>
          {options}
        </select>
      </div>
    )
  },

  render() {
    if (this.state.submitted) {
      return (
        <div className="o__submit-form--success">
          Thank you for your email!
        </div>
      )
    }

    return (
      <form id="contact-form" className="o__contact-form" onSubmit={this.isValid} noValidate>
        <article>
          <h2>Contact Details</h2>
          {this.renderTextField('first_name', 'First Name')}
    
          {this.renderTextField('last_name', 'Last Name')}
    
          {this.renderEmailField('email', 'Email')}
        </article>

        <article>
          <h2>Location</h2>
          {this.renderSelectField('state', 'State', STATES)}

          {this.renderTextField('zipcode', 'Zipcode') }
        </article>

        <button>Submit</button>        
      </form>
    )
  }
})

export default Contact_Form