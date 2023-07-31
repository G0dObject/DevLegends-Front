import { useParams } from 'react-router-dom';
import { store } from '..';

const TokenHanderPage = () => {
	const { token } = useParams();

	console.log(token);

	store.setToken(token as string);
	window.location.href = '/';
	return <></>;
};

export default TokenHanderPage;
