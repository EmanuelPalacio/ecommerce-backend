import { Request, Response } from 'express';
import fs from 'fs';
import { Product } from '../../interfaces';

export default function deleteProduct(req: Request, res: Response) {
	const { id } = req.params;
	const products = JSON.parse(
		fs.readFileSync('src/utils/mockups/mockProducts.JSON', 'utf-8'),
	);
	let status;
	let response;
	if (products.some((elem: Product) => elem.id === id)) {
		status = 404;
		response = {
			msg: 'No existe ese producto',
		};
	} else {
		status = 200;
		products.filter((elem: Product) => elem.id !== id);
		response = { msg: 'Producto eliminado con exito' };
	}
	res.status(status).json({ response });
}
