import { useState } from "react";
import "./index.css";
import { Logo } from "../../components/Logo";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      //alert("Please, insert all mandatory field!");
      toast.error("Please, insert all mandatory field!");
      return;
    }

    //console.log(email);
    //console.log(password);
    //alert("SignIn "+ email + " password "+ password);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        //console.log("User Sign In Successfully!");
        toast.success("User Sign In Successfully!");
        navigate("/admin", {replace: true});
      })
      .catch(() => {
        //console.log("User SignIn Error, please try again!");
        toast.error("User Sign In Error, Please Try Again!")
      });
  }

  return (
    <div className="login-container">
      <Logo />
      <form className="login-form" onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Insert Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="*****"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
}
