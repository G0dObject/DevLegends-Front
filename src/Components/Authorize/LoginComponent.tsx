import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';
import SignUp from './SignUp';

const LoginComponent = (props: { form: LoginForm } | undefined) => {
	switch (props?.form) {
		case LoginForm.Login:
			return <Login />;

		case LoginForm.SignUp:
			return <SignUp />;
		case LoginForm.Forgot:
			return <ForgotPassword />;

		default:
			return <>Nope</>;
	}
};

export default LoginComponent;

export enum LoginForm {
	Login,
	SignUp,
	Forgot,
}
