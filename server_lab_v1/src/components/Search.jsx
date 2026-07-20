const Search = () => {
	return (
		<div className="search">
			<span className="search__icon">⌕</span>
			<input type="text" className="search__input"
				placeholder="Поиск по проекту..." />
			<span className="search__shortcut"> ⌘ K </span>
		</div>

	);
};

export default Search;