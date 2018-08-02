import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logout, authStatus } from '@/app/store/actions/auth'

import Hamburger_Menu from './hamburger'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleLogout = this.handleLogout.bind(this)
  }

  async handleLogout(e) {
    e.preventDefault()

    await this.props.logout()
      .then(() => {
        this.props.history.push('/login')
      })
      .catch(err => console.error(err));
  }

  render() {
    let { isAuthenticated } = this.props

    return (
      <header>
        <aside>
          <Link to="/"> 
            <img src={require('@/app/assets/images/logo.svg')} />
          </Link>
        </aside>

        <aside>
          {isAuthenticated ? (
            <React.Fragment>
              <Link to="/admin"> <p>Admin</p> </Link>
              <Link to="#" onClick={this.handleLogout}> <p>Logout</p> </Link>
            </React.Fragment>
          ) : (
            <Link to="/login">  <p>Login</p> </Link>
          )}

          <Hamburger_Menu></Hamburger_Menu>
        </aside>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))