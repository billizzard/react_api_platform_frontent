export default function (error) {
    if (error.code && error.message) {
        return {
            code: error.code,
            message: error.message
        }
    }

    return {
        code: 0,
        message: 'Can\'t execute request'
    }
}
