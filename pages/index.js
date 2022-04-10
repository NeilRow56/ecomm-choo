import HomePage from '../components/HomePage';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default function Index({ productList }) {
	return (
		<>
			<Navbar />
			<div className="w-full max-w-[1240px] mx-auto ">
				<ProductList productList={productList} />
			</div>
		</>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products');
	return {
		props: {
			productList: res.data,
		},
	};
};
