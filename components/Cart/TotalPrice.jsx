export default function TotalPrice({totalPrice, isDrawer}) {

    console.log(totalPrice)
    const vat = (20 / 100) * totalPrice;
    let finalTotal = totalPrice + vat;


    return (
        <div className={` rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto ${isDrawer ? 'bg-white/25' : 'bg-gray-50'}`}>
                {/* <div className="flex items-center justify-between w-full mb-6">
                    <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">$360.00</h6>
                </div> */}
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p className={`font-normal text-xl leading-8  ${isDrawer ? 'text-gray-200' : 'text-gray-600'}`}>VAT (20%)</p>
                    <h6 className={`font-semibold text-xl leading-8 ${isDrawer ? 'text-gray-200' : 'text-gray-600'}`}>£{vat.toFixed(2)}</h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className={`font-manrope font-medium text-2xl leading-9  ${isDrawer ? 'text-white' : 'text-gray-900'}`}>Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-orange-500">£{finalTotal.toFixed(2)}</h6>
                </div>
            </div>
    )
}