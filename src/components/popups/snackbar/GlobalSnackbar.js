import * as React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarMessage from "./SnackbarMessage";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles2 = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class GlobalSnackbar extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button className={classes.margin} onClick={this.handleClick}>
                    Open success snackbar
                </Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <SnackbarMessage
                        onClose={this.handleClose}
                        variant="success"
                        message="This is a success message!"
                    />
                </Snackbar>
                <SnackbarMessage
                    variant="error"
                    className={classes.margin}
                    message="This is an error message!"
                />
                <SnackbarMessage
                    variant="warning"
                    className={classes.margin}
                    message="This is a warning message!"
                />
                <SnackbarMessage
                    variant="info"
                    className={classes.margin}
                    message="This is an information message!"
                />
                <SnackbarMessage
                    variant="success"
                    className={classes.margin}
                    message="This is a success message!"
                />
            </div>
        );
    }
}

export default withStyles(styles2)(GlobalSnackbar);