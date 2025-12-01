import React from 'react';
import Hero from '../components/home/Hero';
import HowToBecomePilot from '../components/home/HowToBecomePilot';
import LearnWithTrust from '../components/home/LearnWithTrust';
import EarnYourWings from '../components/home/EarnYourWings';
import WhoCanJoin from '../components/home/WhoCanJoin';
import SimplifyingPrep from '../components/home/SimplifyingPrep';
import FeaturedCourses from '../components/home/FeaturedCourses';
import MeetTheCrew from '../components/home/MeetTheCrew';
import DGCARequirements from '../components/home/DGCARequirements';
import FAQPreview from '../components/home/FAQPreview';
import RecruitersStrip from '../components/home/RecruitersStrip';
import CTABanner from '../components/home/CTABanner';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <HowToBecomePilot />
            <LearnWithTrust />
            <EarnYourWings />
            <WhoCanJoin />
            <SimplifyingPrep />
            <FeaturedCourses />
            <MeetTheCrew />
            <DGCARequirements />
            <FAQPreview />
            <RecruitersStrip />
            <CTABanner />
        </div>
    );
};

export default Home;
