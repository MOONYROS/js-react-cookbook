import React from "react";
import * as links from "../webLinks";

export default function Footer() {
    return (
        <>
            <h2>Footer</h2>
            <div>
                <label htmlFor="">
                    Made by <a href={links.profileLink}>MOONYROS</a>, 2023
                </label>
            </div>
        </>
    );
}
