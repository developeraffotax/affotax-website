"use client";

import { useEffect, useState } from "react";
import HomeView from "./HomeView/HomeView";
import axios from "axios";
import { Divider, Input, message, Select, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import EditHero from "./EditHero";
import EditHowItWorks from "./EditHowItWorks";
import EditWhyChooseUs from "./EditWhyChooseUs";
import EditCtaSection from "./EditCtaSection";
import EditLinksSection from "./EditLinksSection";





const Homepage = () => {

    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [keywords, setKeywords] = useState([]);

    const [googleReviewsCount, setGoogleReviewsCount] = useState(0)
    const [trustPilotCount, setTrustPilotCount] = useState(0)


    const [heroHeading, setHeroHeading] = useState('')
    const [heroHtml, setHeroHtml] = useState('')
    const [HeroImageUrl, setHeroImageUrl] = useState('')


    
    const [HowItWorksSectionHeading, setHowItWorksSectionHeading] = useState('');
    const [HowItWorksSectionArray, setHowItWorksSectionArray] = useState([]);

    const [WhyChooseUsSectionHeading, setWhyChooseUsSectionHeading] = useState('');
    const [WhyChooseUsSectionArray, setWhyChooseUsSectionArray] = useState([]);


    const [CTASectionHeading, setCTASectionHeading] = useState('')
    const [CTASectionHtml, setCTASectionHtml] = useState('')

   
    
    const [LinksSectionHeading, setLinksSectionHeading] = useState('')
    const [LinksSectionArray, setLinksSectionArray] = useState([])
    


    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)















    const getData = async () => {
        setIsFetching(true)
        try {
            const res = await axios.get('/api/homepage/get');

           

            if (res.status === 200) {
                const {HeroSection, HowItWorksSection, WhyChooseUsSection, CTASection, LinksSection, metaTitle, metaDescription, keywords, googleReviewsCount, trustPilotCount } = res.data;
                setHeroHeading(HeroSection.heading);
                setHeroHtml(HeroSection.html);
                setHeroImageUrl(HeroSection.imageUrl);

                setHowItWorksSectionHeading(HowItWorksSection.heading)
                setHowItWorksSectionArray(HowItWorksSection.arr)

                
                setWhyChooseUsSectionHeading(WhyChooseUsSection.heading)
                setWhyChooseUsSectionArray(WhyChooseUsSection.arr)


                setCTASectionHeading(CTASection.heading);
                setCTASectionHtml(CTASection.html);



                setLinksSectionHeading(LinksSection.heading);
                setLinksSectionArray(LinksSection.arr);

                setMetaTitle(metaTitle);
                setMetaDescription(metaDescription);
                setKeywords(keywords);

                setGoogleReviewsCount(googleReviewsCount)
                setTrustPilotCount(trustPilotCount)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsFetching(false)
        }

    }







    useEffect(() => {

        getData();


    }, [])
    





    const submitHandler = async () => {
        setIsLoading(true)
        const Homepage = {
            HeroSection: {
                heading: heroHeading,
                html: heroHtml,
                imageUrl: HeroImageUrl
            },
            HowItWorksSection: {
                heading: HowItWorksSectionHeading,
                arr: HowItWorksSectionArray
            },
            WhyChooseUsSection: {
                heading: WhyChooseUsSectionHeading,
                arr: WhyChooseUsSectionArray
            },
            CTASection:{
                heading: CTASectionHeading,
                html: CTASectionHtml
            },
            LinksSection: {
                heading: LinksSectionHeading,
                arr: LinksSectionArray
            },

            metaTitle,
            metaDescription,
            keywords,

            googleReviewsCount,
            trustPilotCount
        }




        try {
            
            const res = await axios.post('/api/homepage/update', Homepage);

           
            
            message.success('Homepage has been updated successfully!😎')

        } catch (error) {
                console.log(error)
            message.error(error?.message || 'Some error occured!')
        } finally {
            setIsLoading(false)
        }

            
    }















	return (
        <>

<Spin spinning={isFetching} size="" fullscreen />
<   div className="w-full flex justify-end "> <button  onClick={submitHandler} className="flex flex-row items-center justify-center rounded-md w-full px-3 py-3 mb-4 text-lg font-semibold text-white bg-teal-500 leading-6 capitalize duration-100 transform  shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"> {isLoading ? 'Updating...!!⏳' : 'Update Homepage'} <span className="ml-1 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className=" w-6 h fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path> </svg> </span> </button> </div>






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


        <Divider style={{ borderColor: "#eb8110" }}> {" "} Review-Section{" "} </Divider>
            <div className="w-full flex justify-start items-center gap-4 ">
           
            <div>
            <label>Google Reviews</label>
            <Input type="number" placeholder="Number of Google Reviews" value={googleReviewsCount} onChange={(e) => setGoogleReviewsCount(e.target.value)} />
            </div>


            <div>
            <label>Trustpilot Reviews</label>
            <Input type="number"  placeholder="Number of Trustpilot Reviews" value={trustPilotCount} onChange={(e) => setTrustPilotCount(e.target.value)} />
            </div>


            </div>
    </div>


</div>



        <Divider style={{ borderColor: "#eb8110" }}> {" "} How-it-Works Section {" "} </Divider>
        <EditHowItWorks HowItWorksSectionHeading={HowItWorksSectionHeading} HowItWorksSectionArray={HowItWorksSectionArray} setHowItWorksSectionHeading={setHowItWorksSectionHeading} setHowItWorksSectionArray={setHowItWorksSectionArray}/>

    
        <Divider style={{ borderColor: "#eb8110" }}> {" "} Why-Choose-Us Section {" "} </Divider>
        <EditWhyChooseUs WhyChooseUsSectionHeading={WhyChooseUsSectionHeading} WhyChooseUsSectionArray={WhyChooseUsSectionArray} setWhyChooseUsSectionHeading={setWhyChooseUsSectionHeading} setWhyChooseUsSectionArray={setWhyChooseUsSectionArray} />
        

        <Divider style={{ borderColor: "#eb8110" }}> {" "} CTA-Section Section {" "} </Divider>
        <EditCtaSection CTASectionHeading={CTASectionHeading} CTASectionHtml={CTASectionHtml} setCTASectionHeading={setCTASectionHeading} setCTASectionHtml={setCTASectionHtml} />





        <Divider style={{ borderColor: "#eb8110" }}> {" "} Who-we-help Pages-Links Section {" "} </Divider>
        <EditLinksSection LinksSectionHeading={LinksSectionHeading} LinksSectionArray={LinksSectionArray} setLinksSectionHeading={setLinksSectionHeading} setLinksSectionArray={setLinksSectionArray} />



        </>
    )
};





































export default Homepage;
