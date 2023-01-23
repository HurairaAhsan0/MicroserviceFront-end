import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const User = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<ListUser />} />
                <Route path='/user/details' exact element={<DetailedUser />} />
                <Route path='/user/edit' exact element={<EditUser />} />
                <Route path='/user/create' exact element={<CreateUser />} />
                <Route path='/user/signIn' exact element={<SignIn />} />
            </Routes>
        </Router>

    )
}

export default User
