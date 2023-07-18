import React from "react";
import * as links from "../webLinks";

export default function Footer() {
    return (
        <div>
            <h2>Footer</h2>
            <p>
                Made by <a href={links.profileLink}>MOONYROS</a>, 2023
            </p>
        </div>
    );
}
