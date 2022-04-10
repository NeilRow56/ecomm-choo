import React from 'react';
import CartScreen from '../components/CartScreen';
import Navbar from '../components/Navbar';

const cart = () => {
	return (
		<div className="w-full max-w-[1240px] mx-auto ">
			<Navbar />
			<CartScreen />
		</div>
	);
};

export default cart;
