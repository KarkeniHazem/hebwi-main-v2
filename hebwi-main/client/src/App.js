import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Userlist from './Compenents/Userlist';
import Login from './Compenents/Login';

import {Switch,Route ,Link} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute';
import Profil from './Compenents/Profil';
import { useDispatch } from 'react-redux';
import { userActions } from './features/user/actions';


function App() {
  const [users, setUsers] = useState([]);
  const [ping, setPing] = useState(false);
  const dispatch = useDispatch()

  const isAuth=localStorage.getItem("token")
  useEffect(() => {
    if(isAuth){
      let x = axios.get("http://localhost:5000/api/user/");

      dispatch(userActions.current())
      setUsers(x)


    }

    
  }, [ping]);
  console.log(users)
  return (
    <div className="App">
     {/* <Userlist setPing={setPing} ping={ping}/> */}



     <Switch>

       <Route exact path="/auth">
       <Login  setPing={setPing} ping={ping}/>
        
       </Route>
        <PrivateRoute path="/profil" component={Profil}/>
       <Route path="*" >

        < h1>Page not found</h1>
       </Route>
     </Switch>
     
    </div>
  );
}

export default App;
