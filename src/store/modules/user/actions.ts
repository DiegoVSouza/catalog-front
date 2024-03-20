import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    setUser: ['user'],
    logout: [],
    loadUser: [],
}, { prefix: '@user/' })
