import React,{Component} from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import DisplayReminders from './components/DisplayReminders';
import Archive from './components/Archive';
import Trash from './components/Trash';

const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Route path='/' component={Login} exact={true}/>
        <Route path='/register' component={Register}/>
        <Route path='/forgetpassword' component={ForgetPassword}/>
        <Route path='/resetpassword' component={ResetPassword}/>
        <Route path='/home' component={Home}/>
        <Route path='/reminders' component={DisplayReminders}/>
        <Route path='/archive' component={Archive}/>
        <Route path='/trash' component={Trash}/>
        
    </div>
    </BrowserRouter>
);
export default AppRouter;

