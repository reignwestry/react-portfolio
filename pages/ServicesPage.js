import React from 'react';

//# Components
import Header from './../src/components/Header';
import HeroSection from './../src/components/HeroSection';
import ShowcaseSection from './../src/components/Showcase';
import ServicesSection from './../src/components/ServicesSection';
import ContactSection from './../src/components/ContactSection';


const ServicesPage = (
    <div className="App">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <ContactSection />
        <h1>REACT is working</h1>
    </div>
);

export default ServicesPage;