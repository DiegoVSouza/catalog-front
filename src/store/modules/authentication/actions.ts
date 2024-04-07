import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password','history'],
    loginSuccess: ['data','history'],
    loginFailure: ['error','verifyError'],
}, { prefix: '@auth/' })
