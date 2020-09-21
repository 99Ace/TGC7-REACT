import React from 'react';

export default class Counter extends React.Component {
    // declare a state 
    state = {
        count : this.props.initialValue
    }

    increment = () => {
        this.setState ({
            count : this.state.count + 1
        })
    }
    decrement = () => {
        // if (thisx.state.count > 0) {
            this.setState ({
                count : this.state.count - 1
            })
        // }
        
    }
    render () {
        
        return (
        <React.Fragment>
            {/* Decrease */}
            <button 
                style={{
                    border: "1px solid black",
                    padding: "10px",
                    width:"50px"
                }}
                onClick={this.decrement}
                disabled = {this.state.count==0? true:false}
            >
                -
            </button>

            <div 
                style={{
                    border: "1px solid black",
                    padding: "10px",
                    width:"50px",
                    backgroundColor : this.state.count % 2 == 0 ? 'green' :   'red'
                }}
                onClick={this.increment}

            >
                {this.state.count}
            </div>

            {/* Increase */}
            <button 
                style={{
                    border: "1px solid black",
                    padding: "10px",
                    width:"50px"
                }}
                onClick={this.increment}
            >
                +
            </button>
            <p>Current Count = {this.state.count}</p>
            {this.state.count %2 ==0? <p>Number is even</p>: null} 

        </React.Fragment>
        )

    }
}