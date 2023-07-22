import { Button, Form } from 'react-bootstrap';
import facebook from '../../Image/facebook.svg';
import github from '../../Image/github.svg';
import google from '../../Image/google.svg';

export const Login = () => {
	return (
		<>
			<div className="auth-background">
				<div className="auth-wrapper">
					<div className="d-flex flex-column auth-text ">
						<div>
							<h1 className="mx-auto" style={{ marginTop: '25%', fontSize: '6rem' }}>
								Welcome Back
							</h1>

							<div>
								<button className="mt-3 mx-auto link-button">Not Register ?</button>
							</div>
						</div>
					</div>
					<div className="auth-window">
						<Form id="form" className="m-auto">
							<h3 id="big-label">Login</h3>
							<h5 className="mb-5	">Glad you’re back.!</h5>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<input className="field" type="email" placeholder="Email address" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<input className="field" type="password" placeholder="Password" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check
									type="checkbox"
									style={{ color: 'white' }}
									label="Remember me"
								/>
							</Form.Group>

							<Button variant="primary" type="submit" className=" login-button w-100">
								Submit
							</Button>

							<p className="mt-2 forgot-password text-right text-center">
								Forgot password?
							</p>
							<div className="mt-5" style={{ borderTop: '3px solid #4D4D4D' }}></div>
							<div className="mx-auto d-flex justify-content-center gap-3 mt-3">
								<img src={google}></img>
								<img src={github}></img>
								<img src={facebook}></img>
							</div>
						</Form>
					</div>
					<div id="ellipse-1" className="ellipse"></div>
					<div id="ellipse-2" className="ellipse"></div>
				</div>
			</div>
		</>
	);
};
