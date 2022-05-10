import React from 'react';
import Contact from '../../Contact/Contact';
import Reviews from '../../Reviews/Reviews';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Terms></Terms>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;