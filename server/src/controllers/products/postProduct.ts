import { Request, Response } from 'express';
import { Product } from '../../interfaces';
import { generateID } from '../../utils';
import fs from 'fs';

export default function postProduct(req: Request, res: Response) {
	const { name, price, img, description, stock } = req.body;
	const data: Product = {
		name,
		price,
		img,
		description,
		stock,
		id: generateID(),
		timestamp: new Date().toLocaleString('es-AR'),
		code: generateID(),
	};
	try {
		const products = JSON.parse(
			fs.readFileSync('src/utils/mockups/mockProducts.JSON', 'utf-8'),
		);
		products.push(data);
		fs.writeFileSync(
			'src/utils/mockups/mockProducts.JSON',
			JSON.stringify(products, null, 2),
		);

		res.status(200).json({
			ok: true,
			msg: 'producto cargado con exíto',
			response: data,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({ error });
	}
}
