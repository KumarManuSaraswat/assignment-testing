// src/Header.jsx
import React from "react";

function Header({ title, isLoggedIn }) {
  return (
    <header data-testid="header">
      <h1>{title}</h1>
      <nav>
        <button aria-label="Login">
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;