import React from 'react';
import BgInfo from '../BgInfo/BgInfo';
import OurActivities from '../OurActivities/OurActivities';
import ClientReview from '../ClientReview/ClientReview';
import EquiDeFiEducation from '../EquiDeFiEducation/EquiDeFiEducation';
import ScheduleDemo from '../Schedule/ScheduleDemo/ScheduleDemo';
import Partnerships from './Partnerships/Partnerships';
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
        <div className='home-container'>
        
           <BgInfo/>
            <OurActivities/>
            <ClientReview/>
            <EquiDeFiEducation/>
            <Partnerships/>
            <ScheduleDemo/>
           </div>
        </div>
    );
};

export default Home;