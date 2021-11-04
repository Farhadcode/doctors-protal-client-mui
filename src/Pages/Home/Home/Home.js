import React from 'react';
import './Home.css'
import Header from './../Header/Header';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;