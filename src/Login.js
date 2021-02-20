import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const [email, setEMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginEmail = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            displayName: result.user.displayName,
            photoUrl: result.user.photoURL,
            uid: result.user.uid,
            email: result.user.email,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          email: userAuth.user.email,
          photoUrl: userAuth.user.photoURL,
        })
      );
    }).catch(error=>alert(error.message))
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                uid: userAuth.user.uid,
                displayName: name,
                email: userAuth.user.email,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=1_lR0Vks"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (Required if registering)"
          type="text"
        />

        <input
          value={profilePic}
          placeholder="Profil pic URL (Optional)"
          type="text"
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          value={email}
          placeholder="Email"
          type="email"
          onChange={(e) => setEMail(e.target.value)}
        />

        <input
          value={password}
          placeholder="Password)"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>{" "}
        |
        <span className="login__google" onClick={loginEmail}>
          With Google Account
        </span>
      </p>
    </div>
  );
}

export default Login;
