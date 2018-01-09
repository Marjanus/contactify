import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FiltersBar extends Component {
  render() {
    return (
      <section className="filters-bar">
        <div className="top-container">
          <div>
            <form action="" method="get">
              <input type="text" name="name" placeholder="Name" />
              <select name="city">
                <option value="">City</option>
                <option value="london">London</option>
                <option value="sydney">Sydney</option>
                <option value="los ang=les">Los Angeles</option>
                <option value="singapore">Singapore</option>
                <option value="hong kong">Hong Kong</option>
              </select>
              <input type="checkbox" name="active" defaultChecked />
              <span>Show active</span>
              <button type="submit" onClick={this.props.onFilterContacts}>Filter</button>
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
};

FiltersBar.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
}
