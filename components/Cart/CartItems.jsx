import CartItem from "./CartItem";

export default function CartItems({cartItemsArr, removeFromCartHandler, isDrawer}) {










    








	return (
		<>
			<div>
                <ul>
                {
                    cartItemsArr.map((el) => {
                        return <li><CartItem {...el} removeFromCartHandler={removeFromCartHandler} isDrawer={isDrawer}/></li>
                    })
                }
                </ul>
            </div>
		</>
	);
}
