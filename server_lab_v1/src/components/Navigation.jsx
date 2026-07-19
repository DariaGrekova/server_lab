const Navigation = () => {
	return (
		<nav className="sidebar__navigation"> <a href="#" className="nav-item nav-item--active"> <span
			className="nav-item__icon">⌂</span> <span>Главная</span> </a>
			<div className="nav-group">
				<div className="nav-group__title"> <span>Антикапкан</span> <span className="nav-group__arrow">⌃</span> </div> <a
					href="#" className="nav-item"> <span className="nav-item__icon">⊕</span> <span>Обзор</span> </a> <a href="#"
						className="nav-item"> <span className="nav-item__icon">◈</span> <span>VPN</span> </a> <a href="#" className="nav-item">
					<span className="nav-item__icon">▤</span> <span>Сервер</span> </a> <a href="#" className="nav-item"> <span
						className="nav-item__icon">⌘</span> <span>Сеть</span> </a>
			</div>
			<div className="nav-divider"></div> <a href="#" className="nav-item"> <span className="nav-item__icon">▤</span>
				<span>Заметки</span> </a> <a href="#" className="nav-item"> <span className="nav-item__icon">⌬</span>
				<span>Эксперименты</span> </a> <a href="#" className="nav-item"> <span className="nav-item__icon">△</span>
				<span>Проблемы</span> </a> <a href="#" className="nav-item"> <span className="nav-item__icon">⚙</span>
				<span>Настройки</span> </a>
		</nav>
	)
}
export default Navigation