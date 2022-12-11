import { Request, Response } from 'express';
import { Product } from '../../interfaces';
import { generateID } from '../../utils';
import { products } from '../../utils/mockups/products';
/* import fs from 'fs'; */

export default function postProduct(req: Request, res: Response) {
	const { name, price, img, description, stock } = req.body;
	/* const parseProdcuts = JSON.stringify(products); */

	try {
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
		/* fs.writeFileSync('src/utils/mockups/products.json', parseProdcuts); */
		products.push(data);
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
