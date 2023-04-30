import React, {useContext} from 'react';

import {authRoutes, publicRoutes} from "../Routes";
import {Route, Switch, Redirect} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/Consts";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;