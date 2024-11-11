import './App.css';
import { styled, keyframes, css } from "styled-components";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { URLProvider } from './contexts/useURL';
import { Nav } from './components/Nav';
import { Menu } from './components/Menu';
import { Contact } from './pages/contact';
import { Landing } from './pages/landing';
import { Footer } from './components/Footer';
import { Products } from './pages/products';
import { useMediaQuery } from 'react-responsive';

const Blur = styled.div`
    position: fixed;
    width: 100vw;
    height: 100lvh;
    z-index: 2;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
`;

const AppWrap = styled.div`
    position: relative;
    overflow-x: hidden;
`;

const BackgroundWrap = styled.div`
    background-image: url("./pages/landing/assets/paper.jpg");
    background-size: 100%;
`;

const App = () => {

    const [menuOpen, updateMenuOpen] = useState(false);
    const [firstClick, updateFirstClick] = useState(true);


    const onMenuClick = () => {
        updateFirstClick(false);
        updateMenuOpen(!menuOpen);
    }

    useEffect(() => {
        document.documentElement.style.overflow = (menuOpen ? "hidden" : "auto");
        /*
        if(menuOpen)
            document.documentElement.style.overflow = "hidden";
        else
            delete document.documentElement.style.overflow;
        */

    },[menuOpen])

    return <Router>
        <AppWrap>
            <BackgroundWrap>
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
                    { !useMediaQuery({ query:'(max-width: 700px)'}) && <Footer/> }
                </URLProvider>
            </BackgroundWrap>
        </AppWrap>
    </Router>
};

export default App;
