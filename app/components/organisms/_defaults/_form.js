// import React            from 'react'
// import createReactClass from 'create-react-class'

// import {isAlpha, isEmail, isPostalCode}  from 'validator'

// const STATES = [
//   'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
//   'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
//   'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
//   'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
// ]

// const Contact_Form = createReactClass({
//   getInitialState() {
//     return {
//       errors: {}
//     }
//   },

//   getDefaultProps() {
//     return {
//       email: true,
//       submitted: null,
//       errors: {
//         text_error: "Must be valid text",
//         email_error: "Must be a valid email",
//         zipcode_error: "Must be a valid zipcode"
//       }
//     }
//   },

//   testField(field, field_value) {
//     console.log(field.type)

//     switch (field.type) {
//       case 'email':
//         return isEmail(field_value) ? true : false
//         break;
//       case 'text':
//         if(field.id == 'zipcode') return isPostalCode(field_value, "US")
        
//         return isAlpha(field_value) ? true : false
//         break;
//       case "select-one":
//         if (!field.value) return true
//         break;
//       default:
//         console.log('Form error')
//         return false;
//     }
//   },

//   isValid(e) {
//     e.preventDefault();

//     console.log(this.refs)

//     let field_names = Object.keys(this.refs)
//     let errors = {}

//     field_names.map( field_name => {
//       let field       = this.refs[field_name],
//           field_value = field.value.trim(),
//           field_id    = field.id,
//           field_type  = field.type;
  
//       if (this.testField(field, field_value)) return true
//       return errors[field_id] = this.props.errors[`${field_type}_error`]
//     })

//     this.setState({ errors: errors }, () => {
//       console.log("There was a field error!")
//     })
//   },

//   renderTextField(id, label) {
//     return (
//       <div className="container">
//         <label htmlFor={id}>{label}</label>
//         <input type="text" name={id} id={id} ref={id} maxLength="50"></input>

//         <div className={id in this.state.errors ? "has-error" : ""}>
//           {this.state.errors[id]}
//         </div>
//       </div>
//     )
//   },

//   renderEmailField(id, label) {
//     return (
//       <div className="container">
//         <label htmlFor={id}>{label}</label>
//         <input type="email" name={id} id={id} ref={id} maxLength="50"></input>

//         <div className={id in this.state.errors ? "has-error" : ""}>
//           {this.state.errors[id]}
//         </div>
//       </div>
//     )
//   },

//   renderSelectField(id, label, values) {
//     let options = values.map( value => <option value={value}>{value}</option>)
//     return (
//       <div className="container">
//         <label htmlFor={id}>{label}</label>
//         <select id={id} name={id} ref={id}>
//           {options}
//         </select>

//         <div className={id in this.state.errors ? "has-error" : ""}>
//           {this.state.errors[id]}
//         </div>
//       </div>
//     )
//   },

//   render() {
//     return (
//       <form id="contact-form" className="o__contact-form" onSubmit={this.isValid} noValidate>
//         <article>
//           <h2>Contact Details</h2>
//           {this.renderTextField('firstName', 'First Name')}
    
//           {this.renderTextField('lastName', 'Last Name')}
    
//           {this.renderEmailField('email', 'Email')}
//         </article>

//         <article>
//           <h2>Location</h2>
//           {this.renderSelectField('state', 'State', STATES)}

//           {this.renderTextField('zipcode', 'Zipcode') }
//         </article>

//         <button>Submit</button>        
//       </form>
//     )
//   }
// })

// export default Contact_Form