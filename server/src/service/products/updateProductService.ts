import { Product } from '../../interfaces';
import Products from '../../models/Product';

export default async function updateProductService(
	id: string,
	body: Partial<Product>,
) {
	const updateById = await Products.updateOne({ _id: id }, body);
	if (updateById) {
		const response = {
			status: 200,
			msg: 'actualizacion de producto exitosa',
			product: {
				...updateById,
			},
		};
		return response;
	}
	const response = {
		status: 404,
		msg: 'producto no existe',
	};
	return response;
}
