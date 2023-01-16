import { Product } from '../../interfaces';
import Products from '../../models/Product';

export default async function createProductService(product: Product) {
	const findByName = await Products.findOne({ name: product.name });
	console.log(findByName);
	if (findByName === null) {
		const productCreate = await Products.create(product);
		await productCreate.save();

		const { _id, name } = productCreate;
		const response = {
			msg: 'producto creado con exito',
			status: 200,
			_id,
			name,
		};
		return response;
	} else {
		const response = {
			msg: 'el producto ya existe',
			status: 404,
		};
		return response;
	}
}
