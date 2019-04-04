export default function (error) {
    if (error.response && error.response.status >= 500) {
        error.code = error.response.status;
        error.message = 'Can\'t execute request';
    }

    return  {
        code: error.code ? error.code : 0,
        message: error.message ? error.message : 'Can\'t execute request'
    }
}
