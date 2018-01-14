import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FiltersBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      city: 'all-cities',
      onlyActive: true,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeOnlyActive = this.handleChangeOnlyActive.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChangeName(e) {
    const trimmedName = e.target.value.trim();
    this.setState({ name: trimmedName });
  }

  handleChangeCity(e) {
    this.setState({ city: e.target.value });
  }

  handleChangeOnlyActive() {
    this.setState({ onlyActive: !this.state.onlyActive });
  }

  handleFilter(e) {
    e.preventDefault();
    const nameQuery = this.state.name ? this.state.name : null;
    const cityQuery = this.state.city === 'all-cities' ? null : this.state.city;
    this.props.onFilterContacts(nameQuery, cityQuery, this.state.onlyActive);
  }


  render() {
    return (
      <section className="filters-bar">
        <div className="top-container">
          <div>
            <form action="" method="get">
              <input
                type="text"
                name="name" placeholder="Name"
                onChange={this.handleChangeName}
              />
              <select name="city" value={this.state.city} onChange={this.handleChangeCity}>
                <option value="all-cities">City</option>
                <option value="London">London</option>
                <option value="Sydney">Sydney</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Singapore">Singapore</option>
                <option value="Hong Kong">Hong Kong</option>
              </select>
              <input type="checkbox" defaultChecked onClick={this.handleChangeOnlyActive} />
              <span>Show active</span>
              <button type="submit" onClick={this.handleFilter}>Filter</button>
            </form>
            <button type="button" className="add-contact">
              <i className="fa fa-plus" aria-hidden="true" />
              <span>ADD NEW CONTACT</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

FiltersBar.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
};
