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


const Service = ({ jsonData }) => {

    const data = JSON.parse(jsonData);

    console.log(data)

    useEffect(() => {
        window.scrollTo({top:0})
        
    }, [])











    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 500 }, // Adjust the duration as needed
      });














    return (
        <div className=" mt-8  ">
            <TopSection title={data.title} />

           


            <animated.div style={props} className="w-full mt-16 flex  justify-center gap-12   items-start max-lg:flex-col-reverse   px-80 max-2xl:px-40 max-xl:px-10 max-lg:px-8  ">

            <LeftSection  content={data.content} />
            <PriceBoxes prices={data.prices} pageTitle={data.title}/>


            </animated.div>
            <Benefits
                benefitsTitle={data.benefitsTitle}
                benefits={data.benefits}
            />
            <Faqs faqs={data.faqs.map((el) => ({...el, key: uuid()}))} />
        </div>
    );
};

export default Service;
