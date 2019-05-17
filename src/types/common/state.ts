export type AdminLayoutState = {
    adminLayout: {
        leftSidebar: {
            isOpen: boolean
        }
    },
}

export interface IReduxForm {
    syncErrors?: object,
    anyTouched?: boolean
}


export type ProductFormType = IReduxForm & {
    syncErrors?: {
        title: string
    },
}

export type ReduxFromType = {
    form: {
        productForm: ProductFormType
    },
}
