const NavigationItem = ({ icon, title }) => {

	return (
		<a href="#" className="nav-item">
			<span className="nav-item__icon">{icon}</span> <span>{title}</span>
		</a>
	);
};

export default NavigationItem;