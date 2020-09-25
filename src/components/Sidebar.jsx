import React from "react";
import "../sass/components/sidebar.scss";
import closeIcon from "../assets/icons/close.svg";
import accIcon from "../assets/icons/account.svg";
import googleIcon from "../assets/icons/google.svg";

const Sidebar = (props) => {
  return (
    <aside className={`sidebar ${props.sidenavVisibility}`}>
      <nav>
        <button onClick={props.closeSidenav} className="close-btn icon-btn">
          <img src={closeIcon} alt="close menu" />
        </button>
        <a href="./" className="brand">
          Suncasts.
        </a>
      </nav>
      <AccountPrompt />
    </aside>
  );
};

const AccountPrompt = () => {
  return (
    <div id="account-prompt">
      <img
        src={accIcon}
        alt="account avatar"
        loading="lazy"
        className="account-icon"
      />
      <div className="login-text">
        <p className="login-prompt">You're not logged in</p>
        <p className="login-aux">Sign in to get personalized content</p>
      </div>
      <button className="login-btn icon-btn">
        <img src={googleIcon} alt="google" className="btn-icon" />
        Sign in
      </button>
    </div>
  );
};

export default Sidebar;
