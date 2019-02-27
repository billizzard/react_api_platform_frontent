export const toggleSidebar = (isOpen) => dispatch => {
    dispatch({
        type: 'TOGGLE_ADMIN_SIDEBAR',
        payload: {isOpen: isOpen}
    })
}