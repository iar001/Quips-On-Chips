import axios from 'axios';

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://quips-on-chips.herokuapp.com'

const api = axios.create({
  baseURL: baseUrl
})
//////////AUTH//////////
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

///////CHIPS//////////
export const getAllChips = async () => {
  const resp = await api.get('/chips');
  console.log(resp.data)
  return resp.data
}

export const oneSnack = async (id) => {
  const resp = await api.get(`/chips/${id}`)
  return resp.data
}

export const chipsFlavorSort = async () => {
  const resp = await api.get('/chips_by_taste')
  return resp.data
}

export const chipsCostSort = async () => {
  const resp = await api.get('/chips_by_cost')
  return resp.data
}

export const chipsGuiltSort = async () => {
  const resp = await api.get('/chips_by_guilt')
  return resp.data
}
////////REVIEWS///////

export const createReview = async (id, formData) => {
  const resp = await api.post(`chips/${id}/reviews`, { review: formData })
  return resp.data
}

export const oneReview = async (id) => {
  const resp = await api.get(`/reviews/${id}`)
  return resp.data
}

export const readAllReviews = async (id) => {
  const resp = await api.get(`chips/${id}/reviews`)
  return resp.data
}

export const updateReview = async (id, formData) => {
  const resp = await api.put(`/reviews/${id}`, { review: formData })
  return resp.data
}

export const destroyReview = async (id) => {
  const resp = await api.delete(`/reviews/${id}`)
  return resp.data
}

/////Users

export const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}
