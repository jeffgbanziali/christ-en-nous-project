import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from '../Screens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomeScreen />} />
                <Route path="/sign-in" element={<SignInScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
