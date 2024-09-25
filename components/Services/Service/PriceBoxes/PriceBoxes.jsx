import PriceBox from "./PriceBox";
import { v4 as uuid } from "uuid";



const PriceBoxes = ({ prices, pageTitle, isCheckout, isCart,  setCartItemsArr}) => {
    return (
        <section className={`w-full px-0`}>
            <div className="mx-auto container flex flex-col max-lg:items-center  ">

                
                {prices?.map((el) => {
                    return (
                        <div className="relative w-full group mb-16">
                           
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-teal-400 rounded-xl blur-sm opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                            
                            <PriceBox key={uuid()} {...el} isCheckout={isCheckout} isCart={isCart} setCartItemsArr={setCartItemsArr}/>
                            

                    </div>
                    )
                })}
            </div>
            <div>
                <p></p>
            </div>
        </section>
    );
};

export default PriceBoxes;

