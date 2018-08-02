import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Utils
import auth from '@/app/utils/auth'

const PrivateRoute = ({ component: Component, login, ...rest }) => (  
  <Route {...rest} render={props => (
    login.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
        }}
      />
    )
  )} />
);

PrivateRoute.propTypes = {
  login: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))