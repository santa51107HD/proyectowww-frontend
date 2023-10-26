import axios from 'axios'

export const crearUsuario = (form) => axios.post('http://127.0.0.1:8000/api/registro/', form)
export const logearse = (form) => axios.post('http://127.0.0.1:8000/api/login/', form)
