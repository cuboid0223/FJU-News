import React from 'react';



class Counter extends React.Component {
    state = {
      times: 0
    }
    addTimes = () => {
        this.setState({
            times: this.state.times+1
        })
    }
    minusTimes = () => {
         this.setState({
             times: this.state.times - 1
        })
    }
    addTwice = () => {
        this.setState({
            times: this.state.times *2
        })
    }
    minusTwice = () => {
        this.setState({
            times: Math.floor(this.state.times /2)
        })
    }
    
    render() {
        return (
            <div>
                <h3>{ this.state.times}</h3>
                <button onClick={this.addTimes}>+1</button>
                <button onClick={this.minusTimes}>-1</button>
                <button onClick={this.addTwice}>*2</button>
                <button onClick={this.minusTwice}>/2</button>
            </div>
        )
    }
}
export default Counter