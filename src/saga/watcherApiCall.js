import * as Actions from "../actionsTypes";
import { call, put, takeLeading } from "redux-saga/effects";
import axios from "axios";

export function* watcherApiCall() {
    yield takeLeading(Actions.CALL_API, workerCallApi);
}

export function* workerCallApi(action) {
    try {
        let res = yield call(workerDoApiCall);
        yield put({
            type: Actions.SAVE_LIST_PLAYER,
            data: {
                listPlayer: res
            }
        })
    } catch (error) { }
}

function workerDoApiCall(action) {
    const options = {
        method: 'GET',
        url: 'https://flashlive-sports.p.rapidapi.com/v1/search/multi-search',
        params: { locale: 'en_INT', query: 'mess' },
        headers: {
            'X-RapidAPI-Key': '9b71ac4dc7msh58e029c875dd331p1d416fjsn0852c04b00e7',
            'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
        }
    };

    return axios(options).then(res => {
        return res.data;
    }).catch(error => {
        return { error: "error-catch" };
    })
}