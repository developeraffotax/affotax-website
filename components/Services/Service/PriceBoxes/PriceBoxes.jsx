import PriceBox from "./PriceBox";
import { v4 as uuid } from "uuid";

const PriceBoxes = ({ prices }) => {
    return (
        <section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-0 ">
            <div className="mx-auto container flex flex-col max-lg:items-center  ">
                {prices.map((el) => (
                    <PriceBox key={uuid()} {...el} />
                ))}
            </div>
            <div>
                <p></p>
            </div>
        </section>
    );
};

export default PriceBoxes;
