import "./search-and-filter.css";

import { Component, createRef } from "react";

class SearchAndFilter extends Component {
  state = {
    search: "",
    buttonsArr: JSON.parse(localStorage.getItem(`color`)) || [
      { data: "Brazil", label: "Brazil", highligh: false },
      { data: "Kenya", label: "Kenya", highligh: false },
      { data: "Columbia", label: "Columbia", highligh: false },
    ],
  };

  upadateLocalSearch = (e, hint, data) => {
    const term = e.target.value;
    const checkData = data.find((elem) => elem.name.indexOf(term) > -1);

    if (term.length > 50) {
      e.target.style.border = "solid 1px red";
      hint.current.style.display = "block";
      hint.current.innerHTML = "Name cant be longer than 50 symbols";
      return;
    } else {
      e.target.style.border = "none";
      if (checkData) {
        hint.current.style.display = "none";
      } else {
        hint.current.style.display = "block";
        hint.current.innerHTML = "!No results were found for this query";
      }
    }

    this.setState({ search: term });
    this.props.updateGlobaSearch(term);
  };

  render() {
    const { search, buttonsArr } = this.state;
    const hint = createRef();

    const changeBtnColor = (index, highligh) => {
      this.setState(({ buttonsArr }) => {
        const newArr = buttonsArr.map((elem, i) => {
          if (i === index) {
            return { ...elem, highligh: !highligh };
          }
          return elem;
        });

        localStorage.setItem(`color`, JSON.stringify(newArr));

        return { buttonsArr: newArr };
      });
    };

    const buttons = buttonsArr.map(({ data, label, highligh }, index) => {
      const active = highligh;
      const clazz = active ? "filter-light" : ``;

      return (
        <button
          type="button"
          data={data}
          className={`btn-filter ${clazz}`}
          key={data}
          onClick={(e) =>
            this.props.updateFilter(e.target.getAttribute("data"), changeBtnColor(index, highligh))
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
            onChange={(e) => this.upadateLocalSearch(e, hint, this.props.data)}
            type="text"
            placeholder="start typing here..."
            id="coffee"
          />
          <div ref={hint} className="input-hint"></div>
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
