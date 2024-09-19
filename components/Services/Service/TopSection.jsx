'use client'

import React from "react";

const TopSection = ({ title, content }) => {

    let html = content.html || null;

    console.log(html)
    


    return (
        <section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 max-lg:mt-4 py-8 ">
            <div className="container mx-auto flex flex-col justify-center items-start  ">
                <h1 className="text-3xl font-semibold ">{title}</h1>

                {
                    html ? <p dangerouslySetInnerHTML={{__html: html}}  ></p> : <p>{content}</p>
                }
            </div>
        </section>
    );
};

export default TopSection;
