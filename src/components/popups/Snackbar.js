import React from 'react';
import {connect} from 'react-redux'

class Snackbar extends React.Component {
    state = {
        isOpen: false
    }

    getErrorMessage = () => {
        return this.props.snackbar ? this.props.snackbar.message: ''
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
        snackbar: state.snackbar.data
    }
}

export default connect(mapStateToProps, null)(Snackbar)
