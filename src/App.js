import React from 'react';
import './App.css';
import MyHeader from  './MyHeader.js'
import MyFooter from './MyFooter.js'
import PokemonList from './PokemonList.js'
import pokemon from './Data.js'

export default class App extends React.Component {
// This is the coo Zone, I think
// set m zero state filter so all pokemon show on initial load
state = { 
  filter:'',
  sortType:'',
  order:'',
  inputValue:'',
  attack:'',
  defense:'',
}

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
        form:e.target.value
      })
    }
    
    handleChange = e => {
      this.setState({
        filter: e.target.value
      })
    }
    
    handleOrder = e => {
      this.setState({
        order: e.target.value
      })
    }

    handleSortType = e => {
        this.setState({
          sortType: e.target.value
        })
    }


  render() {
    return (
      <>
     
      <div className="header">
        <MyHeader /> 
      </div>

{/* ===================================================================================================== */}

        <div className="main">

        <div className="pokemonMain">
          <PokemonList
          pokemon={pokemon}
          filter={this.state.filter}
          sortType={this.state.sortType}
          order={this.state.order} />
        </div>

      
        <sort 
        handleSortType={this.handleSortType}
        handleOrder={this.handleOrder} />
       
        <div className="footer">
          <MyFooter />
        </div>

       </div>
     </>
  );
}

}