import { Request, Response } from 'express';
import fs from 'fs';

export default function getCart(req: Request, res: Response) {
	try {
		const { id } = req.body;
		const parseCart = JSON.parse(fs.readFileSync(id, 'utf-8'));
		res.status(200).json({ parseCart });
	} catch (error) {
		console.log(error);
		res.status(404).json({
			ok: false,
			msg: 'No existe el carrito',
		});
	}
}
