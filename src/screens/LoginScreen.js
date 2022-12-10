import React, { useState } from 'react';
import './styles/LoginScreen.css';
import SignUp from '../components/SignUp/SignUp';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_background">
        <div>
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            //src="https://static.latribune.fr/1233270/netflix-mosaique-series-tele-tv.png"
            alt="Background"
            className="login_logo"
          />
        </div>

        <button onClick={() => setSignIn(true)} className="login_signin">
          Sign In
        </button>

        <div className="login_gradient"></div>
        {signIn ? (
          <SignUp />
        ) : (
          <div className="login_body">
            <h1 className="login_title">
              Unlimited Films, Programs TV and more.
            </h1>
            <h3>Watch film anytime you want</h3>
            <h4>Ready to watch, enter your email address</h4>
            <div className="login_input">
              <form>
                <input type="email" placeholder="enter your email" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
