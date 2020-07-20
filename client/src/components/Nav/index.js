import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth,
  };
  //Nav changes upon window size change
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };
  //opens Nav drop down
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };
  //window size change updates Nav to resize
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/*Button to bring client back to homepage */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/*Nav bar button for a drop down */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              {/*Search button brings us to the homepage */}
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              {/*Saved button bring us to our saved book page */}
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
