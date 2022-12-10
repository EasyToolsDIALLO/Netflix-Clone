import React, { useRef } from 'react';
import './SignUp.css';
import { auth } from '../../Firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const SignUp = () => {
  const emailAuth = useRef(null);
  const passwdAuth = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailAuth.current.value,
        passwdAuth.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailAuth.current.value,
        passwdAuth.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input ref={emailAuth} type="email" placeholder="enter your email" />
        <input
          ref={passwdAuth}
          type="password"
          placeholder="enter your paswword"
        />
        <button type="submit" className="signIn" onClick={signIn}>
          Sign In
        </button>
        <h4 className="fromUptoIn">
          <span className="ignored">New to Netflix?</span>
          <span className="considered" onClick={register}>
            Sign Up
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
