
import { ILogin } from '../Core/Interfaces/Auth/ILogin';
import { IUser } from '../Core/Interfaces/Auth/IUser';
import $api from '../http';

export default class AuthService {
	static async login(props:ILogin /*email: string, password: string*/) {	
		return await $api.post<IUser>('login/login', { email:props.email, password : props.password });
	}
}
