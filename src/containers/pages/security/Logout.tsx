import React from 'react';
import {removeAuthInfo} from "../../../helpers/storageHelper";
const Logout = (props) => {

    removeAuthInfo();
    props.history.push('/');

    return (
        <div>
            Not found
        </div>
    );
};

export default Logout
