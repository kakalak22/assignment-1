import * as Actions from "../actionsTypes";
import { call, put, takeLeading } from "redux-saga/effects";
import axios from "axios";

export function* watcherApiCall() {
    yield takeLeading(Actions.CALL_API, workerCallApi);
}

export function* workerCallApi(action) {
    try {
        console.log("first")
        let res = yield call(workerDoApiCall);
        console.log(res);
        yield put({
            type: Actions.SAVE_LIST_PLAYER,
            data: {
                listDog: res
            }
        })
    } catch (error) { }
}

function workerDoApiCall(action) {
    const options = {
        method: 'GET',
        url: 'http://shibe.online/api/shibes',
        params: {
            count: 200
        }
    };

    return axios(options).then(res => {
        return res.data;
    }).catch(error => {
        return { error: "error-catch" };
    })
}