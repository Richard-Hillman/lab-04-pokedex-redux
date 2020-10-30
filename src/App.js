import React from 'react';
import './App.css';
import MyHeader from  './MyHeader.js';
import MyFooter from './MyFooter.js';
import PokemonList from './PokemonList.js';
import pokemon from './Data.js';
import Home from './Home.js';
import Credits from './Credits.js';
import fetch from 'superagent';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
// import FetchPage from './FetchPage.js'


export default class App extends React.Component {
// This is the coo Zone, I think
// set m zero state filter so all pokemon show on initial load
  state = { 
    pokemonData: [],
    type:''
  }

  componentDidMount = async () => {
    const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ pokemonData: response.body.results });
  }

  handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/types/${this.state.type}')
    this.setState({ pokemonData: response.body.results });
  }
  
  handleChange = (e) => {
    this.setState({ type: e.target.value});
  }

  handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/types/${this.state.type}')
      this.setState({ pokemonData: response.body.results });
  }
  
}
    
    // handleChange = e => {
    //   this.setState({
    //     filter: e.target.value
    //   })
    // }
    
    // handleOrder = e => {
    //   this.setState({
    //     order: e.target.value
    //   })
    // }

    // handleSortType = e => {
    //     this.setState({
    //       sortType: e.target.value
    //     })
    // }


  render() {
    return (
      <>


{/* ===================================================================================================== */}

        <div className="main">
          <Router>
          <MyHeader /> 
            <Switch>

              <Route
                path="/"
                exact
                render={(routerProps) => <Home {...routerProps} />}
                />

              <Route
                path="/Pokedex"
                exact
                render={(routerProps) => <PokemonList
                  pokemon={pokemon}
                  filter={this.state.filter}
                  sortType={this.state.sortType}
                  order={this.state.order} 
                  {...routerProps} />}
                />

              <Route
                path="/Credits"
                exact
                render={(routerProps) => <Credits {...routerProps} />}
                />
            </Switch>
          </Router>


        {/* <div className="pokemonMain">
          <PokemonList
          pokemon={pokemon}
          filter={this.state.filter}
          sortType={this.state.sortType}
          order={this.state.order} />
        </div> */}

      
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