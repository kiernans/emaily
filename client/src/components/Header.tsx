import { Link } from 'react-router-dom';
import { useFetchUserQuery } from '../store/apis/authApi';
import Payments from './Payments';

const Header = () => {
	const { data: user, error, isLoading } = useFetchUserQuery();

	let content;
	if (isLoading) {
		content = '';
	} else if (error) {
		content = <div>Error checking authentication</div>;
	} else if (!user) {
		// LOGGED OUT
		content = (
			<li>
				<a href='/auth/google'>Login with Google</a>
			</li>
		);
	} else {
		// LOGGED IN
		content = (
			<>
				<li>
					<Payments />
				</li>
				<li style={{ margin: '0 10px' }}>Credits: {user.credits}</li>
				<li>
					<a href='/api/logout'>Logout</a>
				</li>
			</>
		);
	}

	return (
		<nav>
			<div className='nav-wrapper'>
				<Link to={user ? '/surveys' : '/'} className='left brand-logo'>
					Emaily
				</Link>
				<ul className='right'>{content}</ul>
			</div>
		</nav>
	);
};

export default Header;
