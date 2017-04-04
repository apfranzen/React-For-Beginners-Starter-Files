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
    const storeId = this.storeInput.value
    console.log(`Going to ${storeId}`);
    //transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    // Any where else
    // Render is a methd bound to the component
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
