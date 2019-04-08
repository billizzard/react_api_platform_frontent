import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarMessage from "./SnackbarMessage";
import {connect} from "react-redux";
import {closeSnackbar} from "../../../store/actions/snackbarAction";
import {IProps} from "../../../types/common";

type GlobalSnackbarProps = {
    isOpen: boolean,
    message: string,
    type: string,
}

class GlobalSnackbar extends React.Component<IProps & GlobalSnackbarProps> {
    handleClose = (event, reason): void => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.dispatch(closeSnackbar());
    };

    render() {
        const { isOpen, message, type } = this.props;
        
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={isOpen}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    {isOpen &&
                    <SnackbarMessage
                        onClose={this.handleClose}
                        variant={type}
                        message={message}
                    />
                    }
                </Snackbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        'isOpen': !!state.snackbar.data,
        'message': state.snackbar.data ? state.snackbar.data.message : '',
        'type': state.snackbar.data ? state.snackbar.data.type : '',
    }
}

export default connect(mapStateToProps, null)(GlobalSnackbar);