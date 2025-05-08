import React from 'react';
import Opening from './sections/Opening';
import Showcase from './sections/Showcase';
import NavBar from './components/NavBar';
import LogoCarusell from './components/LogoCarusell';

const App = () => {
    console.log("Hi. I see you are curious how I built this portfolio. So I used React, Vite, Tailwind CSS, and Three.js. I hope you enjoy it! :)");
    return (
        <>
            <NavBar />
            <Opening />
            <Showcase />
            <LogoCarusell />
        </>
    );
}

export default App;