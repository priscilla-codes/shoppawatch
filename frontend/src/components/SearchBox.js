function SearchBox() {
  return (
    <form className="search">
      <input type="text" placeholder="Search" />
      <button type="submit">
        <i className="fal fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;
