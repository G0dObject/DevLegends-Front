import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { store } from "../..";
import github from "../../Image/github.svg";
import google from "../../Image/google.svg";
import microsoft from "../../Image/microsoft.svg";
export const Login = () => {
  const authPath = import.meta.env.VITE_APP_AUTH_URL as string;

  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  const sendLoginRequest = () => {
    var username = usernameref!.current!.value;
    var password = passwordref!.current!.value;

    console.log(username, password);

    store.login({ username, password }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="d-flex flex-column auth-text ">
        <div>
          <h1
            className="mx-auto"
            style={{ marginTop: "25%", fontSize: "6rem" }}
          >
            Welcome Back
          </h1>

          <div>
            <Link className="mt-3 mx-auto link-button" to={"/login/signup"}>
              Not Register ?
            </Link>
          </div>
        </div>
      </div>
      <div className="auth-window">
        <Form id="form" className="m-auto">
          <h3 id="big-label">Login</h3>
          <h5 className="mb-4	">Glad you’re back !</h5>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <input
              ref={usernameref}
              className="field"
              type="username"
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <input
              ref={passwordref}
              className="field"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              style={{ color: "white" }}
              label="Remember me"
            />
          </Form.Group>

          <Button
            onClick={(event) => {
              event.preventDefault();
              sendLoginRequest();
            }}
            variant="primary"
            type="submit"
            id="button-login"
            className="login-button w-100"
          >
            Submit
          </Button>

          <p className="mt-2 forgot-password text-right text-center">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/login/forgot"}
            >
              Forgot password?
            </Link>
          </p>
          <div
            className="mt-4"
            style={{ borderTop: "3px solid #4D4D4D" }}
          ></div>
          <div className="mx-auto d-flex justify-content-center gap-3 mt-3">
            <a
              href={`${authPath}/ExternalAuth?provider=Google&returnUrl=https://localhost:3000`}
            >
              <img src={google}></img>
            </a>

            <a
              href={`${authPath}/ExternalAuth?provider=GitHub&returnUrl=https://localhost:3000`}
            >
              <img src={github}></img>
            </a>
            <a href={``}>
              <img src={microsoft}></img>
            </a>
          </div>
        </Form>
      </div>
      <div id="ellipse-1-login" className="ellipse"></div>
      <div id="ellipse-2-login" className="ellipse"></div>
    </>
  );
};
