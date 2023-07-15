import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainRecipes from "./components/MainRecipes";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
import { RecipeContext } from "./RecipeContext";

export default function App() {
    const [recipes, setRecipes] = useState([]);

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            <Router>
                <Header />
                <Switch>
                    <div style={{ width: "70%", margin: "auto" }}>
                        <Route exact path="/" component={MainRecipes} />
                        <Route
                            path="/documentation"
                            component={Documentation}
                        />
                    </div>
                </Switch>
                <Footer />
            </Router>
        </RecipeContext.Provider>
    );
}
