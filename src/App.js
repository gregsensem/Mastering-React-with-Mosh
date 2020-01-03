import React, {Component}from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar'

class App extends Component {
  state = { 
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 }

handleDelete =(counterId)=>{
    const counters = this.state.counters.filter(counter=>counter.id!==counterId)
    this.setState({counters})
}

handleReset = ()=>{
    const counters = this.state.counters.map(counter=>{
        counter.value=0;
        return counter;
    })
    this.setState({counters})
}
handleIncrement = (counter)=>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters})
}
handleDecrement = (counter)=>{
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  if(counters[index].value>0) counters[index].value--;
  this.setState({counters})
}

render(){
  return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(counter=>counter.value>0).length} />
      <main className="container">
        <Counters
          counters = {this.state.counters} 
          onDelete={this.handleDelete}
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}        
        />      
      </main>
    </React.Fragment>
  );
}
}

export default App;
