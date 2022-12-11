import express from 'express';

const router = express.Router();

router.get('/:id/products');
router.post('/');
router.post('/:id/products');
router.delete('/:id');
router.delete('/:id/products/:id_prod');

export default router;
