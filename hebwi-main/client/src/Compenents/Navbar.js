import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { Logout } from '../features/user/userSlice'

const Navbar = () => {
    const deleteToken=()=>{localStorage.removeItem("token")}
    const dispatch = useDispatch()
    return (
        <div>
            
            <ul style={{display:'flex',justifyContent:'space-around'}}>
               <Link to="/profil/roster"> <li>  Roster</li> </Link>
               <Link to="/profil/lobbies"> <li>  Lobbies</li> </Link>
               <Link to="/profil/fixtures"> <li>  Fixtures</li> </Link>
               <Link to="/profil/players"> <li>  Players</li> </Link>
               <ul >
                <Link> <li>  Profile</li> </Link>
               <Link> <li>  Edit profile</li> </Link>
               <Link to="/auth"> <li  onClick={()=>{dispatch(Logout());window.location.reload()}}>  Log out </li> </Link>  
            </ul>
            </ul>
            
        </div>
    )
}

export default Navbar

