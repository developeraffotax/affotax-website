"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { LiaStarSolid } from "react-icons/lia";

import Review from "./Review";

import P1 from "@/public/person1.jpg";
import P2 from "@/public/person2.jpg";
import P3 from "@/public/person3.jpg";
import P4 from "@/public/person4.jpg";
import P5 from "@/public/person5.jpg";


const reviewArr = [
	{
		name: "Thompson Everdeen",
		img: P1,
		title: "Founder of Thompson's Boutique",
		content:
			"Very professional and expert team. I am very satisfied with the exceptional service provided by Affotax. Would definitely purchase your services in the future. ",
	},

	{
		name: "Daniel Plainview",
		img: P2,
		title: "CEO of TechSolutions Inc.",
		content:
			"Working with Affotax was the best experience. Their expertise speaks loudly throughout the entire process. They understood my requirements and provided me exactly what I wanted. ",
	},

	{
		name: "Hans Landa ",
		img: P3,
		title: "Co-Founder of InnovateHub Technologies",
		content:
			"The best accountancy firm in the UK. Very professional and quick team. They worked till I was satisfied and informed me at every stage of the process. They involved me and I felt confident in the decisions being made. 100% recommended! ",
	},

	{
		name: "Lauren Mitchell",
		img: P4,
		title: "Owner of Mitchell Design Studio",
		content:
			"I was recommended to Affotax by a colleague, and it turned out to be one of the best decisions for my business. Affotax has become an integral part of my business journey, providing the services and expertise that every entrepreneur needs. I wholeheartedly endorse their services. ",
	},

	{
		name: "Scout Finch",
		img: P5,
		title: "Founder of The Finch Publishers",
		content:
			"I have had the pleasure of working with Affotax for the past three years, and I am continually impressed by their expertise and attention to details. I am confident in recommending their services to fellow entrepreneurs.  ",
	},
];

export default function Reviews() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slides: {
			perView: 1,
		},

		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});

	return (
		<>
			<section className="py-16 relative w-full ">
				<div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
					<div className="w-full">
						<h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
							Our customer reviews
						</h2>

 





							








						<div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
							<div className="box flex flex-col gap-y-4 w-full ">
								<div className="flex items-center w-full">
									<p className="font-medium text-lg text-black mr-0.5"> 5 </p>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_12042_8589)"> <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_12042_8589"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
									<p className="h-2 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3"> <span className="h-full w-[80%] rounded-3xl bg-amber-400 flex"></span> </p>
									<p className="font-medium text-lg  text-black mr-0.5"> 989 </p>
								</div>
								<div className="flex items-center w-full">
									<p className="font-medium text-lg text-black mr-0.5"> 4 </p>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_12042_8589)"> <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_12042_8589"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
									<p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3"> <span className="h-full w-[40%] rounded-3xl bg-amber-400 flex"></span> </p>
									<p className="font-medium text-lg text-black mr-0.5"> 451 </p>
								</div>
								<div className="flex items-center">
									<p className="font-medium text-lg text-black mr-0.5"> 3 </p>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_12042_8589)"> <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_12042_8589"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
									<p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3"> <span className="h-full w-[20%] rounded-3xl bg-amber-400 flex"></span> </p>
									<p className="font-medium text-lg text-black mr-0.5"> 9 </p>
								</div>
								<div className="flex items-center">
									<p className="font-medium text-lg text-black mr-0.5"> 2 </p>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_12042_8589)"> <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_12042_8589"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
									<p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3"> <span className="h-full w-[16%] rounded-3xl bg-amber-400 flex"></span> </p>
									<p className="font-medium text-lg text-black mr-0.5"> 4 </p>
								</div>
								<div className="flex items-center">
									<p className="font-medium text-lg text-black mr-0.5"> 1 </p>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <g clipPath="url(#clip0_12042_8589)"> <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_12042_8589"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
									<p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3"> <span className="h-full w-[8%] rounded-3xl bg-amber-400 flex"></span> </p>
									<p className="font-medium text-lg py-[1px] text-black mr-0.5"> 1 </p>
								</div>
							</div>
							<div className="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
								<h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6"> 4.7 </h2>
								<div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" > <g clipPath="url(#clip0_13624_2608)"> <path d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_13624_2608"> <rect width="44" height="44" fill="white" /> </clipPath> </defs> </svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" > <g clipPath="url(#clip0_13624_2608)"> <path d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_13624_2608"> <rect width="44" height="44" fill="white" /> </clipPath> </defs> </svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" > <g clipPath="url(#clip0_13624_2608)"> <path d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_13624_2608"> <rect width="44" height="44" fill="white" /> </clipPath> </defs> </svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" > <g clipPath="url(#clip0_13624_2608)"> <path d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_13624_2608"> <rect width="44" height="44" fill="white" /> </clipPath> </defs> </svg>
									<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" > <g clipPath="url(#clip0_13624_2608)"> <path d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z" fill="#FBBF24" /> </g> <defs> <clipPath id="clip0_13624_2608"> <rect width="44" height="44" fill="white" /> </clipPath> </defs> </svg>
								</div>
								<p className="font-medium text-xl leading-8 text-gray-900 text-center"> 1454 Reviews </p>
							</div>
						</div>

						<div className="navigation-wrapper w-full">
							<div ref={sliderRef} className="keen-slider w-full">
								{reviewArr.map((el, i) => {
									return (
										<div
											key={i}
											className="keen-slider__slide     "
										>
											<Review {...el} />
										</div>
									);
								})}
							</div>

							{/* {loaded && instanceRef.current && (
								<>
									<Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev() } disabled={currentSlide === 0} />

									<Arrow onClick={(e) => e.stopPropagation() || instanceRef.current?.next() } disabled={ currentSlide === instanceRef.current.track.details .slides.length - 1 } />
								</>
							)} */}

							{loaded && instanceRef.current && (
								<div className="dots">
									{[
										...Array( instanceRef.current.track.details .slides.length ).keys(),
									].map((idx) => {
										return ( <button aria-label={`slider-nav-button`} key={idx} onClick={() => { instanceRef.current?.moveToIdx( idx ); }} className={ "dot" + (currentSlide === idx ? " active" : "") } ></button> );
									})}
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}



// function Arrow(props) {
// 	const disabled = props.disabled ? " arrow--disabled" : "";
// 	return (
// 		<svg
// 			onClick={props.onClick}
// 			className={`arrow ${
// 				props.left ? "arrow--left" : "arrow--right"
// 			} ${disabled}`}
// 			xmlns="http://www.w3.org/2000/svg"
// 			viewBox="0 0 24 24"
// 			fill="#23314E"
// 		>
// 			{props.left && (
// 				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
// 			)}
// 			{!props.left && (
// 				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
// 			)}
// 		</svg>
// 	);
// }
