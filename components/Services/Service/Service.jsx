'use client'

import TopSection from "./TopSection";
import PriceBoxes from "./PriceBoxes/PriceBoxes";
import Benefits from "./Benefits/Benefits";
import Faqs from "./Faqs/Faqs";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";


const Service = ({ data }) => {

    


    useEffect(() => {
        window.scrollTo({top:0})
        
    }, [])
    return (
        <div className="">
            <TopSection title={data.title} content={data.content} />
            <PriceBoxes prices={data.prices} pageTitle={data.title}/>
            <Benefits
                benefitsTitle={data.benefitsTitle}
                benefits={data.benefits}
            />
            <Faqs faqs={data.faqs.map((el) => ({...el, key: uuid()}))} />
        </div>
    );
};

export default Service;
