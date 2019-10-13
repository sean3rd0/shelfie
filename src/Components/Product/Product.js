import React from "react"

export default class Product extends React.Component {
    render() {
        const {name, price, img} = this.props.individualProduct
        return (
            <div>
                <img src={img} alt="Product image." onError={(e) => {e.target.onError = null; e.target.src="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"}} width="217px" height="160px"></img>
                <div>
                    <h5>{name}</h5>
                    <h5>${price}</h5>
                </div>
            </div>
        )
    }
}