import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, authStatus } from '@/app/store/actions/auth'
import Form from '@/app/views/components/auth/form'
import InputHelper from '@/app/utils/input_helper'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    const { onSubmit, inputChange } = this.props

    return (
      <Form submit={onSubmit} className='o__auth-form'>
        <article className='auth-form__input-container'>
          <label htmlFor='email'> E-mail </label>
          <input
            id='email'
            type='email' 
            name='email'
            required={true} 
            onChange={inputChange} />
          <span className='invalid-feedback'></span>
        </article>

        <article className='auth-form__input-container'>
          <label htmlFor='password'> Password </label>
          <input
            id='password'
            type='password' 
            name='password'
            minLength={6}
            pattern="(?=.*\d)(?=.*[a-z]).{6,}"
            required={true} 
            onChange={inputChange} />
          <span className='invalid-feedback'></span>
        </article>

        <article className='auth-form__form-submit'>
          <input className='button button--submit' type='submit' />
        </article>
      </Form>
    )
  }
}

export default LoginForm