
import { createReducer } from 'reduxsauce';
import { Types } from './actions';

interface UserProps {
    user: {
        id: string,
        email: string,
        name: string,
        password: string,
        role: {
            id: string,
            value: string,
            label: string
        }
    }
}

const INITIAL_STATE = {
    id: '',
    email: '',
    name: '',
    password: '',
    role: {
        id: '',
        value: '',
        label: ''
    }
}


const setUser = (state = INITIAL_STATE, action: UserProps) => {
    localStorage.setItem('@catalog:user', JSON.stringify(action.user))
    return action.user
}

const loadUser = (state = INITIAL_STATE, action: UserProps) => {
    const data = localStorage.getItem('@catalog:user')
    const { user } = data ? JSON.parse(data) : null
    return user
}

const onLogout = () => {
    localStorage.removeItem('@catalog:user')
    localStorage.removeItem("@token")
    // localStorage.removeItem("@catalog/permissions")
    return null
}


const HANDLERS = {
    [Types.SET_USER]: setUser,
    [Types.LOAD_USER]: loadUser,
    [Types.LOGOUT]: onLogout,
}

export default createReducer(INITIAL_STATE, HANDLERS)
