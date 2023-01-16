import { Request, Response } from 'express';
import deleteProductService from '../../service/products/deleteProductService';

export default async function deleteProduct(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const recoveredProduct = await deleteProductService(id);
		const { status } = recoveredProduct;
		res.status(status).json(recoveredProduct);
	} catch (error) {
		console.log(error);
		res.status(404).json({ error });
	}
}
