import { Request, Response } from 'express';
import updateProductService from '../../service/products/updateProductService';

export default async function updateProduct(req: Request, res: Response) {
	const { id } = req.params;
	const body = req.body;
	try {
		const recoveredProduct = await updateProductService(id, body);
		const { status } = recoveredProduct;
		res.status(status).json({ recoveredProduct });
	} catch (error) {
		console.log(error);
	}
}
