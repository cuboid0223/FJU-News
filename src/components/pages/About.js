import React, { Component } from 'react'
import Header from '../layout/Header'
export class New extends Component {
    state1={
        header:"About",
        subtitle:"We are SIRLA!"
    }
    render() {
        return (
        <React.Fragment>
            <Header title={this.state1.header} subtitle={this.state1.subtitle}/>
            <div className="about">
                <div className="wrap1">
                    <h3>Who we are?</h3>
                    <p>p1</p>
                    <p>p2</p>
                    <p>p3</p>
                    <p>p4</p>
                </div>
                <div className="wrap2">
                    <h3>What we do?</h3>
                    <p>Coding! Coding! Codingggg!</p>
                </div>
                <div className="wrap3">
                    <h3>Where are we?</h3>
                    <p>In you heart!</p>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default New
