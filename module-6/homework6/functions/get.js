import fs from 'fs/promises'

// to get products list

export const getProducts = async (req, res) => {
    try{
        const response = await fs.readFile('./products.json')
        const products = await JSON.parse(response)
        if (products) {
            res.send(products)
        } else {
            res.status(404).send('products no found')
        }
    } catch (err){
        console.error(err)
        res.status(500)
        res.send('error occur')
    }
}

// to get products by id

export const getId = async (req, res) => {
    try {
        const response = await fs.readFile('./products.json')
        const products = await JSON.parse(response)
        const id = parseInt(req.params.id);
        const results = products.filter(product => product.id === id);
        if (results.length > 0) {
            res.send(results);
        } else {
            res.status(404).send('product id not found');
        }
    } catch (err){
        console.error(err)
        res.status(500)
        res.send('Error occur')
    }
}