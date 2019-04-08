import {ErrorPayload} from "../types/common";

export const getErrorPayload = (message: string): ErrorPayload => {
    return {
        type: 'error',
        message
    }
};

export const getSuccessPayload = (message: string): ErrorPayload => {
    return {
        type: 'success',
        message
    }
};

export const getWarningPayload = (message: string): ErrorPayload => {
    return {
        type: 'warning',
        message
    }
};

export const getInfoPayload = (message: string): ErrorPayload => {
    return {
        type: 'info',
        message
    }
};
