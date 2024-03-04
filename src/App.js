import './App.css';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { URLProvider } from './contexts/useURL';
import { Nav } from './components/Nav';
import { Menu } from './components/Menu';
import { Contact } from './pages/contact';
import { Landing } from './pages/landing';
import { Footer } from './components/Footer';
import { Products } from './pages/products';

const Blur = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: 2;
    backdrop-filter: blur(2px);
`;

const AppWrap = styled.div`
        overflow-y: ${props => props.$menuOpen ? "hidden" : "scroll"};
        height: 100vh;
    `;

const App = () => {

    const [menuOpen, updateMenuOpen] = useState(false);
    const [firstClick, updateFirstClick] = useState(true);


    const onMenuClick = () => {
        updateFirstClick(false);
        updateMenuOpen(!menuOpen);
    }

    return <Router basename={process.env.PUBLIC_URL}>
        <AppWrap id="AppWrap" $menuOpen={menuOpen}>
            <URLProvider>
                <Nav menuClick={onMenuClick}/>
                { !firstClick && <Menu menuClick={onMenuClick} close={!firstClick && !menuOpen}/> }
                { menuOpen && <Blur onClick={onMenuClick}/> }
                <Routes>
                    <Route exact path = {"/"}             element={<Landing/>}/>
                    <Route exact path = {"/our-products"} element={<Products/>}/>
                    <Route exact path = {"/contact-us"}   element={<Contact/>}/>
                    <Route path = "*"                     element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </URLProvider>
        </AppWrap>
    </Router>
};
//<Route exact path = "/our-story"    element={<About/>}/>

export default App;
