import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Login from './routes/Login';
import Article from './routes/Article'

const registerModel = (app, model) => {
   if(!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
       app.model(model);
   }
}

const Routers = function({history, app}) {
    const routes = [{
        path: '/',
        name: '文章管理',
        getComponent(nextState, cb){
            require.ensure([], (require) => {
                registerModel(app, require('./models/login'));
                cb(null, require('./routes/Login'));
            });
        }
    },{
        path: '/article',
        name:'文章管理',
        getComponent(nextState, cb){
            require.ensure([], (require) => {
                registerModel(app, require('./models/article'));
                cb(null, require('./routes/Article'));
            })
        }
    }];
    // const routes = [{
    //     path:'/',
    //     component: Login,
    //     name:'文章管理',
    //     getIndexRoute(nextState, cb){
    //         require.ensure([], (require) => {
    //             registerModel(app, require('./models/login'));
    //             cb(null, {component: require('./routes/Login')})
    //         }, 'login')
    //     },
    //     childRoutes:[
    //         {
    //             path:'article',
    //             getComponent(nextState, cb){
    //                 require.ensure([], (require) => {
    //                     registerModel(app, require('./models/article'))
    //                     cb(null, require('./routes/Article'))
    //                 }, 'article')
    //             }
    //         }
    //     ]
    // }]
    return <Router history={history} routes={routes} />
};

export default Routers;
