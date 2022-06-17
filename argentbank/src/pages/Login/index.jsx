import LoginForm from "../../components/LoginForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import "./index.css";

function Signin() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  );
}

export default Signin;
