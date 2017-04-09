import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const {details, index} = this.props; // const details. = this.props.details ES6 destructuring
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? "Add To Order" : "Sold Out!"
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)}  disabled={!isAvailable}>{buttonText}</button> {/*'this.props.addToOrder('fish-1') would run on page load'*/}
      </li>
    )
  }
}

Fish.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
  addToOrder: React.PropTypes.func.isRequired
}

export default Fish;
