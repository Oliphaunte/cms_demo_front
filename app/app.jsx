import React                            from 'react'
import ReactDOM                         from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createReactClass                 from 'create-react-class'

import Header   from "@/app/components/templates/header"
import Footer   from "@/app/components/templates/footer"
import Home     from "@/app/components/templates/home"
import Contact  from "@/app/components/templates/contact"

const supportsHistory = "pushState" in window.history

require("@/app/assets/css/app.scss")

const App = createReactClass({
  getInitialState() {
    return{
      loading: true
    }
  },

  componentDidMount() {
    this.setState({loading: false})
  },

  render() {
    if (this.state.loading) {
      return(
        <main className="t__loader-page">
          <div className="m__loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </main>
      )
    }

    return (
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/contact"  component={Contact} />
          </Switch>
        
        <Footer />
      </React.Fragment>
    )
  }
})

if (typeof window !== 'undefined') {
  ReactDOM.render(
    <BrowserRouter basename={process.env.BASE_URL} forceRefresh={!supportsHistory}>
      <App />
    </BrowserRouter>, 
    document.getElementById('app')
  );
}