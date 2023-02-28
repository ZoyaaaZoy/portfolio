import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Scrollup from "./components/Testimonials/Scrollup/Scrollup";

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Skills />
                <Testimonial />
                <Contact />
            </main>

            <Footer />
            <Scrollup />
        </>
    );
}

export default App;
