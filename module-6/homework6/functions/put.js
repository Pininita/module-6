import fs from 'fs/promises'

export const putProducts = async (req, res) => {
    const response = await fs.readFile('./products.json', 'utf-8')
    const products = await JSON.parse(response)
    const id = req.params.id
    const index = products.findIndex((product) => product.id === parseInt(id))
    products[index] = req.body
    await fs.writeFile('./products.json', JSON.stringify(products))
    res.send('The product has been update')
}