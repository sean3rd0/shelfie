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

    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body

        db.create_product([name, price, img])
            .then(dbResponse => {
                res.status(200).send(dbResponse)
            })
            .catch(err => {
                console.log(`Something about db.create_product didn't work how you wanted, and this is the error that was sent back: ${err}`)
            })
    }, 

    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params 
        const {name, price, img} = req.body

        db.edit_product({id, name, price, img})
            .then(dbResponse => {
                res.status(200).send(dbResponse)
            })
            .catch(err => {
                console.log(err)
            })
    }, 

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product({id})
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
}