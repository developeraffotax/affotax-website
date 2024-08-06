import CartItem from "./CartItem";
import {v4 as uuidv4} from 'uuid'

export default function CartItems({cartItemsArr, removeFromCartHandler, isDrawer}) {










    








	return (
		<>
			<div>
                <ul>
                {
                    cartItemsArr.map((el) => {
                        return <li key={uuidv4()}><CartItem {...el} removeFromCartHandler={removeFromCartHandler} isDrawer={isDrawer}/></li>
                    })
                }
                </ul>
            </div>
		</>
	);
}
