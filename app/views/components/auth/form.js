import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValidated: false
    }
  }

  submitHandler = e => {
    e.preventDefault()

    this.validate() ? this.props.submit() : null

    this.setState({ isValidated: true })
    this.formRef.classList.add('was-validated')
  }

  honeyPot = (elem) => {
    // if (elem.value) continue 
  }

  validate = () => {  
    const formRef = this.formRef
    const formLength = formRef.length

    if (formRef.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = formRef[i]
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback')

        // if (elem.name === 'honeypot' && elem.value) return false
        // else continue
        
        if (/(submit|hidden)/.test(elem.type)) continue
        if (errorLabel && elem.validity.valid) {
          errorLabel.textContent = ""
        } else {
          errorLabel.textContent = elem.validationMessage
        }
      }
      return false
    } 
    return true
  }

  render() {
    let props = this.props

    return (
      <form 
        {...props}
        noValidate 
        name='login_form' 
        ref={form => (this.formRef = form)} 
        onSubmit={this.submitHandler} >

        <input type='hidden' name='_csrf' value='<%= csrf %>'/>

        {/* <div style={{display: 'none'}}>
          <label>Keep this field blank</label>
          <input type="text" name="honeypot" id="honeypot" tabIndex="-1" autoComplete='off'/>
        </div> */}

        {this.props.children}
      </form>
    )
  }
}

export default Form