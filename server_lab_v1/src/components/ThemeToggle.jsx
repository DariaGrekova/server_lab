const ThemeToggle = () => {
	return (
		<div className="theme-toggle"> <span className="theme-toggle__icon">☼</span> <span>Светлая тема</span>
			<div className="toggle toggle--active">
				<div className="toggle__circle"></div>
			</div>
		</div>
	)
}

export default ThemeToggle