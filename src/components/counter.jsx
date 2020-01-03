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
            <div className="row">
                {/* <div>Counter # {this.props.counter.id}</div> */}
                <div className="col-1">
                    <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button 
                        onClick={()=>this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm"
                    >+</button> 
                    <button 
                        onClick={()=>this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={this.props.counter.value===0 ? 'disabled':''}
                    >-</button> 
                    <button 
                        onClick={()=>this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm"
                    >Delete</button>           
                </div>
            </div>
        )
    } 
}

export default Counter;