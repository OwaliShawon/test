import React from 'react';
import DoctorBanner from '../../components/HomeComponent/DoctorBanner/DoctorBanner';
import Services from '../../components/HomeComponent/Services/Services';
import Testimonials from '../../components/HomeComponent/Testimonials/Testimonials';
import AppointmentBanner from './../../components/AppointmentComponent/AppointmentBanner/AppointmentBanner';
import HeroBanner from './../../components/HomeComponent/HeroBanner/HeroBanner';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <DoctorBanner></DoctorBanner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;