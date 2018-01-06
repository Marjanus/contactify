import React, { Component } from 'react';

export default class FiltersBar extends Component {
  render() {
    return (
      <section>
        <form action="" method="get">
          <input type="text" name="name" placeholder="name" />
          <select name="city">
            <option value="london">London</option>
            <option value="sydney">Sydney</option>
            <option value="los angeles">Los Angeles</option>
            <option value="singapore">Singapore</option>
            <option value="hong kong">Hong Kong</option>
          </select>
          <input type="checkbox" name="active" value="true" checked={false} />Show active
          <input type="submit" value="Filter" />
        </form>
        <button type="button"><i className="fa fa-plus" aria-hidden="true"/>Add new contact</button>
      </section>
    );
  }
}
