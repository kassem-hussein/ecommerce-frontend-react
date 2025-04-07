import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [clear,setClear] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Trigger search action
    setClear(true)
  };

  const handleClear = () => {
      setQuery(""); // Reset the input field
      onSearch("");
      setClear(false);
  };
  
  return (
    <div className="container">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn btn-primary me-2">
          <i className="fas fa-search"></i>
        </button>

        {clear ?<button type="button" className="btn btn-secondary" onClick={handleClear}>
          <i className="fas fa-times"></i>
        </button> :""}
      </form>
    </div>
  );
};

export default SearchComponent;