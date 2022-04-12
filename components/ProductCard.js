import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import { ToastContainer, toast } from 'react-toastify';

function ProductCard({ product }) {
	const dispatch = useDispatch();
	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	return (
		<div className="text-[#444] mx-auto flex flex-col ">
			<Link href={`/products/${product._id}`} passHref>
				<div className="w-[250px] h-[250px] relative ">
					<Image
						alt={product.name}
						src={product.image}
						layout="fill"
						objectFit="cover"
						className="cursor-pointer rounded-md"
					/>
				</div>
			</Link>

			<h4 className="text-red-700 py-2">{product.name}</h4>
			<span className="font-bold pt-2 pb-4 text-[#666]">
				£ {product.price}
				<button
					onClick={() => handleAddToCart(product)}
					className="ml-4 text-red-700"
				>
					ADD TO CART
				</button>
				<ToastContainer />
			</span>
		</div>
	);
}

export default ProductCard;
