import fs from 'fs/promises'

export const deleteProducts = async (req, res) => {
    const response = await fs.readFile('./products.json', 'utf-8')
    const products = await JSON.parse(response)
    const id = req.params.id;
    const result = products.findIndex((product) => product.id === parseInt(id))
    if (result !== -1) {
        products.splice(result, 1)
        await fs.writeFile('./products.json', JSON.stringify(products))
        res.send(`product remove, id: ${id}`)
    } else {
        res.status(404)
        res.send('product no found')
    }
}