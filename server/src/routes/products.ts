import express from 'express';
import {
	getProducts,
	getOneProduct,
	postProduct,
	deleteProduct,
	updateProduct,
} from '../controllers/products';
import { checkUserAdmin } from '../middlewares';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.post('/', checkUserAdmin, postProduct);
router.put('/:id', checkUserAdmin, updateProduct);
router.delete('/:id', checkUserAdmin, deleteProduct);

export default router;
