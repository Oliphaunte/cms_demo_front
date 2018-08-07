import React              from 'react'
import { Route, Switch }  from 'react-router-dom'

import Header       from '@/app/views/components/layout/header'
import Footer       from '@/app/views/components/layout/footer'
import Home         from '@/app/views/pages/client/home'
import Login        from '@/app/views/pages/auth/login'
import Post         from '@/app/views/pages/client/post'
import Contact      from '@/app/views/pages/contact'
import AdminIndex   from '@/app/views/pages/admin/'
import PrivateRoute from '@/app/views/pages/private_route'
import Error404     from '@/app/views/pages/error_404'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
          
          <Switch>
            <Route exact path='/'     component={Home}  />
            <Route path='/contact'    component={Contact} />
            <Route path='/login'      component={Login} />
            <Route path='/posts/:id'  component={Post} />
            <PrivateRoute path='/admin' component={AdminIndex} />
            <Route path='' component={Error404} />
          </Switch>
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default App