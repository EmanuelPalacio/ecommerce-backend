import express from 'express';
import {
	getProducts,
	getOneProduct,
	postProduct,
} from '../controllers/products';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.post('/', postProduct);
router.put('/:id');
router.delete('/:id');

export default router;
