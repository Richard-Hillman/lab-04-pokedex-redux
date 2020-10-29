import React, { Component } from 'react';
import DropDown from './DropDown.js';
import SearchRender from './SearchRender.js'

export default class MyHeader extends Component {
    render() {
        return (
            <>
            <div>
                My Header Lives in my Head. 
            </div>
            <div>
                <DropDown />
            </div>
            <div>
                <SearchRender /> 
            </div>
            </>



        )
    }
}
