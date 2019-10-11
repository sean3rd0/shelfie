import React from "react"

export default class Product extends React.Component {
    render() {
        const {name, price, img} = this.props.individualProduct
        return (
            <div>
                <img></img>
                <div>
                    <text>{name}</text>
                    <text>${price}</text>
                </div>
            </div>
        )
    }
}