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
        somethingGoesHereButIDontKnowWhat: {}
    }
  }

  componentDidMount () {

  }

  getInventory = () => {
      axios.get('/api/inventory')
          .then(response => {
              this.setState({
                  somethingGoesHereButIDontKnowWhat: response
              })
          })
          .catch(err => {
              console.log(`The getInventory method in your Dashboard.js didn't work the way you wanted it to. Here's the error you were sent: ${err}`)
          })
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}