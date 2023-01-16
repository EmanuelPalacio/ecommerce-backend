import Products from '../../models/Product';

export default async function deleteProductService(id: string) {
	const findById = await Products.findOne({ _id: id });
	console.log(findById);
	if (findById === null) {
		const deleteProduct = await Products.deleteOne({ _id: id });
		console.log(deleteProduct);
		const response = {
			msg: 'producto eliminado con exito',
			status: 200,
		};
		return response;
	} else {
		const response = {
			msg: 'No se encontro el producto',
			status: 404,
		};
		return response;
	}
}
