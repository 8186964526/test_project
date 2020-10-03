import { CAPITALINFO , TEMPINFO  } from '../actions/index';
let date = [];
export const Employeereducer = (state = date , action) => {
    switch (action.type) {
             case CAPITALINFO :
             return Object.assign({}, state, { data: action.payload});
             case TEMPINFO : 
             return Object.assign({}, state, { todo: action.payload});
             default:
             return state;
    }
}
