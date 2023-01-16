import "./search-and-filter.css";

import { Component } from "react";

class SearchAndFilter extends Component {
  state = {
    search: "",
    buttonsArr: [
      { data: "Brazil", label: "Brazil", highligh: false },
      { data: "Kenya", label: "Kenya", highligh: false },
      { data: "Columbia", label: "Columbia", highligh: false },
    ],
  };

  upadateLocalSearch = (e) => {
    this.setState({ search: e.target.value });
    this.props.updateGlobaSearch(e.target.value);
  };

  render() {
    const { search, buttonsArr } = this.state;

    const changeBtnColor = (index, highligh) => {
      this.setState(({ buttonsArr }) => {
        const newArr = buttonsArr.map((elem, i) => {
          if (i === index) {
            return { ...elem, highligh: !highligh };
          }
          return elem;
        });
        return { buttonsArr: newArr };
      });
    };

    const buttons = buttonsArr.map(({ data, label, highligh }, i) => {
      const active = highligh;
      const clazz = active ? "filter-light" : null;

      return (
        <button
          type="button"
          data={data}
          className={`btn-filter ${clazz}`}
          key={data}
          onClick={(e) =>
            this.props.updateFilter(e.target.getAttribute("data"), changeBtnColor(i, highligh))
          }
        >
          {label}
        </button>
      );
    });

    return (
      <section className="search-and-filter">
        <div className="search-field">
          <label htmlFor="coffee">Looking for</label>
          <input
            value={search}
            onChange={(e) => this.upadateLocalSearch(e)}
            type="text"
            placeholder="start typing here..."
            id="coffee"
          />
          <div ref={this.state.ref} className="filter-input-hint">
            !No results were found for this query
          </div>
        </div>

        <div className="filter-field">
          <label>Or filter</label>
          {buttons}
        </div>
      </section>
    );
  }
}

export default SearchAndFilter;
