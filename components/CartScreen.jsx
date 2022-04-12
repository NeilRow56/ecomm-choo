import React from 'react';
import Image from 'next/image';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const CartScreen = () => {
	return (
		<div className="w-full">
			<div className="w-full justify-center items-center text-center py-10">
				<h2>Shopping Cart</h2>
			</div>
			<div className="grid grid-cols-5 gap-4 py-3">
				<div className="col-span-2 font-bold ml-2  ">Product</div>
				<div className="col-span-1 font-bold ">Price</div>
				<div className="col-span-1 font-bold ">Quantity</div>
				<div className="col-span-1 font-bold text-right mr-2">
					Total
				</div>
			</div>
			<div className="border border-gray-200"></div>
			<div className="grid grid-cols-5 md:gap-4 py-3  h-[120px] items-center justify-center ">
				<div className="col-span-2 font-bold ml-2  ">
					<div className=" w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative ">
						<Image
							alt="Pants 1"
							src="/images/pants1.jpg"
							layout="fill"
							objectFit="cover"
							className="cursor-pointer rounded-md"
						/>
					</div>
				</div>
				<div className="col-span-1  text-left">£ 699.99</div>
				<div className="col-span-1 font-bold ">
					<div className="border border-gray-200 text-center  rounded-md  h-10 w-[60px] md:w-[120px]">
						<div className=" flex ml-1 md:ml-0">
							<button className="mx-auto  w-3 md:w-6  text-2xl ">
								-
							</button>
							<div className=" text-lg pt-1">1</div>

							<button className="mx-auto w-3 md:w-6  text-2xl">
								+
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-1 font-bold text-right mr-2">
					£ 699.99
				</div>
			</div>
			<div className="border border-gray-200"></div>
			<div className="min-w-full flex justify-between ">
				<div>
					<button className="border border-gray-200 rounded-md mt-5 w-[120px] ml-2 h-10">
						Clear Cart
					</button>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center my-3  ">
						<h4 className="ml-2 font-semibold ">Subtotal</h4>
						<div className=" w-[50px] md:w-[150px]"></div>
						<div className="text-right justify-right w-full mr-2 font-semibold">
							£ 0
						</div>
					</div>
					<div>
						<p className="mr-2 my-2">
							Taxes and shipping calculated at checkout
						</p>
					</div>
					<div className=" mx-auto">
						<button className="rounded-md w-[130px] my-2 bg-blue-600 text-white py-1">
							Check out
						</button>
					</div>
					<div className="my-3 flex items-center">
						<HiOutlineArrowNarrowLeft />
						<h6 className="ml-3">Continue Shopping</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
