// reducer to taka funkcja ktora pobiera state i akcje i zwraca nowy state w zaleznosci od akcji
// defaultowo zwraca ten same state ktory mu podano
// jako parametr ma ustwione defaultowo puste obiekty

import {USER_LOGGED_IN} from "../types";

export default function user(state = {}, action = {}) {
    switch (action.type){
        case USER_LOGGED_IN:
            return action.user;
        default: return state;
    }
}