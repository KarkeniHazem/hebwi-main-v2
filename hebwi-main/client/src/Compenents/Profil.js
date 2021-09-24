import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../features/user/actions'
import Navbar from './Navbar'
import {Switch,Route } from "react-router-dom"
import Fixtures from './User/Fixtures'
import Lobbies from './User/Lobbies'
import Players from './User/Players'
import Roster from './User/Roster'


export default function Profil() {
    
    
    const user = useSelector(state => state.Users.users)
    console.log(user)
    
    
    return (
        <div>
            <Navbar/>
            <Switch>

                <Route  path="/profil/fixtures"><Fixtures/></Route>
                <Route  path="/profil/lobbies"><Lobbies/></Route>
                <Route  path="/profil/players"><Players/></Route>
                <Route  path="/profil/roster"><Roster/></Route>
                
            </Switch>
            
           <h1> jawak behi profilak</h1>  

           <h2> {user.name}</h2>
            
        </div>
    )
}
