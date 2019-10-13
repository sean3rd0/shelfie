import React from "react"
import Product from "../Product/Product"
import axios from "axios";

export default class Dashboard extends React.Component {


    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(() => {
                this.props.getInventory
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const {inventoryList} = this.props
        const mappedInventoryList = inventoryList.map((
            individualProduct, indexOfProductInInventoryList
        ) => {
            return (
                <Product 
                    key = {indexOfProductInInventoryList}
                    individualProduct = {individualProduct}
                />
            )            
        })
        return (
            <div>
                Dashboard
                {mappedInventoryList}
            </div>
        )
    }
}