import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark "
                style={{ zIndex: 3 }}
            >
                <a className="navbar-brand" href="#projects">
                    MINH'S PORTFOLIO
                </a>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button> */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        {/* <a className="nav-item nav-link" href="#intro">
                            About Me <span className="sr-only">(current)</span>
                        </a> */}

                        <a className="nav-item nav-link" href="#projects">
                            Project <span className="sr-only">(current)</span>
                        </a>
                        <a className="nav-item nav-link" href="#contact">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
