
import { BsCheck2Circle } from "react-icons/bs";
import { dataArr } from "@/data/serviceData";
import PriceBoxes from "../PriceBoxes/PriceBoxes";
import Benefits from "../Benefits/Benefits";
import Faqs from "../Faqs/Faqs";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import Form from '@/public/formp60.png'
import Bulb from '@/public/bulbp60.png'

export default function P45Form() {

    let data1 = [
        'Salary', 'Bonuses', 'Statutory pay', 'The tax you paid via PAYE', 'National Insurance Contributions (NIC)', 'Student loan repayments'
    ]

    let data2 = [
        'Applying for a mortgage', 'Applying for a bank loan', 'Doing a self-assessment tax return', 'Claiming overpaid taxes or benefits', 
    ]



    let p60Data = dataArr.filter((el) => el.link === 'p60-form')[0];

    console.log(p60Data)




    return (
        <div className=" ">

<section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-8 max-lg:mt-4 py-8 mt-4  font-poppins ">
            <div className="container mx-auto flex flex-col justify-center items-start bg-gradient-to-br from-slate-200 to-gray-100 p-12 rounded-2xl shadow-md shadow-black/20">
                <h1 className="text-5xl font-semibold self-center border-b border-black/10  pb-2  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">P45 and P60 Form </h1>
                <br/>
               <p className="leading-relaxed font-poppins "><strong className="text-xl ">P45 Form:</strong> Officially known as <span className="font-semibold">'Details of Employee Leaving Work',</span> the P45 form is an important document that is issued to you by your employer after you decide to leave your job. It is important because it shows HMRC how much tax and <span className="font-semibold">National Insurance Contributions (NIC)</span> has been paid by you through your salary (PAYE) within the tax year up until your last day at work. Also, you may need your P45 form when you claim tax refunds and benefits.
               </p>

                <div className="">
                <p className="mt-4 leading-relaxed font-poppins">
                <strong  className="text-xl">P60 Form:</strong> The P60 form or <span className="font-semibold" >'End of Year Certificate'</span> is a detailed summary of your earnings and tax paid throughout the whole tax year from April 6th to April 5th of the following year.
                </p>

                <div className="w-full flex gap-12 justify-evenly items-center mt-6 h-[400px] ">
                    <div className="p-4 border-orange-400 rounded-[40px]  border-2   flex flex-col justify-start items-start gap-2 h-full bg-white/80  shadow-sm shadow-black/25">
                        <Image src={Bulb} width={150} className="self-center"/>
                        <p className="font-semibold"> The form P60 includes your:
                        </p>
                        <ul className="flex flex-col justify-center items-start ">

                            {data1.map((el) => <li key={el} className="flex justify-center items-center gap-2 "><BsCheck2Circle className="text-orange-500 scale-110"/> {el} </li>)}
                            
                           

                            
                        </ul>
                    </div>


                    <div className="p-4 border-orange-400 rounded-[40px]  border-2   flex flex-col justify-start items-start gap-2 h-full bg-white/80 shadow-sm shadow-black/25" >
                    <Image src={Form} width={150} className="self-center"/>
                        <p className="font-semibold"> You may need to show your P60 when:

                        </p>
                        <ul className="flex flex-col justify-center items-start ">

                            {data2.map((el) => <li key={el} className="flex justify-center items-center gap-2 "><BsCheck2Circle className="text-orange-500 scale-110"/> {el} </li>)}
                            
                           

                            
                        </ul>
                    </div>
                </div>
                </div>
               

                
            </div>
        </section>
           
            <PriceBoxes prices={p60Data.prices} pageTitle={p60Data.title}/>
            <Benefits
                benefitsTitle={p60Data.benefitsTitle}
                benefits={p60Data.benefits}
            />
            <Faqs faqs={p60Data.faqs.map((el) => ({...el, key: uuid()}))} />
        </div>
    );







}