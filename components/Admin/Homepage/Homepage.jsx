"use client";

import { useState } from "react";
import HomeView from "./HomeView/HomeView";





const Homepage = () => {

    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [keywords, setKeywords] = useState([]);


    const [HeroSection, setHeroSection] = useState({
        heading: '',
        html: '',
        imageUrl: '',
        btn1Text: '',
        btn2Text: '',
        btnColor: '',
        bgColor: ''
    });

    const [HowItWorksSection, setHowItWorksSection] = useState({
        heading: '',
        arr: []
    });

    const [WhyChooseUsSection, setWhyChooseUsSection] = useState({
        heading: '',
        arr: []
    });

    const [CTASection, setCTASection] = useState({
        heading: '',
        html: '',
        bgColor: '',

        btnText: '',
        btnColor: ''
    });

    const [LinksSection, setLinksSection] = useState({
        heading: '',
        arr: []
    });












    

















	return (
        <>
        
        
        
            <HomeView data={{HeroSection, HowItWorksSection, WhyChooseUsSection, CTASection, LinksSection}} handlers={{setHeroSection, setHowItWorksSection, setWhyChooseUsSection, setCTASection, setLinksSection}} />
        
        
        
        
        
        </>
    )
};





































export default Homepage;
