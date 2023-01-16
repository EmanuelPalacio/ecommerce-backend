import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { portDev, portTest } from './config';
import { router } from './routes';
import mongoose from 'mongoose';
/* import { fileURLToPath } from 'url';
import { dirname } from 'path'; */
/* import path from 'path'; */

dotenv.config();

/* const dirname = path.resolve(); */
/* export const __dirname = dirname(fileURLToPath(import.meta.url)); */
/* const db = process.env.NODE_ENV === 'development' ? dbDev : dbTest; */
const port = process.env.NODE_ENV === 'development' ? portDev : portTest;
const app = express();
const MongoDB = async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.MONGODB_ATLAS!);

		console.log('Connection successfully');
	} catch (error) {
		console.error('Failed to connect to MongoDB');
	}
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', router);

app.listen(port, async () => {
	console.log(`Server listening on port: ${port}`);
});
MongoDB();
