import {HttpError} from "../../types/common";
import {AxiosError} from "axios";

export default function (error: AxiosError): HttpError {
    let message = error.response && error.response.data && error.response.data.message;
    let code = 500;

    if (error.response && error.response.status >= 500) {
        code = error.response.status;
    }
    
    return  {
        code,
        message: message ? message : 'Can\'t execute request'
    }
}
