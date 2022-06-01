import { useRef, useState, useEffect } from "react";

const LOGIN_URL = "http://localhost:3001/api/v1/user/login";

function LoginForm() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    setPassword("");
    setSuccess(true);
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
        setSuccess("You have successfully logged in");
        console.log(response);
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
        <section>
          <h1>Connecté</h1>
        </section>
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
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      )}
    </>
  );
}

export default LoginForm;
