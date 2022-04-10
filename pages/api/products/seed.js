import nc from 'next-connect';
import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';
import data from '../../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
	await dbConnect();
	await Product.deleteMany();
	await Product.insertMany(data.products);

	res.send({ message: 'Seeded successfully' });
});

export default handler;
