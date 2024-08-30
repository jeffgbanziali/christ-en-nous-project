import React, { useEffect, useState } from 'react';
import logo from './OKOK.jpeg';
import './styles.css'

const LoadingPage = () => {
    const [showText, setShowText] = useState([false, false, false]);

    useEffect(() => {
        const timeouts = [
            setTimeout(() => setShowText([true, false, false]), 800),
            setTimeout(() => setShowText([true, true, false]), 1600),
            setTimeout(() => setShowText([true, true, true]), 2400)
        ];

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white space-y-6 relative border-gradient">
            <div className="w-96 h-96 animate-zoom">
                <img
                    src={logo}
                    alt="Loading"
                    className="w-full h-full"
                />
            </div>
            <div className="absolute z-10 top-16 right-32 text-center space-y-2">
                <p className={`transition-opacity duration-1000 ${showText[0] ? 'opacity-100' : 'opacity-0'} text-2xl font-bold text-gray-800 font-poppins tracking-wide`}>Évangéliser</p>
                <p className={`text-[36px] transition-opacity duration-1000 ${showText[1] ? 'opacity-100' : 'opacity-0'} font-bold text-gray-800 font-poppins tracking-wide`}>Faire des disciples</p>
                <p className={`transition-opacity duration-1000 ${showText[2] ? 'opacity-100' : 'opacity-0'} text-2xl font-bold text-gray-800 font-poppins tracking-wide`}>Servir</p>
            </div>
        </div>
    );
};

export default LoadingPage;
