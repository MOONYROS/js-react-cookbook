import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={{ backgroundColor: "#FADE7A" }}>
            <h1
                style={{
                    marginTop: "0",
                    paddingTop: "20px",
                }}
            >
                React cookbook 🍝 in Javascript 🟨
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/documentation">Documentation</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
