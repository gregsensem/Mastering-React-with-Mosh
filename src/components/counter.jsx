import React, { Component } from 'react';

class Counter extends Component {

    formatCount(){
        const count = this.props.counter.value;
        return count === 0 ? <span>ZERO</span> : count;
    }

    getBadgeClass() {
        let spanClass = "badge m-2 badge-";
        spanClass += (this.props.counter.value !== 0) ? "primary" : "warning";
        return spanClass;
    }

    render() { 
        return (
            <div>
                <div>Counter # {this.props.counter.id}</div>
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick={()=>this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >Increment</button> 
                <button 
                    onClick={()=>this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >Decrement</button> 
                <button 
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >Delete</button>           
            </div>
        )
    } 
}

export default Counter;