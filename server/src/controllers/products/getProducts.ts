import { Request, Response } from 'express';
import findProductService from '../../service/products/findProductService';

export default async function getProducts(_req: Request, res: Response) {
	try {
		const recoveredProduct = await findProductService();
		const { status } = recoveredProduct;
		res.status(status).json({ recoveredProduct });
	} catch (error) {
		console.log(error);
	}
}
