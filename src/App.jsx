import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainRecipes from "./components/MainRecipes";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={MainRecipes} />
                    <Route path="/documentation" component={Documentation} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}
