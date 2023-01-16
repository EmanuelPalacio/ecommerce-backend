import { Schema, model /* Types */ } from 'mongoose';
import { Product } from '../interfaces';

const productSchema = new Schema<Product>({
	name: { type: String, require: true },
	price: { type: Number, require: true },
	img: { type: String, require: true },
	description: { type: String, require: true, max: 150 },
	stock: { type: Number, require: true },
	timestamp: { type: String, require: true },
	code: { type: String, require: true },
});

const Products = model('ProductCollection', productSchema);
export default Products;
