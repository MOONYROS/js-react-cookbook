import React from "react";
import { Link } from "react-router-dom";
import { containerStyle } from "../webLinks";

const topHeaderStyle = { marginTop: "0", paddingTop: "20px" };
const background = { backgroundColor: "#FADE7A" };
const listElement = {
    display: "inline-block",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    border: "1px solid red",
};

export default function Header() {
    return (
        <div style={background}>
            <div style={containerStyle}>
                <h1 style={topHeaderStyle}>
                    React cookbook 🍝 in Javascript 🟨
                </h1>
                <nav>
                    <ul className="something">
                        <li style={listElement}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={listElement}>
                            <Link to="/documentation">Documentation</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
