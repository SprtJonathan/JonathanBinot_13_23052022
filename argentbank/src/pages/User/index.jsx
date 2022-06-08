import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import "./index.css";

const PROFILE_URL = "http://localhost:3001/api/v1/user/profile";

function UserPage() {
  let [userData, setUserData] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [editModeOn, setEditModeOn] = useState(false);

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

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(token);
  }, [setUserData, token]);

  //console.log(userData)

  const changeEditModeState = () => setEditModeOn(!editModeOn);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      firstName: firstName,
      lastName: lastName,
    };
    console.log(newUserData);
    try {
      const response = await fetch(PROFILE_URL, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer" + token,
        },
        body: JSON.stringify(newUserData),
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
  };

  return (
    <main className="main bg-dark">
      {editModeOn ? (
        <form className="header">
          <h1>
            Welcome back
            <br />
            <input
              placeholder={userData.firstName}
              type="text"
              id="firstname"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            ></input>
            <input
              placeholder={userData.lastName}
              type="text"
              id="lastname"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            ></input>
          </h1>
          <div>
            <button className="edit-button" onSubmit={handleSubmit}>
              Save
            </button>
            <button className="edit-button" onClick={changeEditModeState}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData.firstName} {userData.lastName}!
          </h1>
          <button className="edit-button" onClick={changeEditModeState}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserPage;
