import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, authStatus } from '@/app/store/actions/auth'
import LoginForm from '@/app/views/components/auth/login'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit = () => {
    let { email, password } = this.state

    this.props.login(email, password)
      .then(() => this.props.isAuthenticated ? this.props.history.push('/admin') : null )
      .catch(err => console.log(err))
  }

  inputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    let { isLoginPending, isLoginSuccess, loginError, isAuthenticated } = this.props

    this.isAuthenticated ? <Redirect to='/' /> : null

    return (
      <main className='t__login-page'>
        <section className="login-page__form">
          <LoginForm
            inputChange={this.inputChange}
            onSubmit={this.onSubmit}
            isLoginPending={this.isLoginPending}
            isLoginSuccess={this.isLoginSuccess}
            loginError={this.loginError}
            ></LoginForm>
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError,
    isAuthenticated: state.login.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (email, password) => dispatch(login(email, password)),
      authStatus: () => dispatch(authStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)