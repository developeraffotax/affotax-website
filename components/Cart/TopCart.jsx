export default function TopChart({isDrawer}) {
	return (
		<>
			<h2 className={`title font-manrope font-bold text-4xl leading-10 mb-8 text-center  ${isDrawer ? 'text-white' : 'text-black'}`}>
				Shopping Cart
			</h2>
			<div className={`hidden lg:grid grid-cols-2 py-6 border-b border-gray-200 mb-8`}>
				<div className={`font-normal text-xl leading-8  ml-4 ${isDrawer ? 'text-white' : 'text-gray-500'}`}>
					Package
				</div>
				<p className={`font-normal text-xl leading-8 flex items-center justify-end ${isDrawer ? 'text-white' : 'text-gray-500'}`}>
					<span className={`w-full max-w-[200px] text-end mr-8`}>
						Price
					</span>
				</p>
			</div>
		</>
	);
}
