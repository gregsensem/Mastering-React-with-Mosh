import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        const {counters,onDelete,onIncrement,onDecrement,onReset} =this.props
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter=>(
                <Counter key = {counter.id}
                        counter = {counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        select={true} />
                ))}
            </div>
        );
    }
}
 
export default Counters;