export const getErrorPayload = (message) => {
    return {
        type: 'error',
        message
    }
};

export const getSuccessPayload = (message) => {
    return {
        type: 'success',
        message
    }
};

export const getWarningPayload = (message) => {
    return {
        type: 'warning',
        message
    }
};

export const getInfoPayload = (message) => {
    return {
        type: 'info',
        message
    }
};
