import Axios  from 'axios'

const UPDATE_SLIDE = 'UPDATE_SLIDE'
const SLIDE_SAVING = 'SLIDE_SAVING'
const LOAD_SLIDES = 'LOAD_SLIDES'
const ADD_SLIDE = 'ADD_SLIDE'
const SLIDER_PENDING = 'SLIDER_PENDING'

export function addSlide(slide) {
  return {
    type: ADD_SLIDE,
    slide
  }
}
export function loadSlides(data) {
  return {
    type: LOAD_SLIDES,
    data
  }
}
export function sliderPending(bool) {
  return {
    type: SLIDER_PENDING,
    bool
  }
}

export function fetchSlides(data) {
  return function (dispatch) {
    return Axios
      .get('/auth/slides')
      .then(res => dispatch(loadSlides(res.data)))
      .catch(err => console.error(err))
  }
}
export function saveSlide(data) {
  return function (dispatch) {
    dispatch(sliderPending(true))

    return Axios
      .post('/auth/slides', data)
      .then(res => dispatch(fetchSlides()))
      .catch(err => console.error(err))
      .finally(dispatch(sliderPending(false)))
  }
}
export function deleteSlide(slide) {
  return function (dispatch) {
    dispatch(sliderPending(true))

    return Axios
      .delete(`/auth/slides/${slide}`)
      .then(res => dispatch(fetchSlides()))
      .catch(err => {
        console.error(err)
        throw err
      })
      .finally(dispatch(sliderPending(false)))
  }
}