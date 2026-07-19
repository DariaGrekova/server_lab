import Logo from "./Logo"
import Navigation from "./Navigation"
import ProjectCard from "./ProjectCard"
import ThemeToggle from "./ThemeToggle"

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<Logo />
			<Navigation />
			<ProjectCard />
			<ThemeToggle />
		</aside>
	)
}

export default Sidebar