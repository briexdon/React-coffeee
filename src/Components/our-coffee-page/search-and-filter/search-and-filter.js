import "./search-and-filter.css";

import { Component, createRef } from "react";

class SearchAndFilter extends Component {
  state = {
    search: "",
    buttons: [
      { class: `brazil-coffee`, data: `Brazil`, text: `Brazil`, active: false },
      { class: `kenya-coffee `, data: `Kenya`, text: `Kenya`, active: false },
      { class: `columbia-coffee`, data: `Columbia`, text: `Columbia`, active: false },
    ],
    searchHint: false,
    ref: createRef(),
  };

  upadateLocalSearch = (e) => {
    this.setState({ search: e.target.value });
    this.props.updateGlobaSearch(e.target.value);
  };

  renderButtons = (buttons) => {
    const btns = [];
    buttons.forEach((elem, i) => {
      const element = (
        <button
          data={elem.data}
          className={elem.class}
          key={i}
          onClick={(e) => {
            this.props.updateFilter(e, e.target.getAttribute("data"), this.state.buttons);
          }}
        >
          {elem.text}
        </button>
      );
      btns.push(element);
    });
    return btns;
  };

  changeButtonsProperty = (buttons, searchHint, test) => {
    buttons.forEach((elem) => {
      if (elem.active) {
        return (elem.class += " active-filter");
      }
    });

    // console.log(test);
    // if (searchHint === true) {
    //   test.style.display = "block";
    // } else {
    //   test.style.display = "none";
    // }
  };

  render() {
    const { search, buttons, searchHint } = this.state;
    // const refHint = createRef();
    this.changeButtonsProperty(buttons, searchHint, this.state.ref);

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
          {this.renderButtons(buttons)}
        </div>
      </section>
    );
  }
}

export default SearchAndFilter;
