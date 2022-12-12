import express from 'express';
import {
	getCart,
	postCart,
	addProductsCart,
	deleteCart,
	deleteProductCart,
} from '../controllers/cart';

const router = express.Router();

router.get('/:id/products', getCart);
router.post('/', postCart);
router.post('/:id/products', addProductsCart);
router.delete('/:id', deleteCart);
router.delete('/:id/products/:idProd', deleteProductCart);

export default router;
