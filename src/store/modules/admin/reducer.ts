
import { createReducer } from 'reduxsauce';
import { Types } from './actions';

interface AdminProps {
    admin:  {
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


const setAdmin = (state = INITIAL_STATE, action: AdminProps) => {
    localStorage.setItem('@catolog:admin', JSON.stringify(action))
    return action.admin
}

const loadAdmin = (state = INITIAL_STATE, action: AdminProps) => {
    const data = localStorage.getItem('@catolog:admin')
    const { admin } = data ? JSON.parse(data) : null
    
    return admin
}

const onLogout= () => {
    localStorage.removeItem('@catolog:admin')

    return null
}


const HANDLERS = {
    [Types.SET_ADMIN]: setAdmin,
    [Types.LOAD_ADMIN]: loadAdmin,
    [Types.LOGOUT]: onLogout,
}

export default createReducer(INITIAL_STATE, HANDLERS)
