import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.el = document.createElement('div');
    this.el.setAttribute("class", "o__modal-container")
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root')
    
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default Modal