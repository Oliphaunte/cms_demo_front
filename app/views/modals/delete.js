import React from 'react'
import ReactDOM from 'react-dom'

class ModalDelete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='modal-container__delete'>
        <h4>Are you sure you wish to delete this post?</h4>
        <span>
          <button type='button' className='button button--delete' onClick={this.props.deletePost}> Delete </button>
          <button type='button' className='button button--cancel' onClick={this.props.deletePost}> Cancel </button>
        </span>
      </div>
    )
  }
}

export default ModalDelete