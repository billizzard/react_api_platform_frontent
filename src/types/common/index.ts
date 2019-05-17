export interface IProps {
    dispatch: any,
    history: any,
}

export type HttpError = {
    code: number,
    message: string
}

export type ErrorPayload = {
    type: 'success' | 'error' | 'warning' | 'info',
    message: string
}

export type ReducerActionType = {
    type: string,
    payload: any
}