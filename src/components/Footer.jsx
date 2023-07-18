import React from "react";
import * as links from "../webLinks";

export default function Footer() {
    return (
        <div className="coloredBackground" id="footer">
            <div className="container">
                <h2>Footer</h2>
                <p>
                    Made by{" "}
                    <a href={links.profileLink} target="blank">
                        MOONYROS
                    </a>
                    , 2023
                </p>
            </div>
        </div>
    );
}
