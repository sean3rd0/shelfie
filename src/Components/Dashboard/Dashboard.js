import React from "react"
import Product from "../Product/Product"

export default class Dashboard extends React.Component {
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