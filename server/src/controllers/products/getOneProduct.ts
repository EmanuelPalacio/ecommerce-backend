import { Request, Response } from 'express';
import fs from 'fs';
import { Product } from '../../interfaces';

export default function getOneProduct(req: Request, res: Response) {
	const { id } = req.params;
	const products = JSON.parse(
		fs.readFileSync('src/utils/mockups/mockProducts.JSON', 'utf-8'),
	);
	let status;
	let response;
	if (
		products.length === 0 ||
		!products.some((elem: Product) => elem.id === id)
	) {
		status = 404;
		response = {
			msg: 'No hay productos cargados',
		};
	} else {
		status = 200;
		response = products.find((elem: Product) => elem.id === id);
	}
	res.status(status).json({ response });
}
