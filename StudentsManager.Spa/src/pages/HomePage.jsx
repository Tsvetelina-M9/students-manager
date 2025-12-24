
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
	const { isLoggedIn } = useAuth();
	const navigate = useNavigate();

	return (
		<section className="page" aria-labelledby="home-title">
			<h1 id="home-title">Students Manager</h1>
			<p>Simple place to access your student tools.</p>

			<div className="actions">
				{isLoggedIn ? (
					<button type="button" onClick={() => navigate('/profile')}>
						Go to profile
					</button>
				) : (
					<>
						<button type="button" onClick={() => navigate('/login')}>
							Login
						</button>
						<button type="button" onClick={() => navigate('/slido')}>
							Open Slido
						</button>
					</>
				)}
			</div>
		</section>
	);
}

export default HomePage;