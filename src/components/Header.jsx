import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <h1>React cookbook 🍝 in Javascript 🟨</h1>
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
        </>
    );
}
