import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FiltersBar extends Component {
  render() {
    return (
      <section className="filters-bar">
        <div className="top-container">
          <form action="" method="get">
            <input type="text" name="name" placeholder="name" />
            <select name="city">
              <option value="">City</option>
              <option value="london">London</option>
              <option value="sydney">Sydney</option>
              <option value="los angeles">Los Angeles</option>
              <option value="singapore">Singapore</option>
              <option value="hong kong">Hong Kong</option>
            </select>
            <input type="checkbox" name="active" value="true" checked={false} />Show active
            <button type="submit" onClick={this.props.onFilterContacts}>Filter</button>
          </form>
          <button type="button">
            <i className="fa fa-plus" aria-hidden="true" />Add new contact
          </button>
        </div>
      </section>
    );
  }
};

FiltersBar.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
}
