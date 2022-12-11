import { Request, Response } from 'express';
import { products } from '../../utils/mockups/products';

export default function getProducts(_req: Request, res: Response) {
	/* let status;
	let response;
	if (products.length === 0) {
		status = 404;
		response = {
			msg: 'No hay productos cargados',
		};
	} else {
		status = 200;
		response = products;
	} */
	res.status(200).json({ products });
}
