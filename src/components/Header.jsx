import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="coloredBackground" id="header">
            <div className="container">
                <h1>React cookbook 🍝 in Javascript 🟨</h1>
                <nav>
                    <ul className="something">
                        <li className="menuElement">
                            <Link className="menuLink" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="menuElement">
                            <Link className="menuLink" to="/documentation">
                                Documentation
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
