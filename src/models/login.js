import {routerRedux} from 'dva/router';
const Login = require('../services/login');

export default {
    namespace: 'login',
    state: {},
    effects: {
        * login({payload}, {call, put}) {
            const data =  yield call( Login, payload);
            yield put(routerRedux.push('/article'));
        }
    }
}
