import { Product } from './index';

export interface Cart {
	id: string;
	timestamp: string;
	products: Array<Product>;
}

export interface DeleteProducts {
	id: string;
}
