import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Wood } from './sections/Wood';
import { Delivery } from './sections/Delivery';
import { Contact } from './sections/Contact';

const App = () => (
    <>
        <Nav/>
        <main>
            <Hero/>
            <Story/>
            <Wood/>
            <Delivery/>
            <Contact/>
        </main>
        <Footer/>
    </>
);

export default App;
