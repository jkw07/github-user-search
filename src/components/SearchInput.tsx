type SearchInputTypes = {
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  username: string;
};

export const SearchInput = ({
  username,
  handleKeyDown,
  handleSearchInput,
  handleButtonClick,
}: SearchInputTypes) => {
  return (
    <div className="search-bar">
      <label htmlFor="userSearch">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </label>
      <input
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search GitHub username..."
        className="search-input"
        type="text"
        id="userSearch"
        name="user"
        value={username}
        onChange={handleSearchInput}
        onKeyDown={handleKeyDown}
        required
      />
      <button className="search-button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};
