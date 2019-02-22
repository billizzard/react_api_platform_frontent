import React from 'react';
import {connect} from 'react-redux'

class ErrorPopup extends React.Component {
    state = {
        isOpen: false
    }

    getErrorMessage = () => {
        return this.props.errorPopup ? this.props.errorPopup.message: ''
    }

    render() {
        return (
            <div>
                message: {this.getErrorMessage()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorPopup: state.error.errorPopup
    }
}

export default connect(mapStateToProps, null)(ErrorPopup)
