import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    setAdmin: ['admin'],
    logout: [],
    loadAdmin: [],
}, { prefix: '@admin/' })
