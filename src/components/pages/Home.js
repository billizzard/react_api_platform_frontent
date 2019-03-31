import React from 'react';

import FrontLayoutHoc from '../../hoc/FrontLayoutHoc'
import {connect} from "react-redux";
import {testAction} from "../../store/actions/testAction";
import {loadDecorator} from "../../helpers/pageHelper";



class Home extends React.Component{
    onClickHandler = () => {
        console.log('onCLickahndler')
        // this.props.dispatch(testAction());
        this.props.dispatch(loadDecorator(testAction()));
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
