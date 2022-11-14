import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/loggedUser.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PROFILE_URL = "http://localhost:3001/api/v1/user/profile";

function SignInOutButtons() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus.value);
  const token = userStatus.token;

  let [userData, setUserData] = useState("");

  const fetchData = async (token) => {
    if (token) {
      try {
        const response = await fetch(PROFILE_URL, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "Bearer" + token,
          },
        });
        if (response.status === 200) {
          const res = await response.json();
          setUserData(res.body);
        } else {
          console.log(response.status);
        }
      } catch (err) {
        console.log(err);
      }
    } else return "No Token";
  };

  useEffect(() => {
    fetchData(token);
  }, [setUserData, token]);

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
            {userData !== "" ? (
              <div>
                <FontAwesomeIcon icon={faUserCircle} />
                {userData.firstName} {userData.lastName.charAt(0)}.
              </div>
            ) : (
              <div>
                <FontAwesomeIcon icon={faUserCircle} />
                Profile
              </div>
            )}
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
