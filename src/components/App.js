import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Blockinfo from "./modules/blockinfo/Blockinfo"

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/:id" component={Blockinfo} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

