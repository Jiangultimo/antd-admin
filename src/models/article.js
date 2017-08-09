const Aticle = require('../services/article');

export default {

    namespace: 'article',

    state: {},

    subscriptions: {
        setup({dispatch, history}) {
            console.log(dispatch);
            history.listen( ({pathname}) => {
                if(pathname === '/article') {
                    dispatch({
                        type:'fetch'
                    });
                }
            });
        }
    },

    effects: {
        *fetch({ payload = {key:'', value:''} }, { call, put }) {  // eslint-disable-line
            console.log(payload);
            const data = yield call(Article, payload);
            yield put({
                payload: {
                    success:data.success,
                    data:data.data
                },
                type: 'save'
            });
        },
    },

    reducers: {
        save(state, action) {
            console.log(state,action);
            return { ...state, ...action.payload };
        },
    },

};
