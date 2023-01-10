import "./search-and-filter.css";

import { Component } from "react";
class SearchAndFilter extends Component {
  state = {
    search: "",
  };

  upadateLocalTerm = (e) => {
    this.setState({ search: e.target.value });
    this.props.updateGlobaTerm(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <section className="search-and-filter">
        <div className="search-field">
          <label htmlFor="coffee">Looking for</label>
          <input
            value={search}
            onChange={(e) => this.upadateLocalTerm(e)}
            type="text"
            placeholder="start typing here..."
            id="coffee"
          />
        </div>
        <div className="filter-field">
          <label>Or filter</label>
          <button className="brazil-coffee">Brazil</button>
          <button className="kenya-coffee">Kenya</button>
          <button className="columbia-coffee">Columbia</button>
        </div>
      </section>
    );
  }
}

export default SearchAndFilter;
