import "./search-and-filter.css";

function SearchAndFilter() {
  return (
    <section className="search-and-filter">
      <div className="search-field">
        <label htmlFor="coffee">Looking for</label>
        <input type="text" placeholder="start typing here..." id="coffee" />
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

export default SearchAndFilter;
