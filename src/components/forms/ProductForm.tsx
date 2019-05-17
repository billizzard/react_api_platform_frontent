import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {inputField} from "./fields/InputField";
import {required, number, range} from "./validators/CommonValidator";

const ProductForm = props => {
    const {handleSubmit} = props;
    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="card-body">
                <h4 className="card-title">Create Product</h4>

                <Field
                    name="title"
                    component={inputField}
                    type="text"
                    label="Title *"
                    validate={[required]}
                />

                <Field
                    name="url"
                    component={inputField}
                    type="text"
                    label="Url *"
                    validate={[required]}
                />

                <Field
                    name="currentPrice"
                    component={inputField}
                    type="text"
                    label="Current Price *"
                    validate={[required, number]}
                />

                <Field
                    name="percent"
                    component={inputField}
                    type="text"
                    label="Percent *"
                    validate={[range(1, 100)]}
                />
            </div>
            <div className="border-top">
                <div className="card-body">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'productForm',
})(ProductForm)

