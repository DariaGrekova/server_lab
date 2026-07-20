import Search from "./Search";
import UserActions from "./UserActions";

const Header = () => {
	return (
		<header className="header">
			<Search />
			<UserActions />
		</header>
	);
};

export default Header;