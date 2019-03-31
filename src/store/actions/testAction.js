import {TEST_ACTION, TEST_ACTION_1} from "../../constants/actionTypes";

function wait () {
    throw 'qqqqqq';
    return new Promise(resolve => setTimeout(() => {
        resolve( [
            1,2,3,4,5
        ])
    }, 2000)
    )
}
function wait1 () {
    setTimeout(() => {
        return [
            123
        ]
    }, 2000)
}


export const testAction = () => async dispatch => {
    console.log('33333333333333333333333')

    const response = await wait();
    console.log('%c wait', 'background: orange; color: red;');
    console.log('')

    dispatch({
        type: TEST_ACTION,
        payload: {testResponseActionPayload: response}
    })
}

export const testAction1 = () => dispatch => {
    console.log('testAction1')

    const response = wait1();

    dispatch( {
        type: TEST_ACTION_1,
        payload: {testResponseAction111Payload: [123]}
    })
}