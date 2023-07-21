import LoginComponent, { LoginForm } from '../Components/Authorize/LoginComponent';

const MainPage = () => {
	return <LoginComponent form={LoginForm.Login}></LoginComponent>;
};

export default MainPage;
