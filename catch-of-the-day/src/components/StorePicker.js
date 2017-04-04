import React from 'react';
import { getFunName } from '../helpers';

/*
  constructor extends

*/
class StorePicker extends React.Component {
  // super runs React.Component first
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // and then we sprinkle on our own stuff
  goToStore(event) {
    event.preventDefault();
    console.log('you changed the URL');
    //first grab the text from box
    console.log(this.storeInput.value);
    //transition from / to /store/:storeId
  }

  render() {
    // Any where else
    // Render is a methd bound to the component
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
