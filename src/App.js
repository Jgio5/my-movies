import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import arrow from './assets/up.png';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
    return (
        <>
            <div className="scrollTop" onClick={scrollToTop}>
                <img src={arrow} alt="" />
            </div>
            <BrowserRouter className="container">
                <Route render={props => (
                    <>
                        <Header {...props} />
                        <Routes />
                        <Footer />

                    </>
                )} />
            </BrowserRouter> 
        </>
    );
}

// Funzione Fadein back to top button on page
window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


export default App;