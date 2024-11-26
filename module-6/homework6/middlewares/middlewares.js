export const logMiddleWare = (req, res, next) => {
    const log = {
       method: req.method,
       date: new Date().toLocaleDateString(),
       url: req.url
    }
    console.log(log)
    next()
}

export const bodyValidation = (req, res, next) => {
    if(req.body.id !==  undefined 
    && req.body.name.trim() !== ''  
    && req.body.price !==  undefined && typeof req.body.price === 'number' && req.body.price > 0
    && req.body.category.trim() !== ''  
    && req.body.description.trim() !== '' ) next()
    else{
        res.status(400)
        res.send('invalid body')
    }
}