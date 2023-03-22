import { API } from './api'

export const login = (body) => {
    return API.post('users/login/', body)
}

export const register = (body) => {
    return API.post('users/register/', body)
}