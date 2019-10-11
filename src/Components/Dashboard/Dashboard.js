import React from "react"
import Product from "../Product/Product"

export default class Dashboard extends React.Component {
    render() {
        const mappedInventoryList = this.props.inventoryList.map((individualProduct, indexOfProductInInventoryList) => {
            return (
                <Product />
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