"use client"

import { Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import mongoose from "mongoose";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';


const EditLinksSection = ({ LinksSectionHeading, LinksSectionArray, setLinksSectionHeading, setLinksSectionArray, }) => {
	// create array handlers here for this section





    const [title, setTitle] = useState('');
    const [path, setPath] = useState('');

    const [editId, setEditId] = useState('');

    









    const onEdit = (id) => {

        setEditId(id);

        const toBeEditItem = LinksSectionArray.find((el) => el._id === id);
        setTitle(toBeEditItem.title)
        setPath(toBeEditItem.path)
        




    }



    const onDelete = (id) => {

        if (id === editId) {
            return;
        }
        
        setLinksSectionArray((prev) => {

            return [...prev].filter((el) => el._id !== id);


        })
        





    }





    const onComplete = () => {

        if(path.toString().charAt(0) !== "/") {
            return message.warning('Start with / Please😐');
        }


     
        if (editId) {
            const newArr = [...LinksSectionArray]

            const editIndex = newArr.findIndex((el) => el._id === editId);

            newArr[editIndex].title = title;
            newArr[editIndex].path = path;

            setLinksSectionArray(newArr);
        } else {
            
            setLinksSectionArray((prev) => {
                const newArr = [...prev]
                newArr.push({title, path, _id: new mongoose.Types.ObjectId(),})
                return newArr;
            })
        }


        setEditId('');
        setTitle('');
        setPath('');
    }



















	return (
		<section className="w-full flex flex-row gap-16 justify-center items-start ">
			<div className="w-[50%] flex flex-col justify-center items-center ">
				<div className="w-full">
					<label>Heading</label>
					<Input placeholder="Heading for this Section" value={LinksSectionHeading} onChange={(e) => setLinksSectionHeading(e.target.value) } />
				</div>

				<ul className="w-full ">
					{LinksSectionArray.map((el) => {
						return (
							<li key={el._id} className="flex-start group relative flex lg:flex-col" >
								<div className="ml-6 lg:ml-0 lg:mt-4">
									{/* <div><img src={el.iconUrl} alt={el.title} /> </div> */}
									<div className="w-full flex justify-between items-center gap-4">
                                    <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
										{el.title}
									</h3>
                                    <div className="flex gap-4">
                                        <BiEdit onClick={() => onEdit(el._id)} className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer'/>
                                        <RiDeleteBin6Line onClick={() => onDelete(el._id)}  className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer' />
                                    </div>
                                    </div>

									<h4 className="mt-2 text-base   bg-orange-100 rounded-md text-orange-800 px-3 py-2">
										{el.path}
									</h4>
                                   
								</div>
                                
							</li>
						);
					})}
				</ul>
			</div>

			<div className="w-[50%] flex flex-col justify-center items-center px-16 py-8 gap-8 bg-gradient-to-l from-gray-50 to-slate-50 rounded-2xl shadow-md ">


           <div className="w-full ">
            <label>Title</label>
            <Input placeholder="Edit Title" value={title} onChange={(e) => setTitle(e.target.value)} />
           </div>

            <div className="w-full ">
                <label>Path</label>
                <Input variant="filled"   placeholder="Edit Path" value={path} onChange={(e) => setPath(e.target.value)} />
                <p className=" text-end  text-sm mt-3 font-semibold "><span className="">🔴 Keep In Mind:</span> Always start path with "/"</p>
            </div>

            <div className="w-full flex justify-between items-center gap-5 ">

                <button onClick={onComplete} type='button' className='py-2.5 pl-6 pr-3.5 text-sm bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 flex items-center hover:bg-indigo-100'> {editId ? 'Update' : 'Add New Link'} <svg class='ml-3' width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1' stroke='#5551FF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path> </svg> </button>
                {editId && <button onClick={() => {setEditId(''); setTitle(); setPath();}} type='button' className='py-2.5 px-6 text-sm rounded-full font-semibold text-indigo-500 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700'>I want to add New Link🧡</button>
                }
            </div>
            

            </div>
		</section>
	);
};

export default EditLinksSection;
