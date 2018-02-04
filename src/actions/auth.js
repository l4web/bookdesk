import {USER_LOGGED_IN} from '../types';
import api from "../api";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

// robimy zapytanie to api z danymi pobranymi z formularza z LoginPage
// otrzymujemy spowrotem obiekt user
// gdy dane zostana otrzymane wywołuje sie funckje userLoggedIn
export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))