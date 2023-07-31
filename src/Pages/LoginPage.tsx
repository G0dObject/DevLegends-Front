import { useParams } from 'react-router-dom';
import { store } from '..';
import LoginComponent, { LoginForm } from '../Components/Authorize/LoginComponent';

const LoginPage = () => {
	const { loginForm } = useParams<{ loginForm: keyof typeof LoginForm }>();
	let formType = LoginForm.Login;

	if (loginForm !== undefined) {
		formType = GetForm(loginForm!);
	}
	return store.isAuth ? <>auth</> : <LoginComponent form={formType} />;
};

function GetForm(str: string) {
	switch (str.toLowerCase()) {
		case 'login':
			return LoginForm['Login' as keyof typeof LoginForm];
		case 'signup':
			return LoginForm['SignUp' as keyof typeof LoginForm];
		case 'forgot':
			return LoginForm['Forgot' as keyof typeof LoginForm];
		default:
			return LoginForm.Login;
	}
}

export default LoginPage;
