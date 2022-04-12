import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount fn to start app

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
    // if there's a history passed to the sub app from the container use that, otherwise create one
  const history = defaultHistory || createMemoryHistory({
      // set initialPath to /auth so subrouting works
      initialEntries: [initialPath]
  });

  // keep the history in sync with the container app
  if (onNavigate) {
      history.listen(onNavigate);
  };

  // mount in whatever dom element is passed to the function
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  // pass the syncing to the parent
  return {
      onParentNavigate({ pathname: nextPathname }) {
          if (history.location.pathname !== nextPathname){
              history.push(nextPathname);
          }
      }
  };
};

// cases : development & isolation all mount immediately
// if (process.env.NODE_ENV === 'development'){
const devRoot = document.querySelector("#_auth-dev-root");
if (devRoot) {
    // if it's running in isolation, mount to that dom node and create a default history for routing
  mount(devRoot, { defaultHistory: createBrowserHistory() });
}
// };

// to run through container, export Mount fn
export { mount };
