import { useState } from "react";

const SearchInput = ({ onSearchSubmit }) => {
  const [entry, setEntry] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(entry);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form" action="">
        <div className="field">
          <div className="ui massive icon input">
            <input
              type="text"
              placeholder="Search.."
              onChange={(event) => setEntry(event.target.value)}
              value={entry}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
