import React from 'react';





//# Components
import Header from './../components/Header';
import HeroSection from './../components/HeroSection';
import ShowcaseSection from './../components/Showcase';
import ServicesSection from './../components/ServicesSection';
import ContactSection from './../components/ContactSection';
/*
    todo FINISH MENU AND HERO SECTION
    todo ADD the rest of the sections
    TODO ADD EXPRESSJS to run in server


*/

class GalleryPage extends React.Component{
    render(){
        return (
        <div className="App">
            <Header />
            <HeroSection />
            <ServicesSection />
            <ShowcaseSection />
            <ContactSection />
            <h1>REACT is working</h1>
        </div>
        );
    }
}

export default GalleryPage;