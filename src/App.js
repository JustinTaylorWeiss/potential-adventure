import './App.css';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import background from './components/assets/woodBackground.jpg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from './components/Nav';
import { Menu } from './components/Menu';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Landing } from './pages/landing';
import { Shop } from './pages/shop'

const AppWrap = styled.div`
`;

const BackgroundImg = styled.img`
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: -5;
`;


const App = () => {

    const [menuOpen, updateMenuOpen] = useState(false);
    const [firstClick, updateFirstClick] = useState(true);

    const onMenuClick = () => {
        updateFirstClick(false);
        updateMenuOpen(!menuOpen);
    }

    return <Router>
        <AppWrap>
            <BackgroundImg src={background} draggable="false"/>
            <Nav menuClick={onMenuClick}/>
            { !firstClick && <Menu menuClick={onMenuClick} close={!firstClick && !menuOpen}/> }
            <Routes>
                <Route exact path = "/"        element={<Landing/>}/>
                <Route exact path = "/about"   element={<About/>}/>
                <Route exact path = "/contact" element={<Contact/>}/>
                <Route exact path = "/shop"    element={<Shop/>}/>
            </Routes>
        </AppWrap>
    </Router>
};

export default App;
