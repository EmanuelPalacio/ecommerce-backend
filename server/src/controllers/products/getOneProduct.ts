import { Request, Response } from 'express';
import findProductService from '../../service/products/findProductService';

export default async function getOneProduct(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const recoveredProduct = await findProductService(id);
		const { status } = recoveredProduct;
		res.status(status).json({ recoveredProduct });
	} catch (error) {
		console.log(error);
	}
}
