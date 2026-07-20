import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import './App.css'

function App() {

	return (
		<>
			<div class="app">
				{/*==================== SIDEBAR ==================== */}
				<Sidebar />
				{/*==================== MAIN ==================== */}
				<div class="main">
					{/*==================== HEADER ==================== */}
					<Header />
					{/*==================== PAGE CONTENT ==================== */}
					<HomePage />
					{/*==================== FOOTER ==================== */}
					<footer class="footer"> © 2026 Server Lab <span>•</span> Антикапкан — ваш полигон для сетевых исследований </footer>
				</div>
			</div>
		</>
	)
}

export default App
