import './App.css'

function App() {

	return (
		<>
			<div class="app">
				{/*==================== SIDEBAR ==================== */}
				<aside class="sidebar">
					<div class="sidebar__logo">
						<div class="logo-icon">▱</div> <span>Server Lab</span>
					</div>
					<nav class="sidebar__navigation"> <a href="#" class="nav-item nav-item--active"> <span
						class="nav-item__icon">⌂</span> <span>Главная</span> </a>
						<div class="nav-group">
							<div class="nav-group__title"> <span>Антикапкан</span> <span class="nav-group__arrow">⌃</span> </div> <a
								href="#" class="nav-item"> <span class="nav-item__icon">⊕</span> <span>Обзор</span> </a> <a href="#"
									class="nav-item"> <span class="nav-item__icon">◈</span> <span>VPN</span> </a> <a href="#" class="nav-item">
								<span class="nav-item__icon">▤</span> <span>Сервер</span> </a> <a href="#" class="nav-item"> <span
									class="nav-item__icon">⌘</span> <span>Сеть</span> </a>
						</div>
						<div class="nav-divider"></div> <a href="#" class="nav-item"> <span class="nav-item__icon">▤</span>
							<span>Заметки</span> </a> <a href="#" class="nav-item"> <span class="nav-item__icon">⌬</span>
							<span>Эксперименты</span> </a> <a href="#" class="nav-item"> <span class="nav-item__icon">△</span>
							<span>Проблемы</span> </a> <a href="#" class="nav-item"> <span class="nav-item__icon">⚙</span>
							<span>Настройки</span> </a>
					</nav> {/*Sidebar project card */}
					<div class="sidebar__project-card">
						<div class="project-card__icon"> ⊕ </div>
						<h3>Антикапкан</h3>
						<p> Ваш учебный полигон для исследования сетей, VPN и серверов. </p> <a href="#" class="project-card__link">
							Подробнее → </a>
					</div> {/*Theme toggle */}
					<div class="theme-toggle"> <span class="theme-toggle__icon">☼</span> <span>Светлая тема</span>
						<div class="toggle toggle--active">
							<div class="toggle__circle"></div>
						</div>
					</div>
				</aside>
				{/*==================== MAIN ==================== */}
				<div class="main">
					{/*==================== HEADER ==================== */}
					<header class="header">
						<div class="search"> <span class="search__icon">⌕</span> <input type="text" class="search__input"
							placeholder="Поиск по проекту..." /> <span class="search__shortcut"> ⌘ K </span> </div>
						<div class="header__actions"> <button class="header-action"> ♧ <span class="notification-dot"></span> </button>
							<button class="header-action"> ? </button> <button class="user-avatar"> SL </button> <button class="user-menu">
								⌄ </button>
						</div>
					</header>
					{/*==================== PAGE CONTENT ==================== */}
					<main class="content">
						{/*==================== WELCOME ==================== */}
						<section class="welcome">
							<div class="welcome__content"> <span class="welcome__eyebrow"> SERVER LAB / АНТИКАПКАН </span>
								<h1> Добро пожаловать в Server Lab </h1>
								<p> Антикапкан — ваш учебный полигон для исследования VPN, серверов и сетей. Экспериментируйте, анализируйте и
									решайте реальные сетевые проблемы. </p>
								<div class="welcome__actions"> <a href="#" class="button button--primary"> ⚗ Начать эксперимент </a> <a
									href="#" class="button button--secondary"> △ Перейти к проблемам </a> </div>
							</div>
							<div class="welcome__illustration">
								<div class="server-illustration">
									<div class="server-illustration__shield"> ♙ </div>
									<div class="server-stack">
										<div class="server"> <span></span> <span></span> <span></span> </div>
										<div class="server"> <span></span> <span></span> <span></span> </div>
										<div class="server"> <span></span> <span></span> <span></span> </div>
									</div>
								</div>
							</div>
						</section>
						{/*==================== SECTION CARDS ==================== */}
						<section class="section-cards"> {/*VPN */}
							<article class="section-card">
								<div class="section-card__header">
									<div class="section-card__icon"> ⊕ </div>
									<div>
										<h2>VPN</h2>
										<p> Настройка и тестирование VPN-соединений, эксперименты с MTU и анализ проблем. </p>
									</div>
								</div>
								<div class="section-card__stats">
									<div class="stat"> <strong>3</strong> <span>Эксперимента</span> </div>
									<div class="stat"> <strong>2</strong> <span>Проблемы</span> </div>
									<div class="stat"> <strong>1</strong> <span>Решено</span> </div>
								</div> <a href="#" class="section-card__link"> Перейти в раздел → </a>
							</article> {/*SERVER */}
							<article class="section-card">
								<div class="section-card__header">
									<div class="section-card__icon"> ▤ </div>
									<div>
										<h2>Сервер</h2>
										<p> Конфигурация сервера, мониторинг ресурсов и диагностика производительности. </p>
									</div>
								</div>
								<div class="section-card__stats">
									<div class="stat"> <strong>4</strong> <span>Проверки</span> </div>
									<div class="stat"> <strong>2</strong> <span>Проблемы</span> </div>
									<div class="stat"> <strong>1</strong> <span>Решено</span> </div>
								</div> <a href="#" class="section-card__link"> Перейти в раздел → </a>
							</article> {/*NETWORK */}
							<article class="section-card">
								<div class="section-card__header">
									<div class="section-card__icon"> ⌘ </div>
									<div>
										<h2>Сеть</h2>
										<p> Сетевые тесты и инструменты: MTU, iperf3, MTR, TCP/UDP и другие. </p>
									</div>
								</div>
								<div class="section-card__stats">
									<div class="stat"> <strong>10</strong> <span>Тестов</span> </div>
									<div class="stat"> <strong>3</strong> <span>Проблемы</span> </div>
									<div class="stat"> <strong>1</strong> <span>Решено</span> </div>
								</div> <a href="#" class="section-card__link"> Перейти в раздел → </a>
							</article>
						</section>
						{/*==================== BOTTOM GRID ==================== */}
						<section class="dashboard-grid">
							{/*==================== RECENT ACTIVITY ==================== */}
							<div class="activity-card">
								<div class="card-header">
									<div>
										<h2>Последняя активность</h2>
										<p>Последние изменения в Антикапкане</p>
									</div> <button class="card-header__menu"> ⋮ </button>
								</div>
								<div class="activity-list">
									<article class="activity-item">
										<div class="activity-item__icon activity-item__icon--success"> ✓ </div>
										<div class="activity-item__content">
											<h3> Эксперимент «MTU 1280» завершён </h3> <span> VPN / Эксперименты </span>
										</div> <time> 15.07.2026<br /> 10:32 </time>
									</article>
									<article class="activity-item">
										<div class="activity-item__icon activity-item__icon--warning"> ! </div>
										<div class="activity-item__content">
											<h3> Проблема «VPN отключается на Android» обновлена </h3> <span> VPN / Проблемы </span>
										</div> <time> 14.07.2026<br /> 18:45 </time>
									</article>
									<article class="activity-item">
										<div class="activity-item__icon activity-item__icon--info"> ⚗ </div>
										<div class="activity-item__content">
											<h3> Создан эксперимент «MTU 1420 на Android» </h3> <span> VPN / Эксперименты </span>
										</div> <time> 14.07.2026<br /> 16:20 </time>
									</article>
									<article class="activity-item">
										<div class="activity-item__icon activity-item__icon--server"> ▤ </div>
										<div class="activity-item__content">
											<h3> Проверка сервера (CPU / RAM) выполнена </h3> <span> Сервер / Мониторинг </span>
										</div> <time> 14.07.2026<br /> 12:05 </time>
									</article>
									<article class="activity-item">
										<div class="activity-item__icon activity-item__icon--network"> ⌘ </div>
										<div class="activity-item__content">
											<h3> Тест iperf3 TCP завершён </h3> <span> Сеть / Тесты </span>
										</div> <time> 13.07.2026<br /> 21:20 </time>
									</article>
								</div> <a href="#" class="card-footer-link"> Показать всю активность → </a>
							</div>
							{/*==================== QUICK ACCESS ==================== */}
							<div class="quick-access-card">
								<div class="card-header">
									<div>
										<h2>Быстрый доступ</h2>
										<p>Часто используемые действия</p>
									</div>
								</div>
								<div class="quick-actions"> <a href="#" class="quick-action"> <span class="quick-action__icon">⚗</span>
									<span>Новый эксперимент</span> </a> <a href="#" class="quick-action"> <span
										class="quick-action__icon">△</span> <span>Новая проблема</span> </a> <a href="#" class="quick-action">
										<span class="quick-action__icon">▤</span> <span>Проверить сервер</span> </a> <a href="#"
											class="quick-action"> <span class="quick-action__icon">⌘</span> <span>Запустить тест</span> </a> <a
												href="#" class="quick-action"> <span class="quick-action__icon">▤</span> <span>Мои заметки</span> </a> <a
													href="#" class="quick-action"> <span class="quick-action__icon">⚙</span> <span>Настройки</span> </a>
								</div> {/*Advice */}
								<div class="advice">
									<div class="advice__icon"> ☼ </div>
									<div>
										<h3>Совет</h3>
										<p> Начните с эксперимента или проверьте существующие проблемы — это поможет лучше понять вашу сеть. </p>
									</div>
								</div>
							</div>
						</section>
					</main>
					{/*==================== FOOTER ==================== */}
					<footer class="footer"> © 2026 Server Lab <span>•</span> Антикапкан — ваш полигон для сетевых исследований </footer>
				</div>
			</div>
		</>
	)
}

export default App
