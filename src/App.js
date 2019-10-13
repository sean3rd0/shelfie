import React from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios"

export default class App extends React.Component {
  constructor() {
    super() 

    this.state = {
      inventoryList: [
        {
          name: "yellow", 
          price: 5, 
          img: "yahoo!"
        }, 
        {
          name: "red", 
          price: 3, 
          img: "yah!"
        }, 
        {
          name: "blue", 
          price: 7, 
          img: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
        }
      ]
    }

    this.getInventory = this.getInventory.bind(this)

  }

  componentDidMount () {
    this.getInventory()
  }

  getInventory = () => {
      axios.get('/api/inventory')
          .then(response => {
              this.setState({
                  inventoryList: response.data
              })
          })
          .catch(err => {
              console.log(`The getInventory method in your Dashboard.js didn't work the way you wanted it to. Here's the error you were sent: ${err}`)
          })
  }
  render() {
    return (
      <div className="App">
        <Dashboard 
          inventoryList = {this.state.inventoryList} 
          getInventory = {this.getInventory}
        />
        <Form 
          getInventory = {this.getInventory}
        />
        <Header />
      </div>
    );
  }
}