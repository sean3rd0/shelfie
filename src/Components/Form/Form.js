import React from "react"
import axios from "axios";

export default class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            imageUrlInput: "", 
            productNameInput: "", 
            priceInput: 0
        }



        this.handleImageUrlInputChange = this.handleImageUrlInputChange.bind(this)

        this.handleProductNameInputChange = this.handleProductNameInputChange.bind(this)
        
        this.handlePriceInputValueChange = this.handlePriceInputValueChange.bind(this)
        
        this.handleInputClear = this.handleInputClear.bind(this)

        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this)
        
        this.handleAddToInventoryButtonClick = this.handleAddToInventoryButtonClick.bind(this)

    }

    createProduct = () => {
        const newProduct = {
            name: this.state.productNameInput, 
            price: this.state.priceInput, 
            img: this.state.imageUrlInput
        }
        console.log(this.state.priceInput)
        if (this.state.priceInput == +this.state.priceInput) {
            axios.post('/api/product', newProduct)
                .then(() => {
                    this.props.getInventory()
                    this.handleInputClear()
                })
        } else {
            alert("Invalid entry: the Price entered must be a whole number.")
        }
    }



    handleImageUrlInputChange (value) {
        this.setState({
            imageUrlInput: value
        })
    }

    handleProductNameInputChange (value) {
        this.setState({
            productNameInput: value
        })
    }

    handlePriceInputValueChange (value) {
        this.setState({
            priceInput: value
        })
    }



    handleInputClear () {
        this.setState({
            imageUrlInput: "", 
            productNameInput: "", 
            priceInput: 0
        })
    }

    handleCancelButtonClick () {
        this.handleInputClear()
    }

    handleAddToInventoryButtonClick () {
        this.createProduct()
    }

    render() {
        // console.log(`this is state: ${this.state.imageUrlInput}`)
        return (
            <div>
                <div>Form</div>
                <img className="form-image-display"></img>
                <div>Image URL:</div>
                <input 
                    id="image-url-input"
                    className="form-input" 
                    onChange={e => {this.handleImageUrlInputChange(e.target.value)}}
                    value={this.state.imageUrlInput}
                ></input>
                <div>Product Name:</div>
                <input 
                    id="product-name-input"
                    className="form-input"
                    onChange={e => {this.handleProductNameInputChange(e.target.value)}}
                    value={this.state.productNameInput}
                ></input>
                <div>Price:</div>
                <input 
                    id="price-input"
                    className="form-input"
                    onChange={e => {this.handlePriceInputValueChange(e.target.value)}}
                    value={this.state.priceInput}
                ></input>
                <div>
                    <button 
                        className="form-button"
                        onClick={this.handleCancelButtonClick}
                    >Cancel</button>
                    <button 
                        className="form-button"
                        onClick={this.handleAddToInventoryButtonClick}
                    >Add to Inventory</button>
                </div>
            </div>
        )
    }
}