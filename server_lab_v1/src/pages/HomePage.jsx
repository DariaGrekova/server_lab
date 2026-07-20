const HomePage = () => {
	return (
		<main className="content">
			{/*==================== WELCOME ==================== */}
			<section className="welcome">
				<div className="welcome__content"> <span className="welcome__eyebrow"> SERVER LAB / АНТИКАПКАН </span>
					<h1> Добро пожаловать в Server Lab </h1>
					<p> Антикапкан — ваш учебный полигон для исследования VPN, серверов и сетей. Экспериментируйте, анализируйте и
						решайте реальные сетевые проблемы. </p>
					<div className="welcome__actions"> <a href="#" className="button button--primary"> ⚗ Начать эксперимент </a> <a
						href="#" className="button button--secondary"> △ Перейти к проблемам </a> </div>
				</div>
				<div className="welcome__illustration">
					<div className="server-illustration">
						<div className="server-illustration__shield"> ♙ </div>
						<div className="server-stack">
							<div className="server"> <span></span> <span></span> <span></span> </div>
							<div className="server"> <span></span> <span></span> <span></span> </div>
							<div className="server"> <span></span> <span></span> <span></span> </div>
						</div>
					</div>
				</div>
			</section>
			{/*==================== SECTION CARDS ==================== */}
			<section className="section-cards"> {/*VPN */}
				<article className="section-card">
					<div className="section-card__header">
						<div className="section-card__icon"> ⊕ </div>
						<div>
							<h2>VPN</h2>
							<p> Настройка и тестирование VPN-соединений, эксперименты с MTU и анализ проблем. </p>
						</div>
					</div>
					<div className="section-card__stats">
						<div className="stat"> <strong>3</strong> <span>Эксперимента</span> </div>
						<div className="stat"> <strong>2</strong> <span>Проблемы</span> </div>
						<div className="stat"> <strong>1</strong> <span>Решено</span> </div>
					</div> <a href="#" className="section-card__link"> Перейти в раздел → </a>
				</article> {/*SERVER */}
				<article className="section-card">
					<div className="section-card__header">
						<div className="section-card__icon"> ▤ </div>
						<div>
							<h2>Сервер</h2>
							<p> Конфигурация сервера, мониторинг ресурсов и диагностика производительности. </p>
						</div>
					</div>
					<div className="section-card__stats">
						<div className="stat"> <strong>4</strong> <span>Проверки</span> </div>
						<div className="stat"> <strong>2</strong> <span>Проблемы</span> </div>
						<div className="stat"> <strong>1</strong> <span>Решено</span> </div>
					</div> <a href="#" className="section-card__link"> Перейти в раздел → </a>
				</article> {/*NETWORK */}
				<article className="section-card">
					<div className="section-card__header">
						<div className="section-card__icon"> ⌘ </div>
						<div>
							<h2>Сеть</h2>
							<p> Сетевые тесты и инструменты: MTU, iperf3, MTR, TCP/UDP и другие. </p>
						</div>
					</div>
					<div className="section-card__stats">
						<div className="stat"> <strong>10</strong> <span>Тестов</span> </div>
						<div className="stat"> <strong>3</strong> <span>Проблемы</span> </div>
						<div className="stat"> <strong>1</strong> <span>Решено</span> </div>
					</div> <a href="#" className="section-card__link"> Перейти в раздел → </a>
				</article>
			</section>
			{/*==================== BOTTOM GRID ==================== */}
			<section className="dashboard-grid">
				{/*==================== RECENT ACTIVITY ==================== */}
				<div className="activity-card">
					<div className="card-header">
						<div>
							<h2>Последняя активность</h2>
							<p>Последние изменения в Антикапкане</p>
						</div> <button className="card-header__menu"> ⋮ </button>
					</div>
					<div className="activity-list">
						<article className="activity-item">
							<div className="activity-item__icon activity-item__icon--success"> ✓ </div>
							<div className="activity-item__content">
								<h3> Эксперимент «MTU 1280» завершён </h3> <span> VPN / Эксперименты </span>
							</div> <time> 15.07.2026<br /> 10:32 </time>
						</article>
						<article className="activity-item">
							<div className="activity-item__icon activity-item__icon--warning"> ! </div>
							<div className="activity-item__content">
								<h3> Проблема «VPN отключается на Android» обновлена </h3> <span> VPN / Проблемы </span>
							</div> <time> 14.07.2026<br /> 18:45 </time>
						</article>
						<article className="activity-item">
							<div className="activity-item__icon activity-item__icon--info"> ⚗ </div>
							<div className="activity-item__content">
								<h3> Создан эксперимент «MTU 1420 на Android» </h3> <span> VPN / Эксперименты </span>
							</div> <time> 14.07.2026<br /> 16:20 </time>
						</article>
						<article className="activity-item">
							<div className="activity-item__icon activity-item__icon--server"> ▤ </div>
							<div className="activity-item__content">
								<h3> Проверка сервера (CPU / RAM) выполнена </h3> <span> Сервер / Мониторинг </span>
							</div> <time> 14.07.2026<br /> 12:05 </time>
						</article>
						<article className="activity-item">
							<div className="activity-item__icon activity-item__icon--network"> ⌘ </div>
							<div className="activity-item__content">
								<h3> Тест iperf3 TCP завершён </h3> <span> Сеть / Тесты </span>
							</div> <time> 13.07.2026<br /> 21:20 </time>
						</article>
					</div> <a href="#" className="card-footer-link"> Показать всю активность → </a>
				</div>
				{/*==================== QUICK ACCESS ==================== */}
				<div className="quick-access-card">
					<div className="card-header">
						<div>
							<h2>Быстрый доступ</h2>
							<p>Часто используемые действия</p>
						</div>
					</div>
					<div className="quick-actions"> <a href="#" className="quick-action"> <span className="quick-action__icon">⚗</span>
						<span>Новый эксперимент</span> </a> <a href="#" className="quick-action"> <span
							className="quick-action__icon">△</span> <span>Новая проблема</span> </a> <a href="#" className="quick-action">
							<span className="quick-action__icon">▤</span> <span>Проверить сервер</span> </a> <a href="#"
								className="quick-action"> <span className="quick-action__icon">⌘</span> <span>Запустить тест</span> </a> <a
									href="#" className="quick-action"> <span className="quick-action__icon">▤</span> <span>Мои заметки</span> </a> <a
										href="#" className="quick-action"> <span className="quick-action__icon">⚙</span> <span>Настройки</span> </a>
					</div> {/*Advice */}
					<div className="advice">
						<div className="advice__icon"> ☼ </div>
						<div>
							<h3>Совет</h3>
							<p> Начните с эксперимента или проверьте существующие проблемы — это поможет лучше понять вашу сеть. </p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default HomePage;