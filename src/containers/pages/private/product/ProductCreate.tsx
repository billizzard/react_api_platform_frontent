import React from 'react';
import {connect} from "react-redux";


import AdminLayoutHoc from '../../../../hoc/AdminLayoutHoc'
import ProductForm from "../../../../components/forms/ProductForm";
import {openSnackbar} from "../../../../store/actions/snackbarAction";
import {postProductWatcher} from "../../../../store/actions/productWatcherAction";
import {IProps} from "../../../../types/common";
import {ProductFormType} from "../../../../types/common/state";
import {IProductWatcher} from "../../../../types/models/IProductWatcher";

type ProductCreateProps = {
    formErrors: string,
    formTouched: boolean
}

type ProductFormValues = {
    title: string,
    url: string,
    price: number,
    percent: number
}

class ProductCreate extends React.Component<IProps & ProductFormType> {
    showError = () => {
        if (this.props.anyTouched) {
            for (const key in this.props.syncErrors) {
                this.props.dispatch(openSnackbar('warning', this.props.syncErrors[key]));
                break;
            }
        }
    }

    submit = values => {
        const {title, url, currentPrice, percent} = values;

        const productWatcher: IProductWatcher = {title, url, currentPrice, percent}
        this.props.dispatch(postProductWatcher(productWatcher, this.props.history))
    }
    
    render() {
        // this.showError();
        return (
            <div>
                <div className="card">
                    <ProductForm onSubmit={this.submit}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        syncErrors: state.form.productForm && state.form.productForm.syncErrors,
        anyTouched: state.form.productForm && state.form.productForm.anyTouched
    }
}

export default connect(mapStateToProps, null)(AdminLayoutHoc(ProductCreate))
