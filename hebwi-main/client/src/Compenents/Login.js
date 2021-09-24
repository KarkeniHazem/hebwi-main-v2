import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { userActions } from '../features/user/actions';
import "./login.css";


const Login = ({ ping, setPing }) => {

  const history=useHistory();
const dispatch = useDispatch()
const [user, setuser] = useState({
  name :"",
  lastName:"",
  email:"",
  password:"",
})
const handleRegister = ()=> {
  dispatch(userActions.register(user));
  setTimeout(function(){ history.push("/profil"); }, 500);

  setPing(!ping);
}
const handleLogin = ()=> {
  dispatch(userActions.login(user));
  setPing(!ping);
  setTimeout(function(){ history.push("/profil"); }, 500);

}
    return (
        <div className="login">
        <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Email</label>
                <input id="user"  onChange={ (e)=> setuser({...user,email : e.target.value})} className="input" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass"  onChange={ (e)=> setuser({...user,password : e.target.value})} className="input" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" defaultChecked />
                <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
              </div>
              <div className="group"  onClick={handleLogin}>
                <input type="submit" className="button" defaultValue="Sign In" />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">name</label>
                <input  type="text" onChange={ (e)=> setuser({...user,name : e.target.value})} className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">lastName</label>
                <input  type="text" onChange={ (e)=> setuser({...user,lastName : e.target.value})} className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input  type="text" onChange={ (e)=> setuser({...user,password : e.target.value})} className="input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Email Address</label>
                <input  type="text" onChange={ (e)=> setuser({...user,email : e.target.value}) } className="input" />
              </div>
              <div className="group" onClick={handleRegister}>
                <input type="submit"   className="button" defaultValue="Sign Up" />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?
                </label></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Login
