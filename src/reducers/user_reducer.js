// const action = {
//     type: 'MOVIES_LIST',
//     payload: [
//         {id: "1", name: 'Pulp fiction'},
//         {id: "2", name: 'True lies'},
//     ]
// }
//
// const state = 0;

export default function (state = {}, action) {
    switch(action.type) {
        case "USER_LOGIN":
            return {...state, auth: action.payload}

        case "USER_REGISTRATION":
            return {...state, auth: action.payload}

        default: return state;
    }
}