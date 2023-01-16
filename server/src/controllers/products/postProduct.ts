import { Request, Response } from 'express';
import { Product } from '../../interfaces';
import createProductService from '../../service/products/createProductService';
import { generarIdProduct } from '../../utils';

export default async function postProduct(req: Request, res: Response) {
	const { name, price, img, description, stock } = req.body;
	const data: Product = {
		name,
		price,
		img,
		description,
		stock,
		timestamp: new Date().toLocaleString('es-AR'),
		code: generarIdProduct(),
	};
	try {
		const recoveredProduct = await createProductService(data);
		const { status } = recoveredProduct;
		res.status(status).json(recoveredProduct);
	} catch (error) {
		console.log(error);
		res.status(404).json({ error });
	}
}
