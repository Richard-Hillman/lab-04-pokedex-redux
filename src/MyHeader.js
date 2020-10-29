import React, { Component } from 'react';
import DropDown from './DropDown.js';
import SearchRender from './SearchRender.js'

export default class MyHeader extends Component {
    render() {
        return (
            <div className="headerRendered">

                <h1>Confessions 2020: I Used to steal Pokemon Cards, I'm sorry</h1>   

                <div className="divSoup">
                    <div>
                        My Header Lives in my Head. 
                    </div>

                    <div>
                        <DropDown handlechange={this.handleChange} />
                    </div>

                    <div>
                        <SearchRender
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            handleChangeAttack={this.handleChangeAttack}
                            handleChangeDefense={this.handleChangeDefense}
                        />
                    </div>
                </div>

            </div>



        )
    }
}
