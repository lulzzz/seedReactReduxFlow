import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Home from './components/Home/Home.jsx'
import Landing from './components/Landing/index.jsx'
import Login from './components/Auth/Login.jsx'
import SignIn from './components/Auth/SignIn.jsx'
import ResetPassword from './components/Auth/ResetPassword.jsx'
import Register from './components/Auth/Register.jsx'
import Payment from './components/Payment/Payment.jsx'
import Profile from './components/Patient/Profile.jsx'
import DoctorConMockUp from './components/Doctor/DoctorConMockUp.jsx'


module.exports = (
  	<Route path="/" component={App}>
    	<IndexRoute component={Landing}/>
    	<Route path="/login" component={Login}/>
    	<Route path="/signin" component={SignIn}/>
    	<Route path="/resetPassword" component={ResetPassword}/>
    	<Route path="/register" component={Register}/>
    	<Route path="/payment" component={Payment}/>
    	<Route path="/profile" component={Profile}/>
    	<Route path="/doctor" component={DoctorConMockUp}/>
    	<Route path="*" component={Landing}/>
  	</Route>
)

