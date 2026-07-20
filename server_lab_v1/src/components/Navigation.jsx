import NavigationItem from "./NavigationItem"

const Navigation = () => {

	const mainNavigation = [
		{ id: 'home', icon: '⌂', title: 'Главная' },
		{ id: 'notes', icon: '▤', title: 'Заметки' },
		{ id: 'experiments', icon: '⌬', title: 'Эксперименты' },
		{ id: 'problems', icon: '△', title: 'Проблемы' },
		{ id: 'settings', icon: '⚙', title: 'Настройки' },
	]

	return (
		<nav className="sidebar__navigation">
			{mainNavigation.map(item => (
				<NavigationItem
					key={item.id}
					{...item}
				/>
			))}
			<div className="nav-divider"></div>
			<div className="nav-divider"></div>

			<div className="nav-group">
				<div className="nav-group__title">
					<span>Антикапкан</span> <span className="nav-group__arrow">⌃</span>
				</div>
				<a href="#" className="nav-item">
					<span className="nav-item__icon">⊕</span> <span>Обзор</span>
				</a>
				<a href="#" className="nav-item">
					<span className="nav-item__icon">◈</span> <span>VPN</span>

				</a>
				<a href="#" className="nav-item">
					<span className="nav-item__icon">▤</span> <span>Сервер</span>
				</a>
				<a href="#" className="nav-item">
					<span className="nav-item__icon">⌘</span> <span>Сеть</span>
				</a>
			</div>

		</nav>
	)
}
export default Navigation