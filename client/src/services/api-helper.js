import axios from 'axios';

const baseUrl = 'http://localhost:3000'

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
  return resp.data
}

export const oneSnack = async (id) => {
  const resp = await api.get(`/chips/${id}`)
  return resp.data
}

// export const createComment = async (data) => {
//   const resp = await api.post('/comments', { comment: data })
//   return resp.data
// }

// export const readAllComments = async () => {
//   const resp = await api.get('/comments')
//   return resp.data
// }

// export const updateComment = async (id, data) => {
//   const resp = await api.put(`/comments/${id}`, { comment: data })
//   return resp.data
// }

// export const destroyComment = async (id) => {
//   const resp = await api.delete(`/comments/${id}`)
//   return resp.data
// }