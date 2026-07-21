import NavigationItem from "./NavigationItem";



const NavigationGroup = ({ title, items }) => {
	return (
		<div className="nav-group">
			<div className="nav-group__title">
				<span>{title}</span> <span className="nav-group__arrow">⌃</span>
			</div>
			{items.map(item => (
				<NavigationItem
					key={item.id}
					icon={item.icon}
					title={item.title}
				/>
			))
			}
		</div>
	);
};

export default NavigationGroup;