import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import TokenHanderPage from './Pages/TokenHanderPage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/token/:token" element={<TokenHanderPage />}></Route>
				<Route path="/" element={<LoginPage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/login/:loginForm" element={<LoginPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
