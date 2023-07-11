import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
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
            <h1>FOOD RECIPES 🍝</h1>
            <div>
                Here will be som other info about this app. Maybe there could be
                like a link to a page with documentation for this app and its
                usage.
            </div>
        </>
    );
}
