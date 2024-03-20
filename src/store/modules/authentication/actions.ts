import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['data'],
    loginFailure: ['error'],
}, { prefix: '@auth/' })
