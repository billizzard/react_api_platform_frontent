import React from 'react';

import Overlay from 'react-loading-overlay'

const LoadingOverlay = (props) => {
    return (
        <Overlay
            styles={{
                overlay: (base) => ({
                    ...base,
                    zIndex: 1200
                })
            }}
            active={props.active}
            spinner
            text={props.text ? props.text : 'Loading...'}
        >
            {props.children}
        </Overlay>
    )
}

export default LoadingOverlay;
