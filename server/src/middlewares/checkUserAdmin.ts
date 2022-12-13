import { NextFunction, Request, Response } from 'express';

const checkUserAdmin = (req: Request, res: Response, next: NextFunction) => {
	const { admin } = req.headers;
	console.log(admin);
	admin === 'true'
		? next()
		: res.status(404).json({
				ok: false,
				msg: 'No tiene permiso de administrador',
		  });
};
export default checkUserAdmin;
