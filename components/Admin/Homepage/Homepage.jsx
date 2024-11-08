"use client";

import { useEffect, useState } from "react";
import HomeView from "./HomeView/HomeView";
import axios from "axios";
import { Divider, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import EditHero from "./EditHero";
import EditHowItWorks from "./EditHowItWorks";





const Homepage = () => {

    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [keywords, setKeywords] = useState([]);


    // const [HeroSection, setHeroSection] = useState({
    //     heading: '',
    //     html: '',
    //     imageUrl: '',
       
    // });

    const [heroHeading, setHeroHeading] = useState('')
    const [heroHtml, setHeroHtml] = useState('')
    const [HeroImageUrl, setHeroImageUrl] = useState('')


    
    const [HowItWorksSectionHeading, setHowItWorksSectionHeading] = useState('');
    const [HowItWorksSectionArray, setHowItWorksSectionArray] = useState([]);

    const [WhyChooseUsSection, setWhyChooseUsSection] = useState({
        heading: '',
        arr: []
    });

    const [CTASection, setCTASection] = useState({
        heading: '',
        html: '',
    });

    const [LinksSection, setLinksSection] = useState({
        heading: '',
        arr: []
    });








    const HeroSectionHandler = {
        inputHandler : () => {
            setHeroSection((prev) => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            })
        },

        htmlHandler : () => {
            setHeroSection((prev) => {
                return {
                    ...prev,
                    html: e.target.value
                }
            })
        },

        imgHandler: (url) => {
            setHeroSection((prev) => {
                return {
                    ...prev,
                    imageUrl: url
                }
            })
        }

        
    }







































    const getData = async () => {

        try {
            const res = await axios.get('/api/homepage/get');

            console.log(res)

            if (res.status === 200) {
                const {HeroSection, HowItWorksSection, WhyChooseUsSection, CTASection, LinksSection, metaTitle, metaDescription, keywords } = res.data;
                setHeroHeading(HeroSection.heading);
                setHeroHtml(HeroSection.html);
                setHeroImageUrl(HeroSection.imageUrl);

                setHowItWorksSectionHeading(HowItWorksSection.heading)
                setHowItWorksSectionArray(HowItWorksSection.arr)
                


                setWhyChooseUsSection(WhyChooseUsSection);
                setCTASection(CTASection);
                setLinksSection(LinksSection);

                setMetaTitle(metaTitle);
                setMetaDescription(metaDescription);
                setKeywords(keywords);
            }

        } catch (error) {
            console.log(error)
        }

    }







    useEffect(() => {

        getData();


    }, [])
    





    const submitHandler = async () => {

        const Homepage = {
            HeroSection,
            HowItWorksSection,
            WhyChooseUsSection,
            CTASection,
            LinksSection,

            metaTitle,
            metaDescription,
            keywords
        }




        try {
            
            const res = await axios.post('/api/homepage/update', Homepage);

            console.log(res)

            message.success('Pricing Page has been updated successfully!😎')

        } catch (error) {
                console.log(error)
        }












            
    }















	return (
        <>


<div className="w-full flex justify-end "> <button  onClick={submitHandler} className="flex flex-row items-center justify-center rounded-md w-full px-3 py-3 mb-4 text-lg font-semibold text-white bg-teal-500 leading-6 capitalize duration-100 transform  shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"> Update Homepage <span className="ml-1 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className=" w-6 h fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path> </svg> </span> </button> </div>






<div className="w-full flex gap-8 justify-start items-start ">

    <div className="w-[50%] flex flex-col  gap-2">
    
    <Divider style={{ borderColor: "#eb8110" }}> {" "} Hero-Section {" "} </Divider>
    <EditHero heroHeading={heroHeading} heroHtml={heroHtml} HeroImageUrl={HeroImageUrl} setHeroHeading={setHeroHeading} setHeroHtml={setHeroHtml} setHeroImageUrl={setHeroImageUrl} />

    </div>
    
    <div className="w-[50%] flex flex-col  gap-2">
    <Divider style={{ borderColor: "#eb8110" }}> {" "} SEO-Section{" "} </Divider>
        <label>Meta Title</label>
        <Input placeholder="Meta title for the page" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />

        <label>Meta Description</label>
        <TextArea rows={4} placeholder="Write a short meta description here!" maxLength={800} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />

        <label>Keywords</label>
        <Select mode="tags" style={{ width: "100%" }} placeholder="Keywords" onChange={(value) =>  setKeywords(value) } value={keywords} />
    </div>


</div>



<Divider style={{ borderColor: "#eb8110" }}> {" "} How-it-Works Section {" "} </Divider>




        <EditHowItWorks HowItWorksSectionHeading={HowItWorksSectionHeading} HowItWorksSectionArray={HowItWorksSectionArray} setHowItWorksSectionHeading={setHowItWorksSectionHeading} setHowItWorksSectionArray={setHowItWorksSectionArray}/>

        
            
        
        </>
    )
};





































export default Homepage;
