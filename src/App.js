import React from 'react';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrg from "./components/organization/CreateOrg"
import DetailOrg from './components/organization/DetailOrg';
import EditOrg from './components/organization/EditOrg';
import SignIn from './components//authentication/SignIn';
import CreateUser from './components/user/CreateUser';
import DetailedUser from './components/user/DetailUser';
import EditUser from './components/user/EditUser';




const App = () => {
    return (
        <>
            <Router>

                <Routes>
                    <Route path='/' exact element={<Dashboard />}


                    />
                    <Route path='/organization/details' exact element={<DetailOrg />} />
                    <Route path='/organization/edit' exact element={<EditOrg />} />
                    <Route path='/organization/create' exact element={<CreateOrg />} />
                    <Route path='/user/details' exact element={<DetailedUser />} />
                    <Route path='/user/edit' exact element={<EditUser />} />
                    <Route path='/user/create' exact element={<CreateUser />} />
                    <Route path='/user/signIn' exact element={<SignIn />} />
                </Routes>
            </Router>




        </>
    )
}

export default App;
