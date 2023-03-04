import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
	return (
		<div className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/surveys' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
