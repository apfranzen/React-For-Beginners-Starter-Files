import React from 'react';
import Header from './Header';
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component {
  constructor() {
    super();

    // this is where our state lives
    // this is where the fish swims up stream

    // this will bind fish method to App component - you could do $r.addFish({name: 'cool', price: 1000})
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    // getinitialstate
    this.state = {
      fishes: {},
      order: {}
    };
  }

  /*
    It is a best practice to make a copy of the state and then update it
    This is done:
      1: For performance
      2:
  */
  addFish(fish) {
    // 1. update our state
    const fishes = {...this.state.fishes} // spread operator to make a copy of the origin state. This will take every item from our object and spread it into this object
    // 2. add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // 3. set state
    this.setState({ fishes }) //same as fishes : fishes
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header age="5000" cool="{true}" tagline="So Fresh it's still moving"/>
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} /> {/* addFish={this.addFish} pases the addFish function down to Inventory component */}
      </div>
    )
  }
}

export default App;
