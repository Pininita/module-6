import express from 'express'
import {readFile} from 'fs/promises'
import { getId, getProducts } from './functions/get.js';
import { postProducts } from './functions/post.js';
import { putProducts } from './functions/put.js';
import { bodyValidation, logMiddleWare } from './middlewares/middlewares.js';
import { deleteProducts } from './functions/delete.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(logMiddleWare)

app.get('/', (req, res) => {
    res.send('¡hello world!, Type "/products" to get the list of products');
});

export let products = []

readFile("./products.json", 'utf-8')
.then((data) => {
    products = JSON.parse(data)
})
.catch((err) => {
    console.error("error reading products.json", err);
})

app.get('/products', getProducts)

app.get('/products/:id', getId)

app.post('/products', bodyValidation, postProducts)

app.put('/products/:id', bodyValidation, putProducts)

app.delete('/products/:id', deleteProducts)



app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});