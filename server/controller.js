module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db') 

        db.get_inventory() 
            .then(dbResponse => {
                res.status(200).send(dbResponse)
            })
            .catch(err => {
                console.log(`Something about db.get_inventory didn't work how you wanted, and this is the error that was sent back: ${err}`)
            })
    },

    postProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body

        db.post_product([name, price, img])
            .then(dbResponse => {
                res.status(200).send(dbResponse)
            })
            .catch(err => {
                console.log(`Something about db.post_product didn't work how you wanted, and this is the error that was sent back: ${err}`)
            })
    }
}