export const toggleSidebar = (isOpen: boolean) => dispatch => {
    dispatch({
        type: 'TOGGLE_ADMIN_SIDEBAR',
        payload: {isOpen: isOpen}
    })
}