import React from 'react'
import { Field, reduxForm } from 'redux-form'

type InputFieldType = {
    input: object,
    label: string,
    type: string,
    meta: {
        touched: boolean,
        error: string,
        warning: string
    }
}

export function inputField({
        input,
        label,
        type,
        meta: { touched, error, warning }
    }: InputFieldType): JSX.Element
{
    const errorMessage = touched && error && error;
    const placeholder = label.replace('*', '');
    return (
        <div className="form-group row">
            <label className="col-sm-3 text-right control-label col-form-label">
                {label}
            </label>
            <div className="col-sm-9">
                <input {...input} type={type} className={errorMessage ? "form-control is-invalid" : "form-control"} placeholder={placeholder}/>
                {
                    errorMessage && <div className="invalid-feedback">{errorMessage}</div>
                }
            </div>
        </div>
    )
};

