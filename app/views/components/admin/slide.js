import React from 'react'
import { Link } from 'react-router-dom'

class AdminSlide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _deleteSlide = (e) => {
    e.preventDefault()

    this.props.deleteSlide(this.props.data.id)
  }

  render() {
    let { data } = this.props

    return (
      <div className='m__admin-slide'>
        <aside className='slide-image' style={{backgroundImage: `url(${data.slide_image})`}}/> s

        <aside className='wrapper__buttons'>
          <span>
            <Link to='#' className='button button--delete' onClick={this._deleteSlide}>Delete</Link>
          </span>
        </aside>
      </div>
    )
  }
}

export default AdminSlide