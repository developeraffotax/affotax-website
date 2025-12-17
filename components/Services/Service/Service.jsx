'use client'

import TopSection from "./TopSection";
import PriceBoxes from "./PriceBoxes/PriceBoxes";
import './styles.css'
import Benefits from "./Benefits/Benefits";
import Faqs from "./Faqs/Faqs";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import LeftSection from "./LeftSection";
import { useSpring, animated  } from "@react-spring/web";
import EmailPhone from "./EmailPhone";
import GetAQuoteSection from "./GetAQuoteSection";
import TrustPilotReviews from "@/components/Home/Subpages/TrustPilotReviews";


const Service = ({ jsonData }) => {

    const data = JSON.parse(jsonData);

    

    useEffect(() => {
        window.scrollTo({top:0})
        
    }, [])











    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 500 }, // Adjust the duration as needed
      });














    return (
        <div className=" pt-12  bg-pattern element ">





            <div className="  ">
               
            <TopSection title={data.title} />
            </div>

           
            


            <animated.div style={props} className="w-full my-16 max-lg:my-4   max-lg:mt-4 flex  justify-center gap-16 max-lg:gap-4   items-start max-lg:flex-col-reverse   px-80 max-2xl:px-40 max-xl:px-10 max-lg:px-8  ">

            <div className="w-full ">


            <LeftSection  content={data.content} />


            </div>


            <div className="w-full ">

            <PriceBoxes prices={data.prices} pageTitle={data.title}/>
            
            <div className="w-full max-lg:hidden">
            <Benefits
                benefitsTitle={data.benefitsTitle}
                benefits={data.benefits}
            />
            </div>



            </div>
            

            </animated.div>



            <div className="w-full lg:hidden">

            <Benefits
                benefitsTitle={data.benefitsTitle}
                benefits={data.benefits}
            />
            </div>

            <GetAQuoteSection />

            <Faqs faqs={data.faqs.map((el) => ({...el, key: uuid()}))} />

            <TrustPilotReviews />

            <EmailPhone />   
        </div>
    );
};

export default Service;
