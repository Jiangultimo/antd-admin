import {login} from '../services/login';
import {routeRedux} from 'dva/router';
import DoPromise from '../utils/dopromise';

console.log(login);

export default {
    namespace: 'login',
    state: {},
    effects: {
        *login({payload}, {call, put}) {
            console.log(login);
            const data =  yield call(, payload);
            console.log(data);
            yield put(routeRedux.push('/article'));
        }
    }
}
