import { Request, Response } from 'express';
import { products } from '../../utils/mockups/products';

export default function getOneProduct(req: Request, res: Response) {
	const { id } = req.params;
	let status;
	let response;
	if (products.length === 0) {
		status = 404;
		response = {
			msg: 'No hay productos cargados',
		};
	} else {
		status = 200;
		response = products.find(elem => elem.id === id);
	}
	res.status(status).json({ response });
}
