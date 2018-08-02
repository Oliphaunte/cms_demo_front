import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Admin    from './admin'
import Post     from './post/post'
import PostNew  from './post/new'

class AdminIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Switch>
        <Route exact path='/admin' component={Admin}  />
        <Route path='/admin/posts/new' component={PostNew} />
        <Route path='/admin/posts/:id' component={Post} />
      </Switch>
    )
  }
}

export default AdminIndex