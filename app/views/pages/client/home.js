import React from 'react'

import Gallery from '@/app/views/pages/client/gallery'
import Posts from '@/app/views/pages/client/posts'
import Loader from '@/app/components/templates/loader'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }
  
  componentDidMount() {

  }

  renderPage() {
    if (this.state.loading) {
      return <Loader /> 
    }

    return (
      <React.Fragment>
        <section className='home-page__slider'>
          <div className='o__home-page-slider'>
            <Gallery />
          </div>
        </section>

        <section className='home-page__posts'>
          <Posts />
        </section>
      </React.Fragment>
    )
  }

  render() {
    return (
      <main className="t__home-page">
        {this.renderPage()}
      </main>
    )
  }
}

export default Home