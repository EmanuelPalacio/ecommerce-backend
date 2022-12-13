import express from 'express';
import products from './products';
import cart from './cart';

const router = express.Router();

router.use('/api/products', products);
router.use('/api/cart', cart);
router.use('/*', (_req, res) => {
	res.status(404).json({
		msg: 'no existe la ruta',
	});
});

export { router };
