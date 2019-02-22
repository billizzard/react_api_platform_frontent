// import React from 'react';

export default function (error) {
    return {
        code: error.code,
        message: error.message
    }
}
