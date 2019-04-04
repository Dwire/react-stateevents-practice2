import React, { Component } from "react";
import "./App.css";
import BeyContainer from './BeyContainer';
import Favorites from './Favorites';
import beyAdapter from './adapters/beyAdapter'

class App extends Component {
  state = {
    beys: []
  }

  componentDidMount() {
    beyAdapter.get()
    .then(this.setBeyStateFromDataBase)
  }

  setBeyStateFromDataBase = (beys) => {
    this.setState({beys})
  }

  handleFavClick = (beyObj) => {
    beyAdapter.patch(beyObj)
    .then(this.updateLocalBeyArray)
  }

  updateLocalBeyArray = (beyObj) => {
    const beys = this.state.beys.map(bey => {
      if (beyObj.id === bey.id) {
        return {...bey, favorite: !bey.favorite}
      } else {
        return bey
      }
    })
    this.setState({beys})
  }
// NOTE: this is same function as above
  // updateLocalBeyArray = (beyObj) => {
  //   const beys = this.state.beys.map(bey => beyObj.id === bey.id ? {...bey, favorite: !bey.favorite} : bey)
  //   this.setState({beys})
  // }

  filteredList = () => {
    return this.state.beys.filter(bey => bey.favorite)
  }

// This just only displays non-favoited beys instead of entire index
// could just render this.state.beys instead of this.filteredListB()
  filteredListB = () => {
    return this.state.beys.filter(bey => !bey.favorite)
  }


  render(){
    return (
      <div className="container">
        <BeyContainer beys={this.filteredListB()} handleFavClick={this.handleFavClick} />
        <Favorites  beys={this.filteredList()} handleFavClick={this.handleFavClick}/>
      </div>
    )
  }
}

export default App;
