"use client"

import { CustomEditor } from "@/lib/Editor";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
const EditCtaSection = ({ CTASectionHeading, CTASectionHtml, setCTASectionHeading, setCTASectionHtml, }) => {
	// create array handlers here for this section





	return (
		<section className="w-full flex flex-row gap-16 justify-start items-start ">
			<div className="w-[50%] flex flex-col justify-center items-center ">
				<div className="w-full">
					<label>Heading</label>
					<Input placeholder="Heading for this Section" value={CTASectionHeading} onChange={(e) => setCTASectionHeading(e.target.value) } />

                    <label>Content</label>
	                <CustomEditor value={CTASectionHtml} setValue={setCTASectionHtml} />
				</div>

				
			</div>

		</section>
	);
};

export default EditCtaSection;
