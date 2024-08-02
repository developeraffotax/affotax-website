import Link from "next/link";
import { v4 as uuid } from "uuid";
import { RxCross1 } from "react-icons/rx";

const CartItem = ({ priceTitle, priceContent, price, packageIncludes, pageTitle, id, removeFromCartHandler, isDrawer}) => {
	return (
		<>
			<div className={`${isDrawer ? 'bg-white/20' : 'bg-gray-50'} shadow-sm rounded-lg  p-8 w-full mb-8 ]`}>
            <div className="flex justify-between items-start  w-full border-b pb-4">
				<h3 className="text-xl font-semibold ">
					{priceTitle} | {pageTitle}
				</h3>
				<button className="mt-2" onClick={() => removeFromCartHandler(id)}>
					{" "}
					<RxCross1 />
				</button>
			</div>

			<div className="flex flex-row max-lg:flex-col  gap-8 max-lg:gap-4 items-end max-lg:items-center justify-between mt-4">
				<div className={`flex flex-col gap-2  max-lg:w-full ${isDrawer ? 'w-[80%]' : 'w-[50%]'}`}>
					<p className="text-sm  ">{priceContent}</p>

					{
						!isDrawer ? <ul className="list-disc text-sm ">
						{packageIncludes?.length > 0 ? (
							<h4 className="font-semibold text-md text-orange-500">
								{" "}
								Package includes:{" "}
							</h4>
						) : null}

						{packageIncludes?.map((el) => (
							<li key={uuid()} className="ml-4">
								{" "}
								{el}{" "}
							</li>
						))}
					</ul> : null
					}
				</div>

				<div className="flex items-center gap-2 justify-between max-lg:w-full">
                    <h6 className="  w-full max-w-[176px] hidden max-lg:block font-normal text-xl leading-8 text-gray-400">Price  </h6>
					<h6 className=" font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-end max-lg:border-l">
						{price}
					</h6>
				</div>
			</div>
            </div>
		</>
	);
};

export default CartItem;
