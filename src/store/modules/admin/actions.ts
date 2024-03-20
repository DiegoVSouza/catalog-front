import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    setAdmin: ['admin'],
    logoutAdmin: [],
    loadAdmin: [],
}, { prefix: '@admin/' })
