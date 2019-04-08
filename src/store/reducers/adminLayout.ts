export default function (state = {}, action) {
    switch(action.type) {
        case "TOGGLE_ADMIN_SIDEBAR":
            return {...state, leftSidebar: action.payload}

        default: return state;
    }
}