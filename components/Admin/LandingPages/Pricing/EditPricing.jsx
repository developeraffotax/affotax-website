"use client";

import { Button, Input, message, Modal, Space, Spin, Table } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LoadingOutlined } from "@ant-design/icons";
import { deleteNewPage } from "@/actions/whoWeHelpPage";
import { CgDanger } from "react-icons/cg";
import PricingTemplate from "./PricingTemplate";
import { BsCheck2Square } from "react-icons/bs";

export default function EditPricingComponent() {
	// const [open, setOpen] = useState(false);
	// const [modalDltLink, setModalDltLink] = useState('')

	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState({
	//     is: false,
	//     msg: ''
	// });



    const [isEditMode, setIsEditMode] = useState(false);



    
	const emptyObjectforInit = {
		pkgName: "",
		pkgPrice: "",
		pkgTurnover: "",
		packageIncludes: [],
		footerText: "",
	};

    const [editService, setEditService] = useState('')
    const [isServiceEdit, setIsServiceEdit] = useState(false)
    const [serviceEditIndex, setServiceEditIndex] = useState('')

    const [finalArr, setFinalArr] = useState([]);
    const [service, setService] = useState('')


	const [data, setData] = useState({
		title: "",
		first: emptyObjectforInit,
		second: emptyObjectforInit,
		third: emptyObjectforInit,
	});



    const [title, setTitle] = useState({
            isEditing: false,
            value: ''
    });

    const [first, setFirst] = useState({
        pkgName: {
            isEditing: false,
            value: ''
        },
		pkgPrice: {
            isEditing: false,
            value: ''
        },
		pkgTurnover: {
            isEditing: false,
            value: ''
        },
		packageIncludes: {
            isEditing: false,
            value: []
        },
		footerText: {
            isEditing: false,
            value: ''
        },

    });

    const [second, setSecond] = useState({
        pkgName: {
            isEditing: false,
            value: ''
        },
		pkgPrice: {
            isEditing: false,
            value: ''
        },
		pkgTurnover: {
            isEditing: false,
            value: ''
        },
		packageIncludes: {
            isEditing: false,
            value: []
        },
		footerText: {
            isEditing: false,
            value: ''
        },

    });

    const [third, setThird] = useState({
        pkgName: {
            isEditing: false,
            value: ''
        },
		pkgPrice: {
            isEditing: false,
            value: ''
        },
		pkgTurnover: {
            isEditing: false,
            value: ''
        },
		packageIncludes: {
            isEditing: false,
            value: []
        },
		footerText: {
            isEditing: false,
            value: ''
        },

    });



    const [url, setUrl] = useState(() => {

        const pageUrl = localStorage?.getItem('landing-page-url');

		if(!pageUrl) {
			return;
		} else {
			return pageUrl;
		}


    });
	


	// //Setting the page url on the first mounting
	// useEffect(() => {
		

	// }, [])




    const editingHandler1 = {

        pkgName: () => setFirst((prev) => ({...prev, pkgName: {...prev.pkgName, isEditing: true}})),
        pkgPrice: () => setFirst((prev) => ({...prev, pkgPrice: {...prev.pkgPrice, isEditing: true}})),
        pkgTurnover: () => setFirst((prev) => ({...prev, pkgTurnover: {...prev.pkgTurnover, isEditing: true}})),

        footerText: () => setFirst((prev) => ({...prev, footerText: {...prev.footerText, isEditing: true}})),


    }



    
    const editingHandler2 = {

        pkgName: () => setSecond((prev) => ({...prev, pkgName: {...prev.pkgName, isEditing: true}})),
        pkgPrice: () => setSecond((prev) => ({...prev, pkgPrice: {...prev.pkgPrice, isEditing: true}})),
        pkgTurnover: () => setSecond((prev) => ({...prev, pkgTurnover: {...prev.pkgTurnover, isEditing: true}})),

        footerText: () => setSecond((prev) => ({...prev, footerText: {...prev.footerText, isEditing: true}})),


    }


    
    const editingHandler3 = {

        pkgName: () => setThird((prev) => ({...prev, pkgName: {...prev.pkgName, isEditing: true}})),
        pkgPrice: () => setThird((prev) => ({...prev, pkgPrice: {...prev.pkgPrice, isEditing: true}})),
        pkgTurnover: () => setThird((prev) => ({...prev, pkgTurnover: {...prev.pkgTurnover, isEditing: true}})),

        footerText: () => setThird((prev) => ({...prev, footerText: {...prev.footerText, isEditing: true}})),


    }






    const onChangeHandler1 = (e) => {

        

        switch (e.target.name) {
            case 'pkgName': return setFirst((prev) => ({...prev, pkgName: {...prev.pkgName, value: e.target.value}}));
            case 'pkgPrice': return setFirst((prev) => ({...prev, pkgPrice: {...prev.pkgPrice, value: e.target.value}}));
            case 'pkgTurnover': return setFirst((prev) => ({...prev, pkgTurnover: {...prev.pkgTurnover, value: e.target.value}}));
            case 'footerText': return setFirst((prev) => ({...prev, footerText: {...prev.footerText, value: e.target.value}}));
                   
        }

    }


    const onChangeHandler2 = (e) => {


        switch (e.target.name) {
            case 'pkgName': return setSecond((prev) => ({...prev, pkgName: {...prev.pkgName, value: e.target.value}}));
            case 'pkgPrice': return setSecond((prev) => ({...prev, pkgPrice: {...prev.pkgPrice, value: e.target.value}}));
            case 'pkgTurnover': return setSecond((prev) => ({...prev, pkgTurnover: {...prev.pkgTurnover, value: e.target.value}}));
            case 'footerText': return setSecond((prev) => ({...prev, footerText: {...prev.footerText, value: e.target.value}}));
                   
        }

    }



    const onChangeHandler3 = (e) => {


        switch (e.target.name) {
            case 'pkgName': return setThird((prev) => ({...prev, pkgName: {...prev.pkgName, value: e.target.value}}));
            case 'pkgPrice': return setThird((prev) => ({...prev, pkgPrice: {...prev.pkgPrice, value: e.target.value}}));
            case 'pkgTurnover': return setThird((prev) => ({...prev, pkgTurnover: {...prev.pkgTurnover, value: e.target.value}}));
            case 'footerText': return setThird((prev) => ({...prev, footerText: {...prev.footerText, value: e.target.value}}));
                   
        }

    }






    const onEnterHandler1 = (e) => {



        if (e.key === 'Enter') {
            const name = e.target.name;
            setFirst((prev) => {
                return {
                    ...prev,
                    [name]: {
                        ...prev[name],
                        isEditing: false
                    }
           }
        })
        } else {
            return;
        }

    }


    const onEnterHandler2 = (e) => {

        if (e.key === 'Enter') {
            const name = e.target.name;
            setSecond((prev) => {
                return {
                    ...prev,
                    [name]: {
                        ...prev[name],
                        isEditing: false
                    }
           }
        })
        } else {
            return;
        }

    }



    const onEnterHandler3 = (e) => {

        if (e.key === 'Enter') {
            const name = e.target.name;
            setThird((prev) => {
                return {
                    ...prev,
                    [name]: {
                        ...prev[name],
                        isEditing: false
                    }
           }
        })
        } else {
            return;
        }

    }


    










	const getData = async () => {
		try {


            console.log("THE URL FOR HTIS PAGE IS😎😋", url.split('/'))

			const res = await axios.get(`/api/landing-pages/pricing/get/${url.split('/')[4]}`);
           

			if (res.status === 200) {
				console.log(res);

                setTitle({
                    isEditing: false,
                    value: res.data.title || 'Enter Title Here'
                })

                setFinalArr(res.data.finalArr || [])

				//setData(res.data);

                setFirst({
                    pkgName: {
                        isEditing: false,
                        value: res.data.first.pkgName
                    },
                    pkgPrice: {
                        isEditing: false,
                        value: res.data.first.pkgPrice
                    },
                    pkgTurnover: {
                        isEditing: false,
                        value: res.data.first.pkgTurnover
                    },
                    packageIncludes: {
                        isEditing: false,
                        value: res.data.first.packageIncludes
                    },
                    footerText: {
                        isEditing: false,
                        value: res.data.first.footerText
                    },
                })


                setSecond({
                    pkgName: {
                        isEditing: false,
                        value: res.data.second.pkgName
                    },
                    pkgPrice: {
                        isEditing: false,
                        value: res.data.second.pkgPrice
                    },
                    pkgTurnover: {
                        isEditing: false,
                        value: res.data.second.pkgTurnover
                    },
                    packageIncludes: {
                        isEditing: false,
                        value: res.data.second.packageIncludes
                    },
                    footerText: {
                        isEditing: false,
                        value: res.data.second.footerText
                    },
                })


                setThird({
                    pkgName: {
                        isEditing: false,
                        value: res.data.third.pkgName
                    },
                    pkgPrice: {
                        isEditing: false,
                        value: res.data.third.pkgPrice
                    },
                    pkgTurnover: {
                        isEditing: false,
                        value: res.data.third.pkgTurnover
                    },
                    packageIncludes: {
                        isEditing: false,
                        value: res.data.third.packageIncludes
                    },
                    footerText: {
                        isEditing: false,
                        value: res.data.third.footerText
                    },
                })
			} else {
			}
		} catch (error) {
			console.log(error);
            message.error(error?.response?.data?.message || "Some error occured")
		}
	};






	useEffect(() => {
		getData();
	}, []);






    const serviceEditHandler = (el, index) => {

        setIsServiceEdit(true);
        setServiceEditIndex(index.toString());


        setEditService(el)



    }




    const submitServiceEditHandler = (el, index) => {

        


        setFinalArr((prev) => {

            const newArr = [...prev];

            newArr[index] = editService;

            return newArr;



        })

        setIsServiceEdit(false);
        setServiceEditIndex('');


        setEditService('')





    }





    const serviceDltHandler = (el, index) => {

        setFinalArr((prev) => {

            return prev.filter((element, i) => i !== index)

        })
        


    }


















    // fpr the new serivce
    const modalServiceInputHandler = (e) => {

        setService(e.target.value);


    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);

      setFinalArr((prev) => {

        return [...prev, service];


      })

      setService('')

    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };







    const firstArrHandler = {
        add : () => {
            setFirst((prev) => {

                const newPackageIncludes = [...prev.packageIncludes.value];
                newPackageIncludes[parseInt(serviceEditIndex)] = editService;
    
                return {
                    ...prev,
                    packageIncludes: {
                        ...prev.packageIncludes,
                        value: newPackageIncludes
                    }
                }
            });

            setIsServiceEdit(false);
            setServiceEditIndex('');
        },

        remove: () => {
            setFirst((prev) => {

                const newPackageIncludes = [...prev.packageIncludes.value]
                newPackageIncludes[parseInt(serviceEditIndex)] = '';
    
    
                return {
                    ...prev,
                    packageIncludes: {
                        ...prev.packageIncludes,
                        value: newPackageIncludes
                    }
                }
            });

            setIsServiceEdit(false);
            setServiceEditIndex('');
        }
    }








    
    const secondArrHandler = {
        add : () => {
            setSecond((prev) => {

                const newPackageIncludes = [...prev.packageIncludes.value];
                newPackageIncludes[parseInt(serviceEditIndex)] = editService;
    
                return {
                    ...prev,
                    packageIncludes: {
                        ...prev.packageIncludes,
                        value: newPackageIncludes
                    }
                }
            });

            setIsServiceEdit(false);
            setServiceEditIndex('');
        },

        remove: () => {
            setSecond((prev) => {

                const newPackageIncludes = [...prev.packageIncludes.value]
                newPackageIncludes[parseInt(serviceEditIndex)] = '';
    
    
                return {
                    ...prev,
                    packageIncludes: {
                        ...prev.packageIncludes,
                        value: newPackageIncludes
                    }
                }
            });

            setIsServiceEdit(false);
            setServiceEditIndex('');
        }
    }






    
    const thirdArrHandler = {
        add : () => {
            setThird((prev) => {

                const newPackageIncludes = [...prev.packageIncludes.value];
                newPackageIncludes[parseInt(serviceEditIndex)] = editService;
    
                return {
                    ...prev,
                    packageIncludes: {
                        ...prev.packageIncludes,
                        value: newPackageIncludes
                    }
                }
            });

            setIsServiceEdit(false);
            setServiceEditIndex('');
        },

        remove: () => {
            setThird((prev) => {

                const newPackageIncludes = [...prev.packageIncludes.value]
                newPackageIncludes[parseInt(serviceEditIndex)] = '';
    
    
                return {
                    ...prev,
                    packageIncludes: {
                        ...prev.packageIncludes,
                        value: newPackageIncludes
                    }
                }
            });

            setIsServiceEdit(false);
            setServiceEditIndex('');
        }
    }











    // Final submit handler
    const submitUpdateHandler = async () => {


        const firstPrice = {
            pkgName: first.pkgName.value,
            pkgPrice: first.pkgPrice.value,
            pkgTurnover: first.pkgTurnover.value,
            packageIncludes: first.packageIncludes.value,
            footerText: first.footerText.value,
        }

        const secondPrice = {
            pkgName: second.pkgName.value,
            pkgPrice: second.pkgPrice.value,
            pkgTurnover: second.pkgTurnover.value,
            packageIncludes: second.packageIncludes.value,
            footerText: second.footerText.value,
        }

        const thirdPrice = {
            pkgName: third.pkgName.value,
            pkgPrice: third.pkgPrice.value,
            pkgTurnover: third.pkgTurnover.value,
            packageIncludes: third.packageIncludes.value,
            footerText: third.footerText.value,
        }


        const pricingSection = {
            title: title.value,
            slug: url.split('/')[4],
            first: firstPrice,
            second: secondPrice,
            third: thirdPrice,
            finalArr: finalArr
        }


        try {
            
            const res = await axios.post(`/api/landing-pages/pricing/update/${url.split('/')[4]}`, pricingSection);

            console.log(res)

            message.success('Pricing Page has been updated successfully!😎')

        } catch (error) {
                console.log(error)
                message.error(error?.response?.data?.message || "Some error occured")
        }






    }







 




	return (
		<>

           
			<div className="w-full flex items-center justify-between gap-8">
			<Input className=" " placeholder="The Url of the current Page"  variant="filled" value={url} onChange={ e => setUrl(e.target.value) }/>
			<Button type="primary" onClick={getData}>Load Data</Button>
			</div>


			<section className="text-gray-700 body-font w-full py-4 overflow-hidden border-t border-b-2 mt-8 border-gray-200 px-20 max-xl:px-0 ">
				<div className="  container mx-auto  py-16  ">
					<div className="text-center mb-12">
						
                        {!title.isEditing ? <h1 onClick={(e) => setTitle(prev => ({...prev, isEditing: true}))} className="sm:text-3xl text-2xl font-medium title-font text-gray-900  mb-4"> {title.value} </h1> : <input onKeyDown={e => e.key === 'Enter' ? setTitle(prev => ({...prev, isEditing:false})) : null} onChange={(e) => setTitle({isEditing: false, value: e.target.value})} value={title.value} className="p-2 outline-none border-none shadow-md shadow-black/25 " />}
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-primary inline-flex" />
						</div>
					</div>

					<div className="flex flex-wrap  ">
						<div className=" lg:w-1/4 mt-48 hidden lg:block">
							<div className="w-full mt-px py-2  border-t bg-gray-100 border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden  ">
								{finalArr.map(
									(el, index) => {
										return (
											<div key={`${el}--${index}--finalArr-template--pricing-admin`} className="flex justify-between items-center w-full  px-2">
                                                    {(isServiceEdit && serviceEditIndex === index.toString()) ? <input className="px-2 rounded-md shadow-sm outline-none py-1 border-none ring-2 focus:ring-teal-500   ring-gray-400" value={editService} onChange={(e) => setEditService(e.target.value)} /> : <p key={`${el}--${index}--pricing-page`} className=" text-gray-900 h-12 text-start px-4 flex items-center justify-start -mt-px" > {" "} {el}{" "}  </p>}   <div className="flex justify-center items-center gap-2">{(isServiceEdit && serviceEditIndex === index.toString()) ? <BsCheck2Square  onClick={() => submitServiceEditHandler(el, index)} className='text-teal-500 scale-150 active:scale-125 hover:scale-[1.7] hover:cursor-pointer transition-all'/> : <BiEdit onClick={() => serviceEditHandler(el, index)} className='text-teal-500 scale-150 active:scale-125 hover:scale-[1.7] hover:cursor-pointer transition-all'/>} <RiDeleteBin6Line onClick={() => serviceDltHandler(el, index)} className='text-red-500 scale-150 hover:cursor-pointer active:scale-125 hover:scale-[1.7] transition-all' /></div>
                                                </div>
										);
									}
								)}
							</div>

                            <button onClick={showModal} type="button" className="mt-3 w-full h-11  bg-orange-50 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-orange-100" > <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M1.22229 5.00013H8.77785M5.00007 8.77791V1.22235" stroke="#e07000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" ></path> </svg> </button>


                            <Modal centered title="Enter New Service Here" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        <input className="border-none ring-2 ring-gray-300 rounded-lg p-2 w-full shadow-sm hover:ring-gray-500  outline-none focus:ring-blue-500   transition duration-300  " value={service} onChange={modalServiceInputHandler} />
      </Modal>

						</div>






						<div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg  ">
							<PricingTemplate {...first} finalArr={finalArr} editingHandler={editingHandler1} onChangeHandler={onChangeHandler1} onEnterHandler={onEnterHandler1} arrHandler={firstArrHandler} isServiceEdit={isServiceEdit} serviceEditIndex={serviceEditIndex}/>
							<PricingTemplate {...second} finalArr={finalArr} editingHandler={editingHandler2} onChangeHandler={onChangeHandler2} onEnterHandler={onEnterHandler2} arrHandler={secondArrHandler} isServiceEdit={isServiceEdit} serviceEditIndex={serviceEditIndex} />
							<PricingTemplate {...third} finalArr={finalArr} editingHandler={editingHandler3} onChangeHandler={onChangeHandler3} onEnterHandler={onEnterHandler3} arrHandler={thirdArrHandler} isServiceEdit={isServiceEdit} serviceEditIndex={serviceEditIndex}/>
						</div>
					</div>
				</div>

                <button onClick={submitUpdateHandler}  className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-teal-500 border-2 border-transparent hover:border-teal-500">Update Pricing Section</button>
			</section>
		</>
	);
}
