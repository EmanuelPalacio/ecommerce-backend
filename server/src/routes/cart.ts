import express from 'express';
import { getCart, postCart, addProductsCart } from '../controllers/cart';

const router = express.Router();

router.get('/:id/products', getCart);
router.post('/', postCart);
router.post('/:id/products', addProductsCart);
router.delete('/:id');
router.delete('/:id/products/:id_prod');

export default router;
