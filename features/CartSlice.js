import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// const cartSlice = createSlice({
// 	name: 'cart',
// 	initialState: {
// 		products: [],
// 		quantity: 0,
// 		total: 0,
// 	},
// 	reducers: {
// 		addProduct: (state, action) => {
// 			state.products.push(action.payload);
// 			state.quantity += 1;
// 			state.total += action.payload.price * action.payload.quantity;
// 		},
// 		reset: (state) => {
// 			state.products = [];
// 			state.quantity = 0;
// 			state.total = 0;
// 		},
// 	},
// });

// export const { addProduct, reset } = cartSlice.actions;
// export default cartSlice.reducer;

const initialState = {
	cartItems: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.slug === action.payload.slug
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.info(
					`Increased ${state.cartItems[itemIndex].name} quatity`,
					{
						position: 'bottom-left',
					}
				);
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);
				toast.success(`${action.payload.name} added to cart`, {
					position: 'bottom-left',
				});
			}
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
