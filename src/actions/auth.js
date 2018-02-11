import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from "../api";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

// robimy zapytanie to api z danymi pobranymi z formularza z LoginPage
// otrzymujemy spowrotem obiekt user
// gdy dane zostana otrzymane wywołuje sie funckje userLoggedIn
export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem('bookwormJWT');
    dispatch(userLoggedOut());
};

export const confirm = (token) => dispatch => {
    api.user.confirm(token).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user));
    });
};

export const resetPasswordRequest = ({email}) => () => {
    api.user.resetPasswordRequest(email)
};

export const validateToken = (token) => () => {
    api.user.validateToken(token)
};

export const resetPassword = data => () =>{
    api.user.resetPassword(data)
};