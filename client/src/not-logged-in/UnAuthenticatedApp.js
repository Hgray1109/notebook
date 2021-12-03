import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import AdminSignup from './AdminSignup'

export default function UnAuthenticatedApp({ setCurrentUser }) {
    return (
            <Routes>
                <Route exact path="/" element={<Login setCurrentUser={setCurrentUser}/>}/>
                <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser} />}/>
                <Route exact path="/adminSignup" element={<AdminSignup setCurrentUser={setCurrentUser} />}/>
                <Route exact path="/" element={<Navigate to = "/" />}/>
                
            </Routes>
            
    
    )
}

// {/* <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} /> */}