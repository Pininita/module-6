import fs from 'fs/promises'
import { products } from '../index.js'

export const postProducts = async (req, res) => {
    products.push(req.body)
    await fs.writeFile('./products.json', JSON.stringify(products))
    res.send(`product add ${req.body.name}`)
}