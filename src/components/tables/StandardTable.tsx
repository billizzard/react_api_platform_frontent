import React from 'react';

const StandardTable = (props) => {

    function renderRows() {
        if (props.items) {
            return props.items.map((item, i) => {
                return (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })
        }
    }

    function renderHeaders() {
        if (props.headers) {
            return (
                <thead>
                    <tr>
                        {props.headers.map((item, i) => {
                            return <th key={i}>{item}</th>
                        })}
                    </tr>
                </thead>
            )
        }
    }

    return (
        <table className="table table-striped">
            {renderHeaders()}
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

export default StandardTable;
