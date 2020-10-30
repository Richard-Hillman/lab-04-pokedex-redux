import React, { Component } from 'react'

export default class SearchRender extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
    
                     <label htmlFor="search">FIND YOUR POKEMON: </label>
                     <input type="text" onChange={this.props.handleChange}/> 
                     <button>GO FIND</button>
                </form>
            </div>


        )
    }
}

