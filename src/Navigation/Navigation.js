import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from '../Screens/SignInScreen';
import HomeScreen from '../Screens/HomeScreen';
import VoiceModel from '../Screens/VoiceMode';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomeScreen />} />
                <Route path="/sign-in" element={<SignInScreen />} />
                <Route path="/voice-model" element={<VoiceModel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
