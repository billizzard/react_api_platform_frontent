import React from 'react';

import FrontLayoutHoc from '../../hoc/FrontLayoutHoc'
import {connect} from "react-redux";
import {IProps} from "../../types/common";

class Home extends React.Component<IProps>{
    onClickHandler = (): void => {
        // this.props.dispatch(loadingOverlay(testAction()));
    }

    render() {
        return (
            <div>
                Home
                <span onClick={this.onClickHandler}>testActiontext</span>
            </div>
        )
    }
}

export default connect(null, null)(FrontLayoutHoc(Home))
