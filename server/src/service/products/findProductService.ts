import Products from '../../models/Product';

export default async function findProductService(id?: string) {
	if (id) {
		const findById = await Products.findOne({ _id: id });
		const response = {
			msg: 'producto eliminado con exito',
			status: 200,
			product: findById,
		};
		return response;
	} else {
		const getAllProducts = Products.find();
		const response = {
			msg: 'Lista de productos',
			status: 200,
			products: getAllProducts,
		};
		return response;
	}
}
