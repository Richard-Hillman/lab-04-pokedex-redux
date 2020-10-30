import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <span>
                    <Link to="/">HOME</Link>
                </span>
                <span>
                    <Link to ="/Pokedex">POKEDEX</Link>
                </span>
                <span>
                    <Link to ="/Credits">CREDITS</Link>
                </span>
            </div>
        )
    }
}
