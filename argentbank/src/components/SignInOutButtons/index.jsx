import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/loggedUser.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function SignInOutButtons() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus.value);

  return (
    <>
      {userStatus.isAuthenticated === false ? (
        <Link className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      ) : (
        <div>
          <Link className="main-nav-item" to="/profile">
            <FontAwesomeIcon icon={faUserCircle} />
            Profile
          </Link>
          <Link
            className="main-nav-item"
            onClick={() => {
              dispatch(logout());
              localStorage.removeItem("token");
            }}
            to="/"
          >
            <i className="fa fa-user-circle"></i>
            Logout
          </Link>
        </div>
      )}
    </>
  );
}

export default SignInOutButtons;
