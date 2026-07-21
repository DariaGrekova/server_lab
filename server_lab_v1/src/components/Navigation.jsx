import NavigationItem from "./NavigationItem";
import NavigationGroup from "./NavigationGroup";

const Navigation = () => {

	const mainNavigation = [
		{ id: 'home', icon: '⌂', title: 'Главная' },
		{ id: 'notes', icon: '▤', title: 'Заметки' },
		{ id: 'experiments', icon: '⌬', title: 'Эксперименты' },
		{ id: 'problems', icon: '△', title: 'Проблемы' },
		{ id: 'settings', icon: '⚙', title: 'Настройки' },
	];

	const antikapkanNavigation = [
		{ id: 'overview', icon: '⊕', title: 'Обзор' },
		{ id: 'vpn', icon: '◈', title: 'VPN' },
		{ id: 'server', icon: '▤', title: 'Сервер' },
		{ id: 'network', icon: '⌘', title: 'Сеть' },
	];

	return (
		<nav className="sidebar__navigation">
			{mainNavigation.map(item => (
				<NavigationItem
					key={item.id}
					icon={item.icon}
					title={item.title}
				/>
			))}
			<div className="nav-divider"></div>
			<NavigationGroup
				title="Антикапкан"
				items={antikapkanNavigation}
			/>
		</nav>
	)
}
export default Navigation