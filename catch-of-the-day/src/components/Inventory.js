import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updatedFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className='fish-edit' key={key}>
        <input onChange={(e) => this.handleChange(e, key)} type="text" value={fish.name} name="name" placeholder="Fish name" />
        <input onChange={(e) => this.handleChange(e, key)} type="text" value={fish.price} name="price" placeholder="Fish price" />
        <select onChange={(e) => this.handleChange(e, key)} value={fish.status} name="status"  placeholder="Fush Status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea onChange={(e) => this.handleChange(e, key)} type="text" value={fish.desc} name="desc" placeholder="Fish desc"></textarea>
        <input onChange={(e) => this.handleChange(e, key)} type="text" value={fish.image} name="image" placeholder="Fish image" />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <p>Inventory</p>
        { Object.keys(this.props.fishes).map(this.renderInventory) }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
