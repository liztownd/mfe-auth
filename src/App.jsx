import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

const App = ({ history, onSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter >

          <Switch>
          <Route path={"/auth/signup"} >
          <SignUp onSignIn={onSignIn} />
          </Route>

            <Route path="/auth/signin" >
            <SignIn onSignIn={onSignIn} />
            </Route>
              
          </Switch>
          </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
