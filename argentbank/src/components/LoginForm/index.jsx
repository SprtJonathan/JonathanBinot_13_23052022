import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/reducers/loggedUser.js";


const LOGIN_URL = "http://localhost:3001/api/v1/user/login";

function LoginForm() {
  const dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(
    useSelector((state) => state.userStatus.value.isAuthenticated)
  );

  useEffect(() => {
    setError("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(username, password);
    setPassword("");
    const userCredentials = {
      email: username,
      password: password,
    };

    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (response.status === 200) {
        const res = await response.json();
        //console.log(res);
        const token = res.body.token;
        dispatch(login({ token: token, isAuthenticated: true }));
        setSuccess(true);
        if (rememberMe) {
          localStorage.setItem(
            "token",
            JSON.stringify({
              token: token,
              isAuthenticated: true,
            })
          );
        }
      } else {
        setError("Invalid username or password");
        console.log(response.status);
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred");
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/profile" />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <p
              ref={errRef}
              className={error ? "error" : "offscreen"}
              aria-live="assertive"
            >
              {error}
            </p>
          </div>

          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      )}
    </>
  );
}

export default LoginForm;
