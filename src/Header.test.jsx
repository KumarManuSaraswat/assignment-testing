// src/Header.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // adds custom matchers like toBeInTheDocument
import Header from "./Header";

describe("Header component", () => {
  it("renders the title text in the heading", () => {
    render(<Header title="My App" isLoggedIn={false} />);

    // Use getByRole to find the heading
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("My App");
  });

  it("shows the Login button when user is not logged in", () => {
    render(<Header title="My App" isLoggedIn={false} />);

    // Use getByRole with aria-label
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent("Login");
  });

  it("shows the Logout button when user is logged in", () => {
    render(<Header title="My App" isLoggedIn={true} />);

    // Use getByText to find by visible text
    const logoutButton = screen.getByText(/Logout/i);
    expect(logoutButton).toBeInTheDocument();
    expect(logoutButton).toHaveTextContent("Logout");
  });
});