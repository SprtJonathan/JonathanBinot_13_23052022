import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SignInOutButtons() {
  const userStatus = useSelector((state) => state.userStatus.value);

  return (
    <>
      {userStatus.isAuthenticated === false ? (
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      ) : (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            Profile
          </Link>
          <Link className="main-nav-item" to="/">
            <i className="fa fa-user-circle"></i>
            Logout
          </Link>
        </div>
      )}
    </>
  );
}

export default SignInOutButtons;
